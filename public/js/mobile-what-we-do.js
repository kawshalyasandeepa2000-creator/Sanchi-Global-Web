/* SENCHI GLOBAL — Mobile "What We Do" swipe progress.
   Does not alter the desktop section, service cards, or navigation links. */
(() => {
  function init() {
    const section = document.querySelector('#services');
    const gallery = section?.querySelector('.service-grid');
    if (!gallery || gallery.dataset.mobileSwipeReady === 'true') return;
    gallery.dataset.mobileSwipeReady = 'true';

    const bar = document.createElement('div');
    bar.className = 'services-mobile-progress';
    bar.setAttribute('aria-hidden', 'true');
    bar.innerHTML = '<span class="services-mobile-progress__fill"></span>';
    const hint = document.createElement('p');
    hint.className = 'services-mobile-swipe-hint';
    hint.setAttribute('aria-hidden', 'true');
    hint.innerHTML = '<span>SWIPE TO EXPLORE</span><span class="services-mobile-swipe-count">01 / 03</span>';
    gallery.insertAdjacentElement('afterend', bar);
    bar.insertAdjacentElement('afterend', hint);

    const fill = bar.querySelector('.services-mobile-progress__fill');
    const count = hint.querySelector('.services-mobile-swipe-count');
    const cards = Array.from(gallery.querySelectorAll('.service-card'));
    const update = () => {
      if (window.innerWidth > 720) return;
      const max = Math.max(0, gallery.scrollWidth - gallery.clientWidth);
      const progress = max ? gallery.scrollLeft / max : 0;
      const visiblePortion = gallery.scrollWidth
        ? Math.min(1, gallery.clientWidth / gallery.scrollWidth)
        : 1;
      const fraction = Math.max(visiblePortion, Math.min(1, visiblePortion + progress * (1 - visiblePortion)));
      fill.style.width = `${(fraction * 100).toFixed(2)}%`;
      let closest = 0;
      let nearest = Infinity;
      cards.forEach((card, i) => {
        const delta = Math.abs(card.offsetLeft - gallery.offsetLeft - gallery.scrollLeft);
        if (delta < nearest) { nearest = delta; closest = i; }
      });
      count.textContent = `${String(closest + 1).padStart(2, '0')} / 03`;
    };
    gallery.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
