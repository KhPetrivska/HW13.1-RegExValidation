"use strict";
const contactForm = document.forms[0];
const { elements } = contactForm;
const nameInput = elements.name;
const messageInput = elements.message;
const phoneInput = elements.number;
const email = elements.email;

const information = {
  name: null,
  message: null,
  number: null,
  email: null,
};

//Submition
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (information.name && information.number && information.email) {
    const newRequest = Object.assign({ id: "id" + Date.now() }, information);
    console.log(newRequest);
    nameInput.value = null;
    messageInput.value = null;
    phoneInput.value = null;
    email.value = null;
  } else {
    alert("Fill all required fields properly");
  }
});

//Name
nameInput.addEventListener("input", (event) => {
  const nHint = nameInput.nextElementSibling;
  if (!nameInput.value.trim()) {
    information.name = null;
    nHint.style.display = "";
  } else {
    information.name = nameInput.value;
    nHint.style.display = "none";
  }
});

//Message
messageInput.addEventListener("input", (event) => {
  const messageValuesTrimed = messageInput.value.replace(/\s/g, "");
  const mHint = messageInput.nextElementSibling;
  if (messageInput.value.trim().length > 5 || !messageInput.value.trim()) {
    information.message = messageInput.value;
    mHint.style.display = "none";
  } else {
    mHint.style.display = "";
    information.message = null;
  }
});

//Phone
const pHint = phoneInput.nextElementSibling;


phoneInput.addEventListener("input", (event) => {
  let phoneValue = phoneInput.value.trim();
  phoneValue = phoneValue.replace(/[ \-()]/g, "");

  const typePhNumValidator = /^\+380\d{9}$/;

  if (!phoneValue) {
    pHint.style.display = "";
  } else if (!typePhNumValidator.test(phoneValue)) {
    pHint.style.display = "";
    pHint.textContent =
      "Your input is not a valid phone number. Use this format + 380 00 000 0000";
    information.number = null;
  } else {
    information.number = phoneValue;
    pHint.style.display = "none";
  }
});

//Email
email.addEventListener("input", (event) => {
  const eHint = email.nextElementSibling;
  const validateEmail = /\S+@\S+\.\S+/;
  const emailValue = email.value.trim();

  eHint.style.display = "none";

  if (!emailValue) {
    eHint.style.display = "";
  } else if (!validateEmail.test(emailValue)) {
    eHint.style.display = "";
    eHint.textContent = "Email is not valid";
    information.email = null;
  } else {
    information.email = emailValue;
    eHint.style.display = "none";
  }
});
