function togglePassword() {
  const passwordField = document.getElementById("password");
  const passwordButton = document.querySelector(".password-container button");
  if (passwordField.type === "password") {
    passwordField.type = "text";
    passwordButton.textContent = "Hide";
  } else {
    passwordField.type = "password";
    passwordButton.textContent = "Show";
  }
}