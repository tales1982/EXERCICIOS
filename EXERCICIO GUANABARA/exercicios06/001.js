/*function btn() {
    let n1 = Number(prompt('Digite um numero'))
    let n2 = Number(prompt('Digite outro numero'))
    document.querySelector('section#msg')
    .innerHTML =`A soma entre  <mark>${n1} </mark> e  <mark>${n2} </mark> é <strong> ${n1 + n2} </strong>!!`

}
*/
 function btn() {
    let n1 = Number(prompt('Digite um numero'))
    let n2 = Number(prompt('Digite outro numero'))
    let soma = n1 + n2
    document.querySelector('section#msg')
    .innerHTML =`A soma entre  <mark>${n1} </mark> e  <mark>${n2} </mark> é <strong> ${soma} </strong>!!`

 }


 //as duas opcoes estao correnta com a variante soma ou sem..