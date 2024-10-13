//  menu reativo

const links = document.querySelectorAll(".header-menu a");

const menuAtivo = {
  activeLink: (link) => {
    const href = link.href; // Vem do HTML para cada link iterado!
    const url = location.href; // Objeto nativo do JavaScript, contém a propriedade href

    if (url.includes(href)) {
      link.classList.add("active");
    }
  },

  // Função de inicialização para ativar todos os links

  init: () => {
    links.forEach((link) => menuAtivo.activeLink(link));
  },
};

module.exports = menuAtivo;
