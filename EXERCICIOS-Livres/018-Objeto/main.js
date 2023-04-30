//crie um objeto com os seus dados pessoais
let pessoa = [{
    nome:"Tales",
    sobrenome:"Lima de Paula",
    idade: 40,
    sexo: "masculino",
    telefone: 661124040,
 },
{nome:"Suelia",
    sobrenome:"Da Silva Moreira",
    idade: 38,
    sexo: "feminino",
    telefone: 691515148,}]   

//Crie uma função que mostre seu nome completo, usando o objeto acima.
pessoa.nomeCompleto = function(){
    return `${this[1].nome} ${this[1].sobrenome}`
}
//console.log(pessoa.nomeCompleto())

//Modifique o valor da propriedade preço

const carro = {
    marca: "Fiat",
    modelo:"Uno",
    ano: 2014,
    preco: 35000
}

carro.preco = 25000
//console.log(carro)

//Crie um objeto de um cachorro com suas característica, que quando ver um homem ele late.

let cachorro = {
    raca: 'pitbull',
    cor: 'preto',
    idade: 7,
    latir(homem){
        if(homem === 'homem'){
            return 'Au Au Au Latir '
        }else{
            return 'Deita'
        }
    }

}

console.log(cachorro.latir())