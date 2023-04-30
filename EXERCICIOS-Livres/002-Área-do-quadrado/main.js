//Crie uma função matemática que retorne o perímetro de um quadrado.


let tamanho = Number(prompt("Digite o tamanho, para podermos calcular o quadrado. "))

function quadrado(){
    let res = document.getElementById("res")
    res.innerText = `A medida de ${tamanho} metros  é de ${tamanho * 4} cm²`
}
quadrado()