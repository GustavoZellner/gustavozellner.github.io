document.getElementById("formContato").addEventListener("submit", function(e) {
  e.preventDefault();

  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let mensagem = document.getElementById("mensagem").value;
  let msg = document.getElementById("msg");

  // validação
  if (nome === "" || email === "" || mensagem === "") {
    msg.style.color = "red";
    msg.textContent = "Preencha todos os campos!";
    return;
  }

  // validação simples de e-mail
  if (!email.includes("@") || !email.includes(".")) {
    msg.style.color = "red";
    msg.textContent = "E-mail inválido!";
    return;
  }

  // sucesso
  msg.style.color = "green";
  msg.textContent = "Mensagem enviada com sucesso!";

  // limpar formulário
  document.getElementById("formContato").reset();
});