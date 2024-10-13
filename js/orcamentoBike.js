const { init } = require("./menuAtivo");

const parametros = new URLSearchParams(location.search); // Retorna um Array os parametros de busca

console.log(parametros); // Retorna uma Array com valores da url

const orcamentoBike = {
  ativarProduto: (parametro) => {
    const elemento = document.getElementById(parametro);
    console.log(elemento);

    if (elemento) {
      elemento.checked = true;
    }
  },

  init: () => {
    parametros.forEach(orcamentoBike.ativarProduto());
  },
};
