
"use strict";

(() => {
  const translations = {
    en: {
      eyebrow: "YOUR EXPLORATION AT A GLANCE",
      title: "Travel Progress",
      subtitle: "See how far you have traveled across China and celebrate every new destination.",
      visited: "Visited Regions",
      wishlist: "Wishlist",
      remaining: "Remaining Regions",
      overall: "Overall Exploration",
      completed: "Completed",
      exploreMore: "Explore More →",
      breakdown: "Region Type Breakdown",
      breakdownSubtitle: "Your visits across different administrative regions.",
      milestones: "Travel Milestones",
      milestonesSubtitle: "Celebrate your progress as you explore more of China.",
      milestone25: "Explorer",
      milestone50: "Adventurer",
      milestone75: "Trailblazer",
      milestone100: "China Master",
      locked: "Locked",
      unlocked: "Unlocked",
      regionsExplored: (visited, total) =>
        `${visited} of ${total} regions explored`,
      regionsRemaining: remaining =>
        `${remaining} regions remaining`,
      types: {
        province: "Provinces",
        municipality: "Municipalities",
        "autonomous-region": "Autonomous Regions",
        "special-administrative-region": "Special Administrative Regions"
      }
    },

    zh: {
      eyebrow: "你的中国探索概览",
      title: "旅行进度",
      subtitle: "了解你探索中国的旅程进度，庆祝每一个新目的地。",
      visited: "已游览地区",
      wishlist: "心愿清单",
      remaining: "剩余地区",
      overall: "总体探索进度",
      completed: "已完成",
      exploreMore: "探索更多 →",
      breakdown: "地区类型统计",
      breakdownSubtitle: "查看你在不同类型行政区域的探索进度。",
      milestones: "旅行里程碑",
      milestonesSubtitle: "随着探索不断深入，解锁新的旅行成就。",
      milestone25: "探索者",
      milestone50: "冒险家",
      milestone75: "开拓者",
      milestone100: "中国探索大师",
      locked: "未解锁",
      unlocked: "已解锁",
      regionsExplored: (visited, total) =>
        `已探索 ${visited} / ${total} 个地区`,
      regionsRemaining: remaining =>
        `还有 ${remaining} 个地区待探索`,
      types: {
        province: "省",
        municipality: "直辖市",
        "autonomous-region": "自治区",
        "special-administrative-region": "特别行政区"
      }
    },

    bn: {
      eyebrow: "আপনার ভ্রমণের অগ্রগতি এক নজরে",
      title: "ভ্রমণের অগ্রগতি",
      subtitle: "চীনের কতটা ঘুরে দেখেছেন তা জানুন এবং প্রতিটি নতুন গন্তব্য উদ্‌যাপন করুন।",
      visited: "ঘুরে দেখা অঞ্চল",
      wishlist: "ইচ্ছেতালিকা",
      remaining: "বাকি অঞ্চল",
      overall: "সামগ্রিক ভ্রমণের অগ্রগতি",
      completed: "সম্পন্ন",
      exploreMore: "আরও ঘুরে দেখুন →",
      breakdown: "অঞ্চলের ধরন অনুযায়ী অগ্রগতি",
      breakdownSubtitle: "বিভিন্ন প্রশাসনিক অঞ্চলে আপনার ভ্রমণের অগ্রগতি দেখুন।",
      milestones: "ভ্রমণের মাইলফলক",
      milestonesSubtitle: "চীন ঘুরে দেখার প্রতিটি গুরুত্বপূর্ণ অর্জন উদ্‌যাপন করুন।",
      milestone25: "অনুসন্ধানকারী",
      milestone50: "অভিযাত্রী",
      milestone75: "পথপ্রদর্শক",
      milestone100: "চীন ভ্রমণ বিশেষজ্ঞ",
      locked: "লক করা",
      unlocked: "অর্জিত",
      regionsExplored: (visited, total) =>
        `${total}টি অঞ্চলের মধ্যে ${visited}টি ঘুরে দেখা হয়েছে`,
      regionsRemaining: remaining =>
        `আরও ${remaining}টি অঞ্চল বাকি`,
      types: {
        province: "প্রদেশ",
        municipality: "সরাসরি শাসিত শহর",
        "autonomous-region": "স্বায়ত্তশাসিত অঞ্চল",
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

    document.querySelectorAll("[data-progress-i18n]").forEach(element => {
      const key = element.dataset.progressI18n;
      const value = translate(key, language);

      if (typeof value === "string") {
        element.textContent = value;
      }
    });

    const circle = document.getElementById("progress-circle");

    if (circle) {
      circle.setAttribute("aria-label", translate("overall", language));
    }
  }

  window.ChinaSeenProgressI18n = {
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
