// realizar funções em relação aos campos, vamos fazer as valisações 

"use strict"; //nao posso simplesmente mais deixar variavel vazia, é necessário declara-lá
let usuario = "";
let senha = ""; 

const botaoSubmit = document.querySelector("#btSubmit") 

botaoSubmit.addEventListener("click", ()=>{

    const inputUser = document.querySelector("input[name = 'nmUser']"); //colchete serve para separar e falar qual o nome do atributo que voce ta falando
    const inputPass = document.querySelector("input[name = 'pass']"); // eh um elemtno input, e o colchete serve para referenciar qualqwuer atributo, eu falo que o atributo eh name e coloco qual eh o tal conteudo do atributo

    if(inputUser.value.length > 3 && inputPass.value.length > 3){
        inputUser.setAttribute("style", "outline-color: #00ff00;")
        inputPass.setAttribute("style", "outline-color: #00ff00;")
    }else{
        inputUser.setAttribute("style", "outline-color: #ff0000;")
        inputPass.setAttribute("style", "outline-color: #ff0000;")
    }

});

