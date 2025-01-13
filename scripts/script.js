// Variables (Data opslag)
const menubutton = document.querySelector("header button");
const hetmenu = document.querySelector("header nav");
var carousel = document.querySelector('ul');
var items = carousel.getElementsByTagName('li');
var currentIndex = 0;

// Event Listener (Interactie)
menubutton.onclick = togglemenu;

// Function (Logica): Beheert menu openen/sluiten en verandert aria-expanded
function togglemenu() {
    hetmenu.classList.toggle("open");
    const isExpanded = menubutton.getAttribute("aria-expanded") === "true";
    menubutton.setAttribute("aria-expanded", !isExpanded);
    // Zorgt ervoor dat het menu open/dicht gaat en aria-expanded wordt aangepast.
}

// Function (Logica): Wijzigt tekst in een specifieke sectie
function showInfo(message) {
    const info = document.querySelector('main section:nth-of-type(2) p');
    info.textContent = message;
    // Update tekst in een sectie.
}

// Function (Logica): Verplaatst carousel
function updateCarousel(index) {
    var offset = index * -100; // Berekening van offset
    carousel.style.transform = 'translateX(' + offset + '%)';
    carousel.style.transition = 'transform 0.5s ease'; 
    // Beweegt carousel naar juiste item.
}

// Event Listener (Interactie): Toetsenbordnavigatie
carousel.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % items.length; 
        updateCarousel(currentIndex);
        // Pijltje rechts: Volgend item.
    } else if (event.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + items.length) % items.length; 
        updateCarousel(currentIndex);
        // Pijltje links: Vorig item.
    }
});
