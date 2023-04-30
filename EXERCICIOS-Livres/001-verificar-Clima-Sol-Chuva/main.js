//Crie uma função para verificar se o valor e true
//;
const sol = prompt("Como esta o dia de hoje\nDigite = sol\nDigite = chuva");
const section = document.querySelector("#section");
const res = document.getElementById("res");

function irPraia() {
  
    if (sol === "sol") {
      const praiaSol = document.querySelector(".praia-sol");
      praiaSol.classList.remove("praia-sol");
      res.innerText = "O dia estar muito bonito Vamos para a Praia.";
    } else if (sol === "chuva") {
      const Chuva = document.querySelector(".chuva");
      Chuva.classList.remove("chuva");
      res.innerText = "Esta Chovendo muito, vamos deixar para ir outro dia..";
    } else{
        alert("Opção invalida.")
    }
  }
irPraia()
