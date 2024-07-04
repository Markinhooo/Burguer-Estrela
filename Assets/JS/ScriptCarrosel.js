// Script para fazer o carrossel funcionar
    const carouselInner = document.querySelector('.carousel-inner');
    let slideIndex = 0;

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        const slides = carouselInner.children;
        if (n >= slides.length) {slideIndex = 0}
        if (n < 0) {slideIndex = slides.length - 1}
        carouselInner.style.transform = `translateX(-${slideIndex * 100}%)`;
    }