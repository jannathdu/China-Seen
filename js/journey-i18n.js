
"use strict";

(() => {
  const translations = {
    en: {
      eyebrow: "YOUR CHINA TRAVEL STORY",
      title: "My Journey",
      subtitle: "Track the places you have explored and plan where to go next.",
      visited: "Visited Regions",
      wishlist: "Wishlist",
      total: "Total Regions",
      progress: "Travel Progress",
      visitedTitle: "Visited Regions",
      wishlistTitle: "My Wishlist",
      exploreMore: "Explore More →",
      addPlaces: "Add Places →",
      visitedEmpty: "You have not marked any regions as visited yet.",
      wishlistEmpty: "Your wishlist is empty. Start exploring China!",
      exploreRegion: "Explore Region →",
      types: {
        province: "Province",
        municipality: "Municipality",
        "autonomous-region": "Autonomous Region",
        "special-administrative-region": "Special Administrative Region"
      }
    },

    zh: {
      eyebrow: "你的中国旅行故事",
      title: "我的旅程",
      subtitle: "记录你探索过的地方，规划下一段精彩旅程。",
      visited: "已游览地区",
      wishlist: "心愿清单",
      total: "地区总数",
      progress: "旅行进度",
      visitedTitle: "已游览地区",
      wishlistTitle: "我的心愿清单",
      exploreMore: "探索更多 →",
      addPlaces: "添加目的地 →",
      visitedEmpty: "你还没有标记任何已游览的地区。",
      wishlistEmpty: "心愿清单还是空的，开始探索中国吧！",
      exploreRegion: "探索地区 →",
      types: {
        province: "省",
        municipality: "直辖市",
        "autonomous-region": "自治区",
        "special-administrative-region": "特别行政区"
      }
    },

    bn: {
      eyebrow: "আপনার চীন ভ্রমণের গল্প",
      title: "আমার ভ্রমণ",
      subtitle: "ঘুরে দেখা জায়গাগুলোর হিসাব রাখুন এবং পরবর্তী ভ্রমণের পরিকল্পনা করুন।",
      visited: "ঘুরে দেখা অঞ্চল",
      wishlist: "ইচ্ছার তালিকা",
      total: "মোট অঞ্চল",
      progress: "ভ্রমণের অগ্রগতি",
      visitedTitle: "ঘুরে দেখা অঞ্চল",
      wishlistTitle: "আমার ইচ্ছার তালিকা",
      exploreMore: "আরও অন্বেষণ করুন →",
      addPlaces: "জায়গা যোগ করুন →",
      visitedEmpty: "এখনো কোনো অঞ্চল ঘুরে দেখা হিসেবে চিহ্নিত করেননি।",
      wishlistEmpty: "আপনার ইচ্ছার তালিকা খালি। চীন অন্বেষণ শুরু করুন!",
      exploreRegion: "অঞ্চলটি দেখুন →",
      types: {
        province: "প্রদেশ",
        municipality: "সরাসরি নিয়ন্ত্রিত পৌরসভা",
        "autonomous-region": "স্বায়ত্তশাসিত অঞ্চল",
        "special-administrative-region": "বিশেষ প্রশাসনিক অঞ্চল"
      }
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

  function translateType(type, language = getLanguage()) {
    return translations[language]?.types?.[type] ??
           translations.en.types[type] ??
           type;
  }

  function apply() {
    const language = getLanguage();

    document.querySelectorAll("[data-journey-i18n]").forEach(element => {
      const key = element.dataset.journeyI18n;
      const value = translate(key, language);

      if (typeof value === "string") {
        element.textContent = value;
      }
    });

    const visitedEmpty = document.getElementById("journey-visited-empty");
    if (visitedEmpty) {
      visitedEmpty.textContent = translate("visitedEmpty", language);
    }

    const wishlistEmpty = document.getElementById("journey-wishlist-empty");
    if (wishlistEmpty) {
      wishlistEmpty.textContent = translate("wishlistEmpty", language);
    }

    const progress = document.getElementById("journey-progress-track");
    if (progress) {
      progress.setAttribute(
        "aria-label",
        translate("progress", language)
      );
    }
  }

  window.ChinaSeenJourneyI18n = {
    apply,
    translate,
    translateType,
    getLanguage
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", apply);
  } else {
    apply();
  }

  document.getElementById("language-select")
    ?.addEventListener("change", apply);

  window.addEventListener("chinaseen:languagechange", apply);
})();
