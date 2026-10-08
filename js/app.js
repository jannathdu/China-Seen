
/* ==========================================
   CHINA SEEN | 看见中国
   Phase 1 - Homepage JavaScript
========================================== */

"use strict";

// ------------------------------------------
// 1. Application Configuration
// ------------------------------------------

const TOTAL_REGIONS = 34;

const STORAGE_KEYS = {
  language: "selectedLanguage",
  visited: "visitedRegions",
  wishlist: "wishlist"
};

// ------------------------------------------
// 2. Translation Dictionary
// ------------------------------------------

const translations = {
  en: {
    home: "Home",
    explore: "Explore",
    discover: "Discover",
    journey: "My Journey",
    progress: "Progress",

    eyebrow: "YOUR CHINA STORY STARTS HERE",
    heroTitle: "How much of <span>China</span> have you seen?",
    heroDescription:
      "Explore China, discover remarkable places, track your journey, and create your own China story.",
    startExploring: "Start Exploring →",
    discoverChina: "Discover China",

    regions: "Regions to Explore",
    languages: "Languages",
    stories: "Stories to Create",
    yourJourney: "Your China Journey",
    regionsExplored: "{count} / 34 Regions Explored",

    howEyebrow: "THE EXPERIENCE",
    howTitle: "Your journey, your story.",
    howDescription:
      "From your first destination to your next great memory.",

    stepExplore: "Explore",
    stepExploreDescription:
      "Navigate an interactive map of China.",

    stepDiscover: "Discover",
    stepDiscoverDescription:
      "Find culture, food, history and hidden gems.",

    stepTrack: "Track",
    stepTrackDescription:
      "Save destinations and record your memories.",

    stepShare: "Share",
    stepShareDescription:
      "Create a personal China travel card.",

    destinationsEyebrow: "PLACES WORTH EXPLORING",
    destinationsTitle: "Discover China",
    viewAll: "View all destinations →",

    historyCulture: "History & Culture",
    foodNature: "Food & Nature",
    natureAdventure: "Nature & Adventure",

    beijingDescription:
      "Explore historic landmarks and centuries of culture.",
    sichuanDescription:
      "Discover beautiful landscapes and distinctive cuisine.",
    yunnanDescription:
      "Experience mountain scenery and diverse local cultures.",

    exploreDestination: "Explore destination →",

    journeyEyebrow: "EVERY PLACE TELLS A STORY",
    journeyTitle: "Make China your story.",
    journeyDescription:
      "Remember the places you have explored, plan your next adventure, and see how your journey grows.",
    openJourney: "Open My Journey →",

    yourProgress: "Your Progress",
    regionsCount: "{count} of 34 regions explored",
    visitedLabel: "Visited",
    wishlistLabel: "Wishlist",

    ctaEyebrow: "YOUR NEXT CHAPTER",
    ctaTitle: "There is more of China to see.",
    ctaDescription:
      "Start exploring destinations and building your personal travel story.",
    startJourney: "Start Your Journey →",

    footerTagline: "How much of China have you seen?"
  },

  zh: {
    home: "首页",
    explore: "探索中国",
    discover: "发现",
    journey: "我的旅程",
    progress: "旅行进度",

    eyebrow: "你的中国故事从这里开始",
    heroTitle: "你看过多少<span>中国</span>？",
    heroDescription:
      "探索中国，发现精彩目的地，记录旅行足迹，创造属于自己的中国故事。",
    startExploring: "开始探索 →",
    discoverChina: "发现中国",

    regions: "可探索地区",
    languages: "支持语言",
    stories: "无限故事",
    yourJourney: "我的中国之旅",
    regionsExplored: "已探索 {count} / 34 个地区",

    howEyebrow: "探索体验",
    howTitle: "你的旅程，你的故事。",
    howDescription: "从第一个目的地到下一段美好回忆。",

    stepExplore: "探索",
    stepExploreDescription: "通过互动地图探索中国。",

    stepDiscover: "发现",
    stepDiscoverDescription: "发现文化、美食、历史和小众秘境。",

    stepTrack: "记录",
    stepTrackDescription: "收藏目的地，记录旅行回忆。",

    stepShare: "分享",
    stepShareDescription: "制作专属中国旅行卡片。",

    destinationsEyebrow: "值得探索的地方",
    destinationsTitle: "发现中国",
    viewAll: "查看所有目的地 →",

    historyCulture: "历史与文化",
    foodNature: "美食与自然",
    natureAdventure: "自然与探险",

    beijingDescription: "探索历史古迹，感受悠久文化。",
    sichuanDescription: "发现壮丽风景与独特美食。",
    yunnanDescription: "体验山川风光和多元地方文化。",

    exploreDestination: "探索目的地 →",

    journeyEyebrow: "每个地方都有故事",
    journeyTitle: "书写你的中国故事。",
    journeyDescription:
      "记录探索过的地方，规划下一次旅行，见证旅程不断延伸。",
    openJourney: "打开我的旅程 →",

    yourProgress: "探索进度",
    regionsCount: "已探索 34 个地区中的 {count} 个",
    visitedLabel: "已去过",
    wishlistLabel: "心愿清单",

    ctaEyebrow: "你的下一篇章",
    ctaTitle: "中国还有更多精彩等待发现。",
    ctaDescription: "开始探索目的地，书写属于自己的旅行故事。",
    startJourney: "开启旅程 →",

    footerTagline: "你看过多少中国？"
  },

  bn: {
    home: "হোম",
    explore: "এক্সপ্লোর",
    discover: "আবিষ্কার",
    journey: "আমার ভ্রমণ",
    progress: "অগ্রগতি",

    eyebrow: "আপনার চীন ভ্রমণের গল্প শুরু হোক এখানে",
    heroTitle: "আপনি <span>চীনের</span> কতটা দেখেছেন?",
    heroDescription:
      "চীন ঘুরে দেখুন, নতুন জায়গা আবিষ্কার করুন, ভ্রমণের হিসাব রাখুন এবং তৈরি করুন নিজের চীন ভ্রমণের গল্প।",
    startExploring: "ঘুরে দেখা শুরু করুন →",
    discoverChina: "চীনকে আবিষ্কার করুন",

    regions: "ঘুরে দেখার অঞ্চল",
    languages: "ভাষা",
    stories: "অসংখ্য গল্প",
    yourJourney: "আমার চীন ভ্রমণ",
    regionsExplored: "{count} / ৩৪টি অঞ্চল ঘুরে দেখা হয়েছে",

    howEyebrow: "ভ্রমণের অভিজ্ঞতা",
    howTitle: "আপনার ভ্রমণ, আপনার গল্প।",
    howDescription:
      "প্রথম গন্তব্য থেকে পরবর্তী সুন্দর স্মৃতি পর্যন্ত।",

    stepExplore: "ঘুরে দেখুন",
    stepExploreDescription:
      "ইন্টারঅ্যাকটিভ ম্যাপ দিয়ে চীনকে জানুন।",

    stepDiscover: "আবিষ্কার করুন",
    stepDiscoverDescription:
      "সংস্কৃতি, খাবার, ইতিহাস ও অজানা স্থান খুঁজুন।",

    stepTrack: "হিসাব রাখুন",
    stepTrackDescription:
      "পছন্দের স্থান সংরক্ষণ করুন এবং স্মৃতি লিখে রাখুন।",

    stepShare: "শেয়ার করুন",
    stepShareDescription:
      "নিজের চীন ভ্রমণের কার্ড তৈরি করুন।",

    destinationsEyebrow: "ঘুরে দেখার মতো জায়গা",
    destinationsTitle: "চীনকে আবিষ্কার করুন",
    viewAll: "সব গন্তব্য দেখুন →",

    historyCulture: "ইতিহাস ও সংস্কৃতি",
    foodNature: "খাবার ও প্রকৃতি",
    natureAdventure: "প্রকৃতি ও অ্যাডভেঞ্চার",

    beijingDescription:
      "ঐতিহাসিক স্থাপনা ও প্রাচীন সংস্কৃতির সঙ্গে পরিচিত হোন।",
    sichuanDescription:
      "অসাধারণ প্রাকৃতিক দৃশ্য ও স্থানীয় খাবার আবিষ্কার করুন।",
    yunnanDescription:
      "পাহাড়ি প্রকৃতি ও বৈচিত্র্যময় স্থানীয় সংস্কৃতি উপভোগ করুন।",

    exploreDestination: "গন্তব্যটি দেখুন →",

    journeyEyebrow: "প্রতিটি জায়গার রয়েছে নিজস্ব গল্প",
    journeyTitle: "চীন ভ্রমণের গল্প তৈরি করুন।",
    journeyDescription:
      "ঘুরে দেখা জায়গাগুলো মনে রাখুন, পরবর্তী ভ্রমণের পরিকল্পনা করুন এবং নিজের অগ্রগতি দেখুন।",
    openJourney: "আমার ভ্রমণ দেখুন →",

    yourProgress: "আপনার অগ্রগতি",
    regionsCount: "৩৪টির মধ্যে {count}টি অঞ্চল ঘুরে দেখা হয়েছে",
    visitedLabel: "ঘুরে দেখা",
    wishlistLabel: "ইচ্ছার তালিকা",

    ctaEyebrow: "আপনার পরবর্তী অধ্যায়",
    ctaTitle: "চীনে আবিষ্কার করার মতো আরও অনেক কিছু আছে।",
    ctaDescription:
      "নতুন গন্তব্য খুঁজুন এবং নিজের ভ্রমণের গল্প তৈরি করুন।",
    startJourney: "ভ্রমণ শুরু করুন →",

    footerTagline: "আপনি চীনের কতটা দেখেছেন?"
  }
};

