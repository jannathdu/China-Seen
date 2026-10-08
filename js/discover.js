
"use strict";

(() => {
  function initializeDiscover() {
    const api = window.ChinaSeenDestinations;
    const grid = document.getElementById("discover-grid");
    const count = document.getElementById("discover-results-count");
    const searchInput = document.getElementById("destination-search");
    const filterButtons = document.querySelectorAll(
      ".discover-filters [data-category]"
    );
    const emptyMessage = document.getElementById("discover-empty");

    if (!api || !grid || !searchInput) {
      console.error("Discover initialization failed.");
      return;
    }

    
const places = [
  ...api.getAllPlaces(),

  ...Object.values(api.data).flatMap(region =>
    (region.foods || []).map(food => ({
      ...food,
      regionId: region.id,
      city: region.cities?.[0]?.en || region.id,
      category: "food"
    }))
  )
];

    let activeCategory = "all";

    function getLanguage() {
      const selected =
        document.getElementById("language-select")?.value ||
        localStorage.getItem("selectedLanguage") ||
        "en";

      return ["en", "zh", "bn"].includes(selected) ? selected : "en";
    }

    function createCard(place) {
      const language = getLanguage();
      const localize = value => api.getLocalizedText(value, language);

      const card = document.createElement("article");
      card.className = "discover-card";

      const content = document.createElement("div");
      content.className = "discover-card-content";

      const title = document.createElement("h3");
      title.textContent = localize(place.name);

      const location = document.createElement("p");
      location.className = "destination-location";
      
const region = api.getDestination(place.regionId);

const regionName = {
  beijing: { en: "Beijing", zh: "北京", bn: "বেইজিং" },
  sichuan: { en: "Sichuan", zh: "四川", bn: "সিচুয়ান" },
  yunnan: { en: "Yunnan", zh: "云南", bn: "ইউনান" }
};

const localizedRegion =
  api.getLocalizedText(regionName[place.regionId], language) ||
  place.regionId;

const localizedCity =
  region?.cities?.find(city => city.en === place.city);

location.textContent =
  `${api.getLocalizedText(localizedCity, language) || place.city} · ${localizedRegion}`;


      const description = document.createElement("p");
      description.textContent = localize(place.description);

      const category = document.createElement("p");
      
category.textContent =
  window.ChinaSeenDiscoverI18n.translate(
    place.category,
    language
  );


      content.append(title, location, description, category);
      card.appendChild(content);

const image = document.createElement("img");



const pngImages = ["forbidden-city", "temple-of-heaven"];
const extension = pngImages.includes(place.id) ? "png" : "jpg";


image.src = `assets/images/destinations/${place.id}.png`;


image.alt = localize(place.name);
image.loading = "lazy";
image.decoding = "async";


image.onerror = () => {
  image.onerror = null;

  const fallback = document.createElement("div");
  fallback.className = "discover-image-fallback";
  fallback.setAttribute("aria-hidden", "true");

  image.replaceWith(fallback);
};



card.append(image, content);



      return card;
    }

    function getFilteredPlaces() {
      const query = searchInput.value.trim().toLowerCase();

      return places.filter(place => {
        const matchesCategory =
          activeCategory === "all" ||
          place.category === activeCategory;

        const searchableText = [
          ...Object.values(place.name || {}),
          ...Object.values(place.description || {}),
          place.city,
          place.regionId,
          place.category
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        const matchesSearch =
          !query || searchableText.includes(query);

        return matchesCategory && matchesSearch;
      });
    }

    function renderCards() {
      const filtered = getFilteredPlaces();
      const fragment = document.createDocumentFragment();

      filtered.forEach(place => {
        fragment.appendChild(createCard(place));
      });

      grid.replaceChildren(fragment);

      if (count) {
        
count.textContent =
  window.ChinaSeenDiscoverI18n.translate("results")(filtered.length);

      }

      if (emptyMessage) {
        emptyMessage.hidden = filtered.length !== 0;
      }
    }

    searchInput.addEventListener("input", renderCards);

    filterButtons.forEach(button => {
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.category === activeCategory)
      );

      button.addEventListener("click", () => {
        activeCategory = button.dataset.category;

        filterButtons.forEach(item => {
          const isActive = item.dataset.category === activeCategory;
          item.classList.toggle("active", isActive);
          item.setAttribute("aria-pressed", String(isActive));
        });

        renderCards();
      });
    });

    document.getElementById("language-select")
      ?.addEventListener("change", renderCards);

    window.addEventListener("chinaseen:languagechange", renderCards);

    renderCards();
    console.log("Discover search and filters initialized.");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeDiscover);
  } else {
    initializeDiscover();
  }
})();
