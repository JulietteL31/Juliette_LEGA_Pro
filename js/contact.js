
// let email = document.getElementById("mail");
// email.addEventListener("input", function () {
//   validEmail(this);
// });

// const validEmail = function(inputEmail) {
//   let emailRegex = new RegExp("^.+@[a-z]+\.[a-z]{2,3}$");

//   if (!emailRegex.test(inputEmail.value)) {
//     document.getElementById("emailErrorMsg").innerText =
//       "Veuillez saisir un email valide (exemple : salut@contact.com)";
//     return false;
//   } else {
//     document.getElementById("emailErrorMsg").innerText = "";
//     return true;
//   }
// };

// let nom = document.getElementById('nom');
// nom.addEventListener("input", function() {
//   validPrenom(this);
// });

// const validPrenom = function(inputPrenom) {
//   let prenomRegex = new RegExp("^[^ ][a-zA-Z '\-éèêëçäà]*[^ ]$", "g");

//   if (!prenomRegex.test(inputPrenom.value)) {
//     document.getElementById("firstNameErrorMsg").innerText = "Veuillez saisir un prénom valide (exemple : François)";
//     return false;
//   } else {
//     document.getElementById("firstNameErrorMsg").innerText = "";
//     return true;
//   }
// };

// let bouton = document.getElementById('envoyer');
// bouton.addEventListener("click", Envoie);

// function Envoie(e) {
//     if(validEmail(email) && validPrenom(nom)) {
//         alert('Vous allez être redirigé vers votre client de messagerie')
//         return true;
//     } else {
//         e.preventDefault();
//         alert('Champs invalides')
//         return false;
//         // document.getElementById("emailErrorMsg").innerText =
//         // "Veuillez saisir un email valide (exemple : salut@contact.com)";
//     }
// }

//Navigation mobile
let bouton2 = document.getElementById('bouton');
let affiche = document.getElementById('display');
let nav = document.querySelector('.nav');

bouton2.addEventListener("click", () => {
    if(getComputedStyle(nav).display != "block"){      
      nav.style.display = "block";
    } else {
      nav.style.display = "none";
    }
  })