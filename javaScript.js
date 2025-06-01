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
    const termo = input.value.trim().toLowerCase();
    if (termo.includes('anime') || termo.includes('animes') || termo.includes('anime list') || termo.includes('animes list')) {
      alert('Você buscou por: ' + termo);
      input.value = ''; // Limpa o campo de busca
      // Redireciona para a página de animes
      window.location.href = 'AnimesPg.html';
    } else {
      alert('Você buscou por: ' + input.value.trim());
    }
  }
}

function languageButton() {
  const btnIcon = document.querySelector('.languageButton i');
  const body = document.body;
  body.classList.toggle('english_mode');
  if (body.classList.contains('english_mode')) {
    btnIcon.className = 'bi bi-translate';
    btnIcon.innerHTML = ' English';
  } else {
    btnIcon.className = 'bi bi-translate';
    btnIcon.innerHTML = 'Português';
  }
}



