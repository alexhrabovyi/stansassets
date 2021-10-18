const body = document.body;
const html = document.documentElement;

let doc_height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

const social_links_nav = document.querySelector(".social-links-nav");

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop >= doc_height - 1500) {
        social_links_nav.classList.add("nav-hidden");
    } else {
        social_links_nav.classList.remove("nav-hidden");
    }
})