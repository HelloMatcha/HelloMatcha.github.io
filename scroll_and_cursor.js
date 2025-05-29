document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll('.scroll-fade-up');

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target); // remove this line if you want it to repeat
    });
  }, {
    threshold: 0.2
  });

  faders.forEach(el => {
    appearOnScroll.observe(el);
  });
});

  // Flashlight Cursor  
document.addEventListener('mousemove', function (e) {
  const light = document.querySelector('.flashlight');
  light.style.left = e.clientX + 'px';
  light.style.top = e.clientY + 'px';
});