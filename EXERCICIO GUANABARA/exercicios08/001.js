function clicar() {
    let numero = Number(prompt('Digite um numero'))
    let res = document.querySelector('section#msg')

    res.innerHTML = (`O número a ser analisado aqui será ${numero}<hr>`)
    res.innerHTML += ( `O seu valor absoluto é ${Math.abs(numero)}<br>`)
    res.innerHTML += (`A sua parte inteira é ${Math.trunc(numero)}<br>`)
    res.innerHTML += (`A sua raiz quadrada é ${Math.sqrt(numero)}<br>`)
    res.innerHTML += (`A sua raiz cúbica é ${Math.cbrt(numero)}<br>`)
    res.innerHTML += (`O valor de ${numero}<sup>2</sup> é ${Math.pow(numero,2)}<br>`)
    res.innerHTML += (`O valor  de ${numero} <sup>3</sup> é ${Math.pow(numero,3)}`)
}