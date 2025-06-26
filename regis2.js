document.getElementById("proc").addEventListener("submit", function (event) {
  event.preventDefault(); // impede envio padrão

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();

  if (username === "" || email === "") {
    alert("Preencha todos os campos.");
    return;
  }

     window.location.href = "presgites.html";

});
