new Gallery(document.getElementById("gallery"), {
    margin: 10,
    dots: false,
});

/*Burger*/

const BODY_BURGER_OPENED = "body_burger_opened";

const bodyNode = document.querySelector("body");
const burgerControlNode = document.querySelector(".burger-menu__control");
const burgerSpaceCoverNode = document.querySelector(".cover-space__burger");

burgerControlNode.addEventListener("click", (_event) => {
    if (bodyNode.classList.contains(BODY_BURGER_OPENED)) {
        bodyNode.classList.remove(BODY_BURGER_OPENED);
    } else {
        bodyNode.classList.add(BODY_BURGER_OPENED);
    }
});

burgerSpaceCoverNode.addEventListener("click", () => {
    bodyNode.classList.remove(BODY_BURGER_OPENED);
});

/*Sticky header*/

const HEADER_SCROLLED_CLASS = "header_scrolled";
const headerNode = document.querySelector(".header");
const stickyStartScroll = 20;

window.addEventListener("scroll", () => {
    if (window.scrollY >= 20 && !headerNode.classList.contains(HEADER_SCROLLED_CLASS)) {
        headerNode.classList.add(HEADER_SCROLLED_CLASS);
    } else if (window.scrollY < 20 && headerNode.classList.contains(HEADER_SCROLLED_CLASS)) {
        headerNode.classList.remove(HEADER_SCROLLED_CLASS);
    }
});
