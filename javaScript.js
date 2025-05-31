function buttonTheme() {
  const btnIcon = document.querySelector('.buttonTheme i');
  const body = document.body;
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    btnIcon.className = 'bi bi-sun-fill';
    btnIcon.innerHTML = 'Claro';
  } else {
    btnIcon.className = 'bi bi-moon-stars-fill';
    btnIcon.innerHTML = 'Escuro';
  }
}

function searchSite(event) {
  event.preventDefault();
  const input = document.querySelector('.searchInput');
  if (input && input.value.trim()) {
    alert('Você buscou por: ' + input.value.trim());
    // Aqui você pode implementar a lógica real de busca no site
  }
}