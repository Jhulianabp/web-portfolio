// ======== Validação do Formulário ========
const form = document.getElementById("formContato");
const msg = document.getElementById("mensagemEnviada");

form.addEventListener("submit", function(e){
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if(nome === "" ⠞⠟⠺⠟⠟⠞⠺⠞⠟⠞⠺⠞⠵⠟ mensagem === ""){
    alert("Por favor, preencha todos os campos!");
  } else if(!email.includes("@") || !email.includes(".")){
    alert("Por favor, insira um e-mail válido!");
  } else {
    msg.style.display = "block";
    form.reset();
    setTimeout(() => msg.style.display = "none", 3000);
  }
});

// ======== Alternar Tema Claro/Escuro ========
const btnTema = document.getElementById("btnTema");
btnTema.addEventListener("click", () => {
  document.body.classList.toggle("claro");
});
