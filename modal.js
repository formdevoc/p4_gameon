function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closebutton = document.querySelector(".close");
const form = document.getElementById("form");
const content = document.querySelector(".content");
const hero_section = document.querySelector(".hero-section");
const topnav = document.querySelector(".topnav");
const footer = document.querySelector("footer");
const confirmed = document.querySelector(".confirmed");
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  content.setAttribute("content-mobile", true);
  modalbg.setAttribute("bground-mobile", true);
}
// close modal
closebutton.addEventListener("click", closeModal);
function closeModal() {
  modalbg.style.display = "none";
  document.querySelector("form").reset();
}
// initial
var modalBody = document.getElementById("modal-body");
var initial = modalBody.innerHTML;
// check FirstName
function checkFirstName(input, type) {
  const regex =
    /^[a-zA-Z\-éëàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇÆæœ]{2,}$/;
  const inputValue = input.value.split(" ").join("");
  if (inputValue.length >= 3) {
    input.parentElement.removeAttribute("data-error");
    input.parentElement.removeAttribute("data-error-visible");
    return true;
  }
  if (type === "first") {
    input.parentElement.setAttribute(
      "data-error",
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
    );
  }
  input.parentElement.setAttribute("data-error-visible", true);
  return false;
}
// check LastName
function checkLastName(input, type) {
  const regex =
    /^[a-zA-Z\-éëàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇÆæœ]{2,}$/;
  const inputValue = input.value.split(" ").join("");
  if (inputValue.length >= 3) {
    input.parentElement.removeAttribute("data-error");
    input.parentElement.removeAttribute("data-error-visible");
    return true;
  }
  if (type === "last") {
    input.parentElement.setAttribute(
      "data-error",
      "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    );
  }
  input.parentElement.setAttribute("data-error-visible", true);
  return false;
}
// check Email adress
function checkEmail(input) {
  var regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const test = regex.test(input.value);
  if (test) {
    input.parentElement.removeAttribute("data-error");
    input.parentElement.removeAttribute("data-error-visible");
    return true;
  } else {
    input.parentElement.setAttribute(
      "data-error",
      "Vous devez entrer une adresse email valide."
    );
    input.parentElement.setAttribute("data-error-visible", true);
    return false;
  }
}
// check birth date
function checkBirthdate(input) {
  if (input.value) {
    input.parentElement.removeAttribute("data-error");
    input.parentElement.removeAttribute("data-error-visible");
    const currentYear = new Date();
    const selectedYear = new Date(document.getElementById("dates").value);
    if (checkAge(currentYear, selectedYear) >= 18) {
      input.parentElement.removeAttribute("data-error");
      input.parentElement.removeAttribute("data-error-visible");
      return true;
    } else {
      input.parentElement.setAttribute("data-error", "Vous devez être majeur.");
      input.parentElement.setAttribute("data-error-visible", true);
    }
  } else {
    input.parentElement.setAttribute(
      "data-error",
      "Vous devez entrer votre date de naissance."
    );
    input.parentElement.setAttribute("data-error-visible", true);
    return false;
  }
}
// checkAge function
function checkAge(currentDate, birthDate) {
  var diff = Math.floor(currentDate.getTime() - birthDate.getTime());
  var day = 1000 * 60 * 60 * 24;
  var days = Math.floor(diff / day);
  var years = Math.floor(days / 365.25);
  return years;
}
// number of the tournament
function checkQuantity(input) {
  var regex = /^\d$/;
  const test = regex.test(input.value);
  if (test) {
    input.parentElement.removeAttribute("data-error");
    input.parentElement.removeAttribute("data-error-visible");
    return true;
  } else {
    input.parentElement.setAttribute(
      "data-error",
      "Vous devez entrer un nombre."
    );
    input.parentElement.setAttribute("data-error-visible", true);
    return false;
  }
}
// verification du nombre
function checkQuantity(input) {
  var regex = /^\d$/;
  const test = regex.test(input.value);
  if (test) {
    input.parentElement.removeAttribute("data-error");
    input.parentElement.removeAttribute("data-error-visible");
    return true;
  } else {
    input.parentElement.setAttribute(
      "data-error",
      "Vous devez entrer un nombre."
    );
    input.parentElement.setAttribute("data-error-visible", true);
    return false;
  }
}

// validate function
function validate() {
  const first = document.getElementById("first");
  const last = document.getElementById("last");
  const date = document.getElementById("dates");
  const quantity = document.getElementById("quantity");
  const radio_value = document.querySelector('input[name="location"]:checked');
  const email = document.getElementById("email");

  let isFirstValid = false;
  let isLastValid = false;
  let isEmailValid = false;
  let isBirthdateValid = false;
  let isQuantityValid = false;
  let isRadioValid = false;
  let isCheckboxValid = false;

  if (radio_value === null) {
    const radio_parent = document.querySelector(
      'input[name="location"]'
    ).parentNode;
    radio_parent.setAttribute("data-error", "Vous devez choisir une option.");
    radio_parent.setAttribute("data-error-visible", true);
  } else {
    isRadioValid = true;
  }
  const check_value = document.getElementById("checkbox1").checked;
  if (check_value === false) {
    const check_parent = document.querySelector(
      'input[id="checkbox1"]'
    ).parentNode;
    check_parent.setAttribute(
      "data-error",
      "Vous devez vérifier que vous acceptez les termes et conditions."
    );
    check_parent.setAttribute("data-error-visible", true);
  } else {
    isCheckboxValid = true;
  }
  isFirstValid = checkFirstName(first, "first");
  isLastValid = checkLastName(last, "last");
  isEmailValid = checkEmail(email);
  isBirthdateValid = checkBirthdate(date);
  isQuantityValid = checkQuantity(quantity);

  return (
    isBirthdateValid &&
    isCheckboxValid &&
    isEmailValid &&
    isFirstValid &&
    isLastValid &&
    isQuantityValid &&
    isRadioValid
  );
}
// déclenchement de l'événement de la validation du formulaire
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (validate() === true) {
    document.querySelector("form").reset();
    const modalBody = document.getElementById("modal-body");
    modalBody.innerHTML = `
              <p class="confirmed">
                          Merci ! Votre réservation a été reçue.
                      </p>
                      <button class="btn-close" onclick="closeForm()">Fermer</button>
              `;
    //modalbg.style.backgroundColor="initial";
    content.setAttribute("content-mobile", true);
    modalbg.setAttribute("bground-mobile", true);
  }
});
// fermer formulaire
function closeForm() {
  form.style.display = "none";
  modalBody.innerHTML = initial;
}
