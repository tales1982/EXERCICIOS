function bnt() {
    let nome = prompt('Qual é o nome do aluno?')
    let n1 = Number(prompt(`Qual foi a primeira nota de ${nome}?`))
    let n2 = Number(prompt(`Alen de ${n1}, qual foi a outra nota de ${nome}.`))
    let res = (n1 + n2)/2
    document.querySelector('section#msg')
    .innerHTML = (`Calculando amedia final de <mark>${nome}</mark><br><br>
    As notas obtidas foram <mark>${n1}</mark> e <mark>${n2}</mark><br><br>
    A media final será <mark>${res}</mark>.`)

}