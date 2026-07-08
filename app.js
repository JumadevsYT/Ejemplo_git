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
// Dark/light theme toggle, persisted across visits
const themeToggle = document.createElement('button');
themeToggle.className = 'theme-toggle';
themeToggle.textContent = 'Toggle theme';
document.body.appendChild(themeToggle);

const savedTheme = localStorage.getItem('theme') || 'dark';
document.body.dataset.theme = savedTheme;

themeToggle.addEventListener('click', () => {
  const next = document.body.dataset.theme === 'light' ? 'dark' : 'light';
  document.body.dataset.theme = next;
  localStorage.setItem('theme', next);
});