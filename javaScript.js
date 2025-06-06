// Recupera preferências de idioma e tema do localStorage
let traducaoRecorrente = localStorage.getItem("traducao") || "pt";
let temaRecorrente = localStorage.getItem("theme") || "light";

// Objeto com traduções para os modos de tema
const traducao = {
  pt: { "light-mode": "Claro", "dark-mode": "Escuro" },
  en: { "light-mode": "Light", "dark-mode": "Dark" }
};

// Alterna o idioma do site e salva no localStorage
function languageButton() {
  traducaoRecorrente = traducaoRecorrente === "pt" ? "en" : "pt";
  localStorage.setItem("traducao", traducaoRecorrente);
  atualizaTraducao();
}

// Atualiza todos os textos do site conforme o idioma selecionado
function atualizaTraducao() {
  const elements = document.querySelectorAll('[data-pt], [data-en]');
  elements.forEach(element => {
    const text = element.getAttribute(`data-${traducaoRecorrente}`);
    if (!text) return;
    if (element.innerHTML.includes('&copy;')) {
      element.innerHTML = text;
    } else {
      element.textContent = text;
    }
  });
  // Atualiza o texto do botão de idioma
  document.getElementById('current-lang').textContent = traducaoRecorrente.toUpperCase() === 'PT' ? 'EN' : 'PT';
}

// Alterna o tema do site entre claro e escuro e salva no localStorage
function buttonTheme() {
  const btnIcon = document.querySelector(".buttonTheme i");
  const body = document.body;
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    btnIcon.className = "bi bi-moon-stars-fill";
    btnIcon.innerHTML = "Escuro";
    localStorage.setItem("theme", "light");
  } else {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    btnIcon.className = "bi bi-sun-fill";
    btnIcon.innerHTML = "Claro";
    localStorage.setItem("theme", "dark");
  }
}

// Aplica as preferências salvas de tema ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem("theme");
  const body = document.body;
  const btnIcon = document.querySelector(".buttonTheme i");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    body.classList.remove("light-mode");
    if (btnIcon) {
      btnIcon.className = "bi bi-sun-fill";
      btnIcon.innerHTML = "Claro";
    }
  } else {
    body.classList.add("light-mode");
    body.classList.remove("dark-mode");
    if (btnIcon) {
      btnIcon.className = "bi bi-moon-stars-fill";
      btnIcon.innerHTML = "Escuro";
    }
  }
});

// Busca inteligente: redireciona para páginas conforme o termo pesquisado
function searchSite(event) {
  event.preventDefault();
  const input = document.querySelector(".searchInput");
  if (input && input.value.trim()) {
    const termo = input.value.trim().toLowerCase();
    if (
      termo.includes("anime") || termo.includes("animes") ||
      termo.includes("anime list") || termo.includes("animes list")
    ) {
      input.value = "";
      window.location.href = "AnimesPg.html";
    } else if (
      termo.includes("sobre nós") || termo.includes("sobre nos") ||
      termo.includes("sobre a página") || termo.includes("sobre a pagina")
    ) {
      input.value = "";
      window.location.href = "SobreNosPg.html";
    } else if (
      termo.includes("noticias") || termo.includes("notícias") ||
      termo.includes("notícias de anime") || termo.includes("noticias de animes")
    ) {
      input.value = "";
      window.location.href = "NoticiaPg.html";
    } else if (
      termo.includes("home") || termo.includes("pagina inicial") ||
      termo.includes("página inicial")
    ) {
      input.value = "";
      window.location.href = "index.html";
    }
  }
}

// Envia sugestões do usuário, salvando e-mail e mensagem em cookies
function sugestionButton() {
  const email = document.getElementById('exampleFormControlInput1').value.trim();
  const mensagem = document.getElementById('exampleFormControlTextarea1').value.trim();

  if (!email || !mensagem) {
    alert('Por favor, preencha o e-mail e a mensagem.');
    return;
  }

  document.cookie = `sugestao_email=${encodeURIComponent(email)}; max-age=${60 * 60 * 24 * 7}; path=/`;
  document.cookie = `sugestao_mensagem=${encodeURIComponent(mensagem)}; max-age=${60 * 60 * 24 * 7}; path=/`;

  alert('Sugestão enviada com sucesso!\n\nE-mail: ' + email + '\nMensagem: ' + mensagem);

  document.getElementById('exampleFormControlInput1').value = '';
  document.getElementById('exampleFormControlTextarea1').value = '';
}

// Carrossel de imagens do aside: controla qual imagem está visível
let carouselIndex = 0;

function showCarouselSlide(index) {
  const slide = document.querySelector('.carousel-slide');
  const images = slide.querySelectorAll('img');
  if (!images.length) return;
  if (index >= images.length) carouselIndex = 0;
  if (index < 0) carouselIndex = images.length - 1;
  else carouselIndex = index;

  slide.style.transform = `translateX(-${carouselIndex * images[0].clientWidth}px)`;
}

// Avança ou volta o carrossel
function moveCarousel(direction) {
  showCarouselSlide(carouselIndex + direction);
}

// Inicializa o carrossel e ajusta ao redimensionar a janela
showCarouselSlide(0);
window.addEventListener('resize', () => showCarouselSlide(carouselIndex));





