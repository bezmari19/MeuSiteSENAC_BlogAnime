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
