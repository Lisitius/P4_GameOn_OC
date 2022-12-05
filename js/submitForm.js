const thanksModalBg = document.getElementsByClassName("thanks-modal-bg");
const closeBtnThanksModal = document.getElementById("close-btn-thanks-modal");
const closeThanksModal = document.getElementsByClassName("close-thanks-modal");

//display thankModalBg in index.html
function showThanksSubmit() {
  modalbg.style.display = "none";
  thanksModalBg[0].style.display = "block";
}

// close popup and reset border style
function closeSubmit() {
  thanksModalBg[0].style.display = "none";
  first.style.border = "none";
  last.style.border = "none";
  email.style.border = "none";
  birthdate.style.border = "none";
  tournament.style.border = "none";
}

//button for close popup
closeThanksModal[0].addEventListener("click", closeSubmit);
closeBtnThanksModal.addEventListener("click", closeSubmit);
