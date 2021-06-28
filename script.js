$(function () {
  $(document).scroll(function () {
    var $nav = $(".sticky-top");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});
$(".open-popup-link").magnificPopup({
  type: "inline",
  midClick: true,
  mainClass: "mfp-fade",
});
$(document).ready(function () {
  /* Check width on page load*/
  if ($(window).width() < 769) {
    $("nav ul").addClass("mfp-hide");
  } else {
  }
});

$(window).resize(function () {
  /*If browser resized, check width again */
  if ($(window).width() < 769) {
    $("nav ul").addClass("mfp-hide");
  } else {
    $("nav ul").removeClass("mfp-hide");
  }
});
AOS.init({
  offset: 400,
  duration: 1000,
});
$(".counter").counterUp({
  delay: 10,
  mirror: false,
  easing: "ease-in-out",
  time: 1000,
});
$(".portfolio-button ul li").click(function () {
  $(".portfolio-button ul li").removeClass("active");
  $(this).addClass("active");

  var selector = $(this).attr("data-filter");
  $(".portfolio-container").isotope({
    filter: selector,
  });
  return false;
});
$(document).ready(function () {
  var popup_btn = $(".portfokio-lightbox");
  popup_btn.magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});

$(".gallery-carousel").owlCarousel({
  nav: true,
  navText: [
    '<img src="http://randomsite.zzz.com.ua/cabel/img/s8_al.png">',
    '<img src="http://randomsite.zzz.com.ua/cabel/img/s8_ar.png">',
  ],
  margin: 10,
  loop: true,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    480: {
      items: 2,
    },
    768: {
      items: 3,
    },
    992: {
      items: 4,
    },
  },
});

$(".popup-gallery").magnificPopup({
  delegate: ".owl-item:not(.cloned) a",
  type: "image",
  removalDelay: 500, //delay removal by X to allow out-animation
  callbacks: {
    beforeOpen: function () {
      // just a hack that adds mfp-anim class to markup
      this.st.image.markup = this.st.image.markup.replace(
        "mfp-figure",
        "mfp-figure mfp-with-anim"
      );
      this.st.mainClass = this.st.el.attr("data-effect");
    },
  },
  tLoading: "Loading image #%curr%...",
  mainClass: "mfp-img-mobile",
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
  },
  image: {
    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    titleSrc: function (item) {
      return item.el.attr("title") + "<small></small>";
    },
  },
});
