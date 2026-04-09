/* ═══════════════════════════════════════════════════════════
   FinApp — Shimmer Button Injector
   Aplica o shimmer button do MagicUI nas <a> tags do Framer
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /**
   * Injeta as camadas do shimmer button num elemento existente.
   * Preserva o conteúdo original e os estilos do Framer.
   *
   * @param {Element} el       - O botão existente (<a> ou <div>)
   * @param {string}  variant  - 'primary' | 'secondary' | 'tertiary'
   */
  function applyShimmer(el, variant) {
    if (!el || el.dataset.shimmerApplied) return;
    el.dataset.shimmerApplied = 'true';

    el.classList.add('shimmer-btn', `shimmer-btn--${variant}`);

    /* ── Spark container ──────────────────────────────────── */
    const spark = document.createElement('div');
    spark.className = 'shimmer-btn__spark';

    const sparkInner = document.createElement('div');
    sparkInner.className = 'shimmer-btn__spark-inner';

    const sparkConic = document.createElement('div');
    sparkConic.className = 'shimmer-btn__spark-conic';

    sparkInner.appendChild(sparkConic);
    spark.appendChild(sparkInner);

    /* ── Highlight ────────────────────────────────────────── */
    const highlight = document.createElement('div');
    highlight.className = 'shimmer-btn__highlight';

    /* ── Backdrop ─────────────────────────────────────────── */
    const backdrop = document.createElement('div');
    backdrop.className = 'shimmer-btn__backdrop';

    /* Sincroniza a cor do backdrop com o background original do botão */
    const computedBg = el.style.backgroundColor || getComputedStyle(el).backgroundColor;
    if (computedBg && computedBg !== 'rgba(0, 0, 0, 0)' && computedBg !== 'transparent') {
      backdrop.style.background = computedBg;
      el.style.setProperty('--sb-bg', computedBg);
    }

    /* Injeta na ordem correta (spark primeiro, depois highlight e backdrop) */
    el.insertBefore(spark,    el.firstChild);
    el.insertBefore(backdrop, el.firstChild);
    el.appendChild(highlight);
  }

  function init() {
    /* ── PRIMARY: Hero Button + Cta Button ─────────────────── */
    [
      '[data-framer-name="Hero Button"]',
      '[data-framer-name="Cta Button"]',
    ].forEach(sel => {
      document.querySelectorAll(sel).forEach(el => applyShimmer(el, 'primary'));
    });

    /* ── SECONDARY: Preços Button ───────────────────────────── */
    document.querySelectorAll('[data-framer-name="Preços Button"]')
      .forEach(el => applyShimmer(el, 'secondary'));

    /* ── TERTIARY: Apply Button + Save text ─────────────────── */
    [
      '[data-framer-name="Apply Button"]',
      '[data-framer-name="Save text"]',
    ].forEach(sel => {
      document.querySelectorAll(sel).forEach(el => applyShimmer(el, 'tertiary'));
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