// ------------------------------------------
// 3. Safe Local Storage
// ------------------------------------------

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);

    if (value === null) {
      return fallback;
    }

    return JSON.parse(value);
  } catch (error) {
    console.warn("Storage read failed:", key, error);
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.warn("Storage write failed:", key, error);
    return false;
  }
}

// ------------------------------------------
// 4. Language System
// ------------------------------------------

function getDefaultLanguage() {
  const saved = localStorage.getItem(STORAGE_KEYS.language);

  if (saved && translations[saved]) {
    return saved;
  }

  const browserLanguage = navigator.language.toLowerCase();

  if (browserLanguage.startsWith("zh")) {
    return "zh";
  }

  if (browserLanguage.startsWith("bn")) {
    return "bn";
  }

  return "en";
}

let currentLanguage = "en";

function translate(key, replacements = {}) {
  let value =
    translations[currentLanguage]?.[key] ??
    translations.en[key] ??
    key;

  Object.entries(replacements).forEach(([name, replacement]) => {
    value = value.replaceAll(`{${name}}`, String(replacement));
  });

  return value;
}

function setLanguage(language) {
  if (!translations[language]) {
    language = "en";
  }

  currentLanguage = language;

  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    const translation = translate(key);

    // Only the hero title requires controlled HTML markup.
    if (key === "heroTitle") {
      element.innerHTML = translation;
    } else {
      element.textContent = translation;
    }
  });

  const selector = document.getElementById("language-select");

  if (selector) {
    selector.value = language;
  }

  localStorage.setItem(STORAGE_KEYS.language, language);

  updateHomepageProgress();
  window.dispatchEvent(
    new CustomEvent("chinaseen:languagechange", {
      detail: { language }
    })
  );
}

