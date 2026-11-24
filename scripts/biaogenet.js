function OpenMenu() {
  const menu = document.getElementById("sideMenu");
  const button = document.getElementById("menuButton");
  const isOpen = menu.classList.toggle("open");
  if (button)
    button.setAttribute("aria-expanded", String(isOpen))
}

function setDarkMode(enabled) {
  document.documentElement.classList.toggle("dark", enabled);
  localStorage.setItem("bgbDarkMode", enabled ? "true" : "false");
}

function toggleDarkMode() {
  setDarkMode(!document.documentElement.classList.contains("dark"));
}

if (localStorage.getItem("bgbDarkMode") === "true") {
  document.documentElement.classList.add("dark");
}

const sideMenu = document.getElementById("sideMenu");
fetch("https://biaogenet.qzz.io/menu.json").then(response => {
  if (!response.ok)
    throw new Error("選單載入失敗");
  return response.json()
}).then(
  menu => {
    sideMenu.replaceChildren();
    for (const[name, url]of Object.entries(menu)) {
      const link = document.createElement("a");
      link.href = url;
      link.textContent = name;
      sideMenu.appendChild(link)
    }
  }
).catch(error => console.error("選單載入失敗，使用內建選單：", error))
