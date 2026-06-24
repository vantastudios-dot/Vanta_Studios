document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('cs-transition');

  // Reveal: orange overlay slides upward to show the page
  if (overlay) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        overlay.classList.add('reveal');
      });
    });
  }

  // Any link with [data-cs-back] triggers orange cover then navigate
  document.querySelectorAll('[data-cs-back]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const href = el.getAttribute('href') || '/';
      if (overlay) {
        overlay.classList.remove('reveal');
        overlay.style.transform = 'translateY(100%)';
        overlay.style.transition = 'none';
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            overlay.style.transition = 'transform 0.55s cubic-bezier(0.76, 0, 0.24, 1)';
            overlay.style.transform = 'translateY(0)';
            setTimeout(() => { window.location.href = href; }, 580);
          });
        });
      } else {
        window.location.href = href;
      }
    });
  });
});
