const header_slider = new Swiper(".header-wrapper__slider-container", {
    allowTouchMove: false,
    slidesPerView: 1,
    direction: 'horizontal',
    speed: 1200,
    loop: true,

    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".header-wrapper__pagination",
        clickable: true,
        bulletClass: "header-wrapper__pag-bullet",
        bulletActiveClass: "header-wrapper__pag-bullet_active",
    },
})

const header_mobile_slider = new Swiper(".header-wrapper__mobile-slider", {
    allowTouchMove: false,
    slidesPerView: 1,
    direction: 'horizontal',
    speed: 1200,
    loop: true,

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
})