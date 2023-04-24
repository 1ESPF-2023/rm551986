
//RECUPERANDO O BOTÃO COM O GETeLEMENTbYiD 


// const botao = document.getElementById("btn-1"); 


// //Recuperando um item específico usando funcção querySelector (parâmetro)

// // const seletor = document.querySelector("li")
// // console.log(seletor.textContent)


// //Recuperar uma lista de elementos com a função querySelectorAll

// const seletores = document.querySelectorAll("li")


// seletores.forEach((item)=>{


//     if(item.textContent == "Item-15") {
//         let meuItem = item
//     console.log(`Items selecionados : ${meuItem.textContent}`);
//     meuItem.textContent = "Tá dominado!"
// }

// })
//utilizar o crase nessa etapa assim é utilizar interpolação, são basicamente as fstrings do python


//SetTimeOut - determina um tempo e se as funções dentro daquele escopo permitir ela repete
//SetInterval - se coloca dentro de uma variável para que possamos ter controle de desligar e ligá-la
//Random
//Math.Ceil
//Math.Random
//Math.floor

let tmp = '';


function mudaCor() {

    let r = 0;
    let g = 0; 
    let b = 0;    


    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);

    const cabecalho = document.querySelector(".cabecalho");
    const banner1 = document.querySelector(".banner-1");

    cabecalho.style.backgroundColor = 'rgb(${r},${g},${b})';
    banner1.style.backgroundColor = 'rgb(${r},${g},${b})';



    tmp = setTimeout(mudaCor,5000)

}


mudaCor();