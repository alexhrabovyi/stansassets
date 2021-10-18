const button = document.querySelector(".partners-wrapper__button");
const hidden_content = document.querySelector(".partners-wrapper__hidden-content");
const button_icon = document.querySelector(".partners-wrapper__button-icon");
const button_text = document.querySelector(".partners-wrapper__button-text");

button.addEventListener("click", () => {

    button_icon.classList.toggle("icon-transform");

    if (button_text.innerHTML == "Show more") {
        button_text.innerHTML = "Hide";
    } else {
        button_text.innerHTML = "Show more"
    }

    if (hidden_content.style.maxHeight == "0px") {
        hidden_content.style.maxHeight = hidden_content.scrollHeight + "px";
    } else {
        hidden_content.style.maxHeight = "0px";
    }
})