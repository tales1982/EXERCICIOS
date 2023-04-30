const inputEnviar = document.getElementById("enviar");
const nome = document.getElementById("nome")
const sobrenome = document.getElementById("sobrenome")
const res = document.getElementById("res")

inputEnviar.addEventListener("click", function(ev){
    ev.preventDefault()
    res.innerText = `Bem vindo: ${nome.value} ${sobrenome.value}.`;
})




