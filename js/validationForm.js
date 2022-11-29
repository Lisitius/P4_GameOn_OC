//get dom element
const firstname = document.getElementById("first");
const lastname = document.getElementById("last");
const email = document.getElementById("email");
const form = document.getElementById("form");
const birthdate = document.getElementById("birthdate");
const tournament = document.getElementById("quantity");

const locations = document.getElementById("locations");
const checkboxInput = document.querySelectorAll("#locations .checkbox-input");

const checkbox1 = document.getElementById("checkbox1");

//regex
const emailRegex =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//function check firstname
function checkFirstname() {
  if (firstname.value.length < 2) {
    firstname.parentElement.setAttribute("data-error-visible", "true");
    firstname.style.border = "2px solid #ff0000";
    return false;
  } else {
    first.parentElement.setAttribute("data-error-visible", "false");
    firstname.style.border = "2px solid #7CFC00";
    return true;
  }
}

//function check lastname
function checkLastname() {
  if (lastname.value.length < 2) {
    lastname.parentElement.setAttribute("data-error-visible", "true");
    lastname.style.border = "2px solid #ff0000";
    return false;
  } else {
    lastname.parentElement.setAttribute("data-error-visible", "false");
    lastname.style.border = "2px solid #7CFC00";
    return true;
  }
}

//function check email
function checkEmail() {
  if (email.value.match(emailRegex)) {
    email.parentElement.setAttribute("data-error-visible", "false");
    email.style.border = "2px solid #7CFC00";
    return true;
  } else {
    email.parentElement.setAttribute("data-error-visible", "true");
    email.style.border = "2px solid #ff0000";
    return false;
  }
}

//function birthdate
function checkBirthdate() {
  const date = new Date(birthdate.value);
  if (date == "Invalid Date") {
    birthdate.parentElement.setAttribute("data-error-visible", "true");
    birthdate.style.border = "2px solid #ff0000";
    return false;
  } else {
    birthdate.parentElement.setAttribute("data-error-visible", "false");
    birthdate.style.border = "2px solid #7CFC00";
    return true;
  }
}

//function tournament
function checkTournament() {
  if (
    tournament.value === "" ||
    tournament.value < 0 ||
    isNaN(tournament.value) === true
  ) {
    tournament.parentElement.setAttribute("data-error-visible", "true");
    quantity.style.border = "2px solid #ff0000";
    return false;
  } else {
    tournament.parentElement.setAttribute("data-error-visible", "false");
    quantity.style.border = "2px solid #7CFC00";
    return true;
  }
}

function checkboX() {
  if (checkbox1.checked === true) {
    checkbox1.parentElement.setAttribute("data-error-visible", "false");
    return true;
  } else {
    locations.setAttribute("data-error-visible", "true");
    return false;
  }
}

function checkLocation() {
  locations.setAttribute("data-error-visible", "true");
  for (let i = 0; i < checkboxInput.length; i++) {
    if (checkboxInput[i].checked) {
      locations.setAttribute("data-error-visible", "false");
      return true;
    }
  }
  return false;
}

////field valid
function fieldValidation(element, method, event) {
  element.addEventListener(event, method);
}

fieldValidation(firstname, checkFirstname, "focusout");
fieldValidation(lastname, checkLastname, "focusout");
fieldValidation(email, checkEmail, "focusout");
fieldValidation(birthdate, checkBirthdate, "focusout");
fieldValidation(tournament, checkTournament, "focusout");
fieldValidation(locations, checkLocation, "change");
fieldValidation(checkbox1, checkboX, "change");

function allFieldValidation() {
  checkFirstname();
  checkLastname();
  checkEmail();
  checkBirthdate();
  checkTournament();
  checkLocation();
  checkboX();
}

function validate() {
  if (
    checkFirstname() &&
    checkLastname() &&
    checkEmail() &&
    checkBirthdate() &&
    checkTournament() &&
    checkboX() &&
    checkLocation() === true
  ) {
    console.log("test");
    return true;
  }
  return false;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validate() === true) {
    showThanksSubmit();
    console.log("test2");
  } else {
    allFieldValidation();
  }
});
