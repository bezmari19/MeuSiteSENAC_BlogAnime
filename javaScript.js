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


function sugestionButton() {
  const email = document.getElementById('exampleFormControlInput1').value.trim();
  const mensagem = document.getElementById('exampleFormControlTextarea1').value.trim();

  if (!email || !mensagem) {
    alert('Por favor, preencha o e-mail e a mensagem.');
    return;
  }

  // Aqui você pode enviar para um backend se desejar
  alert('Sugestão enviada com sucesso!\n\nE-mail: ' + email + '\nMensagem: ' + mensagem);

  // Limpa os campos após o envio
  document.getElementById('exampleFormControlInput1').value = '';
  document.getElementById('exampleFormControlTextarea1').value = '';
}