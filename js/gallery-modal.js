const modal = document.getElementById('galleryModal');
const modalImg = document.getElementById('galleryModalImg');
const modalClose = document.getElementById('galleryModalClose');

document.querySelector('.gallery__slider').addEventListener('click', (e) => {
  const img = e.target.closest('.gallery__slide img');
  if (!img) return;

  modalImg.src = img.src;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; // блокируем скролл
});

function closeModal() {
  modal.classList.remove('active');
  modalImg.src = '';
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target.classList.contains('gallery-modal__overlay')) {
    closeModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});