document.addEventListener("DOMContentLoaded", function() {
    const carouselSlide = document.getElementById('carouselSlide');
    const slides = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function updateSlidePosition() {
        carouselSlide.style.transform = `translateX(-${currentIndex * 100}%)`;
        carouselSlide.style.transition = 'transform 0.5s ease';
    }

    function moveToNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length; // Reinicia ao chegar ao último slide
        updateSlidePosition();
    }

    // Intervalo para avançar automaticamente
    setInterval(moveToNextSlide, 10000);
});
