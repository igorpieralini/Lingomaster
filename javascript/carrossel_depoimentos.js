document.addEventListener("DOMContentLoaded", function () {
    const items = Array.from(document.querySelectorAll('.item'));
    const carousel = document.querySelector('.carrossel');
    const visibleItems = 3; // Sempre exibe 3 itens
    let currentIndex = 0; // Inicia no primeiro item

    function atualizarCarrossel() {
        const offset = -currentIndex * (300 + 20); // 300px de largura + 20px de gap
        carousel.style.transform = `translateX(${offset}px)`;
    }

    window.moverCarrossel = function (direction) {
        currentIndex = (currentIndex + direction + items.length) % items.length;
        atualizarCarrossel();
    };

    atualizarCarrossel(); // Inicializa o carrossel na posição correta
});
