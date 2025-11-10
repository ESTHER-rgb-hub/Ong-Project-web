// form.js — Validação e Máscaras do Formulário
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("cadastroForm");
  const cpf = document.getElementById("cpf");
  const telefone = document.getElementById("telefone");
  const cep = document.getElementById("cep");

  // Máscaras de input
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

  // Aplica máscaras dinamicamente
  cpf.addEventListener("input", () => aplicarMascara(cpf, "cpf"));
  telefone.addEventListener("input", () => aplicarMascara(telefone, "telefone"));
  cep.addEventListener("input", () => aplicarMascara(cep, "cep"));

  // Validação do formulário
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const campos = form.querySelectorAll("input[required], select[required], textarea[required]");
    let valido = true;

    campos.forEach((campo) => {
      if (!campo.value.trim()) {
        campo.classList.add("erro");
        valido = false;
      } else {
        campo.classList.remove("erro");
      }
    });

    if (!valido) {
      alert("⚠️ Por favor, preencha todos os campos obrigatórios corretamente!");
      return;
    }

    // Se estiver tudo certo
    alert("✅ Cadastro enviado com sucesso! Obrigado por fazer parte da ONG Patas de Amor 💚");
    form.reset();
  });
});

 
