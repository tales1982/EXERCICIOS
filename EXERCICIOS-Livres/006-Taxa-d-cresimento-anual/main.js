let paisA = 80.000
let paisB = 200.000
let qtAnos = 0
while(paisB > paisA){
    let populacaoPaisA = paisA * 0.03
    let populacaoPaisB = paisB * 0.015
    paisA = paisA + populacaoPaisA
    paisB  = paisB + populacaoPaisB
    qtAnos ++
    console.log(`O pais A ${paisA.toFixed(3)} passara o pais B ${paisB.toFixed(3)} em ${qtAnos} anos`)
}

/*Mas como funciona esse algoritmo?
Esse algoritmo escrito em Javascript multiplica a população de um país pela sua taxa de crescimento anual e soma 1 na variável qtdAnos. Ao fim da estrutura de repetição while, que só encerra quando a população do país A ultrapassar a do país B, a quantidade de anos que irá demorar para o país A ter maior população que o país B é de 63 anos.*/