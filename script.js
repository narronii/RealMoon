const menuIcon = document.querySelector(".hambmenu");

const navbar = document.querySelector(".navbar")

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change");
});

