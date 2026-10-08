
/* =====================================
   CHINA SEEN | Regional Data
   34 Provincial-Level Regions
===================================== */

"use strict";

const CHINA_REGIONS = [
  { id: "beijing", adcode: 110000, en: "Beijing", zh: "北京", bn: "বেইজিং", type: "municipality" },
  { id: "tianjin", adcode: 120000, en: "Tianjin", zh: "天津", bn: "তিয়ানজিন", type: "municipality" },
  { id: "hebei", adcode: 130000, en: "Hebei", zh: "河北", bn: "হেবেই", type: "province" },
  { id: "shanxi", adcode: 140000, en: "Shanxi", zh: "山西", bn: "শানসি", type: "province" },
  { id: "inner-mongolia", adcode: 150000, en: "Inner Mongolia", zh: "内蒙古", bn: "ইনার মঙ্গোলিয়া", type: "autonomous-region" },
  { id: "liaoning", adcode: 210000, en: "Liaoning", zh: "辽宁", bn: "লিয়াওনিং", type: "province" },
  { id: "jilin", adcode: 220000, en: "Jilin", zh: "吉林", bn: "জিলিন", type: "province" },
  { id: "heilongjiang", adcode: 230000, en: "Heilongjiang", zh: "黑龙江", bn: "হেইলংজিয়াং", type: "province" },
  { id: "shanghai", adcode: 310000, en: "Shanghai", zh: "上海", bn: "সাংহাই", type: "municipality" },
  { id: "jiangsu", adcode: 320000, en: "Jiangsu", zh: "江苏", bn: "জিয়াংসু", type: "province" },
  { id: "zhejiang", adcode: 330000, en: "Zhejiang", zh: "浙江", bn: "চেচিয়াং", type: "province" },
  { id: "anhui", adcode: 340000, en: "Anhui", zh: "安徽", bn: "আনহুই", type: "province" },
  { id: "fujian", adcode: 350000, en: "Fujian", zh: "福建", bn: "ফুচিয়েন", type: "province" },
  { id: "jiangxi", adcode: 360000, en: "Jiangxi", zh: "江西", bn: "জিয়াংসি", type: "province" },
  { id: "shandong", adcode: 370000, en: "Shandong", zh: "山东", bn: "শানডং", type: "province" },
  { id: "henan", adcode: 410000, en: "Henan", zh: "河南", bn: "হেনান", type: "province" },
  { id: "hubei", adcode: 420000, en: "Hubei", zh: "湖北", bn: "হুবেই", type: "province" },
  { id: "hunan", adcode: 430000, en: "Hunan", zh: "湖南", bn: "হুনান", type: "province" },
  { id: "guangdong", adcode: 440000, en: "Guangdong", zh: "广东", bn: "গুয়াংডং", type: "province" },
  { id: "guangxi", adcode: 450000, en: "Guangxi", zh: "广西", bn: "গুয়াংসি", type: "autonomous-region" },
  { id: "hainan", adcode: 460000, en: "Hainan", zh: "海南", bn: "হাইনান", type: "province" },
  { id: "chongqing", adcode: 500000, en: "Chongqing", zh: "重庆", bn: "ছংছিং", type: "municipality" },
  { id: "sichuan", adcode: 510000, en: "Sichuan", zh: "四川", bn: "সিচুয়ান", type: "province" },
  { id: "guizhou", adcode: 520000, en: "Guizhou", zh: "贵州", bn: "গুইচৌ", type: "province" },
  { id: "yunnan", adcode: 530000, en: "Yunnan", zh: "云南", bn: "ইউনান", type: "province" },
  { id: "tibet", adcode: 540000, en: "Tibet", zh: "西藏", bn: "তিব্বত", type: "autonomous-region" },
  { id: "shaanxi", adcode: 610000, en: "Shaanxi", zh: "陕西", bn: "শানসি (শাআনসি)", type: "province" },
  { id: "gansu", adcode: 620000, en: "Gansu", zh: "甘肃", bn: "কানসু", type: "province" },
  { id: "qinghai", adcode: 630000, en: "Qinghai", zh: "青海", bn: "ছিংহাই", type: "province" },
  { id: "ningxia", adcode: 640000, en: "Ningxia", zh: "宁夏", bn: "নিংশিয়া", type: "autonomous-region" },
  { id: "xinjiang", adcode: 650000, en: "Xinjiang", zh: "新疆", bn: "শিনচিয়াং", type: "autonomous-region" },
  { id: "taiwan", adcode: 710000, en: "Taiwan", zh: "台湾", bn: "তাইওয়ান", type: "province" },
  { id: "hong-kong", adcode: 810000, en: "Hong Kong", zh: "香港", bn: "হংকং", type: "special-administrative-region" },
  { id: "macau", adcode: 820000, en: "Macau", zh: "澳门", bn: "ম্যাকাও", type: "special-administrative-region" }
];

const CHINA_REGION_BY_CODE = new Map(
  CHINA_REGIONS.map(region => [region.adcode, region])
);

const CHINA_REGION_BY_ID = new Map(
  CHINA_REGIONS.map(region => [region.id, region])
);

window.ChinaSeenData = {
  regions: CHINA_REGIONS,
  byCode: CHINA_REGION_BY_CODE,
  byId: CHINA_REGION_BY_ID,
  totalRegions: CHINA_REGIONS.length
};
