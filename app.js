const form = document.querySelector("form");
const input = document.querySelector("input");

let charset =
  "abcdefghijklmnopqrstuvwxyzABCDEFGIJKLMNOPQRSTUVWYZ0123456789!@#$%^&*()_{}[]|;:'<>,.?";
let password = "";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  generatePassword();
  input.value = password;

  navigator.clipboard.writeText(password);
});

const generatePassword = () => {
  password = "";
  for (let i = 0; i < 16; i++) {
    let randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
};
