let liste = document.querySelectorAll(".formulaire form div input");

let input1 = liste[0];
let input2 = liste[1];
let input3 = liste[2];
let input4 = liste[3];
let input5 = liste[4];

var chiffre_stock = "";

const cart = "0000 0000 0000 0000";
const nom = "------------------------------";
const secret = "000";

input1.addEventListener("input",function(event){
    handleReponse(event,".form-name > input",".card-front-info p:nth-child(1)",nom);
});
input2.addEventListener("input",function(event){
    handleReponse(event,".form-num > input",".card-front-num p", cart);
});
input3.addEventListener("input",function(event){
    handleReponse(event,".form-name > input",".card-front-info p:nth-child(2)");
});
input4.addEventListener("input",function(event){
    handleReponse(event,".form-date >div:nth-child(2) > div > input",".texte-card-back p");
});
input5.addEventListener("input",function(event){
    handleReponse(event,".num-secret > input",".texte-card-back p",secret);
});

console.log(liste);
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
        console.log(la_constante)
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



