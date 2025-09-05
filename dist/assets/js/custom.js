document.addEventListener('DOMContentLoaded', () => {
  // Counter Animation
  const counters = document.querySelectorAll('[data-counter-target]');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-counter-target'), 10);
    let count = 0;
    const increment = target / 100;
    const updateCounter = () => {
      count += increment;
      if (count < target) {
        counter.textContent = Math.ceil(count).toString();
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target.toString();
      }
    };
    updateCounter();
  });
});