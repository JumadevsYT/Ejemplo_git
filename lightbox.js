function openLightbox(src, alt) {
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = `
    <div class="lightbox-content">
      <img src="${src}" alt="${alt}" />
      <button class="lightbox-close">&times;</button>
      <p class="lightbox-caption">${alt}</p>
    </div>
  `;
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target.classList.contains('lightbox-close')) {
      overlay.remove();
    }
  });
  document.body.appendChild(overlay);
}

document.querySelectorAll('.card').forEach(card => {
  card.style.cursor = 'pointer';
  card.addEventListener('click', () => {
    const img = card.querySelector('img');
    openLightbox(img.src, img.alt || card.querySelector('span')?.textContent);
  });
});