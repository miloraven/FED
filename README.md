## Procesverslag van Milo Raven (500840804)

<img src="readme-images/foto-van-milo.png" width="375px" alt="Foto van Milo Ravenß">

## Dit ben ik

<details open>

<summary>Klik hier om meer over mij te lezen</summary>

### Auteur:

Milo Raven

### Je startniveau:

Rood

### Je focus:

Responsive

</details>

## Mijn website

<details open>

<summary>Klik hier om meer te lezen over de opdracht</summary>

### Mijn opdracht:

Het namaken van de website van de Rijkoverheid: https://www.rijksoverheid.nl/.

#### Screenshot(s) van de eerste pagina (small screen): 

Homepagina van de Rijksoverheid:

<img src="readme-images/screenshot-van-homepagina.png" width="375px" alt="Homepagina van de Rijksoverheid">

#### Screenshot(s) van de tweede pagina (small screen):

Actueelpagina van de Rijksoverheid:

<img src="readme-images/screenshot-van-actueelpagina.png" width="375px" alt="Actueelpagina van de Rijksoverheid">

</details>

## Toegankelijkheidstest 1/2 (week 1)

<details>

<summary>Klik hier om meer te lezen over de eerste toegankelijkheidstest</summary>

### Inleiding

Ik heb een toegankelijkheidstest uitgevoerd op de website Rijksoverheid.nl. Het doel van de test was om te beoordelen hoe goed de website werkt voor verschillende doelgroepen, zoals mensen die afhankelijk zijn van een screenreader, mensen met kleurenblindheid, en gebruikers die specifieke visuele en bewegingsinstellingen nodig hebben. Daarnaast heb ik de website vergeleken met Tiptopwasenstrijkservice.nl om een breder perspectief te krijgen op toegankelijkheid. In deze README staan mijn bevindingen en aanbevelingen.

### Bevindingen van de voiceovertest

Ik heb getest hoe een screenreader de website voorleest. Hierbij keek ik naar de structuur, navigatie en labels van interactieve elementen.

De koppenstructuur van de website is duidelijk en logisch. De belangrijkste onderdelen, zoals "Veel bekeken" en het menu, worden correct aangekondigd door de screenreader. Door het gebruik van ARIA-landmarks, zoals `role="main"` en `role="navigation"`, kan ik eenvoudig naar verschillende secties springen, zoals de navigatiebalk en de hoofdinhoud.

De knoppen en links hebben duidelijke en beschrijvende labels, bijvoorbeeld "Bedragen kinderopvangtoeslag 2025", waardoor ik direct begrijp wat ik kan verwachten. Ook de zoekbalk en andere formulieren werken goed, omdat deze correct gelabeld zijn.

De website scoort hoog op toegankelijkheid voor screenreaders. Dankzij de ARIA-landmarks en goede structuur kan ik de site eenvoudig gebruiken. Een kleine verbetering zou zijn om foutmeldingen in formulieren iets gedetailleerder te maken, zodat gebruikers meteen weten wat ze moeten corrigeren.

### WCAG checklist

Ik heb de WCAG-checklist twee keer ingevuld: één keer voor Rijksoverheid.nl en één keer voor Tiptopwasenstrijkservice.nl. Dit gaf me een goed beeld van hoe deze websites presteren op het gebied van toegankelijkheid.

<img src="readme-images/foto-1.JPG" width="375px" alt="Foto 1">

<img src="readme-images/foto-2.JPG" width="375px" alt="Foto 2">

<img src="readme-images/foto-3.JPG" width="375px" alt="Foto 3">

<img src="readme-images/foto-4.JPG" width="375px" alt="Foto 4">

<img src="readme-images/foto-5.JPG" width="375px" alt="Foto 5">

Rijksoverheid.nl voldoet aan bijna alle richtlijnen in de checklist. De website heeft een sterke structuur, goed contrast en beschrijvende labels. Daarentegen scoorde Tiptopwasenstrijkservice.nl op veel punten slecht. De website mist een logische koppenstructuur, heeft slecht contrast en gebruikt geen correcte HTML-elementen. Dit benadrukt hoe belangrijk het is om toegankelijkheid vanaf het begin in het ontwerpproces mee te nemen.

### Kleurenblindtest
Ik heb getest hoe de website eruitziet voor mensen met Protanopia (roodblindheid), Deuteranopia (groenblindheid), Tritanopia (blauwblindheid) en Achromatopsia (volledige kleurenblindheid).

<img src="readme-images/kleurenblind-test.png" style="width: 100%;" alt="De Rijksoverheid webpagina in een kleurenblindsimulatie">

Bij Protanopia en Deuteranopia zijn rode en groene tinten moeilijk te onderscheiden. Het blauwe menu blijft duidelijk zichtbaar, maar als ik bijvoorbeeld een rode accentkleur zou gebruiken, is die niet te zien. Bij Tritanopia verdwijnen blauwe tinten, wat het menu minder opvallend maakt. Bij Achromatopsia is alles grijs, en zonder extra visuele cues, zoals onderstreping of iconen, zijn links moeilijk te herkennen.

De website werkt redelijk goed voor kleurenblinde gebruikers, maar kan verbeteren door meer visuele elementen toe te voegen, zoals iconen naast kleur of onderstreping bij links.

