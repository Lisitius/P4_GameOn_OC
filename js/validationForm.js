//get dom element
const firstname = document.getElementById("first");
const lastname = document.getElementById("last");
const form = document.getElementById("form");

//regex
const emailRegex =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//function check firstname
function checkFirstname() {
  if (firstname.value.length < 2) {
    firstname.parentElement.setAttribute("data-error-visible", "true");
    return false;
  } else {
    firstname.parentElement.setAttribute("data-error-visible", "false");
    firstname.style.border = "2px solid #7CFC00";
    return true;
  }
}

//function check lastname
function checkLastname() {
  if (lastname.value.length < 2) {
    lastname.parentElement.setAttribute("data-error-visible", "true");
    return false;
  } else {
    lastname.parentElement.setAttribute("data-error-visible", "false");
    lastname.style.border = "2px solid #7CFC00";
    return true;
  }
}

////field valid
function fieldValidation(element, method, event) {
  element.addEventListener(event, method);
}

fieldValidation(firstname, checkFirstname, "focusout");
fieldValidation(lastname, checkFirstname, "focusout");

function allFieldValidation() {
  checkFirstname();
  checkLastname();
}

function validate() {
  if (checkFirstname() === true && checkLastname() === true) {
    console.log("field ok");
    return true;
  }
  return false;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validate() === true) {
    showThanksSubmit();
  } else {
    allFieldValidation();
  }
});
