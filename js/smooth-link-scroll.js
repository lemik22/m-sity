$('a[href^="#"]').on('click', function(e) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 600); // 600 — это длительность анимации в миллисекундах
  }
});
