console.log("start Js");

//  menu ativo

const links = document.querySelectorAll(".header-menu a");

function activeLink(link) {
  const href = link.href; // vem do Html para cada link iterado!

  const url = location.href; // obj nativo do java-script, contem a propriedade href

  if (url.includes(href)) {
    link.classList.add("active");
  }
}

links.forEach(activeLink);

// Ativar Itens do Orçamento:

const parametros = new URLSearchParams(location.search); // Retorna um Array os parametros de busca

console.log(parametros); // Retorna uma Array com valores da url

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  console.log(elemento);

  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

// Perguntas Frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  console.log(pergunta);
  console.log(controls);
  console.log(resposta);

  resposta.classList.toggle("ativa");

  const ativo = resposta.classList.contains("ativo");
  console.log(ativo);
  pergunta.setAttribute("aria-expanded", ativo);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// Galeria de Imagem

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaConteiner = document.querySelector(".bicicleta-imagens");

function trocarImg(event) {
  const img = event.currentTarget;

  // Verifica se o contêiner da galeria existe
  if (galeriaConteiner) {
    const media = matchMedia("(min-width: 1000px)").matches;

    if (media) {
      galeriaConteiner.prepend(img);
    }
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImg);
}

galeria.forEach(eventosGaleria);

// Plugin animar

if (window.SimpleAnime) {
  new SimpleAnime();
}
