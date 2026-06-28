document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Message sent! Thanks.');
  e.target.reset();
});