// ------------------------------------------
// 5. Travel Progress
// ------------------------------------------

function normalizeCollection(data) {
  if (Array.isArray(data)) {
    return data.filter(
      item => typeof item === "string" && item.trim() !== ""
    );
  }

  if (data && typeof data === "object") {
    return Object.keys(data).filter(key => Boolean(data[key]));
  }

  return [];
}

function getVisitedRegions() {
  return normalizeCollection(
    readStorage(STORAGE_KEYS.visited, [])
  );
}

function getWishlist() {
  return normalizeCollection(
    readStorage(STORAGE_KEYS.wishlist, [])
  );
}

function formatNumber(number) {
  if (currentLanguage === "bn") {
    return new Intl.NumberFormat("bn-BD", {
      useGrouping: false
    }).format(number);
  }

  return String(number);
}

function updateHomepageProgress() {
  const visited = [...new Set(getVisitedRegions())];
  const wishlist = [...new Set(getWishlist())];

  const visitedCount = Math.min(
    visited.length,
    TOTAL_REGIONS
  );

  const percentage = Math.round(
    (visitedCount / TOTAL_REGIONS) * 100
  );

  const heroProgress = document.getElementById("hero-progress");
  const journeyPercentage = document.getElementById("journey-percentage");
  const progressBar = document.getElementById("homepage-progress-bar");
  const regionCount = document.getElementById("journey-region-count");
  const visitedCounter = document.getElementById("visited-count");
  const wishlistCounter = document.getElementById("wishlist-count");

  if (heroProgress) {
    heroProgress.textContent = translate("regionsExplored", {
      count: formatNumber(visitedCount)
    });
  }

  if (journeyPercentage) {
    journeyPercentage.textContent = `${formatNumber(percentage)}%`;
  }

  if (progressBar) {
    progressBar.style.width = `${percentage}%`;
  }

  if (regionCount) {
    regionCount.textContent = translate("regionsCount", {
      count: formatNumber(visitedCount)
    });
  }

  if (visitedCounter) {
    visitedCounter.textContent = formatNumber(visitedCount);
  }

  if (wishlistCounter) {
    wishlistCounter.textContent = formatNumber(wishlist.length);
  }
}

