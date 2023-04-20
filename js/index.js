//AFFICHAGE SECTION CV
let sectionCV = document.getElementById('section-cv-index');
let flecheVersCV = document.getElementById('flecheVersCV');

//Affichage titre et div fondu
let titre = document.getElementById('montitre')
let sectionCVForm = document.getElementById('formationIndex');
let sectionCVExp = document.getElementById('expIndex');

let ligne = document.getElementById('ligne-titre');
let ligneComp = document.getElementById('ligne-titre-comp');
let lignePortfolio = document.getElementById('ligne-titre-portfolio');
let footer = document.getElementById('new-footer')

function AfficheCV() {
    sectionCV.style.display = "flex"
    footer.style.display = "flex"
    titre.style.animationPlayState = "running"
    sectionCVForm.style.animationPlayState = "running"
    sectionCVExp.style.animationPlayState = "running"
    flecheVersCV.style.display = "none"
    ligne.style.animationPlayState = "running"
}

flecheVersCV.addEventListener("click", AfficheCV);



//Affichage formations et expériences
let pointsFormation = document.getElementById('pointsFormation');
let pointsExp = document.getElementById('pointsExp');

let divFormation = document.getElementById('divFormationCache');
let divExp = document.getElementById('divExpCache');

function AfficheFormation() {
    pointsFormation.style.display = "none"
    divFormation.style.display = "flex"
}

function AfficheExp() {
    pointsExp.style.display = "none"
    divExp.style.display = "flex"
}

pointsFormation.addEventListener("click", AfficheFormation)
pointsExp.addEventListener("click", AfficheExp)

//Fermeture des div formation et experience
let flecheFermeExp = document.getElementById('flecheFermeExp');
let flecheFermeFormation = document.getElementById('flecheFermeFormation');

function fermeExp() {
    divExp.style.display = "none"
    pointsExp.style.display = "flex"
}

function fermeFormation() {
    divFormation.style.display = "none"
    pointsFormation.style.display = "flex"
}

flecheFermeExp.addEventListener("click", fermeExp)
flecheFermeFormation.addEventListener("click", fermeFormation)

//AFFICHAGE SECTION COMPETENCES
let flecheVersComp = document.getElementById('flecheVersComp');
let sectionComp = document.getElementById('section-comp-index');
let recommandation2 = document.getElementById('recommandation2');

//Affichage fondu titre et div
let titreComp = document.getElementById('titreComp');
let technique = document.getElementById('divTechnique');
let soft = document.getElementById('divSoft');
let gestion = document.getElementById('divGestion');
let socio = document.getElementById('divSocio');

function AfficheComp() {
    sectionComp.style.display = "flex"
    titreComp.style.animationPlayState = "running"
    technique.style.animationPlayState = "running"
    soft.style.animationPlayState = "running"
    gestion.style.animationPlayState = "running"
    socio.style.animationPlayState = "running"
    ligneComp.style.animationPlayState = "running"
    flecheVersComp.style.display = "none"
    recommandation2.style.display = "flex"
}

flecheVersComp.addEventListener("click", AfficheComp)

//AFFICHAGE SECTION PORTFOLIO
let flecheVersPort = document.getElementById('flecheVersPort');
let sectionPortfolio = document.getElementById('section-portfolio-index');
let titrePort = document.getElementById('titrePort')
let projetFormation = document.getElementById('projet-formation')
let projetPerso = document.getElementById('projet-perso')
let recommandation = document.getElementById('recommandation');

function AffichePort() {
    sectionPortfolio.style.display = "flex"
    lignePortfolio.style.animationPlayState = "running"
    flecheVersPort.style.display = "none"
    titrePort.style.animationPlayState = "running"
    projetFormation.style.animationPlayState = "running"
    projetPerso.style.animationPlayState = "running"
    recommandation.style.display = "flex"

}

flecheVersPort.addEventListener("click", AffichePort)