const toggleThemeButton = document.getElementById("toggle-theme");
const body = document.body;

function toggleTheme() {
  body.classList.toggle("dark-mode");
  toggleThemeButton.textContent = body.classList.contains("dark-mode") ? "Modo Claro" : "Modo Escuro";
}

toggleThemeButton.addEventListener("click", toggleTheme);