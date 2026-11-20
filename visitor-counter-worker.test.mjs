import assert from "node:assert/strict";
import test from "node:test";
import worker, { VisitorCounter } from "./visitor-counter-worker.mjs";

const createStorage = () => {
  const values = new Map();
  let queue = Promise.resolve();

  return {
    async get(key) {
      return values.get(key);
    },
    async transaction(callback) {
      let release;
      const previous = queue;
      queue = new Promise((resolve) => {
        release = resolve;
      });
      await previous;
      try {
        return await callback({
          get: async (key) => values.get(key),
          put: async (key, value) => values.set(key, value),
        });
      } finally {
        release();
      }
    },
  };
};

const createEnvironment = () => {
  const counter = new VisitorCounter({ storage: createStorage() });
  return {
    ALLOWED_ORIGINS: "https://portfolio.example",
    VISITOR_COUNTER: {
      idFromName: (name) => name,
      get: (id) => {
        assert.equal(id, "site-wide");
        return {
          fetch: (input, init) => counter.fetch(new Request(input, init)),
        };
      },
    },
  };
};

const makeRequest = (path, method, origin) =>
  new Request(`https://counter.example${path}`, {
    method,
    headers: origin ? { Origin: origin } : undefined,
  });

test("increments and returns a shared total for concurrent page visits", async () => {
  const env = createEnvironment();
  const responses = await Promise.all(
    Array.from({ length: 20 }, () =>
      worker.fetch(makeRequest("/api/visitors", "POST", "https://portfolio.example"), env),
    ),
  );
  const totals = await Promise.all(responses.map(async (response) => (await response.json()).count));

  assert.deepEqual(totals.sort((left, right) => left - right), Array.from({ length: 20 }, (_, index) => index + 1));
  assert.ok(responses.every((response) => response.headers.get("Access-Control-Allow-Origin") === "https://portfolio.example"));
});

test("rejects origins not configured for the site", async () => {
  const response = await worker.fetch(
    makeRequest("/api/visitors", "POST", "https://untrusted.example"),
    createEnvironment(),
  );

  assert.equal(response.status, 403);
});

test("supports preflight without incrementing the total", async () => {
  const env = createEnvironment();
  const preflight = await worker.fetch(
    makeRequest("/api/visitors", "OPTIONS", "https://portfolio.example"),
    env,
  );
  const totalBeforeVisit = await worker.fetch(
    makeRequest("/api/visitors", "GET", "https://portfolio.example"),
    env,
  );
  const firstVisit = await worker.fetch(
    makeRequest("/api/visitors", "POST", "https://portfolio.example"),
    env,
  );
  const totalAfterVisit = await worker.fetch(
    makeRequest("/api/visitors", "GET", "https://portfolio.example"),
    env,
  );

  assert.equal(preflight.status, 204);
  assert.equal((await totalBeforeVisit.json()).count, 0);
  assert.equal((await firstVisit.json()).count, 1);
  assert.equal((await totalAfterVisit.json()).count, 1);
});
