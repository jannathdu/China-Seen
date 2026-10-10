
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
    },

    tianjin: {
      id: "tianjin",
    
      description: {
        en: "Explore Tianjin's historic neighborhoods, distinctive architecture, traditional crafts, and local cuisine.",
        zh: "探索天津的历史街区、特色建筑、传统工艺和地方美食。",
        bn: "তিয়ানজিনের ঐতিহাসিক এলাকা, অনন্য স্থাপত্য, ঐতিহ্যবাহী কারুশিল্প ও স্থানীয় খাবার আবিষ্কার করুন।"
      },
    
      cities: [
        {
          en: "Tianjin",
          zh: "天津",
          bn: "তিয়ানজিন"
        }
      ],
    
      places: [
        {
          id: "tianjin-ancient-culture-street",
          name: {
            en: "Ancient Culture Street",
            zh: "古文化街",
            bn: "প্রাচীন সংস্কৃতি সড়ক"
          },
          category: "culture",
          city: "Tianjin",
          description: {
            en: "A historic pedestrian street known for traditional shops, folk crafts, and Tianhou Temple.",
            zh: "以传统商铺、民间工艺和天后宫闻名的历史文化步行街。",
            bn: "ঐতিহ্যবাহী দোকান, লোকজ কারুশিল্প ও তিয়ানহৌ মন্দিরের জন্য পরিচিত ঐতিহাসিক পথচারী সড়ক।"
          },
          unesco: false
        },
    
        {
          id: "tianjin-five-great-avenues",
          name: {
            en: "Five Great Avenues",
            zh: "五大道",
            bn: "ফাইভ গ্রেট অ্যাভিনিউজ"
          },
          category: "history",
          city: "Tianjin",
          description: {
            en: "A historic neighborhood featuring garden villas and diverse architectural styles.",
            zh: "以花园洋房和多样建筑风格闻名的历史街区。",
            bn: "বাগানবাড়ি ও বিভিন্ন স্থাপত্যশৈলীর জন্য পরিচিত একটি ঐতিহাসিক এলাকা।"
          },
          unesco: false
        }
      ],
    
      foods: [
        {
          id: "tianjin-goubuli-baozi",
          name: {
            en: "Goubuli Baozi",
            zh: "狗不理包子",
            bn: "গৌবুলি বাওজি"
          },
          description: {
            en: "Traditional Tianjin steamed buns with savory fillings.",
            zh: "天津传统特色包子，以鲜香馅料为特色。",
            bn: "সুস্বাদু পুর দিয়ে তৈরি তিয়ানজিনের ঐতিহ্যবাহী স্টিমড বান।"
          }
        }
      ]
    },

    // Additional region guides: first-pass content; review translations and heritage metadata.
    'hebei': {
      "id": "hebei",
      "description": {
        "en": "Explore Hebei through Great Wall passes, imperial retreats and historic temples.",
        "zh": "探索河北的长城关隘、皇家避暑山庄和古寺。",
        "bn": "হেবেই অঞ্চলের মহাপ্রাচীরের দুর্গ, রাজকীয় উদ্যান ও প্রাচীন মন্দির ঘুরে দেখুন।"
      },
      "cities": [
        {
          "en": "Shijiazhuang",
          "zh": "石家庄",
          "bn": "শিজিয়াঝুয়াং"
        }
      ],
      "places": [
        {
          "id": "hebei-chengde-mountain-resort",
          "name": {
            "en": "Chengde Mountain Resort",
            "zh": "承德避暑山庄",
            "bn": "চেংদে মাউন্টেন রিসোর্ট"
          },
          "category": "history",
          "city": "Shijiazhuang",
          "description": {
            "en": "Chengde Mountain Resort: Qing imperial summer residence and landscaped gardens.",
            "zh": "承德避暑山庄：历史景点，值得了解其地方特色。",
            "bn": "চেংদে মাউন্টেন রিসোর্ট: হেবেই অঞ্চলের একটি উল্লেখযোগ্য ঐতিহাসিক দর্শনীয় স্থান।"
          },
          "unesco": true
        },
        {
          "id": "hebei-shanhaiguan-pass",
          "name": {
            "en": "Shanhaiguan Pass",
            "zh": "山海关",
            "bn": "শানহাইগুয়ান"
          },
          "category": "history",
          "city": "Shijiazhuang",
          "description": {
            "en": "Shanhaiguan Pass: historic Great Wall pass near the Bohai Sea.",
            "zh": "山海关：历史景点，值得了解其地方特色。",
            "bn": "শানহাইগুয়ান: হেবেই অঞ্চলের একটি উল্লেখযোগ্য ঐতিহাসিক দর্শনীয় স্থান।"
          },
          "unesco": false
        },
        {
          "id": "hebei-zhaozhou-bridge",
          "name": {
            "en": "Zhaozhou Bridge",
            "zh": "赵州桥",
            "bn": "ঝাওঝৌ সেতু"
          },
          "category": "history",
          "city": "Shijiazhuang",
          "description": {
            "en": "Zhaozhou Bridge: early stone segmental-arch bridge near Shijiazhuang.",
            "zh": "赵州桥：历史景点，值得了解其地方特色。",
            "bn": "ঝাওঝৌ সেতু: হেবেই অঞ্চলের একটি উল্লেখযোগ্য ঐতিহাসিক দর্শনীয় স্থান।"
          },
          "unesco": false
        }
      ],
      "foods": [
        {
          "id": "hebei-donkey-burger",
          "name": {
            "en": "Donkey Burger",
            "zh": "驴肉火烧",
            "bn": "গাধার মাংসের বান"
          },
          "description": {
            "en": "Donkey Burger: crispy flatbread filled with seasoned donkey meat.",
            "zh": "驴肉火烧：河北地区具有代表性的地方风味。",
            "bn": "গাধার মাংসের বান: হেবেই অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        },
        {
          "id": "hebei-xianghe-meat-pie",
          "name": {
            "en": "Xianghe Meat Pie",
            "zh": "香河肉饼",
            "bn": "শিয়াংহে মিট পাই"
          },
          "description": {
            "en": "Xianghe Meat Pie: thin-layered pan-fried meat pie.",
            "zh": "香河肉饼：河北地区具有代表性的地方风味。",
            "bn": "শিয়াংহে মিট পাই: হেবেই অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        }
      ]
    },
    'shanxi': {
      "id": "shanxi",
      "description": {
        "en": "Explore Shanxi through ancient architecture, merchant courtyards and mountain temples.",
        "zh": "探索山西的古建筑、晋商大院和山中古寺。",
        "bn": "শানসি অঞ্চলের প্রাচীন স্থাপত্য, ঐতিহাসিক আঙিনা ও পাহাড়ি মন্দির ঘুরে দেখুন।"
      },
      "cities": [
        {
          "en": "Taiyuan",
          "zh": "太原",
          "bn": "তাইইউয়ান"
        }
      ],
      "places": [
        {
          "id": "shanxi-pingyao-ancient-city",
          "name": {
            "en": "Pingyao Ancient City",
            "zh": "平遥古城",
            "bn": "পিংইয়াও প্রাচীন নগরী"
          },
          "category": "history",
          "city": "Taiyuan",
          "description": {
            "en": "Pingyao Ancient City: walled historic town famed for preserved Ming and Qing streets.",
            "zh": "平遥古城：历史景点，值得了解其地方特色。",
            "bn": "পিংইয়াও প্রাচীন নগরী: শানসি অঞ্চলের একটি উল্লেখযোগ্য ঐতিহাসিক দর্শনীয় স্থান।"
          },
          "unesco": true
        },
        {
          "id": "shanxi-yungang-grottoes",
          "name": {
            "en": "Yungang Grottoes",
            "zh": "云冈石窟",
            "bn": "ইউনগাং গুহামন্দির"
          },
          "category": "history",
          "city": "Taiyuan",
          "description": {
            "en": "Yungang Grottoes: monumental Buddhist cave sculptures near Datong.",
            "zh": "云冈石窟：历史景点，值得了解其地方特色。",
            "bn": "ইউনগাং গুহামন্দির: শানসি অঞ্চলের একটি উল্লেখযোগ্য ঐতিহাসিক দর্শনীয় স্থান।"
          },
          "unesco": true
        },
        {
          "id": "shanxi-hanging-temple",
          "name": {
            "en": "Hanging Temple",
            "zh": "悬空寺",
            "bn": "ঝুলন্ত মন্দির"
          },
          "category": "culture",
          "city": "Taiyuan",
          "description": {
            "en": "Hanging Temple: cliffside temple near Mount Heng.",
            "zh": "悬空寺：文化景点，值得了解其地方特色。",
            "bn": "ঝুলন্ত মন্দির: শানসি অঞ্চলের একটি উল্লেখযোগ্য সাংস্কৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        }
      ],
      "foods": [
        {
          "id": "shanxi-shanxi-knife-cut-noodles",
          "name": {
            "en": "Shanxi Knife-Cut Noodles",
            "zh": "山西刀削面",
            "bn": "শানসি নাইফ-কাট নুডলস"
          },
          "description": {
            "en": "Shanxi Knife-Cut Noodles: hand-shaved wheat noodles.",
            "zh": "山西刀削面：山西地区具有代表性的地方风味。",
            "bn": "শানসি নাইফ-কাট নুডলস: শানসি অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        },
        {
          "id": "shanxi-taigu-cake",
          "name": {
            "en": "Taigu Cake",
            "zh": "太谷饼",
            "bn": "তাইগু কেক"
          },
          "description": {
            "en": "Taigu Cake: traditional sweet baked pastry.",
            "zh": "太谷饼：山西地区具有代表性的地方风味。",
            "bn": "তাইগু কেক: শানসি অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        }
      ]
    },
    'inner-mongolia': {
      "id": "inner-mongolia",
      "description": {
        "en": "Explore Inner Mongolia through grasslands, desert landscapes and Mongolian traditions.",
        "zh": "探索内蒙古的草原、沙漠景观和蒙古族文化。",
        "bn": "ইনার মঙ্গোলিয়া অঞ্চলের তৃণভূমি, মরুভূমি ও মঙ্গোলীয় সংস্কৃতি ঘুরে দেখুন।"
      },
      "cities": [
        {
          "en": "Hohhot",
          "zh": "呼和浩特",
          "bn": "হোহহোট"
        }
      ],
      "places": [
        {
          "id": "inner-mongolia-hulunbuir-grassland",
          "name": {
            "en": "Hulunbuir Grassland",
            "zh": "呼伦贝尔草原",
            "bn": "হুলুনবুইর তৃণভূমি"
          },
          "category": "nature",
          "city": "Hohhot",
          "description": {
            "en": "Hulunbuir Grassland: expansive grassland in northeastern Inner Mongolia.",
            "zh": "呼伦贝尔草原：自然景点，值得了解其地方特色。",
            "bn": "হুলুনবুইর তৃণভূমি: ইনার মঙ্গোলিয়া অঞ্চলের একটি উল্লেখযোগ্য প্রাকৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        },
        {
          "id": "inner-mongolia-resonant-sand-gorge",
          "name": {
            "en": "Resonant Sand Gorge",
            "zh": "响沙湾",
            "bn": "শিয়াংশাওয়ান বালিয়াড়ি"
          },
          "category": "nature",
          "city": "Hohhot",
          "description": {
            "en": "Resonant Sand Gorge: desert dune scenic area near Ordos.",
            "zh": "响沙湾：自然景点，值得了解其地方特色。",
            "bn": "শিয়াংশাওয়ান বালিয়াড়ি: ইনার মঙ্গোলিয়া অঞ্চলের একটি উল্লেখযোগ্য প্রাকৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        },
        {
          "id": "inner-mongolia-dazhao-temple",
          "name": {
            "en": "Dazhao Temple",
            "zh": "大召寺",
            "bn": "দাঝাও মন্দির"
          },
          "category": "culture",
          "city": "Hohhot",
          "description": {
            "en": "Dazhao Temple: historic Tibetan Buddhist temple in Hohhot.",
            "zh": "大召寺：文化景点，值得了解其地方特色。",
            "bn": "দাঝাও মন্দির: ইনার মঙ্গোলিয়া অঞ্চলের একটি উল্লেখযোগ্য সাংস্কৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        }
      ],
      "foods": [
        {
          "id": "inner-mongolia-mongolian-boiled-mutton",
          "name": {
            "en": "Mongolian Boiled Mutton",
            "zh": "手把肉",
            "bn": "মঙ্গোলীয় সিদ্ধ মাটন"
          },
          "description": {
            "en": "Mongolian Boiled Mutton: traditional bone-in boiled lamb.",
            "zh": "手把肉：内蒙古地区具有代表性的地方风味。",
            "bn": "মঙ্গোলীয় সিদ্ধ মাটন: ইনার মঙ্গোলিয়া অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        },
        {
          "id": "inner-mongolia-milk-tea",
          "name": {
            "en": "Milk Tea",
            "zh": "蒙古奶茶",
            "bn": "মঙ্গোলীয় দুধ চা"
          },
          "description": {
            "en": "Milk Tea: salty milk tea served in Mongolian communities.",
            "zh": "蒙古奶茶：内蒙古地区具有代表性的地方风味。",
            "bn": "মঙ্গোলীয় দুধ চা: ইনার মঙ্গোলিয়া অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        }
      ]
    },
    'liaoning': {
      "id": "liaoning",
      "description": {
        "en": "Explore Liaoning through Qing-era palaces, coastline and northeastern heritage.",
        "zh": "探索辽宁的清代宫殿、海岸风光和东北文化。",
        "bn": "লিয়াওনিং অঞ্চলের ছিং যুগের প্রাসাদ, উপকূল ও উত্তর-পূর্ব ঐতিহ্য ঘুরে দেখুন।"
      },
      "cities": [
        {
          "en": "Shenyang",
          "zh": "沈阳",
          "bn": "শেনইয়াং"
        }
      ],
      "places": [
        {
          "id": "liaoning-shenyang-imperial-palace",
          "name": {
            "en": "Shenyang Imperial Palace",
            "zh": "沈阳故宫",
            "bn": "শেনইয়াং রাজপ্রাসাদ"
          },
          "category": "history",
          "city": "Shenyang",
          "description": {
            "en": "Shenyang Imperial Palace: early Qing imperial palace complex.",
            "zh": "沈阳故宫：历史景点，值得了解其地方特色。",
            "bn": "শেনইয়াং রাজপ্রাসাদ: লিয়াওনিং অঞ্চলের একটি উল্লেখযোগ্য ঐতিহাসিক দর্শনীয় স্থান।"
          },
          "unesco": true
        },
        {
          "id": "liaoning-tiger-beach-ocean-park",
          "name": {
            "en": "Tiger Beach Ocean Park",
            "zh": "老虎滩海洋公园",
            "bn": "টাইগার বিচ ওশান পার্ক"
          },
          "category": "nature",
          "city": "Shenyang",
          "description": {
            "en": "Tiger Beach Ocean Park: coastal marine park in Dalian.",
            "zh": "老虎滩海洋公园：自然景点，值得了解其地方特色。",
            "bn": "টাইগার বিচ ওশান পার্ক: লিয়াওনিং অঞ্চলের একটি উল্লেখযোগ্য প্রাকৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        },
        {
          "id": "liaoning-panjin-red-beach",
          "name": {
            "en": "Panjin Red Beach",
            "zh": "盘锦红海滩",
            "bn": "পানজিন রেড বিচ"
          },
          "category": "nature",
          "city": "Shenyang",
          "description": {
            "en": "Panjin Red Beach: seasonal red coastal wetland landscape.",
            "zh": "盘锦红海滩：自然景点，值得了解其地方特色。",
            "bn": "পানজিন রেড বিচ: লিয়াওনিং অঞ্চলের একটি উল্লেখযোগ্য প্রাকৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        }
      ],
      "foods": [
        {
          "id": "liaoning-lao-bian-dumplings",
          "name": {
            "en": "Lao Bian Dumplings",
            "zh": "老边饺子",
            "bn": "লাওবিয়ান ডাম্পলিং"
          },
          "description": {
            "en": "Lao Bian Dumplings: Shenyang-style filled dumplings.",
            "zh": "老边饺子：辽宁地区具有代表性的地方风味。",
            "bn": "লাওবিয়ান ডাম্পলিং: লিয়াওনিং অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        },
        {
          "id": "liaoning-dalian-seafood",
          "name": {
            "en": "Dalian Seafood",
            "zh": "大连海鲜",
            "bn": "দালিয়ান সামুদ্রিক খাবার"
          },
          "description": {
            "en": "Dalian Seafood: locally prepared coastal seafood dishes.",
            "zh": "大连海鲜：辽宁地区具有代表性的地方风味。",
            "bn": "দালিয়ান সামুদ্রিক খাবার: লিয়াওনিং অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        }
      ]
    },
    'jilin': {
      "id": "jilin",
      "description": {
        "en": "Explore Jilin through volcanic lakes, winter landscapes and Manchu heritage.",
        "zh": "探索吉林的火山湖泊、冬季景观和满族文化。",
        "bn": "জিলিন অঞ্চলের আগ্নেয় হ্রদ, শীতের দৃশ্য ও মানচু ঐতিহ্য ঘুরে দেখুন।"
      },
      "cities": [
        {
          "en": "Changchun",
          "zh": "长春",
          "bn": "চাংছুন"
        }
      ],
      "places": [
        {
          "id": "jilin-changbai-mountain",
          "name": {
            "en": "Changbai Mountain",
            "zh": "长白山",
            "bn": "চাংবাই পর্বত"
          },
          "category": "nature",
          "city": "Changchun",
          "description": {
            "en": "Changbai Mountain: mountain area known for Tianchi crater lake.",
            "zh": "长白山：自然景点，值得了解其地方特色。",
            "bn": "চাংবাই পর্বত: জিলিন অঞ্চলের একটি উল্লেখযোগ্য প্রাকৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        },
        {
          "id": "jilin-jingyuetan-national-forest-park",
          "name": {
            "en": "Jingyuetan National Forest Park",
            "zh": "净月潭国家森林公园",
            "bn": "জিংইউয়েতান বন উদ্যান"
          },
          "category": "nature",
          "city": "Changchun",
          "description": {
            "en": "Jingyuetan National Forest Park: forested lake park near Changchun.",
            "zh": "净月潭国家森林公园：自然景点，值得了解其地方特色。",
            "bn": "জিংইউয়েতান বন উদ্যান: জিলিন অঞ্চলের একটি উল্লেখযোগ্য প্রাকৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        },
        {
          "id": "jilin-museum-of-the-imperial-palace-of-manchukuo",
          "name": {
            "en": "Museum of the Imperial Palace of Manchukuo",
            "zh": "伪满皇宫博物院",
            "bn": "মানচুকুও প্রাসাদ জাদুঘর"
          },
          "category": "history",
          "city": "Changchun",
          "description": {
            "en": "Museum of the Imperial Palace of Manchukuo: museum interpreting the history of the former Manchukuo palace.",
            "zh": "伪满皇宫博物院：历史景点，值得了解其地方特色。",
            "bn": "মানচুকুও প্রাসাদ জাদুঘর: জিলিন অঞ্চলের একটি উল্লেখযোগ্য ঐতিহাসিক দর্শনীয় স্থান।"
          },
          "unesco": false
        }
      ],
      "foods": [
        {
          "id": "jilin-yanji-cold-noodles",
          "name": {
            "en": "Yanji Cold Noodles",
            "zh": "延吉冷面",
            "bn": "ইয়ানজি ঠান্ডা নুডলস"
          },
          "description": {
            "en": "Yanji Cold Noodles: chilled noodle dish associated with Korean-Chinese cuisine.",
            "zh": "延吉冷面：吉林地区具有代表性的地方风味。",
            "bn": "ইয়ানজি ঠান্ডা নুডলস: জিলিন অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        },
        {
          "id": "jilin-guobaorou",
          "name": {
            "en": "Guobaorou",
            "zh": "锅包肉",
            "bn": "গুওবাওরৌ"
          },
          "description": {
            "en": "Guobaorou: crispy sweet-and-sour pork.",
            "zh": "锅包肉：吉林地区具有代表性的地方风味。",
            "bn": "গুওবাওরৌ: জিলিন অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        }
      ]
    },
    'heilongjiang': {
      "id": "heilongjiang",
      "description": {
        "en": "Explore Heilongjiang through ice festivals, borderland forests and northern architecture.",
        "zh": "探索黑龙江的冰雪节庆、边境森林和北方建筑。",
        "bn": "হেইলংজিয়াং অঞ্চলের বরফ উৎসব, উত্তরাঞ্চলীয় বন ও স্থাপত্য ঘুরে দেখুন।"
      },
      "cities": [
        {
          "en": "Harbin",
          "zh": "哈尔滨",
          "bn": "হারবিন"
        }
      ],
      "places": [
        {
          "id": "heilongjiang-harbin-ice-and-snow-world",
          "name": {
            "en": "Harbin Ice and Snow World",
            "zh": "哈尔滨冰雪大世界",
            "bn": "হারবিন আইস অ্যান্ড স্নো ওয়ার্ল্ড"
          },
          "category": "culture",
          "city": "Harbin",
          "description": {
            "en": "Harbin Ice and Snow World: seasonal illuminated ice and snow sculpture park.",
            "zh": "哈尔滨冰雪大世界：文化景点，值得了解其地方特色。",
            "bn": "হারবিন আইস অ্যান্ড স্নো ওয়ার্ল্ড: হেইলংজিয়াং অঞ্চলের একটি উল্লেখযোগ্য সাংস্কৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        },
        {
          "id": "heilongjiang-saint-sophia-cathedral",
          "name": {
            "en": "Saint Sophia Cathedral",
            "zh": "圣索菲亚教堂",
            "bn": "সেন্ট সোফিয়া ক্যাথেড্রাল"
          },
          "category": "history",
          "city": "Harbin",
          "description": {
            "en": "Saint Sophia Cathedral: historic Byzantine-style building in Harbin.",
            "zh": "圣索菲亚教堂：历史景点，值得了解其地方特色。",
            "bn": "সেন্ট সোফিয়া ক্যাথেড্রাল: হেইলংজিয়াং অঞ্চলের একটি উল্লেখযোগ্য ঐতিহাসিক দর্শনীয় স্থান।"
          },
          "unesco": false
        },
        {
          "id": "heilongjiang-sun-island",
          "name": {
            "en": "Sun Island",
            "zh": "太阳岛",
            "bn": "সান আইল্যান্ড"
          },
          "category": "nature",
          "city": "Harbin",
          "description": {
            "en": "Sun Island: recreation and seasonal snow-sculpture area by the Songhua River.",
            "zh": "太阳岛：自然景点，值得了解其地方特色。",
            "bn": "সান আইল্যান্ড: হেইলংজিয়াং অঞ্চলের একটি উল্লেখযোগ্য প্রাকৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        }
      ],
      "foods": [
        {
          "id": "heilongjiang-harbin-red-sausage",
          "name": {
            "en": "Harbin Red Sausage",
            "zh": "哈尔滨红肠",
            "bn": "হারবিন রেড সসেজ"
          },
          "description": {
            "en": "Harbin Red Sausage: smoked local sausage.",
            "zh": "哈尔滨红肠：黑龙江地区具有代表性的地方风味。",
            "bn": "হারবিন রেড সসেজ: হেইলংজিয়াং অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        },
        {
          "id": "heilongjiang-daleba-bread",
          "name": {
            "en": "Daleba Bread",
            "zh": "大列巴",
            "bn": "দালিয়েবা রুটি"
          },
          "description": {
            "en": "Daleba Bread: large Russian-influenced loaf.",
            "zh": "大列巴：黑龙江地区具有代表性的地方风味。",
            "bn": "দালিয়েবা রুটি: হেইলংজিয়াং অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        }
      ]
    },
    'shanghai': {
      "id": "shanghai",
      "description": {
        "en": "Explore Shanghai through riverside skylines, historic lanes and modern art.",
        "zh": "探索上海的滨江天际线、历史街巷和现代艺术。",
        "bn": "সাংহাই অঞ্চলের নদীতীরের শহর, ঐতিহাসিক গলি ও আধুনিক শিল্প ঘুরে দেখুন।"
      },
      "cities": [
        {
          "en": "Shanghai",
          "zh": "上海",
          "bn": "সাংহাই"
        }
      ],
      "places": [
        {
          "id": "shanghai-the-bund",
          "name": {
            "en": "The Bund",
            "zh": "外滩",
            "bn": "দ্য বান্ড"
          },
          "category": "history",
          "city": "Shanghai",
          "description": {
            "en": "The Bund: waterfront promenade with landmark historic buildings.",
            "zh": "外滩：历史景点，值得了解其地方特色。",
            "bn": "দ্য বান্ড: সাংহাই অঞ্চলের একটি উল্লেখযোগ্য ঐতিহাসিক দর্শনীয় স্থান।"
          },
          "unesco": false
        },
        {
          "id": "shanghai-yu-garden",
          "name": {
            "en": "Yu Garden",
            "zh": "豫园",
            "bn": "ইউ গার্ডেন"
          },
          "category": "culture",
          "city": "Shanghai",
          "description": {
            "en": "Yu Garden: classical Chinese garden in the old city.",
            "zh": "豫园：文化景点，值得了解其地方特色。",
            "bn": "ইউ গার্ডেন: সাংহাই অঞ্চলের একটি উল্লেখযোগ্য সাংস্কৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        },
        {
          "id": "shanghai-shanghai-museum",
          "name": {
            "en": "Shanghai Museum",
            "zh": "上海博物馆",
            "bn": "সাংহাই জাদুঘর"
          },
          "category": "culture",
          "city": "Shanghai",
          "description": {
            "en": "Shanghai Museum: major museum of Chinese art and historical collections.",
            "zh": "上海博物馆：文化景点，值得了解其地方特色。",
            "bn": "সাংহাই জাদুঘর: সাংহাই অঞ্চলের একটি উল্লেখযোগ্য সাংস্কৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        }
      ],
      "foods": [
        {
          "id": "shanghai-xiaolongbao",
          "name": {
            "en": "Xiaolongbao",
            "zh": "小笼包",
            "bn": "শিয়াওলংবাও"
          },
          "description": {
            "en": "Xiaolongbao: steamed soup dumplings.",
            "zh": "小笼包：上海地区具有代表性的地方风味。",
            "bn": "শিয়াওলংবাও: সাংহাই অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        },
        {
          "id": "shanghai-shengjianbao",
          "name": {
            "en": "Shengjianbao",
            "zh": "生煎包",
            "bn": "শেংজিয়ানবাও"
          },
          "description": {
            "en": "Shengjianbao: pan-fried soup buns.",
            "zh": "生煎包：上海地区具有代表性的地方风味。",
            "bn": "শেংজিয়ানবাও: সাংহাই অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        }
      ]
    },
    'jiangsu': {
      "id": "jiangsu",
      "description": {
        "en": "Explore Jiangsu through classical gardens, canals and historical capitals.",
        "zh": "探索江苏的古典园林、运河和历史古都。",
        "bn": "জিয়াংসু অঞ্চলের ধ্রুপদি উদ্যান, খাল ও ঐতিহাসিক রাজধানী ঘুরে দেখুন।"
      },
      "cities": [
        {
          "en": "Nanjing",
          "zh": "南京",
          "bn": "নানজিং"
        }
      ],
      "places": [
        {
          "id": "jiangsu-humble-administrator-s-garden",
          "name": {
            "en": "Humble Administrator’s Garden",
            "zh": "拙政园",
            "bn": "হাম্বল অ্যাডমিনিস্ট্রেটরস গার্ডেন"
          },
          "category": "culture",
          "city": "Nanjing",
          "description": {
            "en": "Humble Administrator’s Garden: celebrated classical garden in Suzhou.",
            "zh": "拙政园：文化景点，值得了解其地方特色。",
            "bn": "হাম্বল অ্যাডমিনিস্ট্রেটরস গার্ডেন: জিয়াংসু অঞ্চলের একটি উল্লেখযোগ্য সাংস্কৃতিক দর্শনীয় স্থান।"
          },
          "unesco": true
        },
        {
          "id": "jiangsu-sun-yat-sen-mausoleum",
          "name": {
            "en": "Sun Yat-sen Mausoleum",
            "zh": "中山陵",
            "bn": "সান ইয়াত-সেন সমাধি"
          },
          "category": "history",
          "city": "Nanjing",
          "description": {
            "en": "Sun Yat-sen Mausoleum: memorial mausoleum on Nanjing’s Purple Mountain.",
            "zh": "中山陵：历史景点，值得了解其地方特色。",
            "bn": "সান ইয়াত-সেন সমাধি: জিয়াংসু অঞ্চলের একটি উল্লেখযোগ্য ঐতিহাসিক দর্শনীয় স্থান।"
          },
          "unesco": false
        },
        {
          "id": "jiangsu-slender-west-lake",
          "name": {
            "en": "Slender West Lake",
            "zh": "瘦西湖",
            "bn": "স্লেন্ডার ওয়েস্ট লেক"
          },
          "category": "nature",
          "city": "Nanjing",
          "description": {
            "en": "Slender West Lake: landscaped lake and garden area in Yangzhou.",
            "zh": "瘦西湖：自然景点，值得了解其地方特色。",
            "bn": "স্লেন্ডার ওয়েস্ট লেক: জিয়াংসু অঞ্চলের একটি উল্লেখযোগ্য প্রাকৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        }
      ],
      "foods": [
        {
          "id": "jiangsu-nanjing-salted-duck",
          "name": {
            "en": "Nanjing Salted Duck",
            "zh": "南京盐水鸭",
            "bn": "নানজিং সল্টেড ডাক"
          },
          "description": {
            "en": "Nanjing Salted Duck: salt-cured duck specialty.",
            "zh": "南京盐水鸭：江苏地区具有代表性的地方风味。",
            "bn": "নানজিং সল্টেড ডাক: জিয়াংসু অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        },
        {
          "id": "jiangsu-yangzhou-fried-rice",
          "name": {
            "en": "Yangzhou Fried Rice",
            "zh": "扬州炒饭",
            "bn": "ইয়াংঝৌ ফ্রাইড রাইস"
          },
          "description": {
            "en": "Yangzhou Fried Rice: stir-fried rice dish.",
            "zh": "扬州炒饭：江苏地区具有代表性的地方风味。",
            "bn": "ইয়াংঝৌ ফ্রাইড রাইস: জিয়াংসু অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        }
      ]
    },
    'zhejiang': {
      "id": "zhejiang",
      "description": {
        "en": "Explore Zhejiang through lakeside gardens, tea landscapes and water towns.",
        "zh": "探索浙江的湖滨园林、茶乡风光和江南水乡。",
        "bn": "চেচিয়াং অঞ্চলের হ্রদতীরের উদ্যান, চা-বাগান ও জলনগরী ঘুরে দেখুন।"
      },
      "cities": [
        {
          "en": "Hangzhou",
          "zh": "杭州",
          "bn": "হাংঝৌ"
        }
      ],
      "places": [
        {
          "id": "zhejiang-west-lake",
          "name": {
            "en": "West Lake",
            "zh": "西湖",
            "bn": "ওয়েস্ট লেক"
          },
          "category": "nature",
          "city": "Hangzhou",
          "description": {
            "en": "West Lake: scenic cultural lake in Hangzhou.",
            "zh": "西湖：自然景点，值得了解其地方特色。",
            "bn": "ওয়েস্ট লেক: চেচিয়াং অঞ্চলের একটি উল্লেখযোগ্য প্রাকৃতিক দর্শনীয় স্থান।"
          },
          "unesco": true
        },
        {
          "id": "zhejiang-wuzhen-water-town",
          "name": {
            "en": "Wuzhen Water Town",
            "zh": "乌镇",
            "bn": "উঝেন জলনগরী"
          },
          "category": "culture",
          "city": "Hangzhou",
          "description": {
            "en": "Wuzhen Water Town: historic canal town with bridges and waterways.",
            "zh": "乌镇：文化景点，值得了解其地方特色。",
            "bn": "উঝেন জলনগরী: চেচিয়াং অঞ্চলের একটি উল্লেখযোগ্য সাংস্কৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        },
        {
          "id": "zhejiang-lingyin-temple",
          "name": {
            "en": "Lingyin Temple",
            "zh": "灵隐寺",
            "bn": "লিংইন মন্দির"
          },
          "category": "culture",
          "city": "Hangzhou",
          "description": {
            "en": "Lingyin Temple: major Buddhist temple near Hangzhou.",
            "zh": "灵隐寺：文化景点，值得了解其地方特色。",
            "bn": "লিংইন মন্দির: চেচিয়াং অঞ্চলের একটি উল্লেখযোগ্য সাংস্কৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        }
      ],
      "foods": [
        {
          "id": "zhejiang-dongpo-pork",
          "name": {
            "en": "Dongpo Pork",
            "zh": "东坡肉",
            "bn": "ডংপো পোর্ক"
          },
          "description": {
            "en": "Dongpo Pork: slow-braised pork belly.",
            "zh": "东坡肉：浙江地区具有代表性的地方风味。",
            "bn": "ডংপো পোর্ক: চেচিয়াং অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        },
        {
          "id": "zhejiang-longjing-shrimp",
          "name": {
            "en": "Longjing Shrimp",
            "zh": "龙井虾仁",
            "bn": "লংজিং চিংড়ি"
          },
          "description": {
            "en": "Longjing Shrimp: shrimp prepared with Longjing tea.",
            "zh": "龙井虾仁：浙江地区具有代表性的地方风味。",
            "bn": "লংজিং চিংড়ি: চেচিয়াং অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        }
      ]
    },
    'anhui': {
      "id": "anhui",
      "description": {
        "en": "Explore Anhui through yellow mountains and white-walled Huizhou villages.",
        "zh": "探索安徽的黄山奇峰和徽派古村。",
        "bn": "আনহুই অঞ্চলের হুয়াংশানের পাহাড় ও হুইঝৌ গ্রামের স্থাপত্য ঘুরে দেখুন।"
      },
      "cities": [
        {
          "en": "Hefei",
          "zh": "合肥",
          "bn": "হেফেই"
        }
      ],
      "places": [
        {
          "id": "anhui-huangshan-mountain",
          "name": {
            "en": "Huangshan Mountain",
            "zh": "黄山",
            "bn": "হুয়াংশান পর্বত"
          },
          "category": "nature",
          "city": "Hefei",
          "description": {
            "en": "Huangshan Mountain: granite peaks and cloud-sea scenery.",
            "zh": "黄山：自然景点，值得了解其地方特色。",
            "bn": "হুয়াংশান পর্বত: আনহুই অঞ্চলের একটি উল্লেখযোগ্য প্রাকৃতিক দর্শনীয় স্থান।"
          },
          "unesco": true
        },
        {
          "id": "anhui-hongcun-village",
          "name": {
            "en": "Hongcun Village",
            "zh": "宏村",
            "bn": "হংছুন গ্রাম"
          },
          "category": "culture",
          "city": "Hefei",
          "description": {
            "en": "Hongcun Village: historic Huizhou village with waterways.",
            "zh": "宏村：文化景点，值得了解其地方特色。",
            "bn": "হংছুন গ্রাম: আনহুই অঞ্চলের একটি উল্লেখযোগ্য সাংস্কৃতিক দর্শনীয় স্থান।"
          },
          "unesco": true
        },
        {
          "id": "anhui-xidi-village",
          "name": {
            "en": "Xidi Village",
            "zh": "西递",
            "bn": "শিদি গ্রাম"
          },
          "category": "history",
          "city": "Hefei",
          "description": {
            "en": "Xidi Village: traditional village with preserved Huizhou residences.",
            "zh": "西递：历史景点，值得了解其地方特色。",
            "bn": "শিদি গ্রাম: আনহুই অঞ্চলের একটি উল্লেখযোগ্য ঐতিহাসিক দর্শনীয় স্থান।"
          },
          "unesco": true
        }
      ],
      "foods": [
        {
          "id": "anhui-stinky-mandarin-fish",
          "name": {
            "en": "Stinky Mandarin Fish",
            "zh": "臭鳜鱼",
            "bn": "চৌ গুইইউ মাছ"
          },
          "description": {
            "en": "Stinky Mandarin Fish: fermented mandarin fish dish.",
            "zh": "臭鳜鱼：安徽地区具有代表性的地方风味。",
            "bn": "চৌ গুইইউ মাছ: আনহুই অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        },
        {
          "id": "anhui-huangshan-shaobing",
          "name": {
            "en": "Huangshan Shaobing",
            "zh": "黄山烧饼",
            "bn": "হুয়াংশান শাওবিং"
          },
          "description": {
            "en": "Huangshan Shaobing: crisp filled baked flatbread.",
            "zh": "黄山烧饼：安徽地区具有代表性的地方风味。",
            "bn": "হুয়াংশান শাওবিং: আনহুই অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        }
      ]
    },
    'fujian': {
      "id": "fujian",
      "description": {
        "en": "Explore Fujian through coastal heritage, earthen dwellings and island scenery.",
        "zh": "探索福建的滨海文化、土楼民居和海岛风光。",
        "bn": "ফুচিয়েন অঞ্চলের উপকূলীয় ঐতিহ্য, তুলৌ বাড়ি ও দ্বীপের দৃশ্য ঘুরে দেখুন।"
      },
      "cities": [
        {
          "en": "Fuzhou",
          "zh": "福州",
          "bn": "ফুঝৌ"
        }
      ],
      "places": [
        {
          "id": "fujian-fujian-tulou",
          "name": {
            "en": "Fujian Tulou",
            "zh": "福建土楼",
            "bn": "ফুজিয়ান তুলৌ"
          },
          "category": "history",
          "city": "Fuzhou",
          "description": {
            "en": "Fujian Tulou: communal earthen residential complexes.",
            "zh": "福建土楼：历史景点，值得了解其地方特色。",
            "bn": "ফুজিয়ান তুলৌ: ফুচিয়েন অঞ্চলের একটি উল্লেখযোগ্য ঐতিহাসিক দর্শনীয় স্থান।"
          },
          "unesco": true
        },
        {
          "id": "fujian-gulangyu-island",
          "name": {
            "en": "Gulangyu Island",
            "zh": "鼓浪屿",
            "bn": "গুলাংইউ দ্বীপ"
          },
          "category": "culture",
          "city": "Fuzhou",
          "description": {
            "en": "Gulangyu Island: historic island with varied architecture near Xiamen.",
            "zh": "鼓浪屿：文化景点，值得了解其地方特色。",
            "bn": "গুলাংইউ দ্বীপ: ফুচিয়েন অঞ্চলের একটি উল্লেখযোগ্য সাংস্কৃতিক দর্শনীয় স্থান।"
          },
          "unesco": true
        },
        {
          "id": "fujian-three-lanes-and-seven-alleys",
          "name": {
            "en": "Three Lanes and Seven Alleys",
            "zh": "三坊七巷",
            "bn": "থ্রি লেনস অ্যান্ড সেভেন অ্যালিজ"
          },
          "category": "history",
          "city": "Fuzhou",
          "description": {
            "en": "Three Lanes and Seven Alleys: preserved traditional neighborhood in Fuzhou.",
            "zh": "三坊七巷：历史景点，值得了解其地方特色。",
            "bn": "থ্রি লেনস অ্যান্ড সেভেন অ্যালিজ: ফুচিয়েন অঞ্চলের একটি উল্লেখযোগ্য ঐতিহাসিক দর্শনীয় স্থান।"
          },
          "unesco": false
        }
      ],
      "foods": [
        {
          "id": "fujian-buddha-jumps-over-the-wall",
          "name": {
            "en": "Buddha Jumps Over the Wall",
            "zh": "佛跳墙",
            "bn": "ফো তিয়াও ছিয়াং"
          },
          "description": {
            "en": "Buddha Jumps Over the Wall: rich Fujian-style soup.",
            "zh": "佛跳墙：福建地区具有代表性的地方风味。",
            "bn": "ফো তিয়াও ছিয়াং: ফুচিয়েন অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        },
        {
          "id": "fujian-shaxian-snacks",
          "name": {
            "en": "Shaxian Snacks",
            "zh": "沙县小吃",
            "bn": "শাশিয়ান স্ন্যাকস"
          },
          "description": {
            "en": "Shaxian Snacks: regional assortment of noodles and dumplings.",
            "zh": "沙县小吃：福建地区具有代表性的地方风味。",
            "bn": "শাশিয়ান স্ন্যাকস: ফুচিয়েন অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        }
      ]
    },
    'jiangxi': {
      "id": "jiangxi",
      "description": {
        "en": "Explore Jiangxi through ceramic craftsmanship, mountain scenery and historic pavilions.",
        "zh": "探索江西的陶瓷工艺、山岳风光和历史名楼。",
        "bn": "জিয়াংসি অঞ্চলের সিরামিক শিল্প, পাহাড় ও ঐতিহাসিক স্থাপত্য ঘুরে দেখুন।"
      },
      "cities": [
        {
          "en": "Nanchang",
          "zh": "南昌",
          "bn": "নানছাং"
        }
      ],
      "places": [
        {
          "id": "jiangxi-mount-lushan",
          "name": {
            "en": "Mount Lushan",
            "zh": "庐山",
            "bn": "লুশান পর্বত"
          },
          "category": "nature",
          "city": "Nanchang",
          "description": {
            "en": "Mount Lushan: mountain landscapes and cultural sites.",
            "zh": "庐山：自然景点，值得了解其地方特色。",
            "bn": "লুশান পর্বত: জিয়াংসি অঞ্চলের একটি উল্লেখযোগ্য প্রাকৃতিক দর্শনীয় স্থান।"
          },
          "unesco": true
        },
        {
          "id": "jiangxi-jingdezhen-ceramic-museums",
          "name": {
            "en": "Jingdezhen Ceramic Museums",
            "zh": "景德镇陶瓷博物馆",
            "bn": "জিংদেঝেন সিরামিক জাদুঘর"
          },
          "category": "culture",
          "city": "Nanchang",
          "description": {
            "en": "Jingdezhen Ceramic Museums: museums documenting porcelain production.",
            "zh": "景德镇陶瓷博物馆：文化景点，值得了解其地方特色。",
            "bn": "জিংদেঝেন সিরামিক জাদুঘর: জিয়াংসি অঞ্চলের একটি উল্লেখযোগ্য সাংস্কৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        },
        {
          "id": "jiangxi-tengwang-pavilion",
          "name": {
            "en": "Tengwang Pavilion",
            "zh": "滕王阁",
            "bn": "তেংওয়াং প্যাভিলিয়ন"
          },
          "category": "history",
          "city": "Nanchang",
          "description": {
            "en": "Tengwang Pavilion: landmark pavilion on the Gan River.",
            "zh": "滕王阁：历史景点，值得了解其地方特色。",
            "bn": "তেংওয়াং প্যাভিলিয়ন: জিয়াংসি অঞ্চলের একটি উল্লেখযোগ্য ঐতিহাসিক দর্শনীয় স্থান।"
          },
          "unesco": false
        }
      ],
      "foods": [
        {
          "id": "jiangxi-nanchang-rice-noodles",
          "name": {
            "en": "Nanchang Rice Noodles",
            "zh": "南昌拌粉",
            "bn": "নানছাং রাইস নুডলস"
          },
          "description": {
            "en": "Nanchang Rice Noodles: seasoned rice noodles.",
            "zh": "南昌拌粉：江西地区具有代表性的地方风味。",
            "bn": "নানছাং রাইস নুডলস: জিয়াংসি অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        },
        {
          "id": "jiangxi-clay-pot-soup",
          "name": {
            "en": "Clay Pot Soup",
            "zh": "瓦罐汤",
            "bn": "মাটির পাত্রের স্যুপ"
          },
          "description": {
            "en": "Clay Pot Soup: slow-cooked soup in earthenware.",
            "zh": "瓦罐汤：江西地区具有代表性的地方风味。",
            "bn": "মাটির পাত্রের স্যুপ: জিয়াংসি অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        }
      ]
    },
    'shandong': {
      "id": "shandong",
      "description": {
        "en": "Explore Shandong through sacred mountains, Confucian heritage and coast.",
        "zh": "探索山东的名山、儒家文化和海滨城市。",
        "bn": "শানডং অঞ্চলের পবিত্র পাহাড়, কনফুসীয় ঐতিহ্য ও উপকূল ঘুরে দেখুন।"
      },
      "cities": [
        {
          "en": "Jinan",
          "zh": "济南",
          "bn": "জিনান"
        }
      ],
      "places": [
        {
          "id": "shandong-mount-tai",
          "name": {
            "en": "Mount Tai",
            "zh": "泰山",
            "bn": "তাই পর্বত"
          },
          "category": "nature",
          "city": "Jinan",
          "description": {
            "en": "Mount Tai: sacred mountain with ancient pilgrimage routes.",
            "zh": "泰山：自然景点，值得了解其地方特色。",
            "bn": "তাই পর্বত: শানডং অঞ্চলের একটি উল্লেখযোগ্য প্রাকৃতিক দর্শনীয় স্থান।"
          },
          "unesco": true
        },
        {
          "id": "shandong-confucius-temple-in-qufu",
          "name": {
            "en": "Confucius Temple in Qufu",
            "zh": "曲阜孔庙",
            "bn": "ছুফু কনফুসিয়াস মন্দির"
          },
          "category": "history",
          "city": "Jinan",
          "description": {
            "en": "Confucius Temple in Qufu: historic temple honoring Confucius.",
            "zh": "曲阜孔庙：历史景点，值得了解其地方特色。",
            "bn": "ছুফু কনফুসিয়াস মন্দির: শানডং অঞ্চলের একটি উল্লেখযোগ্য ঐতিহাসিক দর্শনীয় স্থান।"
          },
          "unesco": true
        },
        {
          "id": "shandong-zhanqiao-pier",
          "name": {
            "en": "Zhanqiao Pier",
            "zh": "栈桥",
            "bn": "ঝানছিয়াও পিয়ার"
          },
          "category": "culture",
          "city": "Jinan",
          "description": {
            "en": "Zhanqiao Pier: landmark coastal pier in Qingdao.",
            "zh": "栈桥：文化景点，值得了解其地方特色。",
            "bn": "ঝানছিয়াও পিয়ার: শানডং অঞ্চলের একটি উল্লেখযোগ্য সাংস্কৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        }
      ],
      "foods": [
        {
          "id": "shandong-dezhou-braised-chicken",
          "name": {
            "en": "Dezhou Braised Chicken",
            "zh": "德州扒鸡",
            "bn": "দেঝৌ ব্রেইজড চিকেন"
          },
          "description": {
            "en": "Dezhou Braised Chicken: aromatically braised chicken.",
            "zh": "德州扒鸡：山东地区具有代表性的地方风味。",
            "bn": "দেঝৌ ব্রেইজড চিকেন: শানডং অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        },
        {
          "id": "shandong-jianbing",
          "name": {
            "en": "Jianbing",
            "zh": "煎饼",
            "bn": "জিয়ানবিং"
          },
          "description": {
            "en": "Jianbing: thin savory pancake with fillings.",
            "zh": "煎饼：山东地区具有代表性的地方风味。",
            "bn": "জিয়ানবিং: শানডং অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        }
      ]
    },
    'henan': {
      "id": "henan",
      "description": {
        "en": "Explore Henan through ancient capitals, Buddhist temples and historic grottoes.",
        "zh": "探索河南的古都遗迹、佛教寺院和石窟。",
        "bn": "হেনান অঞ্চলের প্রাচীন রাজধানী, বৌদ্ধ মন্দির ও গুহাশিল্প ঘুরে দেখুন।"
      },
      "cities": [
        {
          "en": "Zhengzhou",
          "zh": "郑州",
          "bn": "ঝেংঝৌ"
        }
      ],
      "places": [
        {
          "id": "henan-longmen-grottoes",
          "name": {
            "en": "Longmen Grottoes",
            "zh": "龙门石窟",
            "bn": "লংমেন গুহামন্দির"
          },
          "category": "history",
          "city": "Zhengzhou",
          "description": {
            "en": "Longmen Grottoes: rock-cut Buddhist sculptures near Luoyang.",
            "zh": "龙门石窟：历史景点，值得了解其地方特色。",
            "bn": "লংমেন গুহামন্দির: হেনান অঞ্চলের একটি উল্লেখযোগ্য ঐতিহাসিক দর্শনীয় স্থান।"
          },
          "unesco": true
        },
        {
          "id": "henan-shaolin-temple",
          "name": {
            "en": "Shaolin Temple",
            "zh": "少林寺",
            "bn": "শাওলিন মন্দির"
          },
          "category": "culture",
          "city": "Zhengzhou",
          "description": {
            "en": "Shaolin Temple: Buddhist monastery associated with martial arts.",
            "zh": "少林寺：文化景点，值得了解其地方特色。",
            "bn": "শাওলিন মন্দির: হেনান অঞ্চলের একটি উল্লেখযোগ্য সাংস্কৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        },
        {
          "id": "henan-kaifeng-millennium-city-park",
          "name": {
            "en": "Kaifeng Millennium City Park",
            "zh": "清明上河园",
            "bn": "ছিংমিং রিভারসাইড পার্ক"
          },
          "category": "culture",
          "city": "Zhengzhou",
          "description": {
            "en": "Kaifeng Millennium City Park: historical-themed cultural park in Kaifeng.",
            "zh": "清明上河园：文化景点，值得了解其地方特色。",
            "bn": "ছিংমিং রিভারসাইড পার্ক: হেনান অঞ্চলের একটি উল্লেখযোগ্য সাংস্কৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        }
      ],
      "foods": [
        {
          "id": "henan-hulatang",
          "name": {
            "en": "Hulatang",
            "zh": "胡辣汤",
            "bn": "হুলাতাং স্যুপ"
          },
          "description": {
            "en": "Hulatang: peppery breakfast soup.",
            "zh": "胡辣汤：河南地区具有代表性的地方风味。",
            "bn": "হুলাতাং স্যুপ: হেনান অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        },
        {
          "id": "henan-luoyang-water-banquet",
          "name": {
            "en": "Luoyang Water Banquet",
            "zh": "洛阳水席",
            "bn": "লুওইয়াং ওয়াটার ব্যাংকুয়েট"
          },
          "description": {
            "en": "Luoyang Water Banquet: traditional multi-course banquet.",
            "zh": "洛阳水席：河南地区具有代表性的地方风味。",
            "bn": "লুওইয়াং ওয়াটার ব্যাংকুয়েট: হেনান অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        }
      ]
    },
    'hubei': {
      "id": "hubei",
      "description": {
        "en": "Explore Hubei through river cities, scenic gorges and historic towers.",
        "zh": "探索湖北的江城风光、峡谷景观和历史名楼。",
        "bn": "হুবেই অঞ্চলের নদীতীরের নগরী, গিরিখাত ও ঐতিহাসিক টাওয়ার ঘুরে দেখুন।"
      },
      "cities": [
        {
          "en": "Wuhan",
          "zh": "武汉",
          "bn": "উহান"
        }
      ],
      "places": [
        {
          "id": "hubei-yellow-crane-tower",
          "name": {
            "en": "Yellow Crane Tower",
            "zh": "黄鹤楼",
            "bn": "ইয়েলো ক্রেন টাওয়ার"
          },
          "category": "history",
          "city": "Wuhan",
          "description": {
            "en": "Yellow Crane Tower: historic-style tower overlooking the Yangtze.",
            "zh": "黄鹤楼：历史景点，值得了解其地方特色。",
            "bn": "ইয়েলো ক্রেন টাওয়ার: হুবেই অঞ্চলের একটি উল্লেখযোগ্য ঐতিহাসিক দর্শনীয় স্থান।"
          },
          "unesco": false
        },
        {
          "id": "hubei-east-lake",
          "name": {
            "en": "East Lake",
            "zh": "东湖",
            "bn": "ইস্ট লেক"
          },
          "category": "nature",
          "city": "Wuhan",
          "description": {
            "en": "East Lake: large urban lake scenic area in Wuhan.",
            "zh": "东湖：自然景点，值得了解其地方特色。",
            "bn": "ইস্ট লেক: হুবেই অঞ্চলের একটি উল্লেখযোগ্য প্রাকৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        },
        {
          "id": "hubei-wudang-mountains",
          "name": {
            "en": "Wudang Mountains",
            "zh": "武当山",
            "bn": "উদাং পর্বতমালা"
          },
          "category": "culture",
          "city": "Wuhan",
          "description": {
            "en": "Wudang Mountains: mountain temples associated with Daoism.",
            "zh": "武当山：文化景点，值得了解其地方特色。",
            "bn": "উদাং পর্বতমালা: হুবেই অঞ্চলের একটি উল্লেখযোগ্য সাংস্কৃতিক দর্শনীয় স্থান।"
          },
          "unesco": true
        }
      ],
      "foods": [
        {
          "id": "hubei-hot-dry-noodles",
          "name": {
            "en": "Hot Dry Noodles",
            "zh": "热干面",
            "bn": "হট ড্রাই নুডলস"
          },
          "description": {
            "en": "Hot Dry Noodles: Wuhan-style sesame noodles.",
            "zh": "热干面：湖北地区具有代表性的地方风味。",
            "bn": "হট ড্রাই নুডলস: হুবেই অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        },
        {
          "id": "hubei-doupi",
          "name": {
            "en": "Doupi",
            "zh": "豆皮",
            "bn": "দৌপি"
          },
          "description": {
            "en": "Doupi: pan-fried sticky-rice and bean-curd snack.",
            "zh": "豆皮：湖北地区具有代表性的地方风味。",
            "bn": "দৌপি: হুবেই অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        }
      ]
    },
    'hunan': {
      "id": "hunan",
      "description": {
        "en": "Explore Hunan through dramatic sandstone peaks, old towns and spicy flavors.",
        "zh": "探索湖南的砂岩奇峰、古城和湘菜风味。",
        "bn": "হুনান অঞ্চলের বালুকাপাথরের পাহাড়, পুরোনো নগরী ও ঝাল খাবার ঘুরে দেখুন।"
      },
      "cities": [
        {
          "en": "Changsha",
          "zh": "长沙",
          "bn": "চাংশা"
        }
      ],
      "places": [
        {
          "id": "hunan-zhangjiajie-national-forest-park",
          "name": {
            "en": "Zhangjiajie National Forest Park",
            "zh": "张家界国家森林公园",
            "bn": "ঝাংজিয়াজিয়ে জাতীয় বন উদ্যান"
          },
          "category": "nature",
          "city": "Changsha",
          "description": {
            "en": "Zhangjiajie National Forest Park: towering sandstone pillars and forest scenery.",
            "zh": "张家界国家森林公园：自然景点，值得了解其地方特色。",
            "bn": "ঝাংজিয়াজিয়ে জাতীয় বন উদ্যান: হুনান অঞ্চলের একটি উল্লেখযোগ্য প্রাকৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        },
        {
          "id": "hunan-fenghuang-ancient-town",
          "name": {
            "en": "Fenghuang Ancient Town",
            "zh": "凤凰古城",
            "bn": "ফেংহুয়াং প্রাচীন নগরী"
          },
          "category": "history",
          "city": "Changsha",
          "description": {
            "en": "Fenghuang Ancient Town: riverside old town with traditional architecture.",
            "zh": "凤凰古城：历史景点，值得了解其地方特色。",
            "bn": "ফেংহুয়াং প্রাচীন নগরী: হুনান অঞ্চলের একটি উল্লেখযোগ্য ঐতিহাসিক দর্শনীয় স্থান।"
          },
          "unesco": false
        },
        {
          "id": "hunan-yuelu-academy",
          "name": {
            "en": "Yuelu Academy",
            "zh": "岳麓书院",
            "bn": "ইউয়েলু একাডেমি"
          },
          "category": "culture",
          "city": "Changsha",
          "description": {
            "en": "Yuelu Academy: historic academy in Changsha.",
            "zh": "岳麓书院：文化景点，值得了解其地方特色。",
            "bn": "ইউয়েলু একাডেমি: হুনান অঞ্চলের একটি উল্লেখযোগ্য সাংস্কৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        }
      ],
      "foods": [
        {
          "id": "hunan-changsha-stinky-tofu",
          "name": {
            "en": "Changsha Stinky Tofu",
            "zh": "长沙臭豆腐",
            "bn": "চাংশা স্টিঙ্কি তোফু"
          },
          "description": {
            "en": "Changsha Stinky Tofu: fried fermented tofu snack.",
            "zh": "长沙臭豆腐：湖南地区具有代表性的地方风味。",
            "bn": "চাংশা স্টিঙ্কি তোফু: হুনান অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        },
        {
          "id": "hunan-chopped-chili-fish-head",
          "name": {
            "en": "Chopped-Chili Fish Head",
            "zh": "剁椒鱼头",
            "bn": "মরিচ দিয়ে মাছের মাথা"
          },
          "description": {
            "en": "Chopped-Chili Fish Head: steamed fish head with chopped chilies.",
            "zh": "剁椒鱼头：湖南地区具有代表性的地方风味。",
            "bn": "মরিচ দিয়ে মাছের মাথা: হুনান অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        }
      ]
    },
    'guangdong': {
      "id": "guangdong",
      "description": {
        "en": "Explore Guangdong through Cantonese cuisine, trading ports and city skylines.",
        "zh": "探索广东的粤菜、通商口岸和城市天际线。",
        "bn": "গুয়াংডং অঞ্চলের ক্যান্টনিজ খাবার, বন্দরনগরী ও আধুনিক শহর ঘুরে দেখুন।"
      },
      "cities": [
        {
          "en": "Guangzhou",
          "zh": "广州",
          "bn": "গুয়াংঝৌ"
        }
      ],
      "places": [
        {
          "id": "guangdong-canton-tower",
          "name": {
            "en": "Canton Tower",
            "zh": "广州塔",
            "bn": "ক্যান্টন টাওয়ার"
          },
          "category": "culture",
          "city": "Guangzhou",
          "description": {
            "en": "Canton Tower: landmark observation tower in Guangzhou.",
            "zh": "广州塔：文化景点，值得了解其地方特色。",
            "bn": "ক্যান্টন টাওয়ার: গুয়াংডং অঞ্চলের একটি উল্লেখযোগ্য সাংস্কৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        },
        {
          "id": "guangdong-chen-clan-ancestral-hall",
          "name": {
            "en": "Chen Clan Ancestral Hall",
            "zh": "陈家祠",
            "bn": "চেন ক্ল্যান অ্যানসেস্ট্রাল হল"
          },
          "category": "history",
          "city": "Guangzhou",
          "description": {
            "en": "Chen Clan Ancestral Hall: traditional Lingnan architecture and craft decoration.",
            "zh": "陈家祠：历史景点，值得了解其地方特色。",
            "bn": "চেন ক্ল্যান অ্যানসেস্ট্রাল হল: গুয়াংডং অঞ্চলের একটি উল্লেখযোগ্য ঐতিহাসিক দর্শনীয় স্থান।"
          },
          "unesco": false
        },
        {
          "id": "guangdong-kaiping-diaolou",
          "name": {
            "en": "Kaiping Diaolou",
            "zh": "开平碉楼",
            "bn": "কাইপিং দিয়াওলৌ"
          },
          "category": "history",
          "city": "Guangzhou",
          "description": {
            "en": "Kaiping Diaolou: fortified multistory village towers.",
            "zh": "开平碉楼：历史景点，值得了解其地方特色。",
            "bn": "কাইপিং দিয়াওলৌ: গুয়াংডং অঞ্চলের একটি উল্লেখযোগ্য ঐতিহাসিক দর্শনীয় স্থান।"
          },
          "unesco": true
        }
      ],
      "foods": [
        {
          "id": "guangdong-dim-sum",
          "name": {
            "en": "Dim Sum",
            "zh": "广式点心",
            "bn": "ডিম সাম"
          },
          "description": {
            "en": "Dim Sum: Cantonese small dishes often served with tea.",
            "zh": "广式点心：广东地区具有代表性的地方风味。",
            "bn": "ডিম সাম: গুয়াংডং অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        },
        {
          "id": "guangdong-char-siu",
          "name": {
            "en": "Char Siu",
            "zh": "叉烧",
            "bn": "চার সিউ"
          },
          "description": {
            "en": "Char Siu: Cantonese barbecued pork.",
            "zh": "叉烧：广东地区具有代表性的地方风味。",
            "bn": "চার সিউ: গুয়াংডং অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        }
      ]
    },
    'guangxi': {
      "id": "guangxi",
      "description": {
        "en": "Explore Guangxi through karst rivers, terraced fields and Zhuang heritage.",
        "zh": "探索广西的喀斯特山水、梯田和壮族文化。",
        "bn": "গুয়াংসি অঞ্চলের কার্স্ট পাহাড়, ধাপক্ষেত ও ঝুয়াং সংস্কৃতি ঘুরে দেখুন।"
      },
      "cities": [
        {
          "en": "Nanning",
          "zh": "南宁",
          "bn": "নাননিং"
        }
      ],
      "places": [
        {
          "id": "guangxi-li-river",
          "name": {
            "en": "Li River",
            "zh": "漓江",
            "bn": "লি নদী"
          },
          "category": "nature",
          "city": "Nanning",
          "description": {
            "en": "Li River: karst river scenery between Guilin and Yangshuo.",
            "zh": "漓江：自然景点，值得了解其地方特色。",
            "bn": "লি নদী: গুয়াংসি অঞ্চলের একটি উল্লেখযোগ্য প্রাকৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        },
        {
          "id": "guangxi-longji-rice-terraces",
          "name": {
            "en": "Longji Rice Terraces",
            "zh": "龙脊梯田",
            "bn": "লংজি ধাপক্ষেত"
          },
          "category": "nature",
          "city": "Nanning",
          "description": {
            "en": "Longji Rice Terraces: terraced agricultural hillsides near Guilin.",
            "zh": "龙脊梯田：自然景点，值得了解其地方特色。",
            "bn": "লংজি ধাপক্ষেত: গুয়াংসি অঞ্চলের একটি উল্লেখযোগ্য প্রাকৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        },
        {
          "id": "guangxi-detian-waterfall",
          "name": {
            "en": "Detian Waterfall",
            "zh": "德天瀑布",
            "bn": "দেতিয়ান জলপ্রপাত"
          },
          "category": "nature",
          "city": "Nanning",
          "description": {
            "en": "Detian Waterfall: waterfall on the China–Vietnam border.",
            "zh": "德天瀑布：自然景点，值得了解其地方特色。",
            "bn": "দেতিয়ান জলপ্রপাত: গুয়াংসি অঞ্চলের একটি উল্লেখযোগ্য প্রাকৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        }
      ],
      "foods": [
        {
          "id": "guangxi-guilin-rice-noodles",
          "name": {
            "en": "Guilin Rice Noodles",
            "zh": "桂林米粉",
            "bn": "গুইলিন রাইস নুডলস"
          },
          "description": {
            "en": "Guilin Rice Noodles: rice noodles served with local toppings.",
            "zh": "桂林米粉：广西地区具有代表性的地方风味。",
            "bn": "গুইলিন রাইস নুডলস: গুয়াংসি অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        },
        {
          "id": "guangxi-luosifen",
          "name": {
            "en": "Luosifen",
            "zh": "螺蛳粉",
            "bn": "লুওসিফেন"
          },
          "description": {
            "en": "Luosifen: Liuzhou-style river-snail rice noodle soup.",
            "zh": "螺蛳粉：广西地区具有代表性的地方风味。",
            "bn": "লুওসিফেন: গুয়াংসি অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        }
      ]
    },
    'hainan': {
      "id": "hainan",
      "description": {
        "en": "Explore Hainan through tropical beaches, volcanic landscapes and island cuisine.",
        "zh": "探索海南的热带海滩、火山地貌和海岛美食。",
        "bn": "হাইনান অঞ্চলের ক্রান্তীয় সমুদ্রসৈকত, আগ্নেয়ভূমি ও দ্বীপের খাবার ঘুরে দেখুন।"
      },
      "cities": [
        {
          "en": "Haikou",
          "zh": "海口",
          "bn": "হাইকৌ"
        }
      ],
      "places": [
        {
          "id": "hainan-yalong-bay",
          "name": {
            "en": "Yalong Bay",
            "zh": "亚龙湾",
            "bn": "ইয়ালং বে"
          },
          "category": "nature",
          "city": "Haikou",
          "description": {
            "en": "Yalong Bay: beach resort bay near Sanya.",
            "zh": "亚龙湾：自然景点，值得了解其地方特色。",
            "bn": "ইয়ালং বে: হাইনান অঞ্চলের একটি উল্লেখযোগ্য প্রাকৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        },
        {
          "id": "hainan-nanshan-cultural-tourism-zone",
          "name": {
            "en": "Nanshan Cultural Tourism Zone",
            "zh": "南山文化旅游区",
            "bn": "নানশান সাংস্কৃতিক এলাকা"
          },
          "category": "culture",
          "city": "Haikou",
          "description": {
            "en": "Nanshan Cultural Tourism Zone: coastal cultural complex near Sanya.",
            "zh": "南山文化旅游区：文化景点，值得了解其地方特色。",
            "bn": "নানশান সাংস্কৃতিক এলাকা: হাইনান অঞ্চলের একটি উল্লেখযোগ্য সাংস্কৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        },
        {
          "id": "hainan-haikou-volcanic-cluster-global-geopark",
          "name": {
            "en": "Haikou Volcanic Cluster Global Geopark",
            "zh": "海口火山群世界地质公园",
            "bn": "হাইকৌ আগ্নেয় জিওপার্ক"
          },
          "category": "nature",
          "city": "Haikou",
          "description": {
            "en": "Haikou Volcanic Cluster Global Geopark: volcanic landforms near Haikou.",
            "zh": "海口火山群世界地质公园：自然景点，值得了解其地方特色。",
            "bn": "হাইকৌ আগ্নেয় জিওপার্ক: হাইনান অঞ্চলের একটি উল্লেখযোগ্য প্রাকৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        }
      ],
      "foods": [
        {
          "id": "hainan-hainan-chicken-rice",
          "name": {
            "en": "Hainan Chicken Rice",
            "zh": "海南鸡饭",
            "bn": "হাইনান চিকেন রাইস"
          },
          "description": {
            "en": "Hainan Chicken Rice: poached chicken served with seasoned rice.",
            "zh": "海南鸡饭：海南地区具有代表性的地方风味。",
            "bn": "হাইনান চিকেন রাইস: হাইনান অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        },
        {
          "id": "hainan-wenchang-chicken",
          "name": {
            "en": "Wenchang Chicken",
            "zh": "文昌鸡",
            "bn": "ওয়েনছাং চিকেন"
          },
          "description": {
            "en": "Wenchang Chicken: regional chicken specialty.",
            "zh": "文昌鸡：海南地区具有代表性的地方风味。",
            "bn": "ওয়েনছাং চিকেন: হাইনান অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        }
      ]
    },
    'chongqing': {
      "id": "chongqing",
      "description": {
        "en": "Explore Chongqing through mountain city streets, river confluences and hotpot.",
        "zh": "探索重庆的山城街巷、两江交汇和火锅。",
        "bn": "ছংছিং অঞ্চলের পাহাড়ি নগরী, নদীর মিলনস্থল ও হটপট ঘুরে দেখুন।"
      },
      "cities": [
        {
          "en": "Chongqing",
          "zh": "重庆",
          "bn": "ছংছিং"
        }
      ],
      "places": [
        {
          "id": "chongqing-hongya-cave",
          "name": {
            "en": "Hongya Cave",
            "zh": "洪崖洞",
            "bn": "হংইয়া কেভ"
          },
          "category": "culture",
          "city": "Chongqing",
          "description": {
            "en": "Hongya Cave: multi-level riverside commercial complex.",
            "zh": "洪崖洞：文化景点，值得了解其地方特色。",
            "bn": "হংইয়া কেভ: ছংছিং অঞ্চলের একটি উল্লেখযোগ্য সাংস্কৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        },
        {
          "id": "chongqing-ciqikou-ancient-town",
          "name": {
            "en": "Ciqikou Ancient Town",
            "zh": "磁器口古镇",
            "bn": "ছিচিকৌ প্রাচীন নগরী"
          },
          "category": "history",
          "city": "Chongqing",
          "description": {
            "en": "Ciqikou Ancient Town: old neighborhood with preserved lanes.",
            "zh": "磁器口古镇：历史景点，值得了解其地方特色。",
            "bn": "ছিচিকৌ প্রাচীন নগরী: ছংছিং অঞ্চলের একটি উল্লেখযোগ্য ঐতিহাসিক দর্শনীয় স্থান।"
          },
          "unesco": false
        },
        {
          "id": "chongqing-wulong-karst",
          "name": {
            "en": "Wulong Karst",
            "zh": "武隆喀斯特",
            "bn": "উলং কার্স্ট"
          },
          "category": "nature",
          "city": "Chongqing",
          "description": {
            "en": "Wulong Karst: natural bridges and karst formations.",
            "zh": "武隆喀斯特：自然景点，值得了解其地方特色。",
            "bn": "উলং কার্স্ট: ছংছিং অঞ্চলের একটি উল্লেখযোগ্য প্রাকৃতিক দর্শনীয় স্থান।"
          },
          "unesco": true
        }
      ],
      "foods": [
        {
          "id": "chongqing-chongqing-hotpot",
          "name": {
            "en": "Chongqing Hotpot",
            "zh": "重庆火锅",
            "bn": "ছংছিং হটপট"
          },
          "description": {
            "en": "Chongqing Hotpot: spicy shared hotpot.",
            "zh": "重庆火锅：重庆地区具有代表性的地方风味。",
            "bn": "ছংছিং হটপট: ছংছিং অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        },
        {
          "id": "chongqing-chongqing-xiaomian",
          "name": {
            "en": "Chongqing Xiaomian",
            "zh": "重庆小面",
            "bn": "ছংছিং শিয়াওমিয়ান"
          },
          "description": {
            "en": "Chongqing Xiaomian: spicy noodle bowl.",
            "zh": "重庆小面：重庆地区具有代表性的地方风味。",
            "bn": "ছংছিং শিয়াওমিয়ান: ছংছিং অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        }
      ]
    },
    'guizhou': {
      "id": "guizhou",
      "description": {
        "en": "Explore Guizhou through waterfalls, karst scenery and ethnic villages.",
        "zh": "探索贵州的瀑布、喀斯特风光和民族村寨。",
        "bn": "গুইচৌ অঞ্চলের জলপ্রপাত, কার্স্ট প্রকৃতি ও জাতিগোষ্ঠীর গ্রাম ঘুরে দেখুন।"
      },
      "cities": [
        {
          "en": "Guiyang",
          "zh": "贵阳",
          "bn": "গুইইয়াং"
        }
      ],
      "places": [
        {
          "id": "guizhou-huangguoshu-waterfall",
          "name": {
            "en": "Huangguoshu Waterfall",
            "zh": "黄果树瀑布",
            "bn": "হুয়াংগুওশু জলপ্রপাত"
          },
          "category": "nature",
          "city": "Guiyang",
          "description": {
            "en": "Huangguoshu Waterfall: large waterfall system near Anshun.",
            "zh": "黄果树瀑布：自然景点，值得了解其地方特色。",
            "bn": "হুয়াংগুওশু জলপ্রপাত: গুইচৌ অঞ্চলের একটি উল্লেখযোগ্য প্রাকৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        },
        {
          "id": "guizhou-xijiang-qianhu-miao-village",
          "name": {
            "en": "Xijiang Qianhu Miao Village",
            "zh": "西江千户苗寨",
            "bn": "শিজিয়াং মিয়াও গ্রাম"
          },
          "category": "culture",
          "city": "Guiyang",
          "description": {
            "en": "Xijiang Qianhu Miao Village: large Miao community village.",
            "zh": "西江千户苗寨：文化景点，值得了解其地方特色。",
            "bn": "শিজিয়াং মিয়াও গ্রাম: গুইচৌ অঞ্চলের একটি উল্লেখযোগ্য সাংস্কৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        },
        {
          "id": "guizhou-libo-xiaoqikong",
          "name": {
            "en": "Libo Xiaoqikong",
            "zh": "荔波小七孔",
            "bn": "লিবো শিয়াওছিকং"
          },
          "category": "nature",
          "city": "Guiyang",
          "description": {
            "en": "Libo Xiaoqikong: karst forest, streams and stone bridge scenery.",
            "zh": "荔波小七孔：自然景点，值得了解其地方特色。",
            "bn": "লিবো শিয়াওছিকং: গুইচৌ অঞ্চলের একটি উল্লেখযোগ্য প্রাকৃতিক দর্শনীয় স্থান।"
          },
          "unesco": true
        }
      ],
      "foods": [
        {
          "id": "guizhou-sour-fish-soup",
          "name": {
            "en": "Sour Fish Soup",
            "zh": "酸汤鱼",
            "bn": "সাওটাং মাছের স্যুপ"
          },
          "description": {
            "en": "Sour Fish Soup: fish cooked in tangy broth.",
            "zh": "酸汤鱼：贵州地区具有代表性的地方风味。",
            "bn": "সাওটাং মাছের স্যুপ: গুইচৌ অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        },
        {
          "id": "guizhou-siwawa",
          "name": {
            "en": "Siwawa",
            "zh": "丝娃娃",
            "bn": "সিওয়াওয়া"
          },
          "description": {
            "en": "Siwawa: thin wraps filled with vegetables.",
            "zh": "丝娃娃：贵州地区具有代表性的地方风味。",
            "bn": "সিওয়াওয়া: গুইচৌ অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        }
      ]
    },
    'tibet': {
      "id": "tibet",
      "description": {
        "en": "Explore Tibet through high plateau lakes, monasteries and Tibetan heritage.",
        "zh": "探索西藏的高原湖泊、寺院和藏族文化。",
        "bn": "তিব্বত অঞ্চলের উচ্চভূমির হ্রদ, বৌদ্ধ মঠ ও তিব্বতি ঐতিহ্য ঘুরে দেখুন।"
      },
      "cities": [
        {
          "en": "Lhasa",
          "zh": "拉萨",
          "bn": "লাসা"
        }
      ],
      "places": [
        {
          "id": "tibet-potala-palace",
          "name": {
            "en": "Potala Palace",
            "zh": "布达拉宫",
            "bn": "পোতালা প্রাসাদ"
          },
          "category": "history",
          "city": "Lhasa",
          "description": {
            "en": "Potala Palace: historic palace complex in Lhasa.",
            "zh": "布达拉宫：历史景点，值得了解其地方特色。",
            "bn": "পোতালা প্রাসাদ: তিব্বত অঞ্চলের একটি উল্লেখযোগ্য ঐতিহাসিক দর্শনীয় স্থান।"
          },
          "unesco": true
        },
        {
          "id": "tibet-jokhang-temple",
          "name": {
            "en": "Jokhang Temple",
            "zh": "大昭寺",
            "bn": "জোখাং মন্দির"
          },
          "category": "culture",
          "city": "Lhasa",
          "description": {
            "en": "Jokhang Temple: major pilgrimage temple in Lhasa.",
            "zh": "大昭寺：文化景点，值得了解其地方特色。",
            "bn": "জোখাং মন্দির: তিব্বত অঞ্চলের একটি উল্লেখযোগ্য সাংস্কৃতিক দর্শনীয় স্থান।"
          },
          "unesco": true
        },
        {
          "id": "tibet-namtso-lake",
          "name": {
            "en": "Namtso Lake",
            "zh": "纳木错",
            "bn": "নামৎসো হ্রদ"
          },
          "category": "nature",
          "city": "Lhasa",
          "description": {
            "en": "Namtso Lake: high-altitude lake on the Tibetan Plateau.",
            "zh": "纳木错：自然景点，值得了解其地方特色。",
            "bn": "নামৎসো হ্রদ: তিব্বত অঞ্চলের একটি উল্লেখযোগ্য প্রাকৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        }
      ],
      "foods": [
        {
          "id": "tibet-tibetan-momo",
          "name": {
            "en": "Tibetan Momo",
            "zh": "藏式馍馍",
            "bn": "তিব্বতি মোমো"
          },
          "description": {
            "en": "Tibetan Momo: Tibetan-style dumplings.",
            "zh": "藏式馍馍：西藏地区具有代表性的地方风味。",
            "bn": "তিব্বতি মোমো: তিব্বত অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        },
        {
          "id": "tibet-tsampa",
          "name": {
            "en": "Tsampa",
            "zh": "糌粑",
            "bn": "ৎসামপা"
          },
          "description": {
            "en": "Tsampa: roasted barley flour staple.",
            "zh": "糌粑：西藏地区具有代表性的地方风味。",
            "bn": "ৎসামপা: তিব্বত অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        }
      ]
    },
    'shaanxi': {
      "id": "shaanxi",
      "description": {
        "en": "Explore Shaanxi through Silk Road history, imperial tombs and ancient city walls.",
        "zh": "探索陕西的丝路历史、帝王陵墓和古城墙。",
        "bn": "শানসি (শাআনসি) অঞ্চলের সিল্ক রোড ইতিহাস, রাজকীয় সমাধি ও নগরপ্রাচীর ঘুরে দেখুন।"
      },
      "cities": [
        {
          "en": "Xi’an",
          "zh": "西安",
          "bn": "শিয়ান"
        }
      ],
      "places": [
        {
          "id": "shaanxi-terracotta-army",
          "name": {
            "en": "Terracotta Army",
            "zh": "秦始皇兵马俑",
            "bn": "টেরাকোটা আর্মি"
          },
          "category": "history",
          "city": "Xi’an",
          "description": {
            "en": "Terracotta Army: life-sized funerary sculptures near Xi’an.",
            "zh": "秦始皇兵马俑：历史景点，值得了解其地方特色。",
            "bn": "টেরাকোটা আর্মি: শানসি (শাআনসি) অঞ্চলের একটি উল্লেখযোগ্য ঐতিহাসিক দর্শনীয় স্থান।"
          },
          "unesco": true
        },
        {
          "id": "shaanxi-xi-an-city-wall",
          "name": {
            "en": "Xi’an City Wall",
            "zh": "西安城墙",
            "bn": "শিয়ান নগরপ্রাচীর"
          },
          "category": "history",
          "city": "Xi’an",
          "description": {
            "en": "Xi’an City Wall: well-preserved historic defensive walls.",
            "zh": "西安城墙：历史景点，值得了解其地方特色。",
            "bn": "শিয়ান নগরপ্রাচীর: শানসি (শাআনসি) অঞ্চলের একটি উল্লেখযোগ্য ঐতিহাসিক দর্শনীয় স্থান।"
          },
          "unesco": false
        },
        {
          "id": "shaanxi-giant-wild-goose-pagoda",
          "name": {
            "en": "Giant Wild Goose Pagoda",
            "zh": "大雁塔",
            "bn": "দায়ান প্যাগোডা"
          },
          "category": "culture",
          "city": "Xi’an",
          "description": {
            "en": "Giant Wild Goose Pagoda: Tang-era Buddhist pagoda.",
            "zh": "大雁塔：文化景点，值得了解其地方特色。",
            "bn": "দায়ান প্যাগোডা: শানসি (শাআনসি) অঞ্চলের একটি উল্লেখযোগ্য সাংস্কৃতিক দর্শনীয় স্থান।"
          },
          "unesco": true
        }
      ],
      "foods": [
        {
          "id": "shaanxi-roujiamo",
          "name": {
            "en": "Roujiamo",
            "zh": "肉夹馍",
            "bn": "রৌজিয়ামো"
          },
          "description": {
            "en": "Roujiamo: meat-filled flatbread.",
            "zh": "肉夹馍：陕西地区具有代表性的地方风味。",
            "bn": "রৌজিয়ামো: শানসি (শাআনসি) অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        },
        {
          "id": "shaanxi-biangbiang-noodles",
          "name": {
            "en": "Biangbiang Noodles",
            "zh": "𰻞𰻞面",
            "bn": "বিয়াংবিয়াং নুডলস"
          },
          "description": {
            "en": "Biangbiang Noodles: wide hand-pulled wheat noodles.",
            "zh": "𰻞𰻞面：陕西地区具有代表性的地方风味。",
            "bn": "বিয়াংবিয়াং নুডলস: শানসি (শাআনসি) অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        }
      ]
    },
    'gansu': {
      "id": "gansu",
      "description": {
        "en": "Explore Gansu through Silk Road caves, desert landscapes and frontier passes.",
        "zh": "探索甘肃的丝路石窟、沙漠景观和边关遗迹。",
        "bn": "কানসু অঞ্চলের সিল্ক রোডের গুহা, মরুভূমি ও সীমান্ত দুর্গ ঘুরে দেখুন।"
      },
      "cities": [
        {
          "en": "Lanzhou",
          "zh": "兰州",
          "bn": "লানঝৌ"
        }
      ],
      "places": [
        {
          "id": "gansu-mogao-caves",
          "name": {
            "en": "Mogao Caves",
            "zh": "莫高窟",
            "bn": "মোগাও গুহা"
          },
          "category": "history",
          "city": "Lanzhou",
          "description": {
            "en": "Mogao Caves: Buddhist mural and sculpture caves at Dunhuang.",
            "zh": "莫高窟：历史景点，值得了解其地方特色。",
            "bn": "মোগাও গুহা: কানসু অঞ্চলের একটি উল্লেখযোগ্য ঐতিহাসিক দর্শনীয় স্থান।"
          },
          "unesco": true
        },
        {
          "id": "gansu-crescent-lake",
          "name": {
            "en": "Crescent Lake",
            "zh": "月牙泉",
            "bn": "ক্রিসেন্ট লেক"
          },
          "category": "nature",
          "city": "Lanzhou",
          "description": {
            "en": "Crescent Lake: oasis pool among dunes near Dunhuang.",
            "zh": "月牙泉：自然景点，值得了解其地方特色。",
            "bn": "ক্রিসেন্ট লেক: কানসু অঞ্চলের একটি উল্লেখযোগ্য প্রাকৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        },
        {
          "id": "gansu-jiayuguan-fort",
          "name": {
            "en": "Jiayuguan Fort",
            "zh": "嘉峪关关城",
            "bn": "জিয়াইউগুয়ান দুর্গ"
          },
          "category": "history",
          "city": "Lanzhou",
          "description": {
            "en": "Jiayuguan Fort: historic fortress at the western end of the Ming Great Wall.",
            "zh": "嘉峪关关城：历史景点，值得了解其地方特色。",
            "bn": "জিয়াইউগুয়ান দুর্গ: কানসু অঞ্চলের একটি উল্লেখযোগ্য ঐতিহাসিক দর্শনীয় স্থান।"
          },
          "unesco": false
        }
      ],
      "foods": [
        {
          "id": "gansu-lanzhou-beef-noodles",
          "name": {
            "en": "Lanzhou Beef Noodles",
            "zh": "兰州牛肉面",
            "bn": "লানঝৌ বিফ নুডলস"
          },
          "description": {
            "en": "Lanzhou Beef Noodles: clear-broth beef noodles.",
            "zh": "兰州牛肉面：甘肃地区具有代表性的地方风味。",
            "bn": "লানঝৌ বিফ নুডলস: কানসু অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        },
        {
          "id": "gansu-niangpi",
          "name": {
            "en": "Niangpi",
            "zh": "酿皮",
            "bn": "নিয়াংপি"
          },
          "description": {
            "en": "Niangpi: cold seasoned wheat-starch noodles.",
            "zh": "酿皮：甘肃地区具有代表性的地方风味。",
            "bn": "নিয়াংপি: কানসু অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        }
      ]
    },
    'qinghai': {
      "id": "qinghai",
      "description": {
        "en": "Explore Qinghai through plateau lakes, mountain monasteries and grasslands.",
        "zh": "探索青海的高原湖泊、山地寺院和草原。",
        "bn": "ছিংহাই অঞ্চলের উচ্চভূমির হ্রদ, পাহাড়ি মঠ ও তৃণভূমি ঘুরে দেখুন।"
      },
      "cities": [
        {
          "en": "Xining",
          "zh": "西宁",
          "bn": "শিনিং"
        }
      ],
      "places": [
        {
          "id": "qinghai-qinghai-lake",
          "name": {
            "en": "Qinghai Lake",
            "zh": "青海湖",
            "bn": "ছিংহাই হ্রদ"
          },
          "category": "nature",
          "city": "Xining",
          "description": {
            "en": "Qinghai Lake: large saline lake on the plateau.",
            "zh": "青海湖：自然景点，值得了解其地方特色。",
            "bn": "ছিংহাই হ্রদ: ছিংহাই অঞ্চলের একটি উল্লেখযোগ্য প্রাকৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        },
        {
          "id": "qinghai-ta-er-monastery",
          "name": {
            "en": "Ta’er Monastery",
            "zh": "塔尔寺",
            "bn": "তার মঠ"
          },
          "category": "culture",
          "city": "Xining",
          "description": {
            "en": "Ta’er Monastery: major Tibetan Buddhist monastery near Xining.",
            "zh": "塔尔寺：文化景点，值得了解其地方特色。",
            "bn": "তার মঠ: ছিংহাই অঞ্চলের একটি উল্লেখযোগ্য সাংস্কৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        },
        {
          "id": "qinghai-chaka-salt-lake",
          "name": {
            "en": "Chaka Salt Lake",
            "zh": "茶卡盐湖",
            "bn": "চাকা লবণ হ্রদ"
          },
          "category": "nature",
          "city": "Xining",
          "description": {
            "en": "Chaka Salt Lake: salt flats known for reflective shallow water.",
            "zh": "茶卡盐湖：自然景点，值得了解其地方特色。",
            "bn": "চাকা লবণ হ্রদ: ছিংহাই অঞ্চলের একটি উল্লেখযোগ্য প্রাকৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        }
      ],
      "foods": [
        {
          "id": "qinghai-qinghai-yogurt",
          "name": {
            "en": "Qinghai Yogurt",
            "zh": "青海酸奶",
            "bn": "ছিংহাই দই"
          },
          "description": {
            "en": "Qinghai Yogurt: local fermented dairy snack.",
            "zh": "青海酸奶：青海地区具有代表性的地方风味。",
            "bn": "ছিংহাই দই: ছিংহাই অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        },
        {
          "id": "qinghai-yak-meat",
          "name": {
            "en": "Yak Meat",
            "zh": "牦牛肉",
            "bn": "ইয়াকের মাংস"
          },
          "description": {
            "en": "Yak Meat: plateau meat specialty.",
            "zh": "牦牛肉：青海地区具有代表性的地方风味。",
            "bn": "ইয়াকের মাংস: ছিংহাই অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        }
      ]
    },
    'ningxia': {
      "id": "ningxia",
      "description": {
        "en": "Explore Ningxia through desert scenery, Western Xia history and Hui cuisine.",
        "zh": "探索宁夏的沙漠风光、西夏历史和回族美食。",
        "bn": "নিংশিয়া অঞ্চলের মরুভূমি, পশ্চিম শিয়া ইতিহাস ও হুই খাবার ঘুরে দেখুন।"
      },
      "cities": [
        {
          "en": "Yinchuan",
          "zh": "银川",
          "bn": "ইনছুয়ান"
        }
      ],
      "places": [
        {
          "id": "ningxia-shapotou",
          "name": {
            "en": "Shapotou",
            "zh": "沙坡头",
            "bn": "শাপোথৌ"
          },
          "category": "nature",
          "city": "Yinchuan",
          "description": {
            "en": "Shapotou: desert and Yellow River scenic area.",
            "zh": "沙坡头：自然景点，值得了解其地方特色。",
            "bn": "শাপোথৌ: নিংশিয়া অঞ্চলের একটি উল্লেখযোগ্য প্রাকৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        },
        {
          "id": "ningxia-western-xia-imperial-tombs",
          "name": {
            "en": "Western Xia Imperial Tombs",
            "zh": "西夏陵",
            "bn": "পশ্চিম শিয়া সমাধি"
          },
          "category": "history",
          "city": "Yinchuan",
          "description": {
            "en": "Western Xia Imperial Tombs: mausoleums of Western Xia rulers.",
            "zh": "西夏陵：历史景点，值得了解其地方特色。",
            "bn": "পশ্চিম শিয়া সমাধি: নিংশিয়া অঞ্চলের একটি উল্লেখযোগ্য ঐতিহাসিক দর্শনীয় স্থান।"
          },
          "unesco": false
        },
        {
          "id": "ningxia-helan-mountains-rock-art",
          "name": {
            "en": "Helan Mountains Rock Art",
            "zh": "贺兰山岩画",
            "bn": "হেলান পর্বতের শিলাচিত্র"
          },
          "category": "history",
          "city": "Yinchuan",
          "description": {
            "en": "Helan Mountains Rock Art: prehistoric and historic rock carvings.",
            "zh": "贺兰山岩画：历史景点，值得了解其地方特色。",
            "bn": "হেলান পর্বতের শিলাচিত্র: নিংশিয়া অঞ্চলের একটি উল্লেখযোগ্য ঐতিহাসিক দর্শনীয় স্থান।"
          },
          "unesco": false
        }
      ],
      "foods": [
        {
          "id": "ningxia-hand-grabbed-lamb",
          "name": {
            "en": "Hand-Grabbed Lamb",
            "zh": "手抓羊肉",
            "bn": "হাতে খাওয়া মাটন"
          },
          "description": {
            "en": "Hand-Grabbed Lamb: seasoned boiled lamb.",
            "zh": "手抓羊肉：宁夏地区具有代表性的地方风味。",
            "bn": "হাতে খাওয়া মাটন: নিংশিয়া অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        },
        {
          "id": "ningxia-ningxia-eight-treasure-tea",
          "name": {
            "en": "Ningxia Eight-Treasure Tea",
            "zh": "八宝茶",
            "bn": "আট উপাদানের চা"
          },
          "description": {
            "en": "Ningxia Eight-Treasure Tea: tea blend with dried fruit and other ingredients.",
            "zh": "八宝茶：宁夏地区具有代表性的地方风味。",
            "bn": "আট উপাদানের চা: নিংশিয়া অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        }
      ]
    },
    'xinjiang': {
      "id": "xinjiang",
      "description": {
        "en": "Explore Xinjiang through oases, mountain lakes and Silk Road towns.",
        "zh": "探索新疆的绿洲、山间湖泊和丝路古城。",
        "bn": "শিনচিয়াং অঞ্চলের মরূদ্যান, পাহাড়ি হ্রদ ও সিল্ক রোড নগরী ঘুরে দেখুন।"
      },
      "cities": [
        {
          "en": "Urumqi",
          "zh": "乌鲁木齐",
          "bn": "উরুমছি"
        }
      ],
      "places": [
        {
          "id": "xinjiang-heavenly-lake-of-tianshan",
          "name": {
            "en": "Heavenly Lake of Tianshan",
            "zh": "天山天池",
            "bn": "তিয়ানশান হেভেনলি লেক"
          },
          "category": "nature",
          "city": "Urumqi",
          "description": {
            "en": "Heavenly Lake of Tianshan: alpine lake in the Tianshan Mountains.",
            "zh": "天山天池：自然景点，值得了解其地方特色。",
            "bn": "তিয়ানশান হেভেনলি লেক: শিনচিয়াং অঞ্চলের একটি উল্লেখযোগ্য প্রাকৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        },
        {
          "id": "xinjiang-kashgar-old-town",
          "name": {
            "en": "Kashgar Old Town",
            "zh": "喀什古城",
            "bn": "কাশগর পুরোনো শহর"
          },
          "category": "culture",
          "city": "Urumqi",
          "description": {
            "en": "Kashgar Old Town: historic urban neighborhood and bazaars.",
            "zh": "喀什古城：文化景点，值得了解其地方特色。",
            "bn": "কাশগর পুরোনো শহর: শিনচিয়াং অঞ্চলের একটি উল্লেখযোগ্য সাংস্কৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        },
        {
          "id": "xinjiang-kanas-lake",
          "name": {
            "en": "Kanas Lake",
            "zh": "喀纳斯湖",
            "bn": "কানাস হ্রদ"
          },
          "category": "nature",
          "city": "Urumqi",
          "description": {
            "en": "Kanas Lake: mountain lake amid forests in northern Xinjiang.",
            "zh": "喀纳斯湖：自然景点，值得了解其地方特色。",
            "bn": "কানাস হ্রদ: শিনচিয়াং অঞ্চলের একটি উল্লেখযোগ্য প্রাকৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        }
      ],
      "foods": [
        {
          "id": "xinjiang-xinjiang-big-plate-chicken",
          "name": {
            "en": "Xinjiang Big Plate Chicken",
            "zh": "大盘鸡",
            "bn": "দাপানজি চিকেন"
          },
          "description": {
            "en": "Xinjiang Big Plate Chicken: spicy chicken and potato dish.",
            "zh": "大盘鸡：新疆地区具有代表性的地方风味。",
            "bn": "দাপানজি চিকেন: শিনচিয়াং অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        },
        {
          "id": "xinjiang-laghman",
          "name": {
            "en": "Laghman",
            "zh": "拉条子",
            "bn": "লাগমান নুডলস"
          },
          "description": {
            "en": "Laghman: hand-pulled noodles with vegetables and meat.",
            "zh": "拉条子：新疆地区具有代表性的地方风味。",
            "bn": "লাগমান নুডলস: শিনচিয়াং অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        }
      ]
    },
    'taiwan': {
      "id": "taiwan",
      "description": {
        "en": "Explore Taiwan through mountain scenery, museums and lively markets.",
        "zh": "探索台湾的山岳风光、博物馆和夜市。",
        "bn": "তাইওয়ান অঞ্চলের পাহাড়, জাদুঘর ও প্রাণবন্ত বাজার ঘুরে দেখুন।"
      },
      "cities": [
        {
          "en": "Taipei",
          "zh": "台北",
          "bn": "তাইপেই"
        }
      ],
      "places": [
        {
          "id": "taiwan-national-palace-museum",
          "name": {
            "en": "National Palace Museum",
            "zh": "国立故宫博物院",
            "bn": "ন্যাশনাল প্যালেস মিউজিয়াম"
          },
          "category": "culture",
          "city": "Taipei",
          "description": {
            "en": "National Palace Museum: major collection of Chinese art and antiquities.",
            "zh": "国立故宫博物院：文化景点，值得了解其地方特色。",
            "bn": "ন্যাশনাল প্যালেস মিউজিয়াম: তাইওয়ান অঞ্চলের একটি উল্লেখযোগ্য সাংস্কৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        },
        {
          "id": "taiwan-sun-moon-lake",
          "name": {
            "en": "Sun Moon Lake",
            "zh": "日月潭",
            "bn": "সান মুন লেক"
          },
          "category": "nature",
          "city": "Taipei",
          "description": {
            "en": "Sun Moon Lake: mountain lake in Nantou.",
            "zh": "日月潭：自然景点，值得了解其地方特色。",
            "bn": "সান মুন লেক: তাইওয়ান অঞ্চলের একটি উল্লেখযোগ্য প্রাকৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        },
        {
          "id": "taiwan-taroko-gorge",
          "name": {
            "en": "Taroko Gorge",
            "zh": "太鲁阁峡谷",
            "bn": "তারোকো গিরিখাত"
          },
          "category": "nature",
          "city": "Taipei",
          "description": {
            "en": "Taroko Gorge: marble gorge and mountain terrain; check current trail access.",
            "zh": "太鲁阁峡谷：自然景点，值得了解其地方特色。",
            "bn": "তারোকো গিরিখাত: তাইওয়ান অঞ্চলের একটি উল্লেখযোগ্য প্রাকৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        }
      ],
      "foods": [
        {
          "id": "taiwan-beef-noodle-soup",
          "name": {
            "en": "Beef Noodle Soup",
            "zh": "牛肉面",
            "bn": "বিফ নুডল স্যুপ"
          },
          "description": {
            "en": "Beef Noodle Soup: beef and wheat noodles in broth.",
            "zh": "牛肉面：台湾地区具有代表性的地方风味。",
            "bn": "বিফ নুডল স্যুপ: তাইওয়ান অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        },
        {
          "id": "taiwan-oyster-omelette",
          "name": {
            "en": "Oyster Omelette",
            "zh": "蚵仔煎",
            "bn": "অয়েস্টার অমলেট"
          },
          "description": {
            "en": "Oyster Omelette: street-food omelette with oysters.",
            "zh": "蚵仔煎：台湾地区具有代表性的地方风味。",
            "bn": "অয়েস্টার অমলেট: তাইওয়ান অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        }
      ]
    },
    'hong-kong': {
      "id": "hong-kong",
      "description": {
        "en": "Explore Hong Kong through harbor skylines, hillside trails and street markets.",
        "zh": "探索香港的海港天际线、山径和街市。",
        "bn": "হংকং অঞ্চলের বন্দরের দৃশ্য, পাহাড়ি পথ ও রাস্তার বাজার ঘুরে দেখুন।"
      },
      "cities": [
        {
          "en": "Hong Kong",
          "zh": "香港",
          "bn": "হংকং"
        }
      ],
      "places": [
        {
          "id": "hong-kong-victoria-peak",
          "name": {
            "en": "Victoria Peak",
            "zh": "太平山顶",
            "bn": "ভিক্টোরিয়া পিক"
          },
          "category": "nature",
          "city": "Hong Kong",
          "description": {
            "en": "Victoria Peak: hilltop viewpoint over Victoria Harbour.",
            "zh": "太平山顶：自然景点，值得了解其地方特色。",
            "bn": "ভিক্টোরিয়া পিক: হংকং অঞ্চলের একটি উল্লেখযোগ্য প্রাকৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        },
        {
          "id": "hong-kong-star-ferry",
          "name": {
            "en": "Star Ferry",
            "zh": "天星小轮",
            "bn": "স্টার ফেরি"
          },
          "category": "culture",
          "city": "Hong Kong",
          "description": {
            "en": "Star Ferry: historic ferry service across Victoria Harbour.",
            "zh": "天星小轮：文化景点，值得了解其地方特色。",
            "bn": "স্টার ফেরি: হংকং অঞ্চলের একটি উল্লেখযোগ্য সাংস্কৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        },
        {
          "id": "hong-kong-tian-tan-buddha",
          "name": {
            "en": "Tian Tan Buddha",
            "zh": "天坛大佛",
            "bn": "তিয়ান তান বুদ্ধ"
          },
          "category": "culture",
          "city": "Hong Kong",
          "description": {
            "en": "Tian Tan Buddha: large outdoor seated bronze Buddha on Lantau Island.",
            "zh": "天坛大佛：文化景点，值得了解其地方特色。",
            "bn": "তিয়ান তান বুদ্ধ: হংকং অঞ্চলের একটি উল্লেখযোগ্য সাংস্কৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        }
      ],
      "foods": [
        {
          "id": "hong-kong-hong-kong-egg-waffles",
          "name": {
            "en": "Hong Kong Egg Waffles",
            "zh": "鸡蛋仔",
            "bn": "হংকং এগ ওয়াফল"
          },
          "description": {
            "en": "Hong Kong Egg Waffles: bubble-textured street snack.",
            "zh": "鸡蛋仔：香港地区具有代表性的地方风味。",
            "bn": "হংকং এগ ওয়াফল: হংকং অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        },
        {
          "id": "hong-kong-pineapple-bun",
          "name": {
            "en": "Pineapple Bun",
            "zh": "菠萝包",
            "bn": "পাইনঅ্যাপল বান"
          },
          "description": {
            "en": "Pineapple Bun: sweet crust-topped bakery bun.",
            "zh": "菠萝包：香港地区具有代表性的地方风味。",
            "bn": "পাইনঅ্যাপল বান: হংকং অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        }
      ]
    },
    'macau': {
      "id": "macau",
      "description": {
        "en": "Explore Macau through Portuguese-Chinese heritage, historic squares and local snacks.",
        "zh": "探索澳门的中葡文化、历史广场和本地小吃。",
        "bn": "ম্যাকাও অঞ্চলের চীনা-পর্তুগিজ ঐতিহ্য, ঐতিহাসিক চত্বর ও খাবার ঘুরে দেখুন।"
      },
      "cities": [
        {
          "en": "Macau",
          "zh": "澳门",
          "bn": "ম্যাকাও"
        }
      ],
      "places": [
        {
          "id": "macau-ruins-of-st-paul-s",
          "name": {
            "en": "Ruins of St. Paul’s",
            "zh": "大三巴牌坊",
            "bn": "সেন্ট পলসের ধ্বংসাবশেষ"
          },
          "category": "history",
          "city": "Macau",
          "description": {
            "en": "Ruins of St. Paul’s: surviving facade of a historic church.",
            "zh": "大三巴牌坊：历史景点，值得了解其地方特色。",
            "bn": "সেন্ট পলসের ধ্বংসাবশেষ: ম্যাকাও অঞ্চলের একটি উল্লেখযোগ্য ঐতিহাসিক দর্শনীয় স্থান।"
          },
          "unesco": false
        },
        {
          "id": "macau-senado-square",
          "name": {
            "en": "Senado Square",
            "zh": "议事亭前地",
            "bn": "সেনাডো স্কয়ার"
          },
          "category": "culture",
          "city": "Macau",
          "description": {
            "en": "Senado Square: historic paved square in central Macau.",
            "zh": "议事亭前地：文化景点，值得了解其地方特色。",
            "bn": "সেনাডো স্কয়ার: ম্যাকাও অঞ্চলের একটি উল্লেখযোগ্য সাংস্কৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        },
        {
          "id": "macau-a-ma-temple",
          "name": {
            "en": "A-Ma Temple",
            "zh": "妈阁庙",
            "bn": "আ-মা মন্দির"
          },
          "category": "culture",
          "city": "Macau",
          "description": {
            "en": "A-Ma Temple: historic temple associated with the sea goddess Mazu.",
            "zh": "妈阁庙：文化景点，值得了解其地方特色。",
            "bn": "আ-মা মন্দির: ম্যাকাও অঞ্চলের একটি উল্লেখযোগ্য সাংস্কৃতিক দর্শনীয় স্থান।"
          },
          "unesco": false
        }
      ],
      "foods": [
        {
          "id": "macau-macau-egg-tart",
          "name": {
            "en": "Macau Egg Tart",
            "zh": "葡式蛋挞",
            "bn": "ম্যাকাও এগ টার্ট"
          },
          "description": {
            "en": "Macau Egg Tart: Portuguese-influenced custard tart.",
            "zh": "葡式蛋挞：澳门地区具有代表性的地方风味。",
            "bn": "ম্যাকাও এগ টার্ট: ম্যাকাও অঞ্চলের পরিচিত স্থানীয় খাবার।"
          }
        },
        {
          "id": "macau-pork-chop-bun",
          "name": {
            "en": "Pork Chop Bun",
            "zh": "猪扒包",
            "bn": "পোর্ক চপ বান"
          },
          "description": {
            "en": "Pork Chop Bun: bread roll with seasoned pork chop.",
            "zh": "猪扒包：澳门地区具有代表性的地方风味。",
            "bn": "পোর্ক চপ বান: ম্যাকাও অঞ্চলের পরিচিত স্থানীয় খাবার।"
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
