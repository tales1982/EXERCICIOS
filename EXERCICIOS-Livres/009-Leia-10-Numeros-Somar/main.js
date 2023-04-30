//Alterar Thema
const btn = document.querySelector(".thema");
const btn2 = document.querySelector(".thema2");

btn.addEventListener("click", (ev) => {
  ev.preventDefault();
  const body = document.getElementById("body");
  body.classList.add("dark");
  
});

btn2.addEventListener("click", (ev) => {
  ev.preventDefault();
  const body = document.getElementById("body");
  body.classList.remove("dark")
  
});

// capturando Formulario
const Formulario = document.querySelector("#enviar");
Formulario.addEventListener("click", (ev) => {
  ev.preventDefault();
const input1 = parseInt(document.querySelector("#number1").value)
const input2 = parseInt(document.querySelector("#number2").value) 
const input3 = parseInt(document.querySelector("#number3").value) 
const input4 = parseInt(document.querySelector("#number4").value) 
const input5 = parseInt(document.querySelector("#number5").value) 
const input6 = parseInt(document.querySelector("#number6").value) 
const input7 = parseInt(document.querySelector("#number7").value) 
const input8 = parseInt(document.querySelector("#number8").value) 
const input9 = parseInt(document.querySelector("#number9").value) 
const input10= parseInt(document.querySelector("#number10").value) 

//somando todos os inputs
function sum(...numeros){
  return numeros.reduce((accum, num) => accum + num,0)
}

const somar = (sum(
  input1 ,
    input2 ,
    input3 ,
    input4 ,
    input5 ,
    input6 ,
    input7 ,
    input8 ,
    input9 ,
    input10
));

//limpando inputs
document.querySelector("#number1").value = "";
document.querySelector("#number2").value = "";
document.querySelector("#number3").value = "";
document.querySelector("#number4").value = "";
document.querySelector("#number5").value = "";
document.querySelector("#number6").value = "";
document.querySelector("#number7").value = "";
document.querySelector("#number8").value = "";
document.querySelector("#number9").value = "";
document.querySelector("#number10").value = "";

//criando li do resultado
function adLi(){
    let ul = document.querySelector("#ul")
    let li = document.createElement("li")
    li.textContent = `A soma de todos os numeros é  ${somar}`;
    ul.appendChild(li)
}
adLi()
});





