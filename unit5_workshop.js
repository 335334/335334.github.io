const registrationForm = document.querySelector("#registration form");
const confirmation = registrationForm.querySelector(".form-message");

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!registrationForm.reportValidity()) return;

  registrationForm.reset();
  confirmation.textContent = "Registration successful. We'll send you a calendar invitation.";
  confirmation.hidden = false;
  confirmation.focus();
});
