
"use strict";

(() => {
  function initializeJourney() {
    const data = window.ChinaSeenData;

    if (!data || !Array.isArray(data.regions)) {
      console.error("Journey: Region data unavailable.");
      return;
    }

    const regions = data.regions;
    const regionMap = new Map(
      regions.map(region => [region.id, region])
    );

    function loadCollection(key) {
      try {
        const stored = JSON.parse(localStorage.getItem(key) || "[]");

        if (!Array.isArray(stored)) return [];

        return [...new Set(stored)]
          .filter(id => typeof id === "string" && regionMap.has(id));
      } catch (error) {
        console.warn("Journey: Unable to load", key, error);
        return [];
      }
    }

    function getLanguage() {
      const selected =
        document.getElementById("language-select")?.value ||
        localStorage.getItem("selectedLanguage") ||
        "en";

      return ["en", "zh", "bn"].includes(selected)
        ? selected
        : "en";
    }

    function setText(id, value) {
      const element = document.getElementById(id);
      if (element) element.textContent = value;
    }

    function renderRegionList(containerId, emptyId, regionIds) {
      const container = document.getElementById(containerId);
      const empty = document.getElementById(emptyId);

      if (!container) return;

      const language = getLanguage();
      const fragment = document.createDocumentFragment();

      regionIds.forEach(id => {
        const region = regionMap.get(id);
        if (!region) return;

        const card = document.createElement("article");
        card.className = "journey-region-card";

        const title = document.createElement("h3");
        title.textContent = region[language] || region.en;

        const category = document.createElement("p");
        
category.textContent =
  window.ChinaSeenJourneyI18n.translateType(region.type, language);


        const link = document.createElement("a");
        link.href = `explore.html?region=${encodeURIComponent(id)}`;
        
link.textContent =
  window.ChinaSeenJourneyI18n.translate("exploreRegion", language);


        card.append(title, category, link);
        fragment.appendChild(card);
      });

      container.replaceChildren(fragment);

      if (empty) {
        empty.hidden = regionIds.length > 0;
      }
    }

    function renderDashboard() {
      const visited = loadCollection("visitedRegions");
      const wishlist = loadCollection("wishlist");
      const total = regions.length;
      const percent = total
        ? Math.round((visited.length / total) * 100)
        : 0;

      setText("journey-visited-count", visited.length);
      setText("journey-wishlist-count", wishlist.length);
      setText("journey-progress-percent", `${percent}%`);

      const progressFill = document.getElementById(
        "journey-progress-fill"
      );

      if (progressFill) {
        progressFill.style.width = `${percent}%`;
      }

      const progressTrack = document.getElementById(
        "journey-progress-track"
      );

      if (progressTrack) {
        progressTrack.setAttribute("aria-valuenow", String(percent));
      }

      renderRegionList(
        "journey-visited-list",
        "journey-visited-empty",
        visited
      );

      renderRegionList(
        "journey-wishlist-list",
        "journey-wishlist-empty",
        wishlist
      );

      console.log("Journey dashboard updated:", {
        visited: visited.length,
        wishlist: wishlist.length,
        total
      });
    }

    renderDashboard();

    document.getElementById("language-select")
      ?.addEventListener("change", renderDashboard);

    window.addEventListener(
      "chinaseen:languagechange",
      renderDashboard
    );

    window.addEventListener("pageshow", renderDashboard);
    window.addEventListener("storage", renderDashboard);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeJourney);
  } else {
    initializeJourney();
  }
})();
