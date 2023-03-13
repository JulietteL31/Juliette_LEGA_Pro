//Ouverture compétences techniques
let fleche1 = document.getElementById('flecheC1')
let tech = document.getElementById('comp-tech')
let titre1 = document.getElementById('titre-tech')

function Technique() {
    if(getComputedStyle(tech).display === "none") {
        tech.className = 'comp-item-ouvre'
        fleche1.className = 'ouvre'
    } else {
        tech.className = 'comp-item-ferme'
        fleche1.className = 'ferme'
    }
}

titre1.addEventListener('click', Technique)

//Ouverture soft skills
let fleche2 = document.getElementById('flecheC2')
let soft = document.getElementById('comp-soft')
let titre2 = document.getElementById('titre-soft')

function Soft() {
    if(getComputedStyle(soft).display === "none") {
        soft.className = 'comp-item-ouvre'
        fleche2.className = 'ouvre'
    } else {
        soft.className = 'comp-item-ferme'
        fleche2.className = 'ferme'
    }
}

titre2.addEventListener('click', Soft)

//Ouverture compétences gestionnelles
let fleche3 = document.getElementById('flecheC3')
let gestion = document.getElementById('comp-gestion')
let titre3 = document.getElementById('titre-gestion')

function Gestion() {
    if(getComputedStyle(gestion).display === "none") {
        gestion.className = 'comp-item-ouvre'
        fleche3.className = 'ouvre'
    } else {
        gestion.className = 'comp-item-ferme'
        fleche3.className = 'ferme'
    }
}

titre3.addEventListener('click', Gestion)

//Ouverture compétences sociologiques
let fleche4 = document.getElementById('flecheC4')
let socio = document.getElementById('comp-socio')
let titre4 = document.getElementById('titre-socio')

function Socio() {
    if(getComputedStyle(socio).display === "none") {
        socio.className = 'comp-item-ouvre'
        fleche4.className = 'ouvre'
    } else {
        socio.className = 'comp-item-ferme'
        fleche4.className = 'ferme'
    }
}

titre4.addEventListener('click', Socio)

//Ouverture compétences linguistiques
let fleche5 = document.getElementById('flecheC5')
let langue = document.getElementById('comp-langue')
let titre5 = document.getElementById('titre-langue')

function Langue() {
    if(getComputedStyle(langue).display === "none") {
        langue.className = 'comp-item-ouvre'
        fleche5.className = 'ouvre'
    } else {
        langue.className = 'comp-item-ferme'
        fleche5.className = 'ferme'
    }
}

titre5.addEventListener('click', Langue)

//Ouverture centres d'interets
let fleche6 = document.getElementById('flecheC6')
let interest = document.getElementById('interest')
let titre6 = document.getElementById('titre-interest')

function Interest() {
    if(getComputedStyle(interest).display === "none") {
        interest.className = 'comp-item-ouvre'
        fleche6.className = 'ouvre'
    } else {
        interest.className = 'comp-item-ferme'
        fleche6.className = 'ferme'
    }
}

titre6.addEventListener('click', Interest)

//Navigation mobile
let bouton = document.getElementById('bouton');
let affiche = document.getElementById('display');
let nav = document.querySelector('.nav');

bouton.addEventListener("click", () => {
    if(getComputedStyle(nav).display != "block"){      
      nav.style.display = "block";
    } else {
      nav.style.display = "none";
    }
  })