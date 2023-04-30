
function logar(){
    let email = document.getElementById("email");
    let senha = document.getElementById("senha");



    if(email.value == "admin@admin.com" && senha.value == "admin"){
        localStorage.setItem("acesso", true);

        window.location.href = "index.html"
    } else {
        alert("Usuario e Senha incorreto");
    }
     
}