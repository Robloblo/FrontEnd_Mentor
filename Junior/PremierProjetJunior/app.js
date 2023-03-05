let liste = document.querySelectorAll(".formulaire form div input");

let input1 = liste[0];
let input2 = liste[1];
let input3 = liste[2];
let input4 = liste[3];
let input5 = liste[4];

var chiffre_stock = "";

const cart = "0000 0000 0000 0000";
const nom = "------------------------------";
const secret = "XXX";

input1.addEventListener("input",function(event){handleReponse(event,".form-name > input",".card-front-info p:nth-child(1)",nom);}); //La partie nom
input2.addEventListener("input",function(event){handleReponse(event,".form-num > input",".card-front-num p", cart);}); //la partie des 16 chiffres
input3.addEventListener("input",function(event){handleReponse(event,".input-mois > input",".mois");});  // Les mois
input4.addEventListener("input",function(event){handleReponse(event,".input-annee > input",".annee");}); // Les années
input5.addEventListener("input",function(event){handleReponse(event,".num-secret > input",".texte-card-back p",secret);}); //le code secret de 3 chiffres.


function handleReponse(event,debut,arriver,la_constante){
    let nouvelle_valeur = "";
        let chiffre = document.querySelector(debut);
        for(let i = 0; i <= chiffre.value.length ; i++){
            if(chiffre.value.charAt(i) != " "){
                nouvelle_valeur += chiffre.value.charAt(i);
            }
            
        chiffre_stock = nouvelle_valeur.substring(0,nouvelle_valeur.length-1);
    }
    
   

   
    if(event["inputType"] == "deleteContentBackward" || event["inputType"] == "deleteWordBackward"){
        let nouvelle_valeur = "";
        let chiffre = document.querySelector(debut);
        for(let i = 0; i <= chiffre.value.length ; i++){
            if(chiffre.value.charAt(i) != " "){
                nouvelle_valeur += chiffre.value.charAt(i);
            }
            
        chiffre_stock = nouvelle_valeur.substring(0,nouvelle_valeur.length-1);
        }
    }

    if(chiffre_stock.length < 16){
        
        let chiffre_carte = document.querySelector(arriver);
        let chiffre = document.querySelector(debut);
        

        chiffre_stock += chiffre.value.charAt(chiffre.value.length - 1);
        
        if((chiffre.getAttribute("class")).length % 4 == 0){
        }

        chiffre_carte.innerHTML = chiffre.value;
        let nouvelle_valeur = "";
        chiffre_stock = document.querySelector(debut).value;
        
        for(let i = 0; i < 16; i++){
            if(i < chiffre_stock.length){
                if(i%4 == 0 && i != 0){
                    if(la_constante === cart){

                        nouvelle_valeur += " ";
                    }
                    nouvelle_valeur += chiffre_stock.charAt(i);
                }
                else{
                    nouvelle_valeur += chiffre_stock.charAt(i);
                }
            }
            else{
                console.log(la_constante);
                if(la_constante === cart){
                    
                    nouvelle_valeur += la_constante.substring(i+Math.floor((nouvelle_valeur.length)/5),19);
                    
                }
                else if(la_constante === secret){
                    nouvelle_valeur += la_constante.substring(i,3);
                }
                break;
            }
        }
        chiffre_carte.innerHTML = nouvelle_valeur; 
    }
    else{
        
    }
}





//Partie qui vérifie affiche le message d'erreur rouge .
let monSpanNum = document.querySelector(".form-num > span");
let numInput = document.querySelector(".form-num > input");

numInput.addEventListener('input', function(event) {
    if (!numInput.checkValidity()) {
      monSpanNum.style.display = 'inline-block';
    } else {
      monSpanNum.style.display = 'none';
    }
  });


let monSpanMois = document.querySelector(".input-mois > span");
let moisInput = document.querySelector(".input-mois > input");

moisInput.addEventListener('input', function(event) {
    if (!moisInput.checkValidity()) {
        monSpanMois.style.display = 'inline-block';
    } else {
        monSpanMois.style.display = 'none';
    }
});

let monSpanAnnee = document.querySelector(".input-annee > span");
let anneeInput = document.querySelector(".input-annee > input");

anneeInput.addEventListener('input', function(event) {
    if (!anneeInput.checkValidity()) {
        monSpanAnnee.style.display = 'inline-block';
    } else {
        monSpanAnnee.style.display = 'none';
    }
});

let monSpanNom = document.querySelector(".form-name > span");
let nomInput = document.querySelector(".form-name > input");

nomInput.addEventListener('input', function(event) {
    if (!nomInput.checkValidity()) {
        monSpanNom.style.display = 'inline-block';
    } else {
        monSpanNom.style.display = 'none';
    }
});

let monSpanCodesecret = document.querySelector(".num-secret > span");
let codesecretInput = document.querySelector(".num-secret > input");

codesecretInput.addEventListener('input', function(event) {
    if (!codesecretInput.checkValidity()) {
        monSpanCodesecret.style.display = 'inline-block';
    } else {
        monSpanCodesecret.style.display = 'none';
    }
});



//changer la partie du bas lorsque le formulaire est envoyer.


let formulaire = document.querySelector("form");
let partieVisible = document.querySelector(".formulaire");
let partieCacher = document.querySelector(".cacher");

formulaire.addEventListener("submit", function(e){
    e.preventDefault();
    partieVisible.classList ="cacher";
    partieCacher.classList ="visible";
    alert("ça vien de changer");

})