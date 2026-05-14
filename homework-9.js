import { products } from "./products.js";
import { renderProductCards } from './homework-8.js'
import { Modal } from './Modal.js';
import { Form } from './Form.js';

const modal = new Modal("overlay");
const form = new Form("registration-form");
const email = new Form("email-form");

renderProductCards(products);

console.log(products);

console.log("JS загружен");

const emailForm = document.getElementById("email-form");

emailForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const values = email.getValues();
  const emailValue = values.get("email");
  console.log({ email: emailValue });
  if (email.isValid()) {
    alert("Спасибо за подписку!");
    email.reset();
  } else {
    alert("Пожалуйста, введите корректный email."); 
  }
});

const registrtion = document.getElementById("open-modal-btn");
registrtion.addEventListener("click", () => {
  modal.openModal();
});

const regForm = document.getElementById("registration-form");
let user = null;

regForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const values = form.getValues();
  const passwordValue = values.get("password");
  const confirmPasswordValue = values.get("passwordConfirm");
  if (form.isValid() && passwordValue === confirmPasswordValue) {
    const userData = {
      name: values.get("name"),
      surname: values.get("surname"),
      birthDay: values.get("birthData"),
      login: values.get("login"),
      password: passwordValue,
      createdAt: new Date()
    };
    form.reset();
    console.log(userData);
    user = userData;
    modal.closeModal();
  } else {
    alert("Регистрация отклонена.");
  }
});

