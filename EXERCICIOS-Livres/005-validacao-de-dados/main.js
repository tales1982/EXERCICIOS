const btn = document.querySelector("#btn").addEventListener("click",(ev)=>{
    ev.preventDefault()
    const nome = document.querySelector("#nome").value
    const idade = document.querySelector("#idade").value
    const salario = document.querySelector("#salario").value
    const sexo = document.querySelector("input[name=sexo]:checked").value
    const estadoCivil = document.querySelector("input[name=check-box]:checked").value

    console.log({nome,idade,salario,sexo,estadoCivil})

    const ul = document.querySelector(".ul")

    const liNome = document.createElement("li")
    liNome.textContent = `Nome :${nome}.`;

     const liIdade = document.createElement("li")
    liIdade.textContent = `Idade: ${idade}.`;

    const liSalario = document.createElement("li")
    liSalario.textContent = `Salario: ${salario}.`;

    const liSexo = document.createElement("li")
    liSexo.textContent = `Sexo: ${sexo}.`;

    const liEstadoCivil = document.createElement("li")
    liEstadoCivil.textContent = `Estado Civil: ${estadoCivil}`;
    
ul.append(liNome, liIdade, liSalario, liSexo, liEstadoCivil);
})