// ------------------------------------------
// 6. Mobile Navigation
// ------------------------------------------

function initializeMobileMenu() {
  const menuButton = document.querySelector(".menu-toggle");
  const menu = document.getElementById("nav-menu");

  if (!menuButton || !menu) {
    return;
  }

  menuButton.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");

    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );

    menuButton.textContent = isOpen ? "✕" : "☰";
  });

  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");

      menuButton.setAttribute("aria-expanded", "false");
      menuButton.textContent = "☰";
    });
  });
}

// ------------------------------------------
// 7. Language Selector
// ------------------------------------------

function initializeLanguageSelector() {
  const selector = document.getElementById("language-select");

  if (!selector) {
    return;
  }

  selector.addEventListener("change", event => {
    setLanguage(event.target.value);
  });
}

// ------------------------------------------
// 8. Footer
// ------------------------------------------

function updateFooterYear() {
  const yearElement = document.getElementById("current-year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// ------------------------------------------
// 9. Application Initialization
// ------------------------------------------

function initializeApp() {
  initializeMobileMenu();
  initializeLanguageSelector();
  updateFooterYear();

  setLanguage(getDefaultLanguage());

  console.log("China Seen initialized successfully.");
}

document.addEventListener("DOMContentLoaded", initializeApp);

// Update counters when localStorage changes
// in another browser tab.
window.addEventListener("storage", event => {
  if (
    event.key === STORAGE_KEYS.visited ||
    event.key === STORAGE_KEYS.wishlist
  ) {
    updateHomepageProgress();
  }

  if (event.key === STORAGE_KEYS.language) {
    setLanguage(getDefaultLanguage());
  }
});

// Make progress refresh available to future pages.
window.ChinaSeen = {
  getVisitedRegions,
  getWishlist,
  updateHomepageProgress,
  setLanguage,
  translate,
  writeStorage
};
