/*
## Pilha de Cartas

Escreva um programa em javascript para simular um baralho de cartas. O programa deve iniciar mostrando na tela um menu interativo contendo a quantidade de cartas que estão atualmente no baralho e as opções de “Adicionar uma carta”, “Puxar uma carta” e “Sair”. Ao escolher “Adicionar uma carta”, o programa deve perguntar o nome da carta e adicioná-la no topo do baralho. Ao escolher “Puxar uma carta”, o programa deve retirar a carta do topo do baralho e mostrar na tela o nome da carta puxada. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.
*/

const cartas = [];
let opcao = "";
do {
opcao = prompt(`
    Altualmente exister ${cartas} no baralho.
    Digite 1 “Adicionar uma carta”.
    Digite 2 “Puxar uma carta”.
    Digite 3 “Para Sair”
    `);
switch (opcao) {
    case "1":
    let cartaAdcionada = prompt(`Qual é o nome da carta que quer adcionar.`);
    console.log(cartas.unshift(cartaAdcionada));
    break;
    case "2":
    let ultimacarta = cartas.shift();
    if (ultimacarta) {
        alert(`A carta ${ultimacarta} foi retirada`);
    } else {
        alert("Nao exister mais carta no baralho.");
    }
    break;
    case "3":
    alert("SAINDO...");
    break;
    default:
    alert("[ERRO] Opçao invalida tente novamente.");
    break;
}
} while (opcao !== "3");
alert("Obrigado por jogar.");
