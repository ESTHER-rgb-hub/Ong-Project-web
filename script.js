// Máscaras simples para CPF, telefone e CEP
document.addEventListener("DOMContentLoaded", () => {
  const cpf = document.getElementById("cpf");
  const telefone = document.getElementById("telefone");
  const cep = document.getElementById("cep");

  cpf.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);
    e.target.value = value
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  });

  telefone.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);
    e.target.value = value
      .replace(/^(\d{2})(\d)/g, "($1) $2")
      .replace(/(\d{5})(\d{4})$/, "$1-$2");
  });

  cep.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 8) value = value.slice(0, 8);
    e.target.value = value.replace(/(\d{5})(\d)/, "$1-$2");
  });

  // Validação de envio
  document.getElementById("cadastroForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("✅ Inscrição enviada com sucesso! Obrigado por fazer parte da ONG Patas de Amor 💚");
    e.target.reset();
  });
});
