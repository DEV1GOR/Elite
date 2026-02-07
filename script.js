/* ================================================================
[1. CONFIGURAÇÃO DO SCROLL REVEAL]
Animações modernas de surgimento ao scrollar
================================================================
*/
const sr = ScrollReveal({
  origin: "top", // Direção inicial
  distance: "50px", // Deslocamento
  duration: 2000, // Tempo da animação (ms)
  delay: 100, // Atraso global
  reset: false, // Animar apenas uma vez
});

// --- ANIMAÇÕES POR SEÇÃO ---

// Hero: Impacto inicial
sr.reveal(".hero h1, .hero .subtitle, .hero .cta-group", { interval: 200 });
sr.reveal(".features-grid-hero", { delay: 600, origin: "bottom" });

// Problemas: Efeito cascata nos cards
sr.reveal(".problems-section h2", {});
sr.reveal(".problem-card", {
  interval: 200,
  origin: "bottom",
  distance: "30px",
});

// Método: Entrada lateral
sr.reveal(".method-card", {
  interval: 300,
  origin: "left",
  distance: "100px",
});

// Timeline (Como Funciona): Escala e crescimento
sr.reveal(".timeline-item", {
  interval: 400,
  scale: 0.8,
  duration: 1500,
});

// Modalidades (Pricing): Surgimento suave
sr.reveal(".pricing-card", {
  interval: 200,
  scale: 0.9,
});

// Tabela Comparativa: Entrada lateral oposta
sr.reveal(".comparison-table-wrapper", {
  origin: "right",
  distance: "50px",
});

// FAQ e Resultados: Surgimento de baixo para cima
sr.reveal(".faq-item, .result-card", {
  interval: 100,
  origin: "bottom",
});

/* ================================================================
[2. LÓGICA DO FAQ - ACORDEÃO]
Gerenciamento de abertura/fechamento das dúvidas
================================================================
*/
document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const currentItem = button.parentElement;

    // Fecha outros itens abertos ao clicar em um novo (melhora a experiência)
    document.querySelectorAll(".faq-item").forEach((item) => {
      if (item !== currentItem) {
        item.classList.remove("active");
      }
    });

    // Alterna o estado do item clicado
    currentItem.classList.toggle("active");
  });
});

/* ================================================================
[3. SMOOTH SCROLL]
Ajuste para garantir que o scroll interno seja sempre fluido
================================================================
*/
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

/* [ENVIO PARA WHATSAPP] */
document.getElementById("lead-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Captura os valores dos campos
  const nome = document.getElementById("nome").value;
  const whatsapp = document.getElementById("whatsapp").value;
  const email = document.getElementById("email").value;
  const objetivo = document.getElementById("objetivo").value;

  // Seu número de telefone (com DDD e sem espaços/traços)
  const meuNumero = "5581991396632";

  // Constrói a mensagem personalizada
  const mensagem =
    `*Olá, Elite Cursos!* 🎓%0A%0A` +
    `Meu nome é *${nome}* e gostaria de receber meu plano de estudos.%0A%0A` +
    `Meu objetivo principal é: *${objetivo}*.%0A%0A` +
    `Como podemos começar?`;

  // Gera o link da API do WhatsApp
  const url = `https://api.whatsapp.com/send?phone=${meuNumero}&text=${mensagem}`;

  // Abre em uma nova aba
  window.open(url, "_blank");

  // Limpa o formulário após o redirecionamento
  this.reset();
});
