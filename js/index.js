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
// let socio = document.getElementById('divSocio');

function AfficheComp() {
    sectionComp.style.display = "flex"
    titreComp.style.animationPlayState = "running"
    technique.style.animationPlayState = "running"
    soft.style.animationPlayState = "running"
    gestion.style.animationPlayState = "running"
    // socio.style.animationPlayState = "running"
    ligneComp.style.animationPlayState = "running"
    flecheVersComp.style.display = "none"
    // recommandation2.style.display = "flex"
}

flecheVersComp.addEventListener("click", AfficheComp)

//AFFICHAGE SECTION PORTFOLIO
let flecheVersPort = document.getElementById('flecheVersPort');
let sectionPortfolio = document.getElementById('section-portfolio-index');
let titrePort = document.getElementById('titrePort');
let titreReco= document.getElementById('titreReco');
let titreAbout = document.getElementById('titreAbout');
let projetFormation = document.getElementById('projet-formation');
let projetPerso = document.getElementById('projet-perso');
let ligneReco = document.getElementById('ligne-titre-reco');
let ligneAbout = document.getElementById('ligne-titre-about');
let aboutPremiere = document.getElementById('aboutPremiere');
let about2 = document.getElementById('about2');
let about3 = document.getElementById('about3');
let about4 = document.getElementById('about4');
let about5 = document.getElementById('about5');
let about6 = document.getElementById('about6');
let about7 = document.getElementById('about7');
let about8 = document.getElementById('about8');
let about9 = document.getElementById('about9');

function AffichePort() {
    sectionPortfolio.style.display = "flex"
    lignePortfolio.style.animationPlayState = "running"
    ligneAbout.style.animationPlayState = "running"
    ligneReco.style.animationPlayState = "running"
    flecheVersPort.style.display = "none"
    titrePort.style.animationPlayState = "running"
    titreReco.style.animationPlayState = "running"
    titreAbout.style.animationPlayState = "running"
    // projetFormation.style.animationPlayState = "running"
    // projetPerso.style.animationPlayState = "running"
    aboutPremiere.style.animationPlayState = "running"
    about2.style.animationPlayState = "running"
    about3.style.animationPlayState = "running"
    about4.style.animationPlayState = "running"
    about5.style.animationPlayState = "running"
    about6.style.animationPlayState = "running"
    about7.style.animationPlayState = "running"
    about8.style.animationPlayState = "running"
    about9.style.animationPlayState = "running"
    // recommandation.style.display = "flex"

}

flecheVersPort.addEventListener("click", AffichePort)


//AFFICHAGE RECOMMANDATIONS

//Recommandation 1
// let divReco = document.getElementById('div-reco');
// let bulle = document.getElementById("bulle");
// let reco = document.getElementById("reco");
// let pointsReco = document.getElementById("points-reco")

// function AfficheReco() {
//     bulle.style.display = "none";
//     reco.className = "p-reco";
//     reco.style.animationPlayState = "running";
// }

// bulle.addEventListener('click', AfficheReco);
// pointsReco.addEventListener('click', AfficheReco);

// function FermeReco() {
//     bulle.style.display = "block";
//     reco.className = "recoFerme";
//     reco.style.animationPlayState = "running";
// }

// reco.addEventListener('click', FermeReco);

//Recommandation 2
// let divReco2 = document.getElementById('div-reco2');
// let bulle2 = document.getElementById("bulle2");
// let reco2 = document.getElementById("reco2");
// let pointsReco2 = document.getElementById("points-reco2")

// function AfficheReco2() {
//     bulle2.style.display = "none";
//     reco2.className = "p-reco";
//     reco2.style.animationPlayState = "running";
// }

// bulle2.addEventListener('click', AfficheReco2);
// pointsReco2.addEventListener('click', AfficheReco2);

// function FermeReco2() {
//     bulle2.style.display = "block";
//     reco2.className = "recoFerme";
//     reco2.style.animationPlayState = "running";
// }

// reco2.addEventListener('click', FermeReco2);
