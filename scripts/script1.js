// Interactieve emoji-interactie op kaart //

const VredespaleisAnimatie = document.querySelector("main section:nth-of-type(2) button:first-of-type");
const MauritshuisAnimatie = document.querySelector("main section:nth-of-type(2) button:nth-of-type(2)");
const BinnenhofAnimatie = document.querySelector("main section:nth-of-type(2) button:nth-of-type(3)");
const Paragraaf = document.querySelector("main section:nth-of-type(2) p");

VredespaleisAnimatie.addEventListener("click", BeweegAfbeelding);
MauritshuisAnimatie.addEventListener("click", BeweegAfbeelding);
BinnenhofAnimatie.addEventListener("click", BeweegAfbeelding);

function BeweegAfbeelding() {
    const Image = this.querySelector("img");
    const Info = this.getAttribute("data-info");

    Image.classList.add("beweging");
    setTimeout(function () {
        Image.classList.remove("beweging");
    }, 1000);

    Paragraaf.classList.remove("visible");
    Paragraaf.classList.add("hidden");

    setTimeout(function () {
        Paragraaf.textContent = Info; 
        Paragraaf.classList.remove("hidden");
        Paragraaf.classList.add("visible"); 
    }, 500); 
}