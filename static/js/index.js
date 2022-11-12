new Gallery(document.getElementById("gallery"), {
    margin: 10,
    dots: false,
});

/*Burger*/

const MENU_OPENED_CLASS = "burger-menu_opened";
const burgerNode = document.querySelector(".burger-menu");
const burgerControlNode = document.querySelector(".burger-menu__control");

burgerControlNode.addEventListener("click", (_event) => {
    burgerNode.classList.toggle(MENU_OPENED_CLASS);
});