### Dark/lighttest, increase contrast en reduce motion test

Ik heb gekeken hoe de website reageert op instellingen zoals donkere modus, verhoogd contrast en het verminderen van bewegingseffecten.

De website reageert niet op deze instellingen. Wanneer ik de donkere modus inschakel, verandert er niets aan de kleuren. Ook bij verhoogd contrast gebeurt er niets. Bij reduce motion blijven animaties of bewegingen hetzelfde.

Hier is veel ruimte voor verbetering. Door de website aan te passen aan deze gebruikersvoorkeuren kan de ervaring voor visueel beperkte gebruikers en mensen met gevoeligheid voor beweging flink verbeteren.

### Conclusie en ontwerpadvies

Ik vind dat Rijksoverheid.nl een goede basis heeft voor toegankelijkheid, vooral bij het gebruik van screenreaders en de algemene structuur. Toch zijn er verbeterpunten, vooral op het gebied van kleur en gebruikersvoorkeuren.

1. **Kleurgebruik:** Voeg meer visuele elementen toe, zoals onderstreping bij links en iconen naast kleurgecodeerde knoppen.
2. **Dark mode:** Implementeer een donkere modus voor visueel comfort in omgevingen met weinig licht.
3. **Contrast:** Zorg dat de website reageert op verhoogde contrastinstellingen om de leesbaarheid te verbeteren.
4. **Reduce motion:** Voeg ondersteuning toe om animaties te minimaliseren of uit te schakelen voor mensen die gevoelig zijn voor beweging.
5. **Formulieren:** Maak foutmeldingen gedetailleerder en geef duidelijke instructies, zoals "Gebruik alleen cijfers bij het invullen van dit veld."

Door deze verbeteringen kan de website niet alleen voldoen aan de richtlijnen, maar ook een inclusieve ervaring bieden aan een breder publiek.

</details>

## Breakdownschets (week 1)

<details>

<summary>Klik hier om mijn breakdownschets te bekijken</summary>

### Breakdown van de twee pagina's: 

De breakdown van de twee pagina's:

<img src="readme-images/breakdown-van-homepagina.jpg" width="375px" alt="Breakdownschets van de homepagina van de Rijksoverheid">

<img src="readme-images/breakdown-van-actueelpagina.jpg" width="375px" alt="Breakdownschets van de actueelpagina van de Rijksoverheid">

### Dynamisch deel: 

De breakdown van een dynamisch deel:

<img src="readme-images/dynamische-schets-een.png" width="375px" alt="Breakdown van een dynamisch deel">

### Nog een dynamisch deel: 

De breakdown van nog een dynamisch deel:

<img src="readme-images/dynamisch-scherm-twee.jpg" width="375px" alt="Breakdown van nog een dynamisch deel">

</details>

## Voortgang 1 (week 2)

<details>

<summary>Klik hier om meer te weten lezen over het 1e voortgangsgesprek</summary>

### Stand van zaken

Het proces verloopt soepel. Helaas kon ik vanwege privéredenen en het vinden van een stage niet altijd bij de lessen aanwezig zijn, maar uiteindelijk is alles goed gekomen. De HTML is volledig afgerond en het procesverslag is up-to-date in de README-file. Daarnaast ben ik ook al begonnen met het experimenteren in CSS om verdere vooruitgang te boeken.

De website en een deel van de code:

<img src="readme-images/deel-van-de-website.png" width="375px" alt="Screenshot van een deel van de website">

<img src="readme-images/deel-van-de-code.png" width="375px" alt="Screenshot van een deel van de code">

### Agenda voor meeting

Tijdens de groepssessie hebben we de agenda gericht op het verbeteren van CSS en het bespreken van individuele uitdagingen. Dit gaf ons de mogelijkheid om van elkaar te leren en concrete verbeterpunten te vinden. Het was waardevol om te zien hoe iedereen zijn eigen inzichten inbracht en oplossingen aandroeg.

### Verslag van meeting

We hebben concrete verbeteringen besproken, zoals het optimaliseren van sections (geen sections binnen sections), en het gebruik van H2-tags bij onduidelijke onderdelen, eventueel met onzichtbare H2's of aria-labels voor betere toegankelijkheid met screenreaders. Verder is het belangrijk om een eigen font te kiezen en niet te blijven bij standaardfonts zoals Verdana. Voor de structuur van artikelen werd geadviseerd om een lijst te maken, zodat screenreaders het aantal items duidelijk kunnen lezen. Tot slot hebben we besproken om bij media queries eerst voor mobiel te ontwerpen en vanuit daar verder te bouwen, waarbij we niet gebonden blijven aan specifieke schermformaten maar kijken naar wat visueel goed werkt.

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
- ...

</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | student 1      | student 2          | student 3    | student 4        |
  | ---            | ---                | ---          | ---              |
  | dit bespreken  | en dit             | en ik dit    | en dan ik dat    |
  | en dat ook nog | dit als er tijd is | nog een punt | dit wil ik zeker |
  | ...            | ...                | ...          | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - punt 1
  - punt 2
  - nog een punt
  - ...

</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>

<summary>Klik hierop om alle gebruikte bronnen te bekijken</summary>

1. Bron 1

Favicon van het logo van de Rijksoverheid: https://www.radiotherapiegroep.nl/rijksoverheid-logo/

</details>