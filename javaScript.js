let currentLanguage = localStorage.getItem("language") || "pt";

const translations = {
  pt: {
      LightTheme: "claro",
      DarkTheme: "escuro",
  },
  en: {
      LightTheme: "light",
      DarkTheme: "dark",
  }
};

function toggleLanguage() {
  currentLanguage = currentLanguage === "pt" ? "en" : "pt";
  localStorage.setItem("language", currentLanguage);
  updateLanguage();
}

function updateLanguage() {
  const elements = document.querySelectorAll("[data-pt][data-en]");
  elements.forEach(element => {
      const text = element.getAttribute(`data-${currentLanguage}`);
      if (text) {
          if (element.innerHTML.includes("&copy;")) {
              element.innerHTML = text;
          } else {
              element.textContent = text;
          }
      }
  });
  
  document.getElementById("current-lang").textContent = currentLanguage.toLocaleUpperCase() === "pt" ? "eng" : "pt";
  
  
  const themeText = document.querySelector(".toggleTheme span");
  const isDark = document.body.getAttribute("data-theme") === "dark";
  const themeKey = isDark ? "LightTheme" : "DarkTheme";
  themeText.textContent = translations[currentLanguage][themeKey];
}


function toggleTheme() {
  const currentTheme = document.body.getAttribute("data-theme") || "light";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  
  document.body.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  
  const themeIcon = document.getElementById("temaIcone");
  const themeText = document.querySelector(".temaIcone span");
  
  if (newTheme === "dark") {
      themeIcon.className = "lightningTheme";
      themeText.textContent = translations[currentLanguage]["LightTheme"];
  } else {
      themeIcon.className = "darkerTheme";
      themeText.textContent = translations[currentLanguage]["DarkTheme"];
  }
}


function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.setAttribute("data-theme", savedTheme);
  
  const themeIcon = document.getElementById("temaIcone");
  const themeText = document.querySelector(".temaIcone span");
  
  if (savedTheme === "dark") {
      themeIcon.className = "lightningTheme";
      themeText.textContent = translations[currentLanguage]["LightTheme"];
  } else {
      themeIcon.className = "darkerTheme";
      themeText.textContent = translations[currentLanguage]["DarkTheme"];
  }
}
