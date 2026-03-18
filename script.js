// ===== INTERSECTION OBSERVER (reveal on scroll) =====
document.addEventListener('DOMContentLoaded', () => {

  // Pequeno efeito de ripple nos cards ao clicar
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function (e) {
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${e.clientX - rect.left - size / 2}px;
        top: ${e.clientY - rect.top - size / 2}px;
        background: rgba(201, 149, 106, 0.2);
        border-radius: 50%;
        transform: scale(0);
        animation: rippleAnim 0.5s ease-out;
        pointer-events: none;
      `;
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 500);
    });
  });

  // Injetar keyframe do ripple
  const style = document.createElement('style');
  style.textContent = `
    @keyframes rippleAnim {
      to { transform: scale(2.5); opacity: 0; }
    }
  `;
  document.head.appendChild(style);

  // Bio: expandir/colapsar no mobile
  const bioText = document.querySelector('.bio-text');
  const bioToggle = document.getElementById('bio-toggle');

  if (bioToggle && bioText) {
    let expanded = false;
    bioToggle.addEventListener('click', () => {
      expanded = !expanded;
      bioText.classList.toggle('expanded', expanded);
      bioToggle.textContent = expanded ? 'Ler menos ↑' : 'Ler mais ↓';
    });
  }

});
