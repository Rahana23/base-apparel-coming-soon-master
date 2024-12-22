let email = document.getElementById("email");
let errorIcon = document.getElementById("error-icon");
let dangerText = document.getElementById("danger-text");
let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  if (email.validaty.typeMismatch) {
    e.preventDefault();
    errorIcon.style.opacity = 1;
    dangerText.style.opacity = 1;
  } else {
    errorIcon.style.opacity = 0;
    dangerText.style.opacity = 0;
  }
});
