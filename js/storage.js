// js/storage.js
export function salvarDados(chave, valor) {
  localStorage.setItem(chave, JSON.stringify(valor));
}

export function carregarDados(chave) {
  return JSON.parse(localStorage.getItem(chave)) || null;
}

export function listarCadastros() {
  const cadastro = carregarDados("cadastro");
  if (cadastro) {
    console.table(cadastro);
  } else {
    console.log("Nenhum cadastro encontrado.");
  }
}
