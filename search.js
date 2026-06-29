const searchInput = document.getElementById('search');
const cards = document.querySelectorAll('.card');

searchInput?.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  cards.forEach(card => {
    const text = card.querySelector('span')?.textContent.toLowerCase() || '';
    card.style.display = text.includes(query) ? '' : 'none';
  });
});