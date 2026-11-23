const portfolioContent = window.PORTFOLIO_CONTENT;
const translations = portfolioContent.translations;

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");
const menuBackdrop = document.querySelector(".menu-backdrop");
const languageToggle = document.querySelector(".language-toggle");
const themeToggle = document.querySelector(".theme-toggle");
const navigationLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("#home, #about, #contact");
let currentLanguage = localStorage.getItem("portfolio-language") === "en" ? "en" : "id";
let currentTheme = localStorage.getItem("portfolio-theme") === "dark" ? "dark" : "light";
const projectList = document.querySelector("#project-list");
const projectDetail = document.querySelector("#project-detail");
const skillsList = document.querySelector("#skills-list");
const experienceList = document.querySelector("#experience-list");
const visitorCountOutput = document.querySelector("[data-visitor-count]");
let visitorCountValue = null;
let visitorCountStatus = "loading";
const projectsPanel = portfolioContent.pages.projects;
const projects = Array.isArray(projectsPanel) ? projectsPanel : projectsPanel.items;
let selectedProjectId = projects[0]?.id;
const renderProjectList = () => {
  const dictionary = translations[currentLanguage];
  projectList.innerHTML = projects
    .map((project, index) => {
      const isSelected = project.id === selectedProjectId;
      const projectName = project.nameKey ? dictionary[project.nameKey] : project.name;
      return `
        <button class="project-list-card${isSelected ? " is-selected" : ""}" type="button" data-project-id="${project.id}" aria-pressed="${isSelected}">
          <span class="project-list-number">${String(index + 1).padStart(2, "0")}</span>
          <span class="project-list-main">
            <strong>${projectName}</strong>
            <small>${dictionary[project.categoryKey]} · ${project.year}</small>
          </span>
          <span class="project-list-arrow" aria-hidden="true">→</span>
          <span class="project-list-summary">${dictionary[project.descriptionKey]}</span>
        </button>
      `;
    })
    .join("");
};

const renderProjectDetail = () => {
  const project = projects.find((item) => item.id === selectedProjectId) ?? projects[0];
  const dictionary = translations[currentLanguage];
  if (!project) {
    projectDetail.innerHTML = "";
    return;
  }
  const projectName = project.nameKey ? dictionary[project.nameKey] : project.name;
  const imageMarkup = project.image
    ? `<img class="project-result-image" src="${project.image}" alt="${projectName} ${dictionary["projects.imageAlt"]}" loading="lazy" />`
    : `<div class="project-image-empty"><span aria-hidden="true">▧</span><p>${dictionary["projects.imageEmpty"]}</p></div>`;

  projectDetail.innerHTML = `
    <div class="project-detail-topline">
      <p class="eyebrow"><span class="eyebrow-line"></span> ${dictionary["projects.detailsEyebrow"]}</p>
      <span>${project.year}</span>
    </div>
    <h3 id="project-detail-title">${projectName}</h3>
    <p class="project-detail-summary">${dictionary[project.descriptionKey]}</p>
    <div class="project-image-manager" role="group" aria-label="${dictionary["projects.imageGroupLabel"]}">
      ${imageMarkup}
    </div>
    <div class="project-detail-facts">
      <article>
        <span class="project-fact-icon" aria-hidden="true">◎</span>
        <div><h4>${dictionary["projects.goalTitle"]}</h4><p>${dictionary[project.goalKey]}</p></div>
      </article>
      <article>
        <span class="project-fact-icon" aria-hidden="true">⌘</span>
        <div><h4>${dictionary["projects.roleTitle"]}</h4><p>${dictionary[project.roleKey]}</p></div>
      </article>
      <article>
        <span class="project-fact-icon" aria-hidden="true">⌁</span>
        <div><h4>${dictionary["projects.stackTitle"]}</h4><p>${dictionary[project.stackKey]}</p></div>
      </article>
    </div>
    <div class="project-tech-list" aria-label="${dictionary["projects.stackTitle"]}">
      ${project.technologies.map((technology) => `<span>${technology}</span>`).join("")}
    </div>
    ${project.githubUrl
      ? `<a class="project-github-link" href="${project.githubUrl}" target="_blank" rel="noopener noreferrer">
          <span aria-hidden="true">⌘</span> ${dictionary["projects.githubLabel"]} <span aria-hidden="true">↗</span>
        </a>`
      : `<p class="project-github-note">${dictionary["projects.sampleNote"]}</p>`}
  `;
};

const renderProjects = () => {
  if (!projectList || !projectDetail) return;
  renderProjectList();
  renderProjectDetail();
};

projectList?.addEventListener("click", (event) => {
  const card = event.target.closest("[data-project-id]");
  if (!card || !projectList.contains(card)) return;
  selectedProjectId = card.dataset.projectId;
  projectList.querySelectorAll("[data-project-id]").forEach((item) => {
    const isSelected = item === card;
    item.classList.toggle("is-selected", isSelected);
    item.setAttribute("aria-pressed", String(isSelected));
  });
  renderProjectDetail();
});

