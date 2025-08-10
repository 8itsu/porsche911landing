// Открытие
document.querySelectorAll("[data-modal-target]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const modalSelector = btn.getAttribute("data-modal-target");
    const modal = document.querySelector(modalSelector);
    if (modal) {
      modal.classList.add("show_modal");
    }
  });
});

// Закрытиее на кнопку
document.querySelectorAll("[data-modal-close]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const modalSelector = btn.getAttribute("data-modal-close");
    const modal = document.querySelector(modalSelector);
    if (modal) {
      modal.classList.remove("show_modal");
    }
  });
});

// Закрытие на область вне модального окна
document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("show_modal");
    }
  });
});

// Закрытие на Escape
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    document.querySelectorAll(".modal.show_modal").forEach((modal) => {
      modal.classList.remove("show_modal");
    });
  }
});
