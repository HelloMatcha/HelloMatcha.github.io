// Scroll Trigger Animation
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

// Scroll Trigger Animation Footer
window.addEventListener("scroll", () => {
    const footer = document.getElementById("footer");
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.body.offsetHeight;

    const atBottom = scrollY + windowHeight >= docHeight - 50;

    if (atBottom) {
      footer.classList.add("show");
    } else {
      footer.classList.remove("show");
    }
  });


// Flashlight Cursor  
document.addEventListener('mousemove', function (e) {
  const light = document.querySelector('.flashlight');
  light.style.left = e.clientX + 'px';
  light.style.top = e.clientY + 'px';
});


//Modal Image
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const captionText = document.getElementById("caption");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll(".modal-trigger").forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
      captionText.innerHTML = img.alt;
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});