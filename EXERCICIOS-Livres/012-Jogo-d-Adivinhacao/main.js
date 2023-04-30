let numeroSecreto = 45;
let tentativa = 0
function numero() {
  do {
    tentativa ++
    alert("Vamos tentar advinha o numero!" + " tentativa:" + tentativa);
    let digiteNumero = Number(
      prompt("digite um numero para ver se voce acertou")
    );
    if (digiteNumero < numeroSecreto) {
      alert("Voçe Errou tente denovo! tente um numero MAIOR");
      
    }else if(digiteNumero > numeroSecreto){
        alert("Voçe Errou tente denovo! tente um numero MENOR");
    }
    else if(digiteNumero == numeroSecreto){
        alert("Ganhou" + " Voçe acertou na tentativa :" + tentativa)
        break
    }else{
        alert("Digite somente numeros!!")
    }
  } while (numeroSecreto);

}
numero

