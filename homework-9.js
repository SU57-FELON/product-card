import { products } from "./products.js";
import { startRender } from './homework-8.js'

startRender()

console.log(products);

console.log("JS загружен");
const emailForm = document.getElementById("email-form");

emailForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailInput = document.getElementById("email");
  const emailValue = emailInput.value;
  console.log({ email: emailValue });
});

const registrtion = document.querySelector("#open-modal-btn");
const closeBtn = document.querySelector("#close-modal-btn");
const overlay = document.querySelector("#overlay");
registrtion.addEventListener("click", () => {
  overlay.classList.add("modal-showed");
});
closeBtn.addEventListener("click", () => {
  overlay.classList.remove("modal-showed");
});

const regForm = document.querySelector("#registration-form");
let user = null;
regForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameValue = document.querySelector("#name").value;
  const surnameValue = document.querySelector("#surname").value;
  const birthDayValue = document.querySelector("#birthData").value;
  const loginValue = document.querySelector("#login").value;
  const passwordValue = document.querySelector("#password").value;
  const confirmPasswordValue = document.querySelector("#password-confirm").value;

  if (regForm.checkValidity() && passwordValue === confirmPasswordValue) {
    const userData = {
      name: nameValue,
      surname: surnameValue,
      birthDay: birthDayValue,
      login: loginValue,
      password: passwordValue,
      createdOn: new Date()
    };
    console.log(userData);
    user = userData;
    overlay.classList.remove("modal-showed");
  } else {
    alert("Регистрация отклонена.");
  }
});

