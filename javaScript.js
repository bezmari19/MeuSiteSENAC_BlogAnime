// Este arquivo contém funções JavaScript que implementam funcionalidades de tema e busca no site.
// Ele também inclui a manipulação de cookies para exibir ou ocultar um pop-up de boas-vindas.
// Importa a biblioteca de cookies para manipulação de cookies.
import Cookies from "https://cdn.jsdelivr.net/npm/js-cookie@3.0.5/dist/js.cookie.min.js";

// Função responsável por verificar se o pop-up de boas-vindas deve ser exibido.
// Agora, ao fechar o pop-up, exibe uma caixa para cadastro de e-mail na newsletter.
const $overlay = document.querySelector(".overlay");
const $closeButton = document.querySelector(".closePopUp");

if (!Cookies.get("popUpClosed")) {
  $overlay.classList.add("active");
  const $popup = document.querySelector(".popup");
  $popup.classList.add("active");

  // Botão X dentro do pop-up
  $popup.querySelector(".close").addEventListener("click", function () {
    $overlay.classList.remove("active");
    $popup.classList.remove("active");
    showNewsletterBox();
    Cookies.set("popUpClosed", "true", { expires: 7 });
  });

  // Botão de fechar adicional, se existir
  if ($closeButton) {
    $closeButton.addEventListener("click", function () {
      Cookies.set("popUpClosed", "true", { expires: 7 });
      $overlay.classList.remove("active");
      $popup.classList.remove("active");
      showNewsletterBox();
    });
  }
}

// Função para exibir a caixa de newsletter
function showNewsletterBox() {
  // Cria o overlay para newsletter
  let newsletterOverlay = document.createElement("div");
  newsletterOverlay.className = "newsletter-overlay";
  newsletterOverlay.style.position = "fixed";
  newsletterOverlay.style.top = "0";
  newsletterOverlay.style.left = "0";
  newsletterOverlay.style.width = "100vw";
  newsletterOverlay.style.height = "100vh";
  newsletterOverlay.style.background = "rgba(0,0,0,0.5)";
  newsletterOverlay.style.display = "flex";
  newsletterOverlay.style.alignItems = "center";
  newsletterOverlay.style.justifyContent = "center";
  newsletterOverlay.style.zIndex = "9999";

  // Cria o conteúdo da newsletter
  let newsletterBox = document.createElement("div");
  newsletterBox.className = "newsletter-box";
  newsletterBox.style.background = "#fff";
  newsletterBox.style.padding = "30px";
  newsletterBox.style.borderRadius = "8px";
  newsletterBox.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
  newsletterBox.style.textAlign = "center";
  newsletterBox.innerHTML = `
    <h2>Assine nossa Newsletter</h2>
    <p>Receba novidades e notícias sobre animes!</p>
    <form id="newsletterForm">
      <input type="email" id="newsletterEmail" placeholder="Seu e-mail" required style="padding:8px;width:70%;margin-bottom:10px;">
      <br>
      <button type="submit" style="padding:8px 20px;">Assinar</button>
    </form>
    <button id="closeNewsletter" style="margin-top:15px;background:#ccc;padding:5px 15px;border:none;border-radius:4px;cursor:pointer;">Fechar</button>
  `;

  newsletterOverlay.appendChild(newsletterBox);
  document.body.appendChild(newsletterOverlay);

  // Evento para fechar a newsletter
  document.getElementById("closeNewsletter").onclick = function () {
    document.body.removeChild(newsletterOverlay);
  };

  // Evento para envio do formulário (simples, só exibe alerta)
  document.getElementById("newsletterForm").onsubmit = function (e) {
    e.preventDefault();
    const email = document.getElementById("newsletterEmail").value;
    if (email) {
      alert("Obrigado por assinar nossa newsletter!");
      document.body.removeChild(newsletterOverlay);
    }
  };
}

// Função responsável por alternar o tema do site entre claro e escuro.
function buttonTheme() {
  const btnIcon = document.querySelector(".buttonTheme i");
  const body = document.body;
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    btnIcon.className = "bi bi-sun-fill";
    btnIcon.innerHTML = "Claro";
  } else {
    btnIcon.className = "bi bi-moon-stars-fill";
    btnIcon.innerHTML = "Escuro";
  }
}
// Função responsável por tratar a busca do usuário no site.
// Ela previne o comportamento padrão do formulário, pega o valor digitado no campo de busca,
// converte para minúsculo e verifica se o termo corresponde a alguma das palavras-chave pré-definidas.
// Dependendo do termo, redireciona o usuário para a página correspondente (Animes, Sobre Nós, Notícias ou Home).
// Se o termo não corresponder a nenhuma palavra-chave, nada acontece.
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

// Função responsável por alternar o idioma do site entre Português e Inglês.
function languageButton() {
  const btnIcon = document.querySelector(".languageButton i");
  const body = document.body;
  body.classList.toggle("english_mode");
  if (body.classList.contains("english_mode")) {
    btnIcon.className = "bi bi-translate";
    btnIcon.innerHTML = " English";
  } else {
    btnIcon.className = "bi bi-translate";
    btnIcon.innerHTML = "Português";
  }
}

// Aguarda o carregamento do DOM para garantir que os elementos existem
document.addEventListener("DOMContentLoaded", function () {
  // Seletores dos elementos do pop-up
  const $overlay = document.querySelector(".overlay");
  const $popup = document.querySelector(".popup");
  const $closeButton = document.querySelector(".closePopUp");

  // Verifica o cookie para decidir se mostra o pop-up
  if (!$overlay || !$popup) return;

  if (!Cookies.get("popUpClosed")) {
    $overlay.classList.add("active");
    $popup.classList.add("active");
  } else {
    $overlay.classList.remove("active");
    $popup.classList.remove("active");
  }

  // Evento para fechar o pop-up ao clicar no X
  if ($closeButton) {
    $closeButton.addEventListener("click", function (e) {
      e.preventDefault();
      $overlay.classList.remove("active");
      $popup.classList.remove("active");
      Cookies.set("popUpClosed", "true", { expires: 7 });
      showNewsletterBox();
    });
  }
});






// Exporta as funções para serem usadas em outros arquivos, se necessário







