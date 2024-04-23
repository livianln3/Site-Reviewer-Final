// Função para mover o carrossel automaticamente
function autoCarousel(carousel, counter, size) {
    const carouselSlide = carousel.querySelector(".carousel-slide");
    const carouselImages = carousel.querySelectorAll(".carousel-slide img");
    const prevBtn = carousel.querySelector(".prevBtn");
    const nextBtn = carousel.querySelector(".nextBtn");

    setInterval(() => {
        if (counter >= carouselImages.length - 1) {
            counter = 0; // Volta ao primeiro slide quando chega ao último
        } else {
            counter++;
        }
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }, 3000);

    prevBtn.addEventListener("click", () => {
        if (counter <= 0) return;
        counter--;
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    });

    nextBtn.addEventListener("click", () => {
        if (counter >= carouselImages.length - 1) return;
        counter++;
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    });

    carouselSlide.addEventListener("mouseenter", () => {
        clearInterval();
    });

    carouselSlide.addEventListener("mouseleave", () => {
        autoCarousel(carousel, counter, size);
    });
}

// Encontra e itera sobre todos os carrosseis na página
const carousels = document.querySelectorAll(".carousel-container");
carousels.forEach((carousel) => {
    const counter = 0; // Começa do primeiro slide
    const size = carousel.querySelector(".carousel-slide img").clientWidth;
    autoCarousel(carousel, counter, size);
});
