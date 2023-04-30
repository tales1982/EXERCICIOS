
const btn = document.querySelector("#btn").addEventListener("click",(ev)=>{
    ev.preventDefault()
    const distance = Number(document.querySelector(".distance").value);
    const unity = document.querySelector(".unity").value;

    document.querySelector(".unity").value = "";
    document.querySelector(".distance").value = "";

switch(unity){
    case "pc":
        const resPC = document.querySelector(".pc")
        resPC.textContent = `${distance * 0.306601}`
        break
    case "au":
        const resAU = document.querySelector(".au");
        resAU.textContent = `${distance * 63241.1}`; 
        break
    case "km":
        const resKM = document.querySelector(".km");
        resKM.textContent = `${distance * 9.461 * Math.pow(10, 12)}`;
        break
    default:
        alert("Digite umas das 3 opções 'pc'-'au'-'mk'")
}

})

