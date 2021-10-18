const services_link = document.querySelector("#services-nav");
const technologies_link = document.querySelector("#technologies-nav");
const about_link = document.querySelector("#about-nav");

const services_content = document.querySelector("#content-services");
const technologies_content = document.querySelector("#content-technologies");
const about_content = document.querySelector("#content-about");

function add_hover_color(link, content) {
    content.addEventListener("mouseover", () => {
        link.classList.add("blue-color");
    });

    content.addEventListener("mouseout", () => {
        link.classList.remove("blue-color");
    })
}

add_hover_color(services_link, services_content);
add_hover_color(technologies_link, technologies_content);
add_hover_color(about_link, about_content);