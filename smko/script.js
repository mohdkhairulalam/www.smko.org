  // Hamburger toggle
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
  });

document.addEventListener('DOMContentLoaded', function() {
    const aboutToggle = document.getElementById('aboutToggle');
    const aboutSubmenu = document.getElementById('aboutSubmenu');

    if (aboutToggle && aboutSubmenu) {
        aboutToggle.addEventListener('click', function() {
            // সাব-মেনু টগল করা
            if (aboutSubmenu.style.display === "none") {
                aboutSubmenu.style.display = "block";
            } else {
                aboutSubmenu.style.display = "none";
            }
        });
    }
});

  // Scroll to top visibility
  const scrollBtn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 400 ? 'flex' : 'none';
  });

  // Fade-in on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // Gallery filter
  function filterGallery(type, btn) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.gallery-item').forEach(item => {
      if (type === 'all' || item.dataset.type === type) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  }

  // Bounce on donate buttons
  document.querySelectorAll('.btn-donate').forEach(btn => {
    btn.addEventListener('click', function() {
      this.classList.add('bounce-anim');
      setTimeout(() => this.classList.remove('bounce-anim'), 500);
    });
  });