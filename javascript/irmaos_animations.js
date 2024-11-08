let currentIndex = 1; // Índice inicial para centralizar o segundo item

function moverCarrossel(direction) {
    const carrossel = document.querySelector('.carrossel');
    const items = document.querySelectorAll('.item');
    const totalItems = items.length;

    // Remove a classe 'active' de todos os itens para redefinir o destaque
    items.forEach(item => item.classList.remove('active'));

    // Atualiza o índice atual
    currentIndex += direction;

    // Garante que o índice não saia dos limites (vai de 0 até totalItems - 3 para manter 3 itens visíveis)
    if (currentIndex < 0) {
        currentIndex = totalItems - 3;
    } else if (currentIndex > totalItems - 3) {
        currentIndex = 0;
    }

    // Aplica a classe 'active' ao item central, ou seja, o segundo dos três visíveis
    items[currentIndex + 1].classList.add('active');

    // Calcula a largura de um item para ajustar o carrossel
    const itemWidth = items[0].offsetWidth + 20; // 20px de margem lateral
    const offset = -currentIndex * itemWidth;

    // Aplica a transformação para movimentar o carrossel
    carrossel.style.transform = `translateX(${offset}px)`;
}

// Inicializa o item central como 'active'
document.querySelectorAll('.item')[currentIndex + 1].classList.add('active');
