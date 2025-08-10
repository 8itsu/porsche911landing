class Slider {
  constructor(sliderId) {
    this.wrapper = document.getElementById(sliderId);
    this.prevBtn = document.getElementById("prevBtn");
    this.nextBtn = document.getElementById("nextBtn");
    this.dots = document.querySelectorAll(".gallery__slider-dot");
    this.slides = document.querySelectorAll(".gallery__slider-img");

    this.currentSlide = 0;
    this.totalSlides = this.slides.length;

    this.init();
  }

  init() {
    this.prevBtn.addEventListener("click", () => this.prevSlide());
    this.nextBtn.addEventListener("click", () => this.nextSlide());

    this.dots.forEach((dot, index) => {
      dot.addEventListener("click", () => this.goToSlide(index));
    });

    // Автопрокрутка (опционально)
    this.startAutoSlide();
  }

  updateSlider() {
    const translateX = -this.currentSlide * 100;
    this.wrapper.style.transform = `translateX(${translateX}%)`;

    // Обновляем активную точку
    this.dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === this.currentSlide);
    });
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    this.updateSlider();
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    this.updateSlider();
  }

  goToSlide(slideIndex) {
    this.currentSlide = slideIndex;
    this.updateSlider();
  }

  startAutoSlide() {
    setInterval(() => {
      this.nextSlide();
    }, 10000); // Автопрокрутка каждые 10 секунд
  }
}

// Инициализация слайдера
document.addEventListener("DOMContentLoaded", () => {
  new Slider("sliderWrapper");
});
