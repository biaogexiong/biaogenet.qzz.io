const sideMenu = document.getElementById("sideMenu");

fetch("https://biaogenet.qzz.io/menu.json")
  .then(r => r.json())
  .then(menu => {
    sideMenu.innerHTML = "";
    for (const [name, url] of Object.entries(menu)) {
      const a = document.createElement("a");
      a.href = url;
      a.textContent = name;
      sideMenu.appendChild(a);
    }
  })
  .catch(err => {
    sideMenu.innerHTML = "<a>選單載入失敗</a>";
    console.error(err);
  });
