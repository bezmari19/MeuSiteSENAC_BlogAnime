// Função responsável por alternar o tema do site entre claro e escuro.
function buttonTheme() {
  const btnIcon = document.querySelector(".buttonTheme i"); // Seleciona o ícone do botão de tema
  const body = document.body; // Seleciona o elemento body
  body.classList.toggle("dark-mode"); // Alterna a classe 'dark-mode' no body
  // Salva a preferência de tema no localStorage
  if (body.classList.contains("dark-mode")) {
    btnIcon.className = "bi bi-sun-fill"; // Altera o ícone para sol
    btnIcon.innerHTML = "Claro"; // Altera o texto para "Claro"
    localStorage.setItem("theme", "dark");
  } else {
    btnIcon.className = "bi bi-moon-stars-fill"; // Altera o ícone para lua
    btnIcon.innerHTML = "Escuro"; // Altera o texto para "Escuro"
    localStorage.setItem("theme", "light");
  }
}

// Ao carregar a página, aplica as preferências salvas
window.addEventListener('DOMContentLoaded', () => {
  // Tema
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    const btnIcon = document.querySelector(".buttonTheme i");
    if (btnIcon) {
      btnIcon.className = "bi bi-sun-fill";
      btnIcon.innerHTML = "Claro";
    }
  }
});

// Função responsável por tratar a busca do usuário no site.
// Ela previne o comportamento padrão do formulário, pega o valor digitado no campo de busca,
// converte para minúsculo e verifica se o termo corresponde a alguma das palavras-chave pré-definidas.
// Dependendo do termo, redireciona o usuário para a página correspondente (Animes, Sobre Nós, Notícias ou Home).
// Se o termo não corresponder a nenhuma palavra-chave, nada acontece.
function searchSite(event) {
  event.preventDefault(); // Impede o envio padrão do formulário
  const input = document.querySelector(".searchInput"); // Seleciona o campo de busca
  if (input && input.value.trim()) { // Verifica se há valor digitado
    const termo = input.value.trim().toLowerCase(); // Pega o valor e converte para minúsculo
    // Verifica se o termo corresponde a alguma palavra-chave e redireciona para a página correspondente
    if (
      termo.includes("anime") ||
      termo.includes("animes") ||
      termo.includes("anime list") ||
      termo.includes("animes list")
    ) {
      input.value = "";
      window.location.href = "AnimesPg.html"; // Redireciona para página de animes
    } else if (
      termo.includes("sobre nós") ||
      termo.includes("sobre nos") ||
      termo.includes("sobre a página") ||
      termo.includes("sobre a pagina")
    ) {
      input.value = "";
      window.location.href = "SobreNosPg.html"; // Redireciona para página Sobre Nós
    } else if (
      termo.includes("noticias") ||
      termo.includes("notícias") ||
      termo.includes("notícias de anime") ||
      termo.includes("noticias de animes")
    ) {
      input.value = "";
      window.location.href = "NoticiaPg.html"; // Redireciona para página de notícias
    } else if (
      termo.includes("home") ||
      termo.includes("pagina inicial") ||
      termo.includes("página inicial")
    ) {
      input.value = "";
      window.location.href = "index.html"; // Redireciona para página inicial
    } 
  }
}

// Função responsável por alternar o idioma do site entre Português e Inglês.
function languageButton() {
  const btnIcon = document.querySelector(".languageButton i"); // Seleciona o ícone do botão de idioma
  const body = document.body; // Seleciona o body
  body.classList.toggle("english_mode"); // Alterna a classe 'english_mode'
  // Salva a preferência de idioma no localStorage
  if (body.classList.contains("english_mode")) {
    btnIcon.className = "bi bi-translate"; // Mantém o ícone de tradução
    btnIcon.innerHTML = " English"; // Altera o texto para "English"
    localStorage.setItem("language", "en");
  } else {
    btnIcon.className = "bi bi-translate"; // Mantém o ícone de tradução
    btnIcon.innerHTML = "Português"; // Altera o texto para "Português"
    localStorage.setItem("language", "pt");
  }
  changeLanguageContent(); // Atualiza o conteúdo da página (se usar tradução dinâmica)
}

  // Idioma
  const savedLang = localStorage.getItem("language");
  if (savedLang === "en") {
    document.body.classList.add("english_mode");
    const btnIcon = document.querySelector(".languageButton i");
    if (btnIcon) {
      btnIcon.className = "bi bi-translate";
      btnIcon.innerHTML = " English";
    }
    changeLanguageContent && changeLanguageContent();
  }
showCarouselSlide(0);
// Responsivo: ajusta ao redimensionar
window.addEventListener('resize', () => showCarouselSlide(carouselIndex));


// Função responsável por tratar o envio de sugestões pelo usuário.
function sugestionButton() {
  // Pega os valores dos campos de e-mail e mensagem
  const email = document.getElementById('exampleFormControlInput1').value.trim();
  const mensagem = document.getElementById('exampleFormControlTextarea1').value.trim();

  // Verifica se ambos os campos foram preenchidos
  if (!email || !mensagem) {
    alert('Por favor, preencha o e-mail e a mensagem.');
    return;
  }

  // Salva as informações em cookies por 7 dias
  document.cookie = `sugestao_email=${encodeURIComponent(email)}; max-age=${60 * 60 * 24 * 7}; path=/`; 
  // Salva o e-mail informado pelo usuário em um cookie chamado 'sugestao_email', 
  // codificando o valor para evitar problemas com caracteres especiais, 
  // definindo validade de 7 dias (em segundos) e tornando o cookie acessível em todo o site.
  document.cookie = `sugestao_mensagem=${encodeURIComponent(mensagem)}; max-age=${60 * 60 * 24 * 7}; path=/`;
  // Salva a mensagem informada pelo usuário em um cookie chamado 'sugestao_mensagem',
  // codificando o valor para evitar problemas com caracteres especiais,
  // define validade de 7 dias (em segundos) e torna o cookie acessível em todo o site.

  alert('Sugestão enviada com sucesso!\n\nE-mail: ' + email + '\nMensagem: ' + mensagem);

  // Limpa os campos após o envio
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



