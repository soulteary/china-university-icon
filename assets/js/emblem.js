var Emblem = (function () {
  const baseDir = "assets/images/";

  return {
    get: function (id) {
      schcool = (id || "").toUpperCase();
      return `<img src="${baseDir}${schcool}.svg" />`;
    },
  };
})();
