// js/app.js
document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");
  const links = document.querySelectorAll("nav a");

  // Função para carregar conteúdo dinâmico
  async function carregarPagina(pagina) {
    try {
      const resposta = await fetch(pagina);
      const html = await resposta.text();
      main.innerHTML = html;
    } catch (error) {
      main.innerHTML = "<h2>Erro ao carregar página 😢</h2>";
      console.error(error);
    }
  }

  // Intercepta cliques do menu
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const url = e.target.getAttribute("href");

      // Marca o link ativo
      links.forEach((l) => l.classList.remove("ativo"));
      e.target.classList.add("ativo");

      // Carrega o conteúdo sem recarregar o site
      carregarPagina(url);
      history.pushState({}, "", url);
    });
  });

  // Recarrega conteúdo ao voltar/avançar no histórico
  window.addEventListener("popstate", () => {
    carregarPagina(location.pathname);
  });
});
