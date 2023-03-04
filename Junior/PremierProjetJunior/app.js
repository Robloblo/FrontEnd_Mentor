let chiffre = document.querySelector(".form-num > input");
var chiffre_stock = "";

const cart = "0000 0000 0000 0000";

chiffre.addEventListener("input",handleReponse);
    
function handleReponse(event){
 
    let chiffre = document.querySelector(".form-num > input");
   

   
    if(event["inputType"] == "deleteContentBackward" || event["inputType"] == "deleteWordBackward"){
        let nouvelle_valeur = "";
        let chiffre = document.querySelector(".form-num > input");
        for(let i = 0; i <= chiffre.value.length ; i++){
            if(chiffre.value.charAt(i) != " "){
                nouvelle_valeur += chiffre.value.charAt(i);
            }
            
        chiffre_stock = nouvelle_valeur.substring(0,nouvelle_valeur.length-1);
        }
    }

    if(chiffre_stock.length < 16){
        
        let chiffre_carte = document.querySelector(".card-front-num p");
        let chiffre = document.querySelector(".form-num > input");
        chiffre_stock += chiffre.value.charAt(chiffre.value.length - 1);
        
        
        if((chiffre.getAttribute("class")).length % 4 == 0){
        }

        chiffre_carte.innerHTML = chiffre.value;
        let nouvelle_valeur = "";

        for(let i = 0; i < 16; i++){
            if(i < chiffre_stock.length){
                if(i%4 == 0 && i != 0){
                    nouvelle_valeur += " ";
                    nouvelle_valeur += chiffre_stock.charAt(i);
                }
                else{
                    nouvelle_valeur += chiffre_stock.charAt(i);
                }
            }
            else{
                nouvelle_valeur += cart.substring(i+Math.floor((nouvelle_valeur.length)/5),19);
                break;
            }
        }
        chiffre_carte.innerHTML = nouvelle_valeur; 
    }
    else{
        
    }


    
}



