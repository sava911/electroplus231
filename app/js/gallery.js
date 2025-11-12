$(function () {
  // Magnific-popup for ZOOM after click current image
  $(".gallery .images__link").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
      tCounter: "%curr% of %total%"
    },
    removalDelay: 300,
    mainClass: "mfp-fade"
  });

  // Modify checked preview
  $(".gallery .preview__link").on("click", function () {
    $(".gallery .preview__link").removeClass("checked");
    $(this).addClass("checked");
  });


})
