// Navbar scroll effect
(function () {
  var navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', function () {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
})();

// FAQ Accordion
(function () {
  var items = document.querySelectorAll('.accordion-item');
  items.forEach(function (item) {
    var trigger = item.querySelector('.accordion-trigger');
    if (!trigger) return;
    trigger.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      // Close all
      items.forEach(function (i) { i.classList.remove('open'); });
      // Toggle clicked
      if (!isOpen) item.classList.add('open');
    });
  });
})();

// Scroll-reveal: fade-up elements on scroll
(function () {
  var els = document.querySelectorAll(
    '.section-header, .feat-card, .icon-item, .pricing-card, .walkthrough-text, .walkthrough-ui, .about-text, .accordion-item'
  );
  if (!('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.style.opacity = '1'; });
    return;
  }
  els.forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
  });
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(function (el) { observer.observe(el); });
})();

// Smooth scroll for anchor links
(function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var hash = link.getAttribute('href');
      if (!hash || hash === '#') return;
      var target = document.querySelector(hash);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();
