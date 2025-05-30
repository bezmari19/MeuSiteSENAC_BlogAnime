// Modo claro/escuro
document.addEventListener('DOMContentLoaded', function () {
  const themeBtn = document.getElementById('toggleTheme');
  const langBtn = document.getElementById('toggleLang');

  if (themeBtn) {
    themeBtn.onclick = function () {
      document.body.classList.toggle('dark-mode');
      this.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    };
  }

  // Tradução simples (pt/en) para título e subtítulo como exemplo
  let isEnglish = false;
  if (langBtn) {
    langBtn.onclick = function () {
      isEnglish = !isEnglish;
      const title = document.querySelector('.estiloFonte');
      const subtitle = document.querySelector('.header p');
      if (title) title.textContent = isEnglish ? 'Head Title' : 'Título da Head';
      if (subtitle) subtitle.textContent = isEnglish ? 'Head Subtitle' : 'Subtítulo da Head';
      this.textContent = isEnglish ? 'PT' : 'EN';
    };
  }
});