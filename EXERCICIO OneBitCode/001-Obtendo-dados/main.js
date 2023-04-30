const btn = document.querySelector(".btn-theme").addEventListener("click",(ev)=>{
    ev.preventDefault()
    const themeBody = document.getElementById("body")
    themeBody.classList.add("body-dark");
})
const btn2 = document
  .querySelector(".btn-theme2")
  .addEventListener("click", (ev) => {
    ev.preventDefault();
    const themeBody2 = document.getElementById("body");
    themeBody2.classList.remove("body-dark");
    
  });

//data capture --> captura de dados


const form = document.querySelector("#btn-submit").addEventListener("click",(ev)=>{
  ev.preventDefault();

  const name = document.querySelector("#name").value;
  const age = document.querySelector("#age").value;
  const tel = document.querySelector("#tel").value;
  const country = document.querySelector("#country").value;
  console.log({ name, age, tel, country });

  document.querySelector("#name").value = "";
  document.querySelector("#age").value = "";
  document.querySelector("#tel").value = "";
  document.querySelector("#country").value = "";

  const result = document.querySelector(".section-ul");
  const liName = document.createElement("li");
  liName.textContent = name;
  const liAge = document.createElement("li");
  liAge.textContent = age;
const liTel = document.createElement("li");
liTel.textContent = tel;
const liCountry = document.createElement("li");
liCountry.textContent = country;
  result.append(liName, liAge,liTel,liCountry);
})



