Ong-Project-web
# 🌿 ONG Patas de Amor — Sistema Web

Plataforma web desenvolvida com HTML5, CSS3 e JavaScript para promover a atuação da ONG **Patas de Amor**, dedicada ao resgate, cuidado e adoção de animais em situação de vulnerabilidade.  
O sistema inclui páginas informativas, formulários interativos, gráficos dinâmicos e recursos multimídia acessíveis.

---

## 📋 Sumário
- [Objetivo do Projeto](#objetivo-do-projeto)
- [Páginas e Estrutura](#páginas-e-estrutura)
- [Formulários e Interatividade](#formulários-e-interatividade)
- [Recursos Multimídia e Gráficos](#recursos-multimídia-e-gráficos)
- [Responsividade e Acessibilidade](#responsividade-e-acessibilidade)
- [Desempenho e SEO](#desempenho-e-seo)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Executar Localmente](#como-executar-localmente)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Validação e Segurança](#validação-e-segurança)
- [Licença](#licença)

---

## 🎯 Objetivo do Projeto
Criar um **sistema web completo e responsivo** para a ONG *Patas de Amor*, atendendo aos seguintes requisitos:

- Estrutura semântica em HTML5;  
- No mínimo **8 páginas completas**;  
- **Formulários interativos** com validação e máscaras;  
- **Galeria de fotos**, **vídeos institucionais** e **áudios de depoimentos**;  
- **Gráficos dinâmicos** com canvas (`<canvas>`);  
- Padrões de **acessibilidade (WCAG 2.1 AA)**;  
- **SEO** otimizado e **carregamento rápido**.

---

## 🧱 Páginas e Estrutura
| Página | Arquivo | Descrição |
|--------|----------|-----------|
| Início | `index.html` | Página principal com destaque de campanhas e links rápidos |
| Sobre | `sobre.html` | História, missão e valores da ONG |
| Projetos | `projetos.html` | Projetos sociais ativos e resultados alcançados |
| Voluntariado | `voluntariado.html` | Cadastro de voluntários e informações sobre participação |
| Doações | `doacoes.html` | Como doar e acompanhar campanhas financeiras |
| Transparência | `transparencia.html` | Prestação de contas e relatórios |
| Contato | `contato.html` | Formulário institucional com anexo e mensagem |
| Blog | `blog.html` | Notícias e atualizações da ONG |

---

## 🧾 Formulários e Interatividade
Foram criados **4 formulários completos**, com validação nativa (`required`, `pattern`, `type`) e JavaScript adicional:

1. **Cadastro de voluntário** — dados pessoais, CPF, telefone e habilidades;  
2. **Inscrição em projetos** — motivação e experiência prévia;  
3. **Contato institucional** — assunto, mensagem e anexos;  
4. **Assinatura de newsletter** — e-mail e preferências de conteúdo.

🧩 **Máscaras aplicadas** com JavaScript:
- CPF → `000.000.000-00`
- Telefone → `(00) 00000-0000`
- CEP → `00000-000`

---

## 🎥 Recursos Multimídia e Gráficos

- **Galeria responsiva** com 20+ imagens (`<picture>` e `loading="lazy"`).  
- **Vídeos institucionais** com `<video>` e `poster`.  
- **Depoimentos em áudio** com `<audio>` player personalizado.  
- **Gráficos em Canvas (JavaScript)**:
  - Pizza → distribuição de recursos por projeto;  
  - Linha → evolução de voluntários ao longo do tempo;  
  - Barras → impacto social por região.

---

## 📱 Responsividade e Acessibilidade

### 🔹 Responsividade
- Design **mobile-first** com breakpoints em 600px e 900px.  
- Layouts em **grid** e **flexbox**.  
- Imagens adaptáveis (`srcset`, `<picture>`).  
- Ícones otimizados em SVG.

### 🔹 Acessibilidade (WCAG 2.1 AA)
- Estrutura semântica com `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`.  
- Navegação por teclado e **skip link** (`Ir para o conteúdo`).  
- Contraste de cores > 4.5:1.  
- `aria-label`, `role` e `aria-live` em formulários e menus.  
- Testado com **Lighthouse** e **axe DevTools**.

---

## ⚡ Desempenho e SEO

### Desempenho
- Imagens otimizadas (AVIF, WebP);  
- Lazy loading para imagens e vídeos;  
- Minificação de CSS e JS;  
- Scripts com `defer`;  
- Carregamento médio < **5 segundos**.

### SEO
- Meta tags (`title`, `description`, `og:` e `twitter:`);  
- URLs amigáveis e conteúdo semântico;  
- Sitemap e robots.txt;  
- Headings hierárquicos (`h1` → `h6`).

---

## 🧰 Tecnologias Utilizadas
| Categoria | Ferramentas |
|------------|-------------|
| **Frontend** | HTML5, CSS3, JavaScript (ES6) |
| **Gráficos** | Canvas API |
| **Design** | Mobile-first, Flexbox, Grid |
| **Acessibilidade** | WAI-ARIA, WCAG 2.1 AA |
| **SEO** | Open Graph, Meta Tags |
| **Performance** | Lazy Loading, Imagemin, Minificação |
| **Controle de Versão** | Git + GitHub |

---

## 🖥️ Como Executar Localmente

1. **Clone este repositório:**
   ```bash
   git clone https://github.com/ESTHER-rgb-hub/ong-project.git

   
