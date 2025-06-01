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
      input.value = '';
      window.location.href = 'AnimesPg.html';
    } else if (termo.includes('sobre nós') || termo.includes('sobre nos') || termo.includes('sobre a página') || termo.includes('Sobre Noss') || termo.includes('Sobre a Página') || termo.includes("Sobre Nós")) {
      input.value = ''; 
      window.location.href = 'SobreNosPg.html';
    } else if (termo.includes("noticias") || termo.includes("notícias") || termo.includes("Noticias") || termo.includes("Notícias") || termo.includes("notícias de anime") || termo.includes("noticias de animes")) {
      input.value = '';
      window.location.href = 'NoticiasPg.html';
    } else if (termo.includes("Home") || termo.includes("home") || termo.includes("Pagina Inicial") || termo.includes("pagina inicial") || termo.includes("página inicial") || termo.includes("Página Inicial")) {
      input.value = '';
      window.location.href = 'index.html';
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



