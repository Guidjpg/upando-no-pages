let lis = JSON.parse(localStorage.getItem("usuario")) || [];
let butom = document.getElementById("save");

function save() {
  console.log("namme", lis[lis.length - 1]);
  let nominho = document.getElementById("nome");
  let senhazinha = document.getElementById("Senha");

  nominho.innerHTML = `Nome: ${lis[lis.length - 1].nome}`;
  senhazinha.innerHTML = `Senha: ${lis[lis.length - 1].senha}`;	

  console.log("nada", lis[lis.length - 1]);
  if (lis.length > 0) {
    let lastUser = lis[lis.length - 1];
    alert(`Nome: ${lastUser.nome}\nSenha: ${lastUser.senha}`);
  } else {
    alert("Não há usuários cadastrados.");
  }
}
butom.addEventListener("click", save);

let backBut = document.getElementById("clear");
function back() {
  window.location.href = "index.html";
}
backBut.addEventListener("click", back);
