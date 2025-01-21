// Hamburgermenu openen //

const KlikOpHamburger = document.querySelector("header section:nth-of-type(2) > button:first-of-type");
const NavVeranderen = document.querySelector("header section:nth-of-type(2) nav");

KlikOpHamburger.addEventListener("click", MenuVeranderen)

function MenuVeranderen(){
    NavVeranderen.classList.toggle("open");
}

// Verander thema //

const LightMode = document.getElementById("light");
const DarkMode = document.getElementById("dark");
const HighContrastMode = document.getElementById("high-contrast");

LightMode.addEventListener("click", VeranderThema);
DarkMode.addEventListener("click", VeranderThema);
HighContrastMode.addEventListener("click", VeranderThema);

function VeranderThema() {
    const GekozenThema = this.id; 
    document.documentElement.setAttribute("data-theme", GekozenThema);
}





