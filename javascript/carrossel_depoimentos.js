document.addEventListener("DOMContentLoaded", function() {
    const items = Array.from(document.querySelectorAll('.item'));
    let currentIndex = items.findIndex(item => item.classList.contains('active')); // Índice do item ativo inicial

    if (currentIndex === -1) {
        console.error('Nenhum item inicial possui a classe "active".');
        return;
    }

    function atualizarCarrossel() {
        items.forEach((item, index) => {
            if (index === currentIndex) {
                item.classList.add('active');
                item.classList.remove('desactive');
            } else {
                item.classList.remove('active');
                item.classList.add('desactive');
            }
        });
    }

    function habilitarAnimacao() {
        items.forEach(item => {
            item.classList.add('animado'); // Adiciona animação após interação
        });
    }

    window.moverCarrossel = function(direction) {
        currentIndex = (currentIndex + direction + items.length) % items.length; // Loop infinito para frente e trás
        habilitarAnimacao(); // Ativa animação ao clicar
        atualizarCarrossel();
    };

    // Inicializa sem animação
    atualizarCarrossel();
});
