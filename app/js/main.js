$(function () {

  //2. Получить элемент, к которому необходимо добавить маску
  // $("#phone").mask("+7(999) 999-9999");

  // Попапы
  $('.popup').each(function (i) {
    let trigger = $(this).attr('data-popup-id');
    let modal = $('#' + trigger);

    $(modal).appendTo('.site-popups');

    $(this).click(function () {
      $(modal).show();
    });

    $(modal)
      .find('.close-popup')
      .click(function (e) {
        $(modal).hide();
      });

    $(modal)
      .find('.popup-overlay')
      .click(function () {
        if (event.target !== this) return;
        $(modal).hide();
      });

    $(document).keydown(function (e) {
      if (e.key === 'Escape') {
        $(modal).hide();
      }
    });
  });
  // Бургер-меню
  $('.burger-menu').click(function () {
    $(this).toggleClass('active');
    $('.header__nav').toggleClass('active');
  });

  // Закрытие меню при клике на ссылку
  $('.menu a').click(function () {
    $('.burger-menu').removeClass('active');
    $('.header__nav').removeClass('active');
  });
})