const getSiteContentValue = (path) => {
  const normalizedPath = path
    .replace(/^profile\./, "identity.")
    .replace(/^links\./, "navigation.");
  return normalizedPath.split(".").reduce((value, key) => value?.[key], portfolioContent);
};

const applySiteContentBindings = () => {
  document.querySelectorAll("[data-site-text]").forEach((element) => {
    const value = getSiteContentValue(element.dataset.siteText);
    if (typeof value !== "string") {
      console.error(`Missing text content for "${element.dataset.siteText}".`);
      return;
    }
    element.textContent = value;
  });
  document.querySelectorAll("[data-site-href]").forEach((element) => {
    const value = getSiteContentValue(element.dataset.siteHref);
    if (typeof value !== "string") {
      console.error(`Missing link content for "${element.dataset.siteHref}".`);
      return;
    }
    element.setAttribute("href", value);
  });
  document.querySelectorAll("[data-site-src]").forEach((element) => {
    const value = getSiteContentValue(element.dataset.siteSrc);
    if (typeof value !== "string") {
      console.error(`Missing asset path for "${element.dataset.siteSrc}".`);
      return;
    }
    element.setAttribute("src", value);
  });
  document.querySelectorAll("[data-site-type]").forEach((element) => {
    const value = getSiteContentValue(element.dataset.siteType);
    if (typeof value !== "string") {
      console.error(`Missing media type for "${element.dataset.siteType}".`);
      return;
    }
    element.setAttribute("type", value);
  });
  document.querySelectorAll("[data-site-mailto]").forEach((element) => {
    element.setAttribute("href", `mailto:${portfolioContent.identity.email}`);
  });
  document.querySelectorAll("[data-site-gmail]").forEach((element) => {
    const gmailUrl = new URL("https://mail.google.com/mail/");
    gmailUrl.searchParams.set("view", "cm");
    gmailUrl.searchParams.set("fs", "1");
    gmailUrl.searchParams.set("to", portfolioContent.identity.email);
    element.setAttribute("href", gmailUrl.toString());
  });
};

const renderVisitorCount = () => {
  if (!visitorCountOutput) return;
  if (visitorCountValue === null) {
    visitorCountOutput.textContent = "—";
    const statusKey = visitorCountStatus === "loading" ? "hero.visitorLoading" : "hero.visitorUnavailable";
    visitorCountOutput.title = translations[currentLanguage][statusKey];
    return;
  }

  const formattedCount = new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(visitorCountValue);
  visitorCountOutput.textContent = `${formattedCount} Visits`;
  const titleKey = visitorCountStatus === "stale" ? "hero.visitorUpdateFailed" : "hero.highlightVisitors";
  visitorCountOutput.title = translations[currentLanguage][titleKey];
};

