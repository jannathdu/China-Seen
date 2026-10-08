
"use strict";

(() => {
  const translations = {
    en: {
      eyebrow: "EXPLORE BEYOND THE ORDINARY",
      title: "Discover China",
      subtitle: "Find extraordinary destinations, cultural landmarks, natural wonders, and unforgettable experiences across China.",
      searchPlaceholder: "Search destinations...",
      all: "All",
      nature: "Nature",
      history: "History",
      culture: "Culture",
      food: "Food",
      results: count => `${count} destinations found`,
      empty: "No destinations found.",
      categories: "Destination categories"
    },

    zh: {
      eyebrow: "探索不一样的中国",
      title: "探索中国",
      subtitle: "探索中国各地的精彩目的地、文化地标、自然奇观和难忘的旅行体验。",
      searchPlaceholder: "搜索目的地...",
      all: "全部",
      nature: "自然",
      history: "历史",
      culture: "文化",
      food: "美食",
      results: count => `找到${count}个目的地`,
      empty: "未找到符合条件的目的地。",
      categories: "目的地类别"
    },

    bn: {
      eyebrow: "চীনের অনন্য সৌন্দর্য আবিষ্কার করুন",
      title: "চীনকে আবিষ্কার করুন",
      subtitle: "চীনের অসাধারণ দর্শনীয় স্থান, সাংস্কৃতিক ঐতিহ্য, প্রাকৃতিক বিস্ময় এবং স্মরণীয় ভ্রমণের অভিজ্ঞতা খুঁজে নিন।",
      searchPlaceholder: "দর্শনীয় স্থান খুঁজুন...",
      all: "সব",
      nature: "প্রকৃতি",
      history: "ইতিহাস",
      culture: "সংস্কৃতি",
      food: "খাবার",
      results: count => `${new Intl.NumberFormat("bn-BD").format(count)}টি দর্শনীয় স্থান পাওয়া গেছে`,
      empty: "কোনো দর্শনীয় স্থান পাওয়া যায়নি।",
      categories: "দর্শনীয় স্থানের বিভাগ"
    }
  };

  function getLanguage() {
    const selected =
      document.getElementById("language-select")?.value ||
      localStorage.getItem("selectedLanguage") ||
      "en";

    return translations[selected] ? selected : "en";
  }

  function translate(key, language = getLanguage()) {
    return translations[language]?.[key] ??
           translations.en[key] ??
           key;
  }

  function apply() {
    const language = getLanguage();

    document.querySelectorAll("[data-discover-i18n]").forEach(element => {
      const key = element.dataset.discoverI18n;
      const value = translate(key, language);

      if (typeof value === "string") {
        element.textContent = value;
      }
    });

    const search = document.getElementById("destination-search");
    if (search) {
      search.placeholder = translate("searchPlaceholder", language);
    }

    document.querySelectorAll(".discover-filters [data-category]")
      .forEach(button => {
        button.textContent = translate(button.dataset.category, language);
      });

    const filterGroup = document.querySelector(".discover-filters");
    if (filterGroup) {
      filterGroup.setAttribute(
        "aria-label",
        translate("categories", language)
      );
    }

    const empty = document.getElementById("discover-empty");
    if (empty) {
      empty.textContent = translate("empty", language);
    }
  }

  window.ChinaSeenDiscoverI18n = {
    apply,
    translate,
    getLanguage
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", apply);
  } else {
    apply();
  }

  window.addEventListener("chinaseen:languagechange", apply);
})();
