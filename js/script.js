console.log("start Js");

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

const parametros = new URLSearchParams(location.search);

console.log(parametros); // Retorna uma Array com valores da url

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  console.log(elemento);

  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);
