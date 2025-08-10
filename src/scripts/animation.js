window.addEventListener("load", () => {
  const headerLogo = document.querySelector(".header__logo");
  const animItems = document.querySelectorAll("._anim-items");

  if (animItems.length > 0) {
    animOnScroll(); // Проверка сразу после загрузки
    window.addEventListener("scroll", animOnScroll);
  }

  function animOnScroll() {
    animItems.forEach((animItem) => {
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = getOffsetTop(animItem);
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      const scrollY = window.pageYOffset;

      if (
        scrollY > animItemOffset - animItemPoint &&
        scrollY < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_active");
      } else {
        if (animItem.classList.contains("_reply")) {
          animItem.classList.remove("_active");
        }
      }
    });
  }

  function getOffsetTop(el) {
    const rect = el.getBoundingClientRect();
    return rect.top + window.pageYOffset;
  }

  setTimeout(() => {
    headerLogo.classList.add("_active");
  }, 500);
});