const requestVisitorCount = async (method) => {
  const endpoint = portfolioContent.integrations?.visitorCounterEndpoint;
  if (typeof endpoint !== "string" || !endpoint.trim()) {
    throw new Error("Visitor counter endpoint is not configured in site-content.js.");
  }

  const response = await fetch(endpoint, { method, cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Visitor counter request failed with status ${response.status}.`);
  }

  const result = await response.json();
  if (!Number.isSafeInteger(result.count) || result.count < 0) {
    throw new Error("Visitor counter returned an invalid total.");
  }
  return result.count;
};

const refreshVisitorCount = async () => {
  if (!visitorCountOutput) return;

  try {
    visitorCountValue = await requestVisitorCount("GET");
    visitorCountStatus = "ready";
    renderVisitorCount();
  } catch (error) {
    visitorCountStatus = visitorCountValue === null ? "unavailable" : "stale";
    renderVisitorCount();
    console.error("Could not refresh the visitor count.", error);
  }
};

const loadVisitorCount = async () => {
  try {
    visitorCountValue = await requestVisitorCount("POST");
    visitorCountStatus = "ready";
    renderVisitorCount();
    if (visitorCountOutput) window.setInterval(refreshVisitorCount, 15000);
  } catch (error) {
    visitorCountStatus = "unavailable";
    renderVisitorCount();
    console.error("Could not load the visitor count.", error);
  }
};

const applyProfilePhoto = () => {
  const image = document.querySelector(".portrait-photo");
  const initials = document.querySelector(".portrait-initials");
  const frame = document.querySelector(".portrait-placeholder");
  if (!image || !initials || !frame) return;

  const photoPath = portfolioContent.identity.photo;
  const hasPhoto = Boolean(photoPath);
  frame.classList.toggle("has-portrait", hasPhoto);
  initials.hidden = hasPhoto;
  image.hidden = !hasPhoto;
  image.alt = `${translations[currentLanguage]["hero.photoAlt"]} ${portfolioContent.identity.fullName}`;
  image.onerror = () => {
    image.hidden = true;
    initials.hidden = false;
    frame.classList.remove("has-portrait");
    console.error(`Could not load the profile photo at "${photoPath}".`);
  };
  if (hasPhoto && image.getAttribute("src") !== photoPath) image.setAttribute("src", photoPath);
  if (!hasPhoto) image.removeAttribute("src");
};

const renderSkills = () => {
  if (!skillsList) return;
  skillsList.innerHTML = portfolioContent.pages.home.skills
    .map((skill) => `<div class="skill-card"><span class="skill-mark ${skill.className}">${skill.mark}</span><span>${skill.name}</span></div>`)
    .join("");
};

const renderExperience = () => {
  if (!experienceList) return;
  const dictionary = translations[currentLanguage];
  const content = portfolioContent.pages.experience;
  const entries = (Array.isArray(content.entries) ? content.entries : content.items)
    .map((entry) => {
    const place = entry.placeKey ? dictionary[entry.placeKey] : getSiteContentValue(entry.place);
    const suffix = entry.suffixKey ? ` <span>${dictionary[entry.suffixKey]}</span>` : "";
    const points = entry.pointKeys
      ? `<ul class="experience-points">${entry.pointKeys.map((key) => `<li>${dictionary[key]}</li>`).join("")}</ul>`
      : "";
    return `
      <article class="timeline-item${entry.preview ? " timeline-preview-item" : ""}">
        <span class="timeline-dot"${entry.preview ? ' aria-hidden="true"' : ""}></span>
        <p class="timeline-date">${dictionary[entry.dateKey]}</p>
        <h3><span>${dictionary[entry.titleKey]}</span>${suffix}</h3>
        <p class="timeline-place">${place}</p>
        <p class="timeline-description">${dictionary[entry.descriptionKey]}</p>
        ${points}
      </article>`;
  }).join("");
  const education = content.education;
  const educationMarkup = `
    <article class="education-timeline">
      <span class="education-icon">⌂</span>
      <div>
        <p class="timeline-date">${dictionary[education.labelKey]}</p>
        <h3>${dictionary[education.titleKey]}</h3>
        <p class="timeline-place">${getSiteContentValue(education.place)}</p>
        <p class="timeline-description">${dictionary[education.descriptionKey]}</p>
      </div>
    </article>`;
  experienceList.innerHTML = entries + educationMarkup;
};

const setMenuOpen = (isOpen) => {
  menuToggle?.setAttribute("aria-expanded", String(isOpen));
  menuToggle?.setAttribute("aria-label", translations[currentLanguage][isOpen ? "nav.close" : "nav.open"]);
  navigation?.classList.toggle("is-open", isOpen);
  menuBackdrop?.classList.toggle("is-visible", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
};

const setLanguage = (language) => {
  currentLanguage = language;
  applyProfilePhoto();
  const dictionary = translations[language];
  const pageKey = document.body.dataset.page;
  document.documentElement.lang = language;
  document.title = dictionary[`${pageKey}.pageTitle`] || dictionary.pageTitle;
  document.querySelector('meta[name="description"]').content =
    dictionary[`${pageKey}.pageDescription`] || dictionary.pageDescription;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.innerHTML = dictionary[element.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", dictionary[element.dataset.i18nAriaLabel]);
  });
  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    element.title = dictionary[element.dataset.i18nTitle];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = dictionary[element.dataset.i18nPlaceholder];
  });

  renderProjects();
  renderSkills();
  renderExperience();
  renderVisitorCount();
  menuToggle?.setAttribute("aria-label", dictionary[menuToggle.getAttribute("aria-expanded") === "true" ? "nav.close" : "nav.open"]);
  languageToggle.textContent = language === "id" ? "EN" : "ID";
  languageToggle.setAttribute("aria-label", dictionary[language === "id" ? "settings.switchEnglish" : "settings.switchIndonesian"]);
  languageToggle.title = dictionary[language === "id" ? "settings.switchEnglish" : "settings.switchIndonesian"];
  localStorage.setItem("portfolio-language", language);
};

const setTheme = (theme) => {
  currentTheme = theme;
  document.documentElement.dataset.theme = theme;
  themeToggle.querySelector(".theme-icon").textContent = theme === "dark" ? "☀" : "☾";
  const label = translations[currentLanguage][theme === "dark" ? "settings.light" : "settings.dark"];
  themeToggle.setAttribute("aria-label", label);
  themeToggle.title = label;
  document.querySelector('meta[name="theme-color"]').content = theme === "dark" ? "#101b2d" : "#f8faff";
  localStorage.setItem("portfolio-theme", theme);
};

menuToggle?.addEventListener("click", () => {
  setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});

menuBackdrop?.addEventListener("click", () => setMenuOpen(false));
navigationLinks.forEach((link) => link.addEventListener("click", () => setMenuOpen(false)));

languageToggle?.addEventListener("click", () => {
  setLanguage(currentLanguage === "id" ? "en" : "id");
});

themeToggle?.addEventListener("click", () => {
  setTheme(currentTheme === "light" ? "dark" : "light");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenuOpen(false);
});

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navigationLinks.forEach((link) => {
          link.classList.toggle("active", link.hash === `#${entry.target.id}`);
        });
      }
    });
  },
  { rootMargin: "-30% 0px -60% 0px" },
);

sections.forEach((section) => sectionObserver.observe(section));
document.querySelector("#current-year").textContent = new Date().getFullYear();

applySiteContentBindings();
setLanguage(currentLanguage);
setTheme(currentTheme);
loadVisitorCount();
