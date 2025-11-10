const navLinks = document.querySelectorAll(".nav-Product .nav-link");
const ProductOpenButton = document.querySelector("#Product-open-button");
const ProductCloseButton = document.querySelector("#Product-close-button");

ProductOpenButton.addEventListener("click",() => {
    // Toggle mobile Product visibility
document.body.classList.toggle("show-mobile-Product");
});

// close Product when the close button is clicked
ProductCloseButton.addEventListener("click", () => ProductOpenButton.click());

// close Product when the nav link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", ()=> ProductOpenButton.click());
});

