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
