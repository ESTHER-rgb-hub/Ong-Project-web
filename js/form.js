// js/form.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  if (!form) return; // Só roda na página de cadastro

  const campos = {
    nome: /^[A-Za-zÀ-ÿ\s]{3,}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    cpf: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
    telefone: /^\(\d{2}\)\s?\d{4,5}-\d{4}$/,
    cep: /^\d{5}-\d{3}$/
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valido = true;

    for (const campo in campos) {
      const input = form.querySelector(`#${campo}`);
      if (!campos[campo].test(input.value)) {
        valido = false;
        input.classList.add("erro");
      } else {
        input.classList.remove("erro");
      }
    }

    if (!valido) {
      alert("⚠️ Por favor, corrija os campos destacados antes de enviar.");
      return;
    }

    // Salva no armazenamento local
    const dados = Object.fromEntries(new FormData(form));
    localStorage.setItem("cadastro", JSON.stringify(dados));

    alert("✅ Inscrição enviada com sucesso!");
    form.reset();
  });

  // Máscaras automáticas
  const mask = (campo, padrao) => {
    campo.addEventListener("input", (e) => {
      let v = e.target.value.replace(/\D/g, "");
      let r = "";
      let i = 0;
      for (const c of padrao) {
        r += c === "#" ? (v[i++] || "") : c;
        if (i >= v.length) break;
      }
      e.target.value = r;
    });
  };

  mask(form.cpf, "###.###.###-##");
  mask(form.telefone, "(##) #####-####");
  mask(form.cep, "#####-###");
});
