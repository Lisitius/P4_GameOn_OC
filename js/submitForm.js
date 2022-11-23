const thanksModalBg = document.getElementsByClassName("thanks-modal-bg");
const closeBtnThanksModal = document.getElementById("close-btn-thanks-modal");
const closeThanksModal = document.getElementsByClassName("close-thanks-modal");

function showThanksSubmit() {
  modalbg.style.display = "none";
  thanksModalBg[0].style.display = "block";
}

function closeSubmit() {
  thanksModalBg[0].style.display = "none";
  first.style.border = "none";
  last.style.border = "none";
}

closeThanksModal[0].addEventListener("click", closeSubmit);
closeBtnThanksModal.addEventListener("click", closeSubmit);
