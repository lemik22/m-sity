

// Получаем все кнопки вкладок и контент
const tabButtons = document.querySelectorAll('.ceiling__tab-button');
const tabContents = document.querySelectorAll('.ceiling__content');

// Если есть кнопки и контент
if (tabButtons.length > 0 && tabContents.length > 0) {
  // Показываем первый контент по умолчанию
  tabContents[0].classList.add('active');
  
  // Добавляем обработчик для каждой кнопки
  tabButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      // Удаляем активный класс у всех кнопок и контента
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      // Добавляем активный класс текущей кнопке и соответствующему контенту
      button.classList.add('active');
      tabContents[index].classList.add('active');
    });
  });
}


// document.addEventListener('DOMContentLoaded', function() {
//   // Получаем элементы
//   const modal = document.getElementById('imageModal');
//   const modalImg = document.getElementById('modalImage');
//   const closeBtn = document.querySelector('.close-modal');
  
//   // Получаем все изображения галереи
//   const images = document.querySelectorAll('.gallery-image');
  
//   // Добавляем обработчик клика для каждого изображения
//   images.forEach(img => {
//     img.addEventListener('click', function() {
//       modal.style.display = "flex";
//       modalImg.src = this.src;
//     });
//   });
  
//   // Закрытие модального окна по клику на крестик
//   closeBtn.addEventListener('click', function() {
//     modal.style.display = "none";
//   });
  
//   // Закрытие модального окна по клику вне изображения
//   modal.addEventListener('click', function(e) {
//     if (e.target === modal) {
//       modal.style.display = "none";
//     }
//   });
  
//   // Закрытие по клавише Esc
//   document.addEventListener('keydown', function(e) {
//     if (e.key === "Escape" && modal.style.display === "flex") {
//       modal.style.display = "none";
//     }
//   });
// });