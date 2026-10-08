
"use strict";

(() => {
  function initializeProgress() {
    const data = window.ChinaSeenData;

    if (!data || !Array.isArray(data.regions)) {
      console.error("Progress: Region data unavailable.");
      return;
    }

const i18n = window.ChinaSeenProgressI18n;

if (!i18n) {
  console.error("Progress: Translation system unavailable.");
  return;
}

    const regions = data.regions;
    const validIds = new Set(regions.map(region => region.id));
    const total = regions.length;

    const regionTypes = [
      "province",
      "municipality",
      "autonomous-region",
      "special-administrative-region"
    ];

    const typeLabels = {
      province: "Provinces",
      municipality: "Municipalities",
      "autonomous-region": "Autonomous Regions",
      "special-administrative-region":
        "Special Administrative Regions"
    };

    function loadCollection(key) {
      try {
        const stored = JSON.parse(localStorage.getItem(key) || "[]");

        if (!Array.isArray(stored)) return [];

        return [...new Set(stored)].filter(
          id => typeof id === "string" && validIds.has(id)
        );
      } catch (error) {
        console.warn("Progress: Unable to load", key, error);
        return [];
      }
    }

    function setText(id, value) {
      const element = document.getElementById(id);
      if (element) element.textContent = value;
    }

    function renderBreakdown(visited) {
      const container = document.getElementById("progress-type-list");
      if (!container) return;

      const visitedIds = new Set(visited);
      const fragment = document.createDocumentFragment();

      regionTypes.forEach(type => {
        const matchingRegions = regions.filter(
          region => region.type === type
        );

        const visitedCount = matchingRegions.filter(
          region => visitedIds.has(region.id)
        ).length;

        const typeTotal = matchingRegions.length;
        const percent = typeTotal
          ? (visitedCount / typeTotal) * 100
          : 0;

        const card = document.createElement("article");
        card.className = "progress-type-card";

        const header = document.createElement("div");
        header.className = "progress-type-header";

        const title = document.createElement("h3");
        title.textContent = i18n.translateType(type);

        const counter = document.createElement("span");
        counter.textContent = `${visitedCount} / ${typeTotal}`;

        const track = document.createElement("div");
        track.className = "progress-type-track";
        track.setAttribute("role", "progressbar");
        track.setAttribute("aria-label", i18n.translateType(type));
        track.setAttribute("aria-valuemin", "0");
        track.setAttribute("aria-valuemax", String(typeTotal));
        track.setAttribute("aria-valuenow", String(visitedCount));

        const fill = document.createElement("div");
        fill.className = "progress-type-fill";
        fill.style.width = `${percent}%`;

        header.append(title, counter);
        track.appendChild(fill);
        card.append(header, track);
        fragment.appendChild(card);
      });

      container.replaceChildren(fragment);
    }

    function renderMilestones(percent) {
      document.querySelectorAll(
        ".progress-milestone-card[data-milestone]"
      ).forEach(card => {
        const target = Number(card.dataset.milestone);
        const unlocked = percent >= target;

        card.classList.toggle("unlocked", unlocked);

        const status = card.querySelector(".milestone-status");
        if (status) {
          status.textContent = i18n.translate(
  unlocked ? "unlocked" : "locked"
);
        }
      });
    }

    function renderDashboard() {
      const visited = loadCollection("visitedRegions");
      const wishlist = loadCollection("wishlist");

      const visitedCount = visited.length;
      const remaining = Math.max(0, total - visitedCount);
      const percent = total
        ? Math.round((visitedCount / total) * 100)
        : 0;

      setText("progress-visited-count", visitedCount);
      setText("progress-wishlist-count", wishlist.length);
      setText("progress-remaining-count", remaining);
      setText("progress-percent", `${percent}%`);

     
setText(
  "progress-summary",
  i18n.translate("regionsExplored")(visitedCount, total)
);

setText(
  "progress-remaining-text",
  i18n.translate("regionsRemaining")(remaining)
);


      const circle = document.getElementById("progress-circle");

      if (circle) {
        circle.style.setProperty(
          "--progress-value",
          `${percent}%`
        );

        circle.setAttribute(
          "aria-valuenow",
          String(percent)
        );
      }

      renderBreakdown(visited);
      renderMilestones(percent);

      console.log("Travel progress updated:", {
        visited: visitedCount,
        wishlist: wishlist.length,
        remaining,
        percent
      });
    }

    renderDashboard();

    window.addEventListener("pageshow", renderDashboard);
    window.addEventListener("storage", renderDashboard);
    window.addEventListener(
      "chinaseen:languagechange",
      renderDashboard
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initializeProgress
    );
  } else {
    initializeProgress();
  }
})();
