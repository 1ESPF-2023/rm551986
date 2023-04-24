
//RECUPERANDO O BOTÃO COM O GETeLEMENTbYiD 


const botao = document.getElementById("btn-1"); 


//Recuperando um item específico usando funcção querySelector (parâmetro)

// const seletor = document.querySelector("li")
// console.log(seletor.textContent)


//Recuperar uma lista de elementos com a função querySelectorAll

const seletores = document.querySelectorAll("li")


seletores.forEach((item)=>{


    if(item.textContent == "Item-15") {
        let meuItem = item
    console.log(`Items selecionados : ${meuItem.textContent}`);
    meuItem.textContent = "Tá dominado!"
}

})
//utilizar o crase nessa etapa assim é utilizar interpolação, são basicamente as fstrings do python


//SetTimeOut
//SetInterval
//Random
//Math.Ceil
//Math.Random
//Math.floor