const btn = document.querySelector("#btn").addEventListener("click",(ev)=>{
ev.preventDefault()
let nome = prompt("Digite o nome da nave.");
let alterarLetra = prompt("Qual caracter voçe deseja substituir,.");
let letraAlterada = prompt("Digite a nova letra.")
let teste = nome.replace(alterarLetra,letraAlterada)
alert(teste)
})



//abaixo a versão do professo acima a minha 
/*
let spaceShip = prompt("Digite o nome da nave.")

let charToReplace =  prompt("Qual carácter voce deseja substituir?")

let replacementChar = prompt("Por qual carácter voce deseja substituir")

let newSpaceShip = ""

for (let pos = 0; pos < spaceShip.length; pos++){
    if (spaceShip[pos] == charToReplace){
        newSpaceShip += spaceShip[pos]
    }
}
*/