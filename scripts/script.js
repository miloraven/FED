// =========================
// 1. VARIABLES (Data opslag)
// =========================
const menubutton = document.querySelector("header button");
const hetmenu = document.querySelector("header nav");
const carousel = document.querySelector("ul");
const items = carousel.getElementsByTagName("li");
let currentIndex = 0;

// =========================
// 2. FUNCTIONS (Logica)
// =========================

// Beheert menu openen/sluiten en verandert aria-expanded
function togglemenu() {
    hetmenu.classList.toggle("open");
    const isExpanded = menubutton.getAttribute("aria-expanded") === "true";
    menubutton.setAttribute("aria-expanded", !isExpanded);
}

// Wijzigt tekst in een specifieke sectie
function showInfo(message) {
    const info = document.querySelector("main section:nth-of-type(2) p");
    info.textContent = message;
}

// Verplaatst carousel naar het juiste item
function updateCarousel(index) {
    const offset = index * -100; // Berekening van de verschuiving in procenten
    carousel.style.transform = `translateX(${offset}%)`;
    carousel.style.transition = "transform 0.5s ease";
}

// =========================
// 3. EVENT LISTENERS (Interactie)
// =========================

// Menu-knop klikgedrag
menubutton.addEventListener("click", togglemenu);

// Toetsenbordnavigatie voor de carousel
carousel.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
        currentIndex = (currentIndex + 1) % items.length; // Volgend item
        updateCarousel(currentIndex);
    } else if (event.key === "ArrowLeft") {
        currentIndex = (currentIndex - 1 + items.length) % items.length; // Vorig item
        updateCarousel(currentIndex);
    }
});
