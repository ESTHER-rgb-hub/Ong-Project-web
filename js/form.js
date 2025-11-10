// form.js — Validação, máscaras e armazenamento local
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("cadastroForm");
  const cpf = document.getElementById("cpf");
  const telefone = document.getElementById("telefone");
  const cep = document.getElementById("cep");
  const tabela = document.querySelector("#tabelaCadastros tbody");

  // Função de máscara
  const aplicarMascara = (input, tipo) => {
    let value = input.value.replace(/\D/g, "");
    if (tipo === "cpf") {
      if (value.length > 11) value = value.slice(0, 11);
      input.value = value
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    }
    if (tipo === "telefone") {
      if (value.length > 11) value = value.slice(0, 11);
      input.value = value
        .replace(/^(\d{2})(\d)/g, "($1) $2")
        .replace(/(\d{5})(\d{4})$/, "$1-$2");
    }
    if (tipo === "cep") {
      if (value.length > 8) value = value.slice(0, 8);
      input.value = value.replace(/(\d{5})(\d)/, "$1-$2");
    }
  };

  // Aplicar máscaras
  cpf.addEventListener("input", () => aplicarMascara(cpf, "cpf"));
  telefone.addEventListener("input", () => aplicarMascara(telefone, "telefone"));
  cep.addEventListener("input", () => aplicarMascara(cep, "cep"));

  // Função para salvar no LocalStorage
  const salvarCadastro = (dados) => {
    const cadastros = JSON.parse(localStorage.getItem("cadastros")) || [];
    cadastros.push(dados);
    localStorage.setItem("cadastros", JSON.stringify(cadastros));
    exibirCadastros();
  };

  // Exibir cadastros na tabela
  const exibirCadastros = () => {
    const cadastros = JSON.parse(localStorage.getItem("cadastros")) || [];
    tabela.innerHTML = "";
    cadastros.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.nome}</td>
        <td>${item.email}</td>
        <td>${item.telefone}</td>
        <td>${item.cpf}</td>
        <td>${item.cep}</td>
      `;
      tabela.appendChild(row);
    });
  };

  // Envio do formulário
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!nome || !email) {
      alert("⚠️ Por favor, preencha todos os campos obrigatórios!");
      return;
    }

    const dados = {
      nome,
      email,
      telefone: telefone.value,
      cpf: cpf.value,
      cep: cep.value,
    };

    salvarCadastro(dados);
    form.reset();
    alert("✅ Cadastro realizado com sucesso!");
  });

  // Exibir cadastros ao carregar
  exibirCadastros();
});


