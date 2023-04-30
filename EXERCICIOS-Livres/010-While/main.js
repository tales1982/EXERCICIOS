let count = 0;
let chosenOption = "";

let spaceShip = prompt("Digite o nome da sua nave.")

chosenOption = prompt("Deseja entra em dobra espacial?\n1- Sim\n2- Nao")

while(chosenOption == "1"){
    count += 1
    chosenOption = prompt("Deseja entra em dobra espacial?\n1- Sim\n2- Nao");
}

alert("Nave: " + spaceShip + "\nQuantidade de dobras :" + count)