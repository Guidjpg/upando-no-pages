let botom = document.getElementById("bot");
let form = document.getElementById("proc");
let butto = document.getElementById("cor");
let dez = document.getElementById("cor");

let lis = [];

function verificaCampos(event) {
  event.preventDefault();
  let name = document.getElementById("username").value;
  let senha = document.getElementById("password").value;

  if (name === "" && senha === "") {
    alert("Todos os campos são obrigatórios.");
  } else {
    console.log("deu certo");

    lis.push({ nome: name, senha: senha });

    if (name === "admin") {
      alert("Você é o admin");
      localStorage.setItem("usuario", JSON.stringify(lis));
      window.location.href = "logo.html";
    } else {
      alert("Voce logou");
      localStorage.setItem("usuario", JSON.stringify(lis));
      window.location.href = "admi.html";
    }
  }
  console.log(lis);
}
form.addEventListener("submit", verificaCampos);

function acao() {
  input.style.backgroundColor = "black";
  console.log("deu certo");
}

function defa() {
  input.style.backgroundColor = "#fff";
  console.log("deu erado");
}
dez.addEventListener("mouseout", defa);
butto.addEventListener("mouseenter", acao);
