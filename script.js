// form.js — Máscaras, validações e feedback interativo
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("cadastroForm");
  const cpf = document.getElementById("cpf");
  const telefone = document.getElementById("telefone");
  const cep = document.getElementById("cep");
  const email = document.getElementById("email");
  const nome = document.getElementById("nome");

  // ======== 1️⃣ Máscaras dinâmicas ========
  const aplicarMascaras = () => {
    cpf.addEventListener("input", () => {
      let value = cpf.value.replace(/\D/g, "").slice(0, 11);
      cpf.value = value
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    });

    telefone.addEventListener("input", () => {
      let value = telefone.value.replace(/\D/g, "").slice(0, 11);
      telefone.value = value
        .replace(/^(\d{2})(\d)/g, "($1) $2")
        .replace(/(\d{5})(\d{4})$/, "$1-$2");
    });

    cep.addEventListener("input", () => {
      let value = cep.value.replace(/\D/g, "").slice(0, 8);
      cep.value = value.replace(/(\d{5})(\d)/, "$1-$2");
    });
  };

  // ======== 2️⃣ Validação de campos ========
  const validarCampo = (input, condicao, mensagem) => {
    const erro = input.nextElementSibling;
    if (!erro || !erro.classList.contains("error-message")) return;

    if (condicao) {
      erro.textContent = "";
      input.classList.remove("invalido");
    } else {
      erro.textContent = mensagem;
      input.classList.add("invalido");
    }
  };

  const validarFormulario = () => {
    let valido = true;

    validarCampo(nome, nome.value.trim().length >= 3, "Informe o nome completo.");
    validarCampo(email, /\S+@\S+\.\S+/.test(email.value), "E-mail inválido.");
    validarCampo(cpf, cpf.value.length === 14, "CPF deve ter 11 números.");
    validarCampo(telefone, telefone.value.length >= 14, "Telefone incompleto.");
    validarCampo(cep, cep.value.length === 9, "CEP deve ter 8 números.");

    const erros = form.querySelectorAll(".invalido");
    if (erros.length > 0) valido = false;

    return valido;
  };

  // ======== 3️⃣ Armazenamento local (simulação de envio) ========
  const salvarDadosLocal = () => {
    const dados = {
      nome: nome.value,
      email: email.value,
      cpf: cpf.value,
      telefone: telefone.value,
      cep: cep.value,
    };
    localStorage.setItem("cadastroVoluntario", JSON.stringify(dados));
  };

  // ======== 4️⃣ Envio do formulário ========
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (validarFormulario()) {
      salvarDadosLocal();

      // Feedback visual no DOM
      const sucesso = document.createElement("div");
      sucesso.className = "sucesso";
      sucesso.textContent =
        "✅ Inscrição enviada com sucesso! Obrigado por fazer parte da ONG Patas de Amor 💚";

      form.appendChild(sucesso);
      form.reset();

      setTimeout(() => sucesso.remove(), 4000);
    } else {
      alert("⚠️ Verifique os campos destacados antes de enviar!");
    }
  });

  aplicarMascaras();
});
