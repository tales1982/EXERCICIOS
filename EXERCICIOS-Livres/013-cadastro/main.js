function capturar() {

  event.preventDefault();
  const liNome = document.querySelector("#nome").value;
  const liSobrenome = document.querySelector("#sobrenome").value;
  const liEstudo = document.querySelector("#estudo").value;
  const liNascimento = document.querySelector("#nascimento").value;
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();
  const idade = anoAtual - liNascimento;

  const dadosCompleto = `Ola ${liNome} ${ liSobrenome} estuda na are de ${liEstudo} e tem ${idade} anos.`
console.log(dadosCompleto);

  const lista = document.querySelector("#res");
  const ul = document.createElement("ul");
  const li = document.createElement("li");
  li.innerText = dadosCompleto;
  ul.appendChild(li);
  lista.appendChild(ul);

  document.querySelector("#nome").value = "";
  document.querySelector("#sobrenome").value = ""; 
  document.querySelector("#estudo").value = "";
  document.querySelector("#nascimento").value = "";
}
