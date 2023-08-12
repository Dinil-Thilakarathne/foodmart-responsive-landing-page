var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 15,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        loop: true,
    },
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      },
});