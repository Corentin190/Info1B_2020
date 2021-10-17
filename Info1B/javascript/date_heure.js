type = "text/javascript"

function popup() {
    alert("Fonctionnalité à venir.");
}

function date() {
    date = new Date;
    annee = date.getFullYear();
    mois = date.getMonth() + 1;
    jour = date.getDate();
    DATE = "Date du jour : " + jour + " / " + mois + " / " + annee;
    vdate = document.getElementById("date");
    vdate.innerHTML = DATE;

    heure = date.getHours();
    minutes = date.getMinutes();
    HEURE = "À l'heure de l'ouverture de la page, il était : " + heure + "h " + minutes;
    vheure = document.getElementById("heure");
    vheure.innerHTML = HEURE;
}
window.onload = date();


function pop_allemagne() {
    alert("Il y a en effet 83 millions d'habitants en Allemange (2019)")
}

function com_loc() {
    alert("Ou encore en lisant la presse locale !")
}

function tower() {
    if (confirm("Il s'agit effectivement du pont qui se soulève. Souhaiteriez-vous en apprendre d'avantage ?"))
        window.location.href = "https://en.wikipedia.org/wiki/Tower_Bridge"
}

function pizza() {
    alert("Oui c'est cliché, mais c'est vrai !")
}

function parc() {
    alert("En effet, le parc fait 3 422 km2, soit plus de 30 fois la superficie de Paris !")
}

function omelette() {
    alert("Oui oui, il s'agit bien d'un dessert contrairement à ce que pourrait faire penser le nom !")
}

function bacalhau() {
    alert("Image de gauche.")
}

function nata() {
    alert("Image de droite.")
}