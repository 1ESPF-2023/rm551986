
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

// let tmp = '';


// function mudaCor() {

//     let r = 0;
//     let g = 0; 
//     let b = 0;    


//     r = Math.round(Math.random() * 255);
//     g = Math.round(Math.random() * 255);
//     b = Math.round(Math.random() * 255);

//     const cabecalho = document.querySelector(".cabecalho");
//     const banner1 = document.querySelector(".banner-1");

//     cabecalho.style.backgroundColor = 'rgb(${r},${g},${b})';
//     banner1.style.backgroundColor = 'rgb(${r},${g},${b})';



//     tmp = setTimeout(mudaCor,1000)

// }


// mudaCor();




function mudaBanner() {
    const imgElement1 = document.querySelector(".banner-1 img"); 
    // console.log(imgElement1); 
    let nr = Math.ceil(Math.random() * 3);
    imgElement1.src = "./img/banner-lateral-"+nr+".png";
    // imgElement1.src = ./img/banner-lateral-"+nr+".png";

    const imgElement2 = document.querySelector(".banner-2 img"); 
    // console.log(imgElement1); 
    nr = Math.ceil(Math.random() * 3);
    imgElement2.src = "./img/banner-lateral-"+nr+".png";
    // imgElement1.src = ./img/banner-lateral-"+nr+".png";
    

    setTimeout(mudaBanner, 2000)
}

mudaBanner();

const botao = document.querySelector("button");
// // console.log(botao);

// const botoes = document.querySelectorAll("button");

// botoes.forEach( (botao)=>{
//     botao


// })

botao.addEventListener("click", function(){
    if(this.textContent == "LIGAR"){
        const imgElement = document.querySelector("img[alt='lampada apagada']")
        imgElement.src = "./img/pic_bulbon.gif" 
        imgElement.alt = "lampada acesa"
        this.textContent = "DESLIGAR"
    }else{
        const imgElement = document.querySelector("img[alt='lampada acesa']")
        imgElement.src = "./img/pic_bulboff.gif";
        imgElement.alt = "lampada apagada"
        this.textContent = "LIGAR"
    }


        
    }
);

