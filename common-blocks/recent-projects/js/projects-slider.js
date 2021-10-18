const news_slider = new Swiper(".recent-projects-wrapper__slider-container", {
    direction: "horizontal",
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 40,
    speed: 700,

    navigation: {
        nextEl: ".recent-projects-wrapper__button_right",
        prevEl: ".recent-projects-wrapper__button_left",
    },

    breakpoints: {

        1025: {
            slidesPerView: 2
        },

        1361: {
            slidesPerView: 3,
        },

        1601: {
            spaceBetween: 80,
            slidesPerView: 3,
        },
    }
})