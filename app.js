// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
console.log('Gallery loaded with animations');
// Keyboard navigation for the lightbox: arrows move between images, Escape closes
document.addEventListener('keydown', (e) => {
  const lightbox = document.querySelector('.lightbox.open');
  if (!lightbox) return;
  if (e.key === 'Escape') {
    lightbox.classList.remove('open');
  } else if (e.key === 'ArrowRight') {
    lightbox.dispatchEvent(new CustomEvent('lightbox:next'));
  } else if (e.key === 'ArrowLeft') {
    lightbox.dispatchEvent(new CustomEvent('lightbox:prev'));
  }
});