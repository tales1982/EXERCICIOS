const btn = document.querySelector("#btn").addEventListener("click",(ev)=>{
    ev.preventDefault()
    const name = document.querySelector("#name").value
    const radius = document.querySelector(
      'input[name="fav_language"]:checked'
    ).value;

    let indece = 0
    while(radius == "true"){
        let res = confirm("Deseja continuar a volta")
        indece ++
        if(res == false){
            break
        }
    }
    const spanRes = document.querySelector(".res")
    const resP = document.createElement("p")
    resP.className = "resP"
    resP.textContent = `O nome da sua nave é ${name}, e voçe deu ${indece} dobra espacial.`
    spanRes.appendChild(resP)
})