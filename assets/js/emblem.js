var Emblem = (function () {
  const baseDir = "assets/images/";

  const dict = {
    "Tsinghua University": {
      name: "Tsinghua University",
      alias: "THU",
      cname: "清华大学",
    },
    "Peking University": {
      name: "Peking University",
      alias: "PKU",
      cname: "北京大学",
    },
    "Shanghai Jiao Tong University": {
      name: "Shanghai Jiao Tong University",
      alias: "SJTU",
      cname: "上海交通大学",
    },
    "Zhejiang University": {
      name: "Zhejiang University",
      alias: "ZJU",
      cname: "浙江大学",
    },
    "Chinese Academy of Sciences": {
      name: "Chinese Academy of Sciences",
      alias: "CAS",
      cname: "中国科学院",
    },
    "Nanjing University": {
      name: "Nanjing University",
      alias: "NJU",
      cname: "南京大学",
    },
    "Fudan University": {
      name: "Fudan University",
      alias: "FDU",
      cname: "复旦大学",
    },
    "CUHK (SZ)": {
      name: "CUHK (SZ)",
      alias: "CUHK",
      cname: "香港中文大学（深圳）",
    },
    USTC: {
      name: "USTC",
      alias: "USTC",
      cname: "中国科学技术大学",
    },
    "Harbin Institute of Technology": {
      name: "Harbin Institute of Technology",
      alias: "HIT",
      cname: "哈尔滨工业大学",
    },
    "Renmin University of China": {
      name: "Renmin University of China",
      alias: "RUC",
      cname: "中国人民大学",
    },
    "Beihang University": {
      name: "Beihang University",
      alias: "BUAA",
      cname: "北京航空航天大学",
    },
    UESTC: {
      name: "University of Electronic Science and Technology of China",
      alias: "UESTC",
      cname: "电子科技大学",
    },
    "ShanghaiTech University": {
      name: "ShanghaiTech University",
      alias: "ShanghaiTech",
      cname: "上海科技大学",
    },
    "Xi'an Jiaotong University": {
      name: "Xi'an Jiaotong University",
      alias: "XJTU",
      cname: "西安交通大学",
    },
    BUPT: {
      name: "Beijing University of Posts and Telecommunications",
      alias: "BUPT",
      cname: "北京邮电大学",
    },
    HUST: {
      name: "Huazhong University of Science and Technology",
      alias: "HUST",
      cname: "华中科技大学",
    },
    SUSTech: {
      name: "Southern University of Science and Technology",
      alias: "SUSTech",
      cname: "南方科技大学",
    },
    "Shenzhen University": {
      name: "Shenzhen University",
      alias: "SZU",
      cname: "深圳大学",
    },
    "Sun Yat-sen University": {
      name: "Sun Yat-sen University",
      alias: "SYSU",
      cname: "中山大学",
    },
    "Xiamen University": {
      name: "Xiamen University",
      alias: "XMU",
      cname: "厦门大学",
    },
    "Hunan University": {
      name: "Hunan University",
      alias: "HNU",
      cname: "湖南大学",
    },
    "Shandong University": {
      name: "Shandong University",
      alias: "SDU",
      cname: "山东大学",
    },
    NWPU: {
      name: "Northwestern Polytechnical University",
      alias: "NWPU",
      cname: "西北工业大学",
    },
    "Soochow University": {
      name: "Soochow University",
      alias: "Soochow",
      cname: "苏州大学",
    },
    "Xidian University": {
      name: "Xidian University",
      alias: "Xidian",
      cname: "西安电子科技大学",
    },
    "Westlake University": {
      name: "Westlake University",
      alias: "Westlake",
      cname: "西湖大学",
    },
    "Wuhan University": {
      name: "Wuhan University",
      alias: "WHU",
      cname: "武汉大学",
    },
    SUFE: {
      name: "Shanghai University of Finance and Economics",
      alias: "SUFE",
      cname: "上海财经大学",
    },
    "Tongji University": {
      name: "Tongji University",
      alias: "Tongji",
      cname: "同济大学",
    },
    "Beijing Jiao Tong University": {
      name: "Beijing Jiao Tong University",
      alias: "BJTU",
      cname: "北京交通大学",
    },
    "East China Normal University": {
      name: "East China Normal University",
      alias: "ECNU",
      cname: "华东师范大学",
    },
    "NYU Shanghai": {
      name: "NYU Shanghai",
      alias: "NYU",
      cname: "上海纽约大学",
    },
  };

  return {
    get: function (id) {
      schcool = (id || "").toUpperCase();
      return `<img src="${baseDir}${schcool}.svg" />`;
    },
  };
})();
