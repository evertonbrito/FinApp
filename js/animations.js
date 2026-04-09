/* ═══════════════════════════════════════════════════════════
   FinApp — MagicUI Animations Engine
   Aplica animações inspiradas em magicui.design
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ─────────────────────────────────────────────────────────
     1. METEORS — Hero background
  ───────────────────────────────────────────────────────── */
  function initMeteors() {
    const hero = document.getElementById('hero');
    if (!hero) return;

    // Garante que o hero tem position relative
    hero.style.position = 'relative';
    hero.style.overflow = 'hidden';

    const container = document.createElement('div');
    container.className = 'fin-meteor-container';

    const count = 18;
    for (let i = 0; i < count; i++) {
      const meteor = document.createElement('span');
      meteor.className = 'fin-meteor';

      const left  = Math.random() * 120 - 10;  // -10% a 110%
      const top   = Math.random() * 40;         // 0% a 40%
      const duration = 4 + Math.random() * 6;  // 4s a 10s
      const delay    = Math.random() * 8;       // 0s a 8s
      const height   = 60 + Math.random() * 80; // 60px a 140px
      const trail    = 60 + Math.random() * 60; // 60px a 120px

      meteor.style.cssText = `
        left: ${left}%;
        top: ${top}%;
        height: ${height}px;
        --meteor-duration: ${duration}s;
        --meteor-delay: ${delay}s;
        --meteor-trail: ${trail}px;
      `;

      container.appendChild(meteor);
    }

    hero.insertBefore(container, hero.firstChild);
  }

  /* ─────────────────────────────────────────────────────────
     2. AURORA — Hero glow
  ───────────────────────────────────────────────────────── */
  function initAurora() {
    const hero = document.getElementById('hero');
    if (!hero) return;

    const aurora = document.createElement('div');
    aurora.className = 'fin-aurora';
    hero.insertBefore(aurora, hero.firstChild);
  }

  /* ─────────────────────────────────────────────────────────
     3. BORDER BEAM — Pricing cards & Feature cards
  ───────────────────────────────────────────────────────── */
  function initBorderBeam() {
    // Pricing cards
    const pricingCards = document.querySelectorAll(
      '#pricing [data-framer-name="Preços Card Wrapper"] > *, ' +
      '[data-framer-name="Preços Card Wrapper"]'
    );

    // Feature cards
    const featureCards = document.querySelectorAll(
      '[data-framer-name="Card List"] > *, ' +
      '[data-framer-name="Card Wrap"]'
    );

    // Integration cards
    const integrationCards = document.querySelectorAll(
      '[data-framer-name="Integration Card Wrapper"] > *'
    );

    const allCards = [...pricingCards, ...featureCards, ...integrationCards];

    allCards.forEach((card, i) => {
      if (!card || card.querySelector('.fin-border-beam')) return;

      card.classList.add('fin-border-beam-wrap');
      card.style.position = 'relative';

      const beam = document.createElement('div');
      beam.className = 'fin-border-beam';

      // Varia a cor e velocidade por card
      const hues = ['#7C5CFC', '#a78bfa', '#38bdf8', '#818cf8'];
      const endhues = ['#a78bfa', '#38bdf8', '#7C5CFC', '#c4b5fd'];
      const idx = i % hues.length;

      beam.style.setProperty('--beam-color-start', hues[idx]);
      beam.style.setProperty('--beam-color-end', endhues[idx]);
      beam.style.setProperty('--beam-duration', `${3 + (i % 3)}s`);

      card.appendChild(beam);
    });
  }

  /* ─────────────────────────────────────────────────────────
     4. SHIMMER — Botões CTA
  ───────────────────────────────────────────────────────── */
  function initShimmerButtons() {
    // Hero Button
    const heroBtn = document.querySelector('[data-framer-name="Hero Button"]');
    if (heroBtn) heroBtn.classList.add('fin-shimmer');

    // Preços buttons
    document.querySelectorAll('[data-framer-name="Preços Button"]').forEach(btn => {
      btn.classList.add('fin-shimmer');
    });

    // Apply Button (feature cards)
    document.querySelectorAll('[data-framer-name="Apply Button"]').forEach(btn => {
      btn.classList.add('fin-shimmer');
    });

    // CTA button
    const ctaBtn = document.querySelector('[data-framer-name="Cta Button"]');
    if (ctaBtn) ctaBtn.classList.add('fin-shimmer');
  }

  /* ─────────────────────────────────────────────────────────
     5. RIPPLE — CTA Section background
  ───────────────────────────────────────────────────────── */
  function initRipple() {
    // Seção "Chega de perder dinheiro"
    const ctaSection = document.querySelector(
      '[data-framer-name="Chega de perder dinheiro sem perceber"]'
    )?.closest('section, [class*="framer-"]');

    const targets = ctaSection
      ? [ctaSection]
      : document.querySelectorAll('[data-framer-name="Cta Button"]');

    targets.forEach(target => {
      if (!target || target.querySelector('.fin-ripple-container')) return;

      target.style.position = 'relative';
      target.style.overflow = 'hidden';

      const rippleContainer = document.createElement('div');
      rippleContainer.className = 'fin-ripple-container';

      const ringCount = 4;
      for (let i = 0; i < ringCount; i++) {
        const ring = document.createElement('div');
        ring.className = 'fin-ripple-ring';
        ring.style.setProperty('--ripple-i', i);
        ring.style.setProperty('--ripple-duration', '3s');
        ring.style.width  = `${80 + i * 50}px`;
        ring.style.height = `${80 + i * 50}px`;
        rippleContainer.appendChild(ring);
      }

      target.insertBefore(rippleContainer, target.firstChild);
    });
  }

  /* ─────────────────────────────────────────────────────────
     6. SHINY TEXT — Subtítulo do hero
  ───────────────────────────────────────────────────────── */
  function initShinyText() {
    // Rating Text / pequeno texto de destaque
    const ratingText = document.querySelector('[data-framer-name="Rating Text"]');
    if (ratingText) ratingText.classList.add('fin-shiny-text');
  }

  /* ─────────────────────────────────────────────────────────
     7. CARD HOVER LIFT — Feature cards
  ───────────────────────────────────────────────────────── */
  function initCardHover() {
    const selectors = [
      '[data-framer-name="Card List"] > *',
      '[data-framer-name="Integration Card Wrapper"] > *',
      '[data-framer-name="Testimonial Section"] [data-framer-name="Default 1"]',
    ];

    selectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(card => {
        card.classList.add('fin-card-hover');
      });
    });
  }

  /* ─────────────────────────────────────────────────────────
     8. SCROLL REVEAL — Seções e cards
  ───────────────────────────────────────────────────────── */
  function initScrollReveal() {
    const revealSelectors = [
      '[data-framer-name="Solution Section"]',
      '[data-framer-name="Feature Section"]',
      '[data-framer-name="Integration Section"]',
      '[data-framer-name="How It Work Section"]',
      '[data-framer-name="Testimonial Section"]',
      '[data-framer-name="Preços Section"]',
      '[data-framer-name="FAQs"]',
      '[data-framer-name="Card List"] > *',
      '[data-framer-name="Integration Card Wrapper"] > *',
      '[data-framer-name="Default 1"]',
    ];

    const elements = revealSelectors.flatMap(sel =>
      [...document.querySelectorAll(sel)]
    );

    // Adiciona delay escalonado para itens irmãos
    const parentDelayMap = new Map();

    elements.forEach(el => {
      el.classList.add('fin-reveal');

      const parent = el.parentElement;
      if (!parentDelayMap.has(parent)) parentDelayMap.set(parent, 0);
      const delay = parentDelayMap.get(parent);
      if (delay > 0) el.classList.add(`fin-reveal-delay-${Math.min(delay, 4)}`);
      parentDelayMap.set(parent, delay + 1);
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fin-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '-60px', threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
  }

  /* ─────────────────────────────────────────────────────────
     9. PING — Pontos/badges de destaque
  ───────────────────────────────────────────────────────── */
  function initPing() {
    // Status indicators / dots
    document.querySelectorAll('[data-framer-name="Star"]').forEach(dot => {
      dot.classList.add('fin-ping');
    });
  }

  /* ─────────────────────────────────────────────────────────
     Init — Executa todas as animações após DOM carregar
  ───────────────────────────────────────────────────────── */
  function init() {
    initAurora();
    initMeteors();
    initBorderBeam();
    initShimmerButtons();
    initRipple();
    initShinyText();
    initCardHover();
    initScrollReveal();
    initPing();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
