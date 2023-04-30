const btn = document.querySelector("#btn").addEventListener("click",(ev)=>{
   ev.preventDefault()
    const inputNome = document.querySelector("#nome").value
    const inputSenha = document.querySelector("#pass").value
    console.log(inputNome,inputSenha)
    if(inputNome == inputSenha){
        alert("O usuario e senha nao pode ser igual")
    }else{
        alert("Senha correta")
    }
})