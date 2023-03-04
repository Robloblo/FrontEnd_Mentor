let chiffre = document.querySelector(".form-num > input");

chiffre.addEventListener('click',function(){
   chiffre.addEventListener("keydown",function(){
    let chiffre_carte = document.querySelector(".card-front-num p");
    chiffre_carte.innerHTML = chiffre.value;
   });
    
    console.log(chiffre);

    console.log(chiffre_carte);

});