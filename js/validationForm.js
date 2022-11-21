//get dom element
const firstname = document.getElementById("first");
const lastname = document.getElementById("last");
const email = document.getElementById("email");

//regex
const emailRegex =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//function check firstname
function checkFirstname() {
  if (firstname.value === "" || firstname.value.length < 2) {
    firstname.parentElement.setAttribute("data-error-visible", "true");
  } else {
    firstname.parentElement.setAttribute("data-error-visible", "false");
    firstname.style.border = "2px solid #7CFC00";
  }
}

//function check lastname
function checkLastname() {
  if (lastname.value === "" || lastname.value.length < 2) {
    lastname.parentElement.setAttribute("data-error-visible", "true");
  } else {
    lastname.parentElement.setAttribute("data-error-visible", "false");
    lastname.style.border = "2px solid #7CFC00";
  }
}
