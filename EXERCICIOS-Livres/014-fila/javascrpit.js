let opcao = ""
let paciente = []

do {
    opcao = prompt(`
    Paçiente a espera: ${ paciente}
    Digite 1 para novo paciente:
    Digite 2 para Consulta paciente:
    Digite 3 para sair.
    `)
    switch (opcao) {
    case "1":
        let novoPaciente = prompt(
        "Bem vindo digite seu nome para ser adcionado na lista de consulta.! "
        );  
        const confirmacao = confirm(`O paciente se chama ${novoPaciente} se estiver correto confirme`)
    if(confirmacao){
        paciente.push(novoPaciente);
        paciente.forEach(function(nome, indece){
        alert(`${indece + 1} ${nome}`)
    })
    }else{
        alert("Voltando ao menu.")
        }
    break
    case "2":
        let pacienteConsultado = paciente.shift()
        
        if (pacienteConsultado) { 
    alert(`
    O proximo paciente a ser atendido vai ser ${pacienteConsultado}.
    Ainda foltan para ser atendido  ${paciente}.`)
        }else{
    alert("Nao exister mais paçiente na lista de espera."); 
        }
        break
    case "3":
        alert("Saindo...")
        break
        default:
        alert("[ERRO] Opçao invalida tente novamente")
        break
    }
} while (opcao !== "3");
alert("Obrigado pela visita, volte sempre.")