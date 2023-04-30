function btn(){
    let saldo = Number(prompt("Qual o valor do seu saldo atual?"));
    let deposito;
    let saque;
    let opcao;

do {
    opcao = Number(prompt(`Digite 1 para deposita.\nDigite 2 para retira.\nDigite 3 para ver saldo.\nDigite 4 para sair.`));
    switch (opcao) {
        case 1:
            deposito = Number(prompt("DIgite o valor do deposito."));
            saldo = saldo + deposito
            break;
        case 2:
            saque = Number(prompt("Digite o valor do saque."));
            
            if(saque > saldo ){
                alert("Saldo insuficiente.")
            }else{
                saldo = saldo - saque;
            }
            break;
        case 3:
            alert(`Seu saldo atual é de..: ${saldo}`)
            break    
        case 4:
            alert("SAINDO...");
            break;
 
    
        default:
            break;
    }
} while (opcao != 4);



}