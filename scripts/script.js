// Selecteer de button en het menu
const menuButton = document.querySelector("nav button");
const menuList = document.querySelector("nav ul");

// Toggle het menu wanneer op de knop wordt geklikt
menuButton.addEventListener("click", function () {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    
    // Toggle aria-expanded
    menuButton.setAttribute("aria-expanded", !isExpanded);
    
    // Toon of verberg het menu
    if (!isExpanded) {
        menuList.style.display = "flex";
        menuList.style.flexDirection = "column"; // Zorg dat het verticaal blijft
    } else {
        menuList.style.display = "none";
    }
});






// Controleer de voorkeur van het besturingssysteem en pas de modus toe
function setThemeBasedOnOS() {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (prefersDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }
  
  // Initialiseer het thema bij het laden van de pagina
  setThemeBasedOnOS();
  
  // Luister naar veranderingen in de voorkeuren van het besturingssysteem
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    const newPrefersDarkMode = e.matches;
    if (newPrefersDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  });





  
// Selecteer de textarea en de karakterteller
const textarea = document.getElementById('feedback-input');
const charCounter = document.getElementById('letter-teller');

// Voeg een event listener toe aan de textarea
textarea.addEventListener('input', () => {
    const maxLength = textarea.getAttribute('maxlength');
    const currentLength = textarea.value.length;
    const remaining = maxLength - currentLength;

    // Update de tekst van de karakterteller
    charCounter.textContent = `${remaining} karakters over`;
});
