
/* ==========================================
   CHINA SEEN | 看见中国
   Phase 3 - Destination Information

   Curated MVP data
   No paid APIs or backend required
========================================== */

"use strict";

(() => {

  const DESTINATIONS = {

    // ======================================
    // BEIJING
    // ======================================

    beijing: {
      id: "beijing",

      description: {
        en: "Discover China's capital through imperial architecture, historic neighborhoods, traditional cuisine and cultural landmarks.",
        zh: "探索中国首都的皇家建筑、历史街区、传统美食和文化地标。",
        bn: "চীনের রাজধানীর রাজকীয় স্থাপত্য, ঐতিহাসিক এলাকা, ঐতিহ্যবাহী খাবার ও সংস্কৃতি আবিষ্কার করুন।"
      },

      cities: [
        { en: "Beijing", zh: "北京", bn: "বেইজিং" }
      ],

      places: [
        {
          id: "forbidden-city",
          name: {
            en: "Forbidden City",
            zh: "故宫",
            bn: "ফরবিডেন সিটি"
          },
          category: "history",
          city: "Beijing",
          description: {
            en: "Former imperial palace of the Ming and Qing dynasties, now home to the Palace Museum.",
            zh: "明清两代的皇宫，现为故宫博物院所在地。",
            bn: "মিং ও ছিং রাজবংশের প্রাক্তন রাজপ্রাসাদ, বর্তমানে প্যালেস মিউজিয়াম।"
          },
          unesco: true,
          source: "https://whc.unesco.org/en/list/439/"
        },
        {
          id: "temple-of-heaven",
          name: {
            en: "Temple of Heaven",
            zh: "天坛",
            bn: "টেম্পল অব হেভেন"
          },
          category: "history",
          city: "Beijing",
          description: {
            en: "Historic imperial ceremonial complex associated with prayers for good harvests.",
            zh: "古代皇帝祭天祈谷的重要礼仪建筑群。",
            bn: "প্রাচীন সম্রাটদের ফসলের সমৃদ্ধির প্রার্থনার ঐতিহাসিক স্থাপনা।"
          },
          unesco: true,
          source: "https://whc.unesco.org/en/list/881/"
        },
        {
          id: "summer-palace",
          name: {
            en: "Summer Palace",
            zh: "颐和园",
            bn: "সামার প্যালেস"
          },
          category: "culture",
          city: "Beijing",
          description: {
            en: "Imperial garden landscape featuring Kunming Lake and Longevity Hill.",
            zh: "以昆明湖和万寿山为特色的皇家园林。",
            bn: "কুনমিং হ্রদ ও লংজেভিটি হিল ঘিরে নির্মিত রাজকীয় উদ্যান।"
          },
          unesco: true,
          source: "https://whc.unesco.org/en/list/880/"
        }
      ],

      foods: [
        {
          id: "peking-duck",
          name: {
            en: "Peking Duck",
            zh: "北京烤鸭",
            bn: "বেইজিং রোস্ট ডাক"
          },
          description: {
            en: "Roast duck traditionally served with thin pancakes and accompaniments.",
            zh: "传统烤鸭，通常搭配薄饼和配菜。",
            bn: "পাতলা প্যানকেক ও অন্যান্য উপকরণের সঙ্গে পরিবেশিত ঐতিহ্যবাহী রোস্ট ডাক।"
          }
        },
        {
          id: "zhajiangmian",
          name: {
            en: "Zhajiangmian",
            zh: "炸酱面",
            bn: "ঝাজিয়াংমিয়ান"
          },
          description: {
            en: "Wheat noodles served with savory soybean-based sauce.",
            zh: "搭配咸香炸酱的传统面食。",
            bn: "সয়াবিনভিত্তিক সস দিয়ে পরিবেশিত গমের নুডলস।"
          }
        }
      ]
    },

    // ======================================
    // SICHUAN
    // ======================================

    sichuan: {
      id: "sichuan",

      description: {
        en: "Discover Sichuan's mountain landscapes, historic Buddhist heritage, distinctive cuisine and Chengdu's panda attractions.",
        zh: "探索四川的山川风光、佛教文化遗产、特色美食和成都熊猫景点。",
        bn: "সিচুয়ানের পাহাড়ি প্রকৃতি, বৌদ্ধ ঐতিহ্য, বিখ্যাত খাবার ও চেংদুর পান্ডা আকর্ষণ আবিষ্কার করুন।"
      },

      cities: [
        { en: "Chengdu", zh: "成都", bn: "চেংদু" },
        { en: "Leshan", zh: "乐山", bn: "লেশান" },
        { en: "Mianyang", zh: "绵阳", bn: "মিয়ানইয়াং" }
      ],

      places: [
        {
          id: "leshan-giant-buddha",
          name: {
            en: "Leshan Giant Buddha",
            zh: "乐山大佛",
            bn: "লেশান জায়ান্ট বুদ্ধ"
          },
          category: "history",
          city: "Leshan",
          description: {
            en: "Monumental Buddha carved into a cliff overlooking the confluence of three rivers.",
            zh: "位于三江汇流处山崖上的大型佛像。",
            bn: "তিন নদীর মিলনস্থলের কাছে পাহাড়ের গায়ে খোদাই করা বিশাল বুদ্ধমূর্তি।"
          },
          unesco: true,
          source: "https://whc.unesco.org/en/list/779/"
        },
        {
          id: "mount-emei",
          name: {
            en: "Mount Emei",
            zh: "峨眉山",
            bn: "এমেই পর্বত"
          },
          category: "nature",
          city: "Emeishan",
          description: {
            en: "Sacred Buddhist mountain known for its temples, natural scenery and biodiversity.",
            zh: "以佛教寺院、自然风光和丰富生物多样性闻名的名山。",
            bn: "বৌদ্ধ মন্দির, প্রাকৃতিক দৃশ্য ও জীববৈচিত্র্যের জন্য পরিচিত পবিত্র পর্বত।"
          },
          unesco: true,
          source: "https://whc.unesco.org/en/list/779/"
        },
        {
          id: "jiuzhaigou",
          name: {
            en: "Jiuzhaigou Valley",
            zh: "九寨沟",
            bn: "জিউজাইগৌ উপত্যকা"
          },
          category: "nature",
          city: "Aba Prefecture",
          description: {
            en: "Mountain valley celebrated for colorful lakes, waterfalls and forest landscapes.",
            zh: "以彩色湖泊、瀑布和森林景观闻名的山谷。",
            bn: "রঙিন হ্রদ, জলপ্রপাত ও বনভূমির জন্য বিখ্যাত পাহাড়ি উপত্যকা।"
          },
          unesco: true,
          source: "https://whc.unesco.org/en/list/637/"
        }
      ],

      foods: [
        {
          id: "sichuan-hotpot",
          name: {
            en: "Sichuan Hot Pot",
            zh: "四川火锅",
            bn: "সিচুয়ান হটপট"
          },
          description: {
            en: "Communal hot pot known for spicy broths and Sichuan pepper.",
            zh: "以麻辣汤底和花椒风味著称的火锅。",
            bn: "ঝাল স্যুপ ও সিচুয়ান মরিচের স্বাদের জন্য পরিচিত হটপট।"
          }
        },
        {
          id: "mapo-tofu",
          name: {
            en: "Mapo Tofu",
            zh: "麻婆豆腐",
            bn: "মাপো টোফু"
          },
          description: {
            en: "Tofu dish commonly prepared with chili bean paste and Sichuan pepper.",
            zh: "通常使用豆瓣酱和花椒烹制的豆腐菜肴。",
            bn: "চিলি বিন পেস্ট ও সিচুয়ান মরিচ দিয়ে তৈরি টোফুর জনপ্রিয় পদ।"
          }
        }
      ]
    },

    // ======================================
    // YUNNAN
    // ======================================

    yunnan: {
      id: "yunnan",

      description: {
        en: "Explore Yunnan's historic towns, dramatic landscapes, diverse local cultures and regional cuisine.",
        zh: "探索云南的历史古镇、壮丽风景、多元地方文化和特色美食。",
        bn: "ইউনানের ঐতিহাসিক শহর, সুন্দর প্রাকৃতিক দৃশ্য, বৈচিত্র্যময় সংস্কৃতি ও স্থানীয় খাবার আবিষ্কার করুন।"
      },

      cities: [
        { en: "Kunming", zh: "昆明", bn: "কুনমিং" },
        { en: "Dali", zh: "大理", bn: "দালি" },
        { en: "Lijiang", zh: "丽江", bn: "লিজিয়াং" }
      ],

      places: [
        {
          id: "lijiang-old-town",
          name: {
            en: "Old Town of Lijiang",
            zh: "丽江古城",
            bn: "লিজিয়াং প্রাচীন শহর"
          },
          category: "history",
          city: "Lijiang",
          description: {
            en: "Historic town known for traditional architecture, waterways and Naxi cultural heritage.",
            zh: "以传统建筑、水系和纳西族文化遗产闻名的古城。",
            bn: "ঐতিহ্যবাহী স্থাপত্য, জলপথ এবং নাশি সংস্কৃতির জন্য পরিচিত প্রাচীন শহর।"
          },
          unesco: true,
          source: "https://whc.unesco.org/en/list/811/"
        },
        {
          id: "stone-forest",
          name: {
            en: "Stone Forest",
            zh: "石林",
            bn: "স্টোন ফরেস্ট"
          },
          category: "nature",
          city: "Shilin, Kunming",
          description: {
            en: "Remarkable limestone karst landscape featuring towering stone formations.",
            zh: "以高耸石灰岩岩柱著称的喀斯特地貌。",
            bn: "উঁচু চুনাপাথরের শিলাস্তম্ভের জন্য বিখ্যাত কার্স্ট ভূপ্রকৃতি।"
          },
          unesco: true,
          source: "https://whc.unesco.org/en/list/1248/"
        },
        {
          id: "dali-old-town",
          name: {
            en: "Dali Old Town",
            zh: "大理古城",
            bn: "দালি প্রাচীন শহর"
          },
          category: "culture",
          city: "Dali",
          description: {
            en: "Historic town near Erhai Lake and the Cangshan Mountains, associated with Bai culture.",
            zh: "位于洱海与苍山附近、具有白族文化特色的历史古城。",
            bn: "এরহাই হ্রদ ও ছাংশান পর্বতের কাছে বাই সংস্কৃতির সঙ্গে সম্পর্কিত ঐতিহাসিক শহর।"
          },
          unesco: false,
          source: null
        }
      ],

      foods: [
        {
          id: "crossing-bridge-noodles",
          name: {
            en: "Crossing-the-Bridge Noodles",
            zh: "过桥米线",
            bn: "ক্রসিং দ্য ব্রিজ নুডলস"
          },
          description: {
            en: "Yunnan rice noodle specialty served with hot broth and separate ingredients.",
            zh: "云南特色米线，通常搭配热汤和多种配料。",
            bn: "গরম স্যুপ ও আলাদা উপকরণের সঙ্গে পরিবেশিত ইউনানের জনপ্রিয় রাইস নুডলস।"
          }
        },
        {
          id: "erkuai",
          name: {
            en: "Erkuai",
            zh: "饵块",
            bn: "এরকুয়াই"
          },
          description: {
            en: "Traditional Yunnan food made from compressed rice, often grilled or stir-fried.",
            zh: "以米制成的云南传统食品，常见烤制或炒制做法。",
            bn: "চাপ দিয়ে তৈরি চালের ঐতিহ্যবাহী খাবার, সাধারণত গ্রিল বা ভেজে খাওয়া হয়।"
          }
        }
      ]
    }
  };

  // ----------------------------------------
  // Helper functions
  // ----------------------------------------

  function getDestination(regionId) {
    return DESTINATIONS[regionId] || null;
  }

  function getLocalizedText(value, language = "en") {
    if (!value) return "";

    if (typeof value === "string") return value;

    return value[language] || value.en || "";
  }

  function getAllPlaces() {
    return Object.values(DESTINATIONS)
      .flatMap(region =>
        region.places.map(place => ({
          ...place,
          regionId: region.id
        }))
      );
  }

  function searchDestinations(query) {
    const search = query.trim().toLowerCase();

    if (!search) return getAllPlaces();

    return getAllPlaces().filter(place => {
      const names = Object.values(place.name);
      const descriptions = Object.values(place.description);

      return [
        ...names,
        ...descriptions,
        place.city,
        place.category
      ].some(value =>
        value.toLowerCase().includes(search)
      );
    });
  }

  // ----------------------------------------
  // Public data interface
  // ----------------------------------------

  window.ChinaSeenDestinations = {
    data: DESTINATIONS,
    getDestination,
    getLocalizedText,
    getAllPlaces,
    searchDestinations
  };

  console.log(
    "China Seen destination data loaded:",
    Object.keys(DESTINATIONS).length,
    "regions"
  );

})();
