function setTheme(name) {
  const link = document.getElementById("theme-style");
  link.href = "https://biaogenet.qzz.io/styles/" + name + ".css";
  localStorage.setItem("theme", name);
}

(function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.getElementById("theme-style").href = "css/" + savedTheme + ".css";
  }
})();
