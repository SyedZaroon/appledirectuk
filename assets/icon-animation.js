  document.addEventListener("DOMContentLoaded", () => {
    const icons = document.querySelectorAll(".animate-icons");

  icons.forEach(icon => {
    icon.addEventListener('mousemove', (/** @type {MouseEvent} */ e) => {
      const rect = icon.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      (/** @type {HTMLElement|SVGElement} */ (icon)).style.transform = `translate(${x * 2}px, ${y * 2}px)`;
    });

    icon.addEventListener('mouseleave', () => {
      (/** @type {HTMLElement|SVGElement} */ (icon)).style.transform = 'translate(0, 0)';
    });
  });
});