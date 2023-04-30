function calc() {
    let nome = prompt('Qual é o nome do aluno?')
    let n1 = Number(prompt(`Qual foi a primeira nota de ${nome}`))
    let n2 = Number(prompt(`Qual foi a segunda nota de ${nome}`))
    let media = (n1+n2)/2
    let msg 
    if (media >=6) {
        msg = 'Parabens voçe PASSOU'
    }else{
        msg = 'REPROVADO'
    }

    let res = document.querySelector('section#msg')
    res.innerHTML = `Calculando a media final de <strong><mark>${nome}</mark></strong><br>`
    res.innerHTML += `As notas obtidas foram <mark>${n1}</mark> e <mark>${n2}</mark><br>`
    res.innerHTML += `A media final será <mark>${media}</mark><br>`
    res.innerHTML += `<strong style='color:red;'>${msg}</strong style='color:red;'>`
    
}