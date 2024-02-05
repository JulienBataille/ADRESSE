document.addEventListener("DOMContentLoaded", function(){
    let form = document.querySelector("form");

    form.addEventListener("submit", function(event){
        let nom = document.getElementById("nom").value;
        let prenom = document.getElementById("prenom").value;
        let birthday = document.getElementById("birth").value;
        let ville = document.getElementById("ville").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

    //regex pour les emails gmail.com
        let emailRegex = /@gmail.com$/;
        let nomRegex = /^[A-Za-z]{2,255}$/;
        let prenomRegex = /^[A-Za-z-'\s]{2,255}$/;
        let villeRegex = /^[A-Za-z-'\s]{2,255}$/;
        let passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{14,}$/;

    // utilsiateur est agé de plus de 13ans
    let date = new Date();
    let userYear = new Date(birthday);

    let age = date.getFullYear() - userYear.getFullYear();

    if (age < 13){
        alert("Vous devez avoir plus de 13 ans pour vous inscrire");
        event.preventDefault()
        return
    }
    if (!prenomRegex.test(nom)){
        alert("Vous devez remplir correctement le nom");
        event.preventDefault()
        return
    }
    if (!prenomRegex.test(prenom)){
        alert("Vous devez remplir correctement le prénom");
        event.preventDefault()
        return
    }
    if (!villeRegex.test(ville)){
        alert("Vous devez remplir correctement la ville");
        event.preventDefault()
        return
    }
    if (!emailRegex.test(email)){
        alert("Vous devez remplir correctement l'adresse mail");
        event.preventDefault()
        return
    }
    if (!passwordRegex.test(password)){
        alert("Vous devez remplir correctement le mot de passe");
        event.preventDefault()
        return
    }
  
    



    })
})