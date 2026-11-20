const jsonHeaders = {
  "Cache-Control": "no-store",
  "Content-Type": "application/json; charset=utf-8",
};

const getAllowedOrigins = (env) =>
  (env.ALLOWED_ORIGINS || "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

const jsonResponse = (body, status, origin) => {
  const headers = new Headers(jsonHeaders);
  if (origin) {
    headers.set("Access-Control-Allow-Origin", origin);
    headers.set("Vary", "Origin");
  }
  return new Response(JSON.stringify(body), { status, headers });
};

export class VisitorCounter {
  constructor(ctx) {
    this.ctx = ctx;
  }

  async fetch(request) {
    if (request.method === "GET") {
      const count = (await this.ctx.storage.get("count")) ?? 0;
      if (!Number.isSafeInteger(count) || count < 0) {
        throw new Error("Stored visitor count is invalid.");
      }
      return jsonResponse({ count }, 200);
    }

    if (request.method !== "POST") {
      return jsonResponse({ error: "Method not allowed." }, 405);
    }

    const count = await this.ctx.storage.transaction(async (transaction) => {
      const currentCount = (await transaction.get("count")) ?? 0;
      if (!Number.isSafeInteger(currentCount) || currentCount < 0) {
        throw new Error("Stored visitor count is invalid.");
      }

      const nextCount = currentCount + 1;
      await transaction.put("count", nextCount);
      return nextCount;
    });

    return jsonResponse({ count }, 200);
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname !== "/api/visitors") {
      return jsonResponse({ error: "Not found." }, 404);
    }

    const origin = request.headers.get("Origin");
    const allowedOrigins = getAllowedOrigins(env);
    if (!origin || !allowedOrigins.includes(origin)) {
      return jsonResponse({ error: "Origin is not allowed." }, 403);
    }

    if (request.method === "OPTIONS") {
      const headers = new Headers(jsonHeaders);
      headers.set("Access-Control-Allow-Origin", origin);
      headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
      headers.set("Access-Control-Allow-Headers", "Content-Type");
      headers.set("Access-Control-Max-Age", "86400");
      headers.set("Vary", "Origin");
      return new Response(null, { status: 204, headers });
    }

    if (request.method !== "GET" && request.method !== "POST") {
      const response = jsonResponse({ error: "Method not allowed." }, 405, origin);
      response.headers.set("Allow", "GET, POST, OPTIONS");
      return response;
    }

    const counterId = env.VISITOR_COUNTER.idFromName("site-wide");
    const counter = env.VISITOR_COUNTER.get(counterId);
    const response = await counter.fetch("https://visitor-counter/count", { method: request.method });
    if (!response.ok) {
      console.error(`Visitor counter storage failed with status ${response.status}.`);
      return jsonResponse({ error: "Visitor count could not be updated." }, 502, origin);
    }

    const result = await response.json();
    return jsonResponse(result, 200, origin);
  },
};
