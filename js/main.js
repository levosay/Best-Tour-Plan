const hotelSlider = new Swiper('.hotel-slider', {
  loop: true,

  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  effect: "coverflow",
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
const reviewsSlider = new Swiper('.reviews-slider', {
  loop: true,

  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [43.57597775, 39.72587285],
            zoom: 15
        });
    }

