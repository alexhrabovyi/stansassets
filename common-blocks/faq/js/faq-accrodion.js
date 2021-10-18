const button_1 = document.querySelectorAll(".faq-accord-button-1");
const button_2 = document.querySelectorAll(".faq-accord-button-2");
const button_3 = document.querySelectorAll(".faq-accord-button-3");
const button_4 = document.querySelectorAll(".faq-accord-button-4");
const button_5 = document.querySelectorAll(".faq-accord-button-5");

const icon_1 = document.querySelector(".faq-accord-icon-1");
const icon_2 = document.querySelector(".faq-accord-icon-2");
const icon_3 = document.querySelector(".faq-accord-icon-3");
const icon_4 = document.querySelector(".faq-accord-icon-4");
const icon_5 = document.querySelector(".faq-accord-icon-5");

const content_1 = document.querySelector(".faq-accord-content-1");
const content_2 = document.querySelector(".faq-accord-content-2");
const content_3 = document.querySelector(".faq-accord-content-3");
const content_4 = document.querySelector(".faq-accord-content-4");
const content_5 = document.querySelector(".faq-accord-content-5");

function addAccordion(button, icon, content) {

    for (let i = 0; i < 2; i++) {
        button[i].addEventListener("click", () => {
            accrodion(icon, content);
        })
    }
}

function accrodion(icon, content) {

    icon.classList.toggle("icon-transform");

    if (content.style.maxHeight == "0px") {
        content.style.maxHeight = content.scrollHeight + "px";
    } else {
        content.style.maxHeight = "0px";
    }
}

addAccordion(button_1, icon_1, content_1);
addAccordion(button_2, icon_2, content_2);
addAccordion(button_3, icon_3, content_3);
addAccordion(button_4, icon_4, content_4);
addAccordion(button_5, icon_5, content_5);