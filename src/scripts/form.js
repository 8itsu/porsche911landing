const contactForm = document.querySelector(".contact__form");
contactForm.addEventListener("submit", contactFormHandler);

function contactFormHandler(e) {
  e.preventDefault();
  if (contactForm.checkValidity()) {
    alert("Заявка отправлена!");
    contactForm.reset();
  }
}
