const passwordField = document.getElementById("password-field");
const togglePassword = document.getElementById("toggle-password");

//ocultar e exibir a senha 

togglePassword.addEventListener("click", function () {
  if (passwordField.type === "password") {
    passwordField.type = "text";
    togglePassword.textContent = "Ocultar senha";
    passwordField.classList.add("senha-oculta");

  } else {
    passwordField.type = "password";
    togglePassword.textContent = "Mostrar senha";
    passwordField.classList.remove("senha-oculta");

  }
});

//Função para direcionar a partir do click

function redirecionar() {
  window.location.href = "https://linktr.ee/owalee";
}