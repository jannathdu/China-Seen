"use strict";

(() => {
  const translations = {
    en: {
      introTag: "YOUR INTERACTIVE TRAVEL MAP",
      introTitle: "Explore China",
      introDescription: "Discover China's regions, find your next destination, and keep track of the places you have explored.",
      regionsExplored: "Regions Explored",
      travelProgress: "Travel Progress",
      wishlist: "Wishlist",
      mapTitle: "China Travel Map",
      mapInstruction: "Click a region to explore",
      notVisited: "Not visited",
      wantToVisit: "Want to visit",
      visited: "Visited",
      searchPlaceholder: "Search Beijing, Sichuan, Yunnan...",
      mapFooter: "34 regions to explore",
      emptyTitle: "Your next discovery awaits.",
      emptyDescription: "Select a region on the map to explore its destinations, culture and travel highlights.",
      exploreRegion: "EXPLORE REGION",
      highlights: "Travel Highlights",
      discoverPlaces: "Discover Places →",
      markVisited: "Mark as Visited",
      removeVisited: "Remove Visited",
      addWishlist: "Want to Visit",
      removeWishlist: "Remove from Wishlist"
    },
    zh: {
      introTag: "你的互动旅行地图",
      introTitle: "探索中国",
      introDescription: "探索中国各地，发现下一个目的地，并记录你的旅行足迹。",
      regionsExplored: "已探索地区",
      travelProgress: "旅行进度",
      wishlist: "心愿清单",
      mapTitle: "中国旅行地图",
      mapInstruction: "点击地区开始探索",
      notVisited: "未去过",
      wantToVisit: "想去",
      visited: "已去过",
      searchPlaceholder: "搜索北京、四川、云南...",
      mapFooter: "探索34个地区",
      emptyTitle: "下一段旅程等你发现。",
      emptyDescription: "在地图上选择一个地区，探索景点、文化和旅行亮点。",
      exploreRegion: "探索地区",
      highlights: "旅行亮点",
      discoverPlaces: "发现景点 →",
      markVisited: "标记为已去过",
      removeVisited: "取消已去过",
      addWishlist: "想去",
      removeWishlist: "从心愿清单移除"
    },
    bn: {
      introTag: "আপনার ইন্টারঅ্যাকটিভ ভ্রমণ মানচিত্র",
      introTitle: "চীন ঘুরে দেখুন",
      introDescription: "চীনের বিভিন্ন অঞ্চল আবিষ্কার করুন, পরবর্তী গন্তব্য খুঁজুন এবং ভ্রমণের হিসাব রাখুন।",
      regionsExplored: "ঘুরে দেখা অঞ্চল",
      travelProgress: "ভ্রমণের অগ্রগতি",
      wishlist: "ইচ্ছার তালিকা",
      mapTitle: "চীন ভ্রমণের মানচিত্র",
      mapInstruction: "অঞ্চলে ক্লিক করে ঘুরে দেখুন",
      notVisited: "যাওয়া হয়নি",
      wantToVisit: "ঘুরতে চাই",
      visited: "ঘুরে দেখা হয়েছে",
      searchPlaceholder: "বেইজিং, সিচুয়ান, ইউনান খুঁজুন...",
      mapFooter: "৩৪টি অঞ্চল ঘুরে দেখুন",
      emptyTitle: "আপনার পরবর্তী আবিষ্কার অপেক্ষা করছে।",
      emptyDescription: "দর্শনীয় স্থান, সংস্কৃতি ও ভ্রমণের আকর্ষণ জানতে মানচিত্র থেকে একটি অঞ্চল নির্বাচন করুন।",
      exploreRegion: "অঞ্চল আবিষ্কার",
      highlights: "ভ্রমণের আকর্ষণ",
      discoverPlaces: "দর্শনীয় স্থান দেখুন →",
      markVisited: "ঘুরে দেখা হয়েছে",
      removeVisited: "ভ্রমণ তালিকা থেকে সরান",
      addWishlist: "ঘুরতে চাই",
      removeWishlist: "ইচ্ছার তালিকা থেকে সরান"
    }
  };

  const selectors = {
    introTag: ".explore-intro .eyebrow",
    introTitle: ".explore-intro h1",
    introDescription: ".explore-intro p",
    regionsExplored: ".explore-stat-card:nth-child(1) > span",
    travelProgress: ".explore-stat-card:nth-child(2) > span",
    wishlist: ".explore-stat-card:nth-child(3) > span",
    mapTitle: ".map-toolbar h2",
    mapInstruction: ".map-toolbar p",
    notVisited: ".map-legend > span:nth-child(1)",
    wantToVisit: ".map-legend > span:nth-child(2)",
    visited: ".map-legend > span:nth-child(3)",
    mapFooter: ".map-footer > span:first-child",
    emptyTitle: ".region-empty-state h2",
    emptyDescription: ".region-empty-state p",
    exploreRegion: ".region-details > .eyebrow",
    highlights: ".region-highlights h3",
    discoverPlaces: "#explore-region-link"
  };

  function applyExploreLanguage() {
    const selector = document.getElementById("language-select");

    const language = selector?.value ||
      localStorage.getItem("selectedLanguage") || "en";

    const t = translations[language] || translations.en;

    Object.entries(selectors).forEach(([key, selectorText]) => {
      const element = document.querySelector(selectorText);
      if (!element) return;

      if (["notVisited", "wantToVisit", "visited"].includes(key)) {
        const dot = element.querySelector(".legend-dot");
        element.replaceChildren();
        if (dot) element.appendChild(dot);
        element.appendChild(document.createTextNode(" " + t[key]));
      } else {
        element.textContent = t[key];
      }
    });

    const search = document.getElementById("region-search");

    if (search) {
      search.placeholder = t.searchPlaceholder;
    }

    // Preserve the dynamic region button state.
    const selectedRegion = document.getElementById("region-details");

    if (selectedRegion && !selectedRegion.hidden) {
      const visitedButton = document.getElementById("mark-visited-btn");
      const wishlistButton = document.getElementById("wishlist-btn");

      if (visitedButton) {
        visitedButton.textContent =
          visitedButton.getAttribute("aria-pressed") === "true"
            ? t.removeVisited
            : t.markVisited;
      }

      if (wishlistButton) {
        wishlistButton.textContent =
          wishlistButton.getAttribute("aria-pressed") === "true"
            ? t.removeWishlist
            : t.addWishlist;
      }
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyExploreLanguage();

    const selector = document.getElementById("language-select");

    if (selector) {
      selector.addEventListener("change", applyExploreLanguage);
    }
  });

  window.ChinaSeenExploreI18n = {
    apply: applyExploreLanguage
  };
})();