let text_content_1 = document.querySelector("#text-content-1");
let rating_section = document.querySelector(".rating-wrapper");
let services_section = document.querySelector(".services-tiles-wrapper");
let offer_section = document.querySelector(".offer-wrapper");
let text_content_2 = document.querySelector("#text-content-2");
let contact_section = document.querySelector(".contact-us-wrapper");
let recent_projects = document.querySelector(".recent-projects-wrapper");
let partners_section = document.querySelector(".partners-wrapper");
let faq_section = document.querySelector(".faq-wrapper");

const elem_top_left = document.querySelectorAll(".elem-top-left");
const elem_top_right = document.querySelectorAll(".elem-top-right");
const elem_center_right = document.querySelectorAll(".elem-center-right");
const elem_bottom_left = document.querySelectorAll(".elem-bottom-left");
const elem_bottom_right = document.querySelectorAll(".elem-bottom-right");
const elem_center_left = document.querySelectorAll(".elem-center-left");

const blue_1 = "blue-1";
const blue_2 = "blue-2";
const blue_3 = "blue-3";

const green_1 = "green-1";
const green_2 = "green-2";
const green_3 = "green-3";

const orange_1 = "orange-1";
const orange_2 = "orange-2";
const orange_3 = "orange-3";

const purple_1 = "purple-1";
const purple_2 = "purple-2";
const purple_3 = "purple-3";

const red_1 = "red-1";
const red_2 = "red-2";
const red_3 = "red-3";

function getCoords(elem) {

    let box = elem.getBoundingClientRect();
    console.log(box);

    return {
        top: box.top + pageYOffset,
        bottom: box.top + box.height + pageYOffset,
    };
}

text_content_1 = getCoords(text_content_1);
rating_section = getCoords(rating_section);
services_section = getCoords(services_section);
offer_section = getCoords(offer_section);
text_content_2 = getCoords(text_content_2);
contact_section = getCoords(contact_section);
recent_projects = getCoords(recent_projects);
faq_section = getCoords(faq_section);

function addColor(color_1, color_2, color_3) {

    for (let i = 0; i < 2; i++) {
        elem_top_left[i].classList.add(color_1);
        elem_bottom_right[i].classList.add(color_1);
        elem_top_right[i].classList.add(color_2);
        elem_bottom_left[i].classList.add(color_2);
        elem_center_left[i].classList.add(color_3);
        elem_center_right[i].classList.add(color_3);
    }
}

function removeColor(color_1, color_2, color_3) {

    for (let i = 0; i < 2; i++) {
        elem_top_left[i].classList.remove(color_1);
        elem_bottom_right[i].classList.remove(color_1);
        elem_top_right[i].classList.remove(color_2);
        elem_bottom_left[i].classList.remove(color_2);
        elem_center_left[i].classList.remove(color_3);
        elem_center_right[i].classList.remove(color_3);
    }
}

window.addEventListener("scroll", () => {

    if (document.documentElement.scrollTop >= text_content_1.top && document.documentElement.scrollTop <= services_section.top) {

        addColor(blue_1, blue_2, blue_3);

    } else {

        removeColor(blue_1, blue_2, blue_3);

        if (document.documentElement.scrollTop >= services_section.top && document.documentElement.scrollTop <= offer_section.bottom) {

            addColor(green_1, green_2, green_3);

        } else {

            removeColor(green_1, green_2, green_3);

            if (document.documentElement.scrollTop >= offer_section.top && document.documentElement.scrollTop <= contact_section.bottom) {

                addColor(orange_1, orange_2, orange_3);

            } else {

                removeColor(orange_1, orange_2, orange_3);

                if (document.documentElement.scrollTop >= contact_section.top && document.documentElement.scrollTop <= recent_projects.bottom) {

                    addColor(purple_1, purple_2, purple_3);

                } else {

                    removeColor(purple_1, purple_2, purple_3);

                    if (document.documentElement.scrollTop >= faq_section.top) {

                        addColor(red_1, red_2, red_3);

                    } else {

                        removeColor(red_1, red_2, red_3);
                    }
                }
            }
        }
    }

    if (document.documentElement.scrollTop < faq_section.top) {
        removeColor(red_1, red_2, red_3);
    }

    if (document.documentElement.scrollTop < contact_section.top) {
        removeColor(purple_1, purple_2, purple_3);
    }

    if (document.documentElement.scrollTop < offer_section.top) {
        removeColor(orange_1, orange_2, orange_3);
    }

    if (document.documentElement.scrollTop < services_section.top) {
        removeColor(green_1, green_2, green_3);
    }

});