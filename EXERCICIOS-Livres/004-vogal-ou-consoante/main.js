/** 
 * 1. Faça um script que verifique se uma letra digitada num campo de input é vogal ou consoante.
 * Nosso alfabeto possui 26 letras:
A – B – C – D – E – F – G – H – I – J – K – L – M – N – O – P – Q – R – S – T – U – V – W – X – Y – Z
Onde temos 5 vogais: A E I O U
*/
const enviar = document
  .querySelector("#enviar")
  .addEventListener("click", (ev) => {
    ev.preventDefault();
    const input2 = document.querySelector("#letra").value;
    let input = input2.toUpperCase();
    console.log(input);
    if (
      input == "A" ||
      input == "E" ||
      input == "I" ||
      input == "O" ||
      input == "U"
    ) {
      let ul = document.querySelector(".ul");
      let li = document.createElement("li");
      li.textContent = `Você selecionou uma Vogal: ${input2}`;

      document.querySelector("#letra").value = "";
      ul.appendChild(li);
    } else {
      `Você selecionou uma Consoante: ${input2}`;
      let ul = document.querySelector(".ul");
      let li = document.createElement("li");

      li.textContent = `Você selecionou uma Consoante: ${input2}`;
      document.querySelector("#letra").value = "";
      ul.appendChild(li);
    }
  });
