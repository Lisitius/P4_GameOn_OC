//get form fields
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
  // checks if first name has less than 2 characters
  if (firstname.value.length < 2) {
    //set data-error true if firstname is not valid and add red border
    firstname.parentElement.setAttribute("data-error-visible", "true");
    firstname.style.border = "2px solid #ff0000";
    return false;
  } else {
    //set data-error false if firstname is valid and add green border
    first.parentElement.setAttribute("data-error-visible", "false");
    firstname.style.border = "2px solid #7CFC00";
    return true;
  }
}

//function check lastname
function checkLastname() {
  // checks if last name has less than 2 characters
  if (lastname.value.length < 2) {
    //set data-error true if lastname is not valid and add red border
    lastname.parentElement.setAttribute("data-error-visible", "true");
    lastname.style.border = "2px solid #ff0000";
    return false;
  } else {
    //set data-error false if lastname is valid and add green border
    lastname.parentElement.setAttribute("data-error-visible", "false");
    lastname.style.border = "2px solid #7CFC00";
    return true;
  }
}

//function check email
function checkEmail() {
  // check if the email is valid with the help of regex
  if (email.value.match(emailRegex)) {
    // set data-error false if the email is valid and add green border
    email.parentElement.setAttribute("data-error-visible", "false");
    email.style.border = "2px solid #7CFC00";
    return true;
  } else {
    // set data-error true if the email is not valid and add red border
    email.parentElement.setAttribute("data-error-visible", "true");
    email.style.border = "2px solid #ff0000";
    return false;
  }
}

//function birthdate
function checkBirthdate() {
  //check if birthdate have a value
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
  //check if tournament is empty or has a value less than or if it is not a number
  if (
    tournament.value === "" ||
    tournament.value < 0 ||
    isNaN(tournament.value) === true
  ) {
    //set data-error true if tournament is not valid and add red border
    tournament.parentElement.setAttribute("data-error-visible", "true");
    quantity.style.border = "2px solid #ff0000";
    return false;
  } else {
    // set data-error false if tournament is valid and add green border
    tournament.parentElement.setAttribute("data-error-visible", "false");
    quantity.style.border = "2px solid #7CFC00";
    return true;
  }
}

//function tournament location
function checkLocation() {
  //set data-error to true
  locations.setAttribute("data-error-visible", "true");
  //loop all locations for check if a location are checked
  for (let i = 0; i < checkboxInput.length; i++) {
    //if one of a locations are check
    if (checkboxInput[i].checked) {
      //set data error to false and return true
      locations.setAttribute("data-error-visible", "false");
      return true;
    }
  }
  return false;
}

//function checkbox terms of use
function checkboX() {
  //check if the checkbox is checked
  if (checkbox1.checked === true) {
    //set data-error false et return true if a checkbox is checked
    checkbox1.parentElement.setAttribute("data-error-visible", "false");
    return true;
  } else {
    //set data-error true if the checkbox are not checked
    checkbox1.parentElement.setAttribute("data-error-visible", "true");
    return false;
  }
}

////field valid
function fieldValidation(element, method, event) {
  element.addEventListener(event, method);
}

//add a defocus of the inputs
fieldValidation(firstname, checkFirstname, "focusout");
fieldValidation(lastname, checkLastname, "focusout");
fieldValidation(email, checkEmail, "focusout");
fieldValidation(birthdate, checkBirthdate, "focusout");
fieldValidation(tournament, checkTournament, "focusout");
//add an event on checkbox
fieldValidation(locations, checkLocation, "change");
fieldValidation(checkbox1, checkboX, "change");

//All field validation check
function allFieldValidation() {
  checkFirstname();
  checkLastname();
  checkEmail();
  checkBirthdate();
  checkTournament();
  checkLocation();
  checkboX();
}

//form validation check
function validate() {
  //if all function return true so return true else return false
  if (
    checkFirstname() &&
    checkLastname() &&
    checkEmail() &&
    checkBirthdate() &&
    checkTournament() &&
    checkboX() &&
    checkLocation() === true
  ) {
    return true;
  }
  return false;
}

//form submit
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validate() === true) {
    //if function validate is true launch function showThanksSubmit in submitform.js and reset the form field
    showThanksSubmit();
    document.querySelector("form").reset();
  } else {
    //else go back in allFieldValidation
    allFieldValidation();
  }
});
