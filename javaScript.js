// Recupera preferências do localStorage
let traducaoRecorrente = localStorage.getItem("traducao") || "pt";
let temaRecorrente = localStorage.getItem("theme") || "light";

// Traduções para temas
const traducao = {
  pt: {
    "light-mode": "Claro",
    "dark-mode": "Escuro"
  },
  en: {
    "light-mode": "Light",
    "dark-mode": "Dark"
  }
};

function languageButton() {
  traducaoRecorrente = traducaoRecorrente === "pt" ? "en" : "pt";
  localStorage.setItem("traducao", traducaoRecorrente);
  atualizaTraducao();
}
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

    document.getElementById('').textContent = traducaoRecorrente.toUpperCase() === 'PORTUGUÊS' ? 'EN' : 'PT';
  }

  // Alterna o idioma do site entre Português e Inglês
function languageButton() {
  const btnIcon = document.querySelector(".languageButton i");
  const body = document.body;
  body.classList.toggle("english_mode");
  if (body.classList.contains("english_mode")) {
    btnIcon.className = "bi bi-translate";
    btnIcon.innerHTML = " English";
    localStorage.setItem("language", "en");
  } else {
    btnIcon.className = "bi bi-translate";
    btnIcon.innerHTML = "Português";
    localStorage.setItem("language", "pt");
  }
  atualizaTraducao();
}


// Alterna o tema do site entre claro e escuro
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

// Aplica preferências salvas ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
  // Tema
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

// Trata a busca do usuário no site
function searchSite(event) {
  event.preventDefault();
  const input = document.querySelector(".searchInput");
  if (input && input.value.trim()) {
    const termo = input.value.trim().toLowerCase();
    if (
      termo.includes("anime") ||
      termo.includes("animes") ||
      termo.includes("anime list") ||
      termo.includes("animes list")
    ) {
      input.value = "";
      window.location.href = "AnimesPg.html";
    } else if (
      termo.includes("sobre nós") ||
      termo.includes("sobre nos") ||
      termo.includes("sobre a página") ||
      termo.includes("sobre a pagina")
    ) {
      input.value = "";
      window.location.href = "SobreNosPg.html";
    } else if (
      termo.includes("noticias") ||
      termo.includes("notícias") ||
      termo.includes("notícias de anime") ||
      termo.includes("noticias de animes")
    ) {
      input.value = "";
      window.location.href = "NoticiaPg.html";
    } else if (
      termo.includes("home") ||
      termo.includes("pagina inicial") ||
      termo.includes("página inicial")
    ) {
      input.value = "";
      window.location.href = "index.html";
    }
  }
}

// Trata o envio de sugestões pelo usuário
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

// Carrossel do aside
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

function moveCarousel(direction) {
  showCarouselSlide(carouselIndex + direction);
}

// Inicializa o carrossel com o primeiro slide visível
showCarouselSlide(0);
// Ajusta o carrossel ao redimensionar a janela
window.addEventListener('resize', () => showCarouselSlide(carouselIndex));





