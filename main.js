let nom = document.getElementById("nom").textContent;
let prenom = document.getElementById("prenom").textContent;
let anniv = document.getElementById("birth");
let ville = document.getElementById("ville").textContent;
let email = document.getElementById("email").textContent;
let password = document.getElementById("password").textContent;



const validationButton = document.getElementById("bouton");

function verification() {
    let birthday = new Date(anniv.value);
    let today = new Date();
    if (birthday <= today.setFullYear(today.getFullYear()-18)){
        alert("vous etes majeur")
    } else {
        alert("vous n'etes pas majeur")
    }
}