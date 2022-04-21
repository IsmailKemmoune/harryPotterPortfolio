document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    height: "720px",
    perMove: 1,
    rewind: true,
    speed: 1000,
    perPage: 3,
    autoplay: true,
    interval: 2500,
    pauseOnFocus: true,
    breakpoints: {
      1600: {
        perPage: 2,
      },
      920: {
        perPage: 1,
      },
      390: {
        arrows: false,
        height: "590px"
      }
    },

  });
  splide.mount();
});

VanillaTilt.init(document.querySelectorAll(".book-card"), {
  max: 5,
  speed: 2000,
  easing: "cubic-bezier(.03,.98,.52,.99)",
  scale: 1.02,
});
