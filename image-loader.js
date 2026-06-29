// Lazy loading with IntersectionObserver + blur placeholder
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      const realImg = new Image();
      realImg.onload = () => {
        img.src = img.dataset.src;
        img.classList.add('loaded');
      };
      realImg.src = img.dataset.src;
      imageObserver.unobserve(img);
    }
  });
}, { rootMargin: '200px' });

document.querySelectorAll('img[data-src]').forEach(img => {
  imageObserver.observe(img);
});