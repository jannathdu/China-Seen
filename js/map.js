
/* ============================================
   CHINA SEEN | 看见中国
   Phase 2 - Interactive China Map
   Uses D3.js + Local GeoJSON
============================================ */

"use strict";

(() => {
  const MAP_URL = "assets/maps/china-provinces.geojson";

  const STORAGE = {
    visited: "visitedRegions",
    wishlist: "wishlist",
    language: "selectedLanguage"
  };

  const REGION_TOTAL = 34;

  const state = {
    selectedRegion: null,
    geojson: null,
    visited: new Set(),
    wishlist: new Set(),
    language: "en"
  };

  const regionData = window.ChinaSeenData;

  if (!regionData) {
    console.error("ChinaSeenData is not loaded.");
    return;
  }

  // ------------------------------------------
  // 1. Translations for map interaction
  // ------------------------------------------

  const labels = {
    en: {
      municipality: "Municipality",
      province: "Province",
      "autonomous-region": "Autonomous Region",
      "special-administrative-region":
        "Special Administrative Region",

      visited: "Visited ✓",
      markVisited: "Mark as Visited",
      removeVisited: "Remove Visited",
      wantToVisit: "Want to Visit",
      removeWishlist: "Remove from Wishlist",
      description: "Explore destinations, local food, history and culture in {name}.",
      highlights: "Travel Highlights",
      detailPending: "Detailed travel guides coming soon.",
      visitUpdated: "Travel progress updated.",
      savedUpdated: "Wishlist updated."
    },

    zh: {
      municipality: "直辖市",
      province: "省",
      "autonomous-region": "自治区",
      "special-administrative-region": "特别行政区",

      visited: "已去过 ✓",
      markVisited: "标记为已去过",
      removeVisited: "取消已去过",
      wantToVisit: "想去",
      removeWishlist: "从心愿清单移除",
      description: "探索{name}的景点、美食、历史和文化。",
      highlights: "旅行亮点",
      detailPending: "详细旅行指南即将推出。",
      visitUpdated: "旅行进度已更新。",
      savedUpdated: "心愿清单已更新。"
    },

    bn: {
      municipality: "সরাসরি পরিচালিত শহর",
      province: "প্রদেশ",
      "autonomous-region": "স্বায়ত্তশাসিত অঞ্চল",
      "special-administrative-region": "বিশেষ প্রশাসনিক অঞ্চল",

      visited: "ঘুরে দেখা হয়েছে ✓",
      markVisited: "ঘুরে দেখা হয়েছে",
      removeVisited: "ভ্রমণ তালিকা থেকে সরান",
      wantToVisit: "ঘুরতে চাই",
      removeWishlist: "ইচ্ছার তালিকা থেকে সরান",
      description: "{name} অঞ্চলের দর্শনীয় স্থান, খাবার, ইতিহাস ও সংস্কৃতি আবিষ্কার করুন।",
      highlights: "ভ্রমণের আকর্ষণ",
      detailPending: "বিস্তারিত ভ্রমণ গাইড শিগগিরই আসছে।",
      visitUpdated: "ভ্রমণের অগ্রগতি আপডেট হয়েছে।",
      savedUpdated: "ইচ্ছার তালিকা আপডেট হয়েছে।"
    }
  };

  function getLabel(key, replacements = {}) {
    let value = labels[state.language]?.[key] ||
      labels.en[key] || key;

    Object.entries(replacements).forEach(([key, replacement]) => {
      value = value.replaceAll(`{${key}}`, replacement);
    });

    return value;
  }

  // ------------------------------------------
  // 2. Local Storage
  // ------------------------------------------

  function loadCollection(key) {
    try {
      const stored = JSON.parse(
        localStorage.getItem(key) || "[]"
      );

      if (Array.isArray(stored)) {
        return new Set(
          stored.filter(value => typeof value === "string")
        );
      }

      return new Set();
    } catch (error) {
      console.warn("Unable to load", key, error);
      return new Set();
    }
  }

  function saveCollection(key, collection) {
    try {
      localStorage.setItem(
        key,
        JSON.stringify([...collection])
      );

      return true;
    } catch (error) {
      console.error("Unable to save", key, error);
      alert("Unable to save your travel data.");
      return false;
    }
  }

  function loadState() {
    state.visited = loadCollection(STORAGE.visited);
    state.wishlist = loadCollection(STORAGE.wishlist);

    state.language = localStorage.getItem(
      STORAGE.language
    ) || "en";

    if (!labels[state.language]) {
      state.language = "en";
    }
  }

  // ------------------------------------------
  // 3. Region Helpers
  // ------------------------------------------

  function getRegionName(region) {
    return region[state.language] || region.en;
  }

  function findRegionByCode(code) {
    return regionData.byCode.get(Number(code));
  }

  function validRegionCount(collection) {
    return regionData.regions.filter(
      region => collection.has(region.id)
    ).length;
  }

  // ------------------------------------------
  // 4. Progress Tracking
  // ------------------------------------------

  function updateMapProgress() {
    const visited = validRegionCount(state.visited);
    const wishlist = validRegionCount(state.wishlist);

    const percentage = Math.round(
      (visited / REGION_TOTAL) * 100
    );

    const visitedCounter = document.getElementById(
      "map-visited-count"
    );

    const progressCounter = document.getElementById(
      "map-progress-percent"
    );

    const wishlistCounter = document.getElementById(
      "map-wishlist-count"
    );

    if (visitedCounter) {
      visitedCounter.textContent =
        `${visited} / ${REGION_TOTAL}`;
    }

    if (progressCounter) {
      progressCounter.textContent = `${percentage}%`;
    }

    if (wishlistCounter) {
      wishlistCounter.textContent = wishlist;
    }

    if (window.ChinaSeen?.updateHomepageProgress) {
      window.ChinaSeen.updateHomepageProgress();
    }
  }

  // ------------------------------------------
  // 5. Region Status and Colors
  // ------------------------------------------

  function getRegionStatus(regionId) {
    if (state.visited.has(regionId)) {
      return "visited";
    }

    if (state.wishlist.has(regionId)) {
      return "wishlist";
    }

    return "not-visited";
  }

  function updateMapColors() {
    d3.select("#china-map")
      .selectAll(".china-region")
      .attr("data-status", function () {
        return getRegionStatus(this.dataset.regionId);
      })
      .classed("is-selected", function () {
        return (
          state.selectedRegion?.id ===
          this.dataset.regionId
        );
      });
  }

  // ------------------------------------------
  // 6. Region Details Panel
  // ------------------------------------------

  function showRegionDetails(region) {
    if (!region) {
      return;
    }

    

    
    state.selectedRegion = region;
const emptyState = document.getElementById(
      "region-empty-state"
    );

    const details = document.getElementById(
      "region-details"
    );

    if (emptyState) {
      emptyState.hidden = true;
    }

    if (details) {
      details.hidden = false;
    }

    const name = document.getElementById("region-name");
    const chineseName = document.getElementById(
      "region-chinese-name"
    );

    const type = document.getElementById("region-type");
    const description = document.getElementById(
      "region-description"
    );

    const highlights = document.getElementById(
      "region-highlights-list"
    );

    const exploreLink = document.getElementById(
      "explore-region-link"
    );

    if (name) {
      name.textContent = getRegionName(region);
    }

    if (chineseName) {
      chineseName.textContent = region.zh;
    }

    if (type) {
      type.textContent = getLabel(region.type);
    }

    if (description) {
      description.textContent = getLabel(
        "description",
        { name: getRegionName(region) }
      );
    }

    // Display curated destination information
    const destination = window.ChinaSeenDestinations
      ?.getDestination(region.id);

    if (destination) {
      // Use the curated regional description
      if (description) {
        description.textContent =
          window.ChinaSeenDestinations.getLocalizedText(
            destination.description,
            state.language
          );
      }

      if (highlights) {
        highlights.replaceChildren();

        const categoryLabels = {
          en: {
            history: "History",
            culture: "Culture",
            nature: "Nature",
            food: "Local Food"
          },
          zh: {
            history: "历史",
            culture: "文化",
            nature: "自然",
            food: "当地美食"
          },
          bn: {
            history: "ইতিহাস",
            culture: "সংস্কৃতি",
            nature: "প্রকৃতি",
            food: "স্থানীয় খাবার"
          }
        };

        const categories =
          categoryLabels[state.language] || categoryLabels.en;

        const createHighlight = (name, category) => {
  const item = document.createElement("button");
  item.type = "button";
  item.className = "travel-highlight-item";
  item.setAttribute("aria-expanded", "false");

  const title = document.createElement("strong");
  title.textContent = name;

  const type = document.createElement("span");
  type.className = "travel-highlight-category";
  type.textContent = categories[category] || category;

  item.append(title, type);

  item.addEventListener("click", () => {
    const panel = document.getElementById("destination-detail");
    if (!panel) return;

    const localize = value =>
      window.ChinaSeenDestinations.getLocalizedText(
        value, state.language
      );

    const selected = [
      ...destination.places,
      ...destination.foods
    ].find(entry => localize(entry.name) === name);

    if (!selected) return;

    const alreadyOpen =
      !panel.hidden &&
      panel.dataset.selectedId === selected.id;

    highlights.querySelectorAll(".travel-highlight-item")
      .forEach(button => {
        button.classList.remove("selected");
        button.setAttribute("aria-expanded", "false");
      });

    panel.replaceChildren();
    panel.dataset.selectedId = "";

    if (alreadyOpen) {
      panel.hidden = true;
      return;
    }

    const heading = document.createElement("h4");
    heading.textContent = localize(selected.name);

    const chinese = document.createElement("p");
    chinese.className = "destination-detail-chinese";
    chinese.textContent = selected.name.zh;

    const description = document.createElement("p");
    description.textContent = localize(selected.description);

    panel.append(heading, chinese, description);

    if (selected.city) {
      const location = document.createElement("p");
      location.textContent = "Location: " + selected.city;
      panel.appendChild(location);
    }

    if (selected.source) {
      const link = document.createElement("a");
      link.href = selected.source;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = "View heritage information";
      panel.appendChild(link);
    }

    panel.dataset.selectedId = selected.id;
    panel.hidden = false;

    item.classList.add("selected");
    item.setAttribute("aria-expanded", "true");
  });

  highlights.appendChild(item);
};

        destination.places.forEach(place => {
          createHighlight(
            window.ChinaSeenDestinations.getLocalizedText(
              place.name,
              state.language
            ),
            place.category
          );
        });

        destination.foods.forEach(food => {
          createHighlight(
            window.ChinaSeenDestinations.getLocalizedText(
              food.name,
              state.language
            ),
            "food"
          );
        });
      }

    } else if (highlights) {
      // Regions awaiting detailed content
      highlights.textContent = getLabel("detailPending");
    }


    if (exploreLink) {
      exploreLink.href =
        `discover.html?region=${encodeURIComponent(region.id)}`;
    }

    updateActionButtons();
    updateMapColors();
  }

  // ------------------------------------------
  // 7. Visited and Wishlist Actions
  // ------------------------------------------

  function updateActionButtons() {
    const region = state.selectedRegion;

    if (!region) {
      return;
    }

    const visitedButton = document.getElementById(
      "mark-visited-btn"
    );

    const wishlistButton = document.getElementById(
      "wishlist-btn"
    );

    const isVisited = state.visited.has(region.id);
    const isWishlist = state.wishlist.has(region.id);

    if (visitedButton) {
      visitedButton.textContent = isVisited
        ? getLabel("removeVisited")
        : getLabel("markVisited");

      visitedButton.classList.toggle(
        "is-active",
        isVisited
      );

      visitedButton.setAttribute(
        "aria-pressed",
        String(isVisited)
      );
    }

    if (wishlistButton) {
      wishlistButton.textContent = isWishlist
        ? getLabel("removeWishlist")
        : getLabel("wantToVisit");

      wishlistButton.classList.toggle(
        "is-active",
        isWishlist
      );

      wishlistButton.setAttribute(
        "aria-pressed",
        String(isWishlist)
      );
    }
  }

  function toggleVisited() {
    const region = state.selectedRegion;

    if (!region) {
      return;
    }

    const nextVisited = new Set(state.visited);
    const nextWishlist = new Set(state.wishlist);

    if (nextVisited.has(region.id)) {
      nextVisited.delete(region.id);
    } else {
      nextVisited.add(region.id);

      // Visited takes priority over wishlist.
      nextWishlist.delete(region.id);
    }

    if (!saveCollection(STORAGE.visited, nextVisited)) {
      return;
    }

    state.visited = nextVisited;

    if (saveCollection(STORAGE.wishlist, nextWishlist)) {
      state.wishlist = nextWishlist;
    }

    updateActionButtons();
    updateMapColors();
    updateMapProgress();
  }

  function toggleWishlist() {
    const region = state.selectedRegion;

    if (!region) {
      return;
    }

    // Already visited regions cannot simultaneously
    // be placed in the want-to-visit state.
    if (state.visited.has(region.id)) {
      return;
    }

    const nextWishlist = new Set(state.wishlist);

    if (nextWishlist.has(region.id)) {
      nextWishlist.delete(region.id);
    } else {
      nextWishlist.add(region.id);
    }

    if (!saveCollection(STORAGE.wishlist, nextWishlist)) {
      return;
    }

    state.wishlist = nextWishlist;

    updateActionButtons();
    updateMapColors();
    updateMapProgress();
  }

  function initializeActionButtons() {
    document.getElementById("mark-visited-btn")
      ?.addEventListener("click", toggleVisited);

    document.getElementById("wishlist-btn")
      ?.addEventListener("click", toggleWishlist);
  }

  // ------------------------------------------
  // 8. Interactive GeoJSON Map
  // ------------------------------------------

  // Fix GeoJSON polygon ring orientation for D3
  function fixPolygonOrientation(geojson) {
    const corrected = structuredClone(geojson);

    corrected.features.forEach(feature => {
      const geometry = feature.geometry;

      if (!geometry) return;

      if (geometry.type === "Polygon") {
        geometry.coordinates.forEach(ring => ring.reverse());
      }

      if (geometry.type === "MultiPolygon") {
        geometry.coordinates.forEach(polygon => {
          polygon.forEach(ring => ring.reverse());
        });
      }
    });

    return corrected;
  }

  function renderChinaMap(geojson) {
    const container = document.getElementById("china-map");

    if (!container) {
      return;
    }

    container.innerHTML = "";

    const width = 960;
    const height = 680;

    // Exclude non-regional geographical overlays,
    // including the additional JD feature.
    const features = geojson.features.filter(feature => {
      return Boolean(
        findRegionByCode(feature.properties?.adcode)
      );
    });

    const mapCollection = {
      type: "FeatureCollection",
      features
    };

    const projection = d3.geoMercator()
      .fitExtent(
        [[25, 25], [width - 25, height - 25]],
        mapCollection
      );

    const pathGenerator = d3.geoPath(projection);

    const svg = d3.select(container)
      .append("svg")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet")
      .attr("role", "group")
      .attr("aria-label", "Interactive China regions");

    const mapGroup = svg.append("g")
      .attr("class", "map-regions");

    const tooltip = d3.select(container)
      .append("div")
      .attr("class", "map-tooltip")
      .style("display", "none");

    mapGroup.selectAll("path")
      .data(features)
      .join("path")
      .attr("class", "china-region")
      .attr("d", pathGenerator)
      .attr("data-region-id", feature => {
        const region = findRegionByCode(
          feature.properties.adcode
        );

        return region.id;
      })
      .attr("data-status", feature => {
        const region = findRegionByCode(
          feature.properties.adcode
        );

        return getRegionStatus(region.id);
      })
      .attr("tabindex", 0)
      .attr("role", "button")
      .attr("aria-label", feature => {
        const region = findRegionByCode(
          feature.properties.adcode
        );

        return getRegionName(region);
      })
      .on("mouseenter", function (event, feature) {
        const region = findRegionByCode(
          feature.properties.adcode
        );

        d3.select(this).classed("is-hovered", true);

        tooltip
          .text(getRegionName(region))
          .style("display", "block");
      })
      .on("mousemove", function (event) {
        const bounds = container.getBoundingClientRect();

        tooltip
          .style("left", `${event.clientX - bounds.left + 12}px`)
          .style("top", `${event.clientY - bounds.top - 36}px`);
      })
      .on("mouseleave", function () {
        d3.select(this).classed("is-hovered", false);

        tooltip.style("display", "none");
      })
      .on("click", function (event, feature) {
        const region = findRegionByCode(
          feature.properties.adcode
        );

        showRegionDetails(region);
      })
      .on("keydown", function (event, feature) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();

          const region = findRegionByCode(
            feature.properties.adcode
          );

          showRegionDetails(region);
        }
      });

    // SVG region titles for hover and accessibility.
    mapGroup.selectAll(".china-region")
      .append("title")
      .text(feature => {
        const region = findRegionByCode(
          feature.properties.adcode
        );

        return getRegionName(region);
      });

    // Keep a reference for language updates.
    state.geojson = geojson;

    updateMapColors();

    console.log(
      `China map rendered with ${features.length} regions.`
    );
  }

  // ------------------------------------------
  // 9. Region Search
  // ------------------------------------------

  function initializeRegionSearch() {
    const search = document.getElementById(
      "region-search"
    );

    if (!search) {
      return;
    }

    search.addEventListener("input", event => {
      const query = event.target.value
        .trim()
        .toLowerCase();

      if (!query) {
        d3.selectAll(".china-region")
          .classed("is-dimmed", false);

        return;
      }

      const matches = regionData.regions.filter(region => {
        return (
          region.en.toLowerCase().includes(query) ||
          region.zh.includes(query) ||
          region.bn.includes(query)
        );
      });

      const ids = new Set(
        matches.map(region => region.id)
      );

      d3.selectAll(".china-region")
        .classed("is-dimmed", function () {
          return !ids.has(this.dataset.regionId);
        });

      if (matches.length === 1) {
        showRegionDetails(matches[0]);
      }
    });
  }

  // ------------------------------------------
  // 10. Language Synchronization
  // ------------------------------------------

  function refreshLanguage() {
    const language = localStorage.getItem(
      STORAGE.language
    ) || "en";

    if (!labels[language]) {
      return;
    }

    state.language = language;

    if (state.selectedRegion) {
      showRegionDetails(state.selectedRegion);
    }

    d3.selectAll(".china-region title")
      .text(feature => {
        const region = findRegionByCode(
          feature.properties.adcode
        );

        return getRegionName(region);
      });

    d3.selectAll(".china-region")
      .attr("aria-label", feature => {
        const region = findRegionByCode(
          feature.properties.adcode
        );

        return getRegionName(region);
      });
  }

  function initializeLanguageSync() {
    const selector = document.getElementById("language-select");

    if (!selector) return;

    selector.addEventListener("change", event => {
      const language = event.target.value;

      // Update the map language directly.
      state.language = labels[language] ? language : "en";

      // Rebuild regional descriptions and destination cards.
      if (state.selectedRegion) {
        showRegionDetails(state.selectedRegion);
      }

      // Update map accessibility names.
      d3.selectAll(".china-region")
        .attr("aria-label", feature => {
          const region = findRegionByCode(
            feature.properties.adcode
          );
          return getRegionName(region);
        });

      d3.selectAll(".china-region title")
        .text(feature => {
          const region = findRegionByCode(
            feature.properties.adcode
          );
          return getRegionName(region);
        });

      // Synchronize static Explore page labels.
      window.ChinaSeenExploreI18n?.apply();

      console.log("Destination language updated:", state.language);
    });
  }

  // ------------------------------------------  // 11. Load Local GeoJSON
  // ------------------------------------------

  async function loadMap() {
    const loading = document.getElementById("map-loading");

    try {
      if (typeof d3 === "undefined") {
        throw new Error("D3 library is not available.");
      }

      const response = await fetch(MAP_URL);

      if (!response.ok) {
        throw new Error(
          `Map request failed: ${response.status}`
        );
      }

      const geojson = await response.json();

      if (
        geojson.type !== "FeatureCollection" ||
        !Array.isArray(geojson.features)
      ) {
        throw new Error("Invalid GeoJSON format.");
      }

      const validFeatures = geojson.features.filter(
        feature => Boolean(
          findRegionByCode(feature.properties?.adcode)
        )
      );

      if (validFeatures.length !== REGION_TOTAL) {
        throw new Error(
          `Expected 34 regions, found ${validFeatures.length}.`
        );
      }

    renderChinaMap(fixPolygonOrientation(geojson));

      const requestedRegion = new URLSearchParams(
        window.location.search
      ).get("region");

      if (requestedRegion) {
        const region = regionData.byId.get(requestedRegion);

        if (region) {
          showRegionDetails(region);
        }
      }

    } catch (error) {
      console.error("China map loading failed:", error);

      if (loading) {
        loading.textContent =
          "Unable to load China map. Check the browser console and map data file.";
      }
    }
  }

  // ------------------------------------------
  // 12. Initialization
  // ------------------------------------------

  function initializeMap() {
    loadState();

    initializeActionButtons();
    initializeRegionSearch();
    initializeLanguageSync();

    updateMapProgress();

    loadMap();
  }

  document.addEventListener(
    "DOMContentLoaded",
    initializeMap
  );

})();
