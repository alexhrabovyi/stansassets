const burger = document.querySelector(".burger");
const content = document.querySelector(".mobile-nav__hidden");

burger.addEventListener("click", () => {
    content.classList.toggle("mobile-nav-unhide");
});