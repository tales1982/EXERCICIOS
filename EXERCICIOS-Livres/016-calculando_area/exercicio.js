/*### Calculadora Geométrica

Escreva um programa em javascript para calcular a área de diferentes formas geométricas. O programa deve iniciar com um menu contendo as diferentes opções de cálculas. As opções devem ser:

- área do triângulo: base * altura / 2
- área do retângulo: base * altura
- área do quadrado: lado²
- área do trapézio: (base maior + base menor) * altura / 2
- área do círculo: pi * raio² (considere pi = 3.14)

Você deve escrever o programa usando funções sempre que possível para separar os procedimentos. O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu.*/

function triangulo() {
  let base = Number(prompt("Digite a base."));
  let altura = Number(prompt("Digite a altura."));
  return (base * altura) / 2;
}

function retangulo() {
  let base = Number(prompt("Digite a base."));
  let altura = Number(prompt("Digite a altura."));
  return base * altura;
}

function quadrado() {
  let lado = Number(prompt("Digite a base."));
  return lado * lado;
}

function trapezio() {
  let baseMaior = Number(prompt("Digite a base Maior."));
  let baseMenor = Number(prompt("Digite a base Menor."));
  let altura = Number(prompt("Digite a altura."));
  return ((baseMaior + baseMenor) * altura) / 2;
}

function circulo() {
  let raio = Number(prompt("Digite o raio."));
  return 3.14 * raio * raio;
}

function executar() {
  opcao = prompt(
    `Escolha umas das opçoes abaixo:

   1° Calcular a área do triângulo:
   2° Calcular a área do retângulo:
   3° Calcular a área do quadrado:
   4° Calcular a área do trapézio:
   5° Calcular a área do circulo:
   6° Sair.`
  );
  switch (opcao) {
    case "1":
      alert(`O resultado é: ${triangulo()} `);
      break;
    case "2":
      alert(`O resultado é: ${retangulo()} `);
      break;
    case "3":
      alert(`O resultado é: ${quadrado()} `);
      break;
    case "4":
      alert(`O resultado é: ${trapezio()} `);
      break;
    case "5":
      alert(`O resultado é: ${circulo()} `);
      break;
    case "6":
      alert("Saindo.....");
      break;
    default:
      alert("Opçao invalida");
  }
}

executar();
