document.querySelectorAll('.imagem-fundador, .imagem-fundador2').forEach((fundador, index) => {
    const preenchimento = index === 0
        ? document.querySelector('.imagem-preenchimento') // Preenchimento para Luiz
        : document.querySelector('.imagem-preenchimento2'); // Preenchimento para Gabriel

    fundador.addEventListener('mouseenter', () => {
        document.querySelectorAll('.imagem-fundador, .imagem-fundador2').forEach((other, i) => {
            if (other !== fundador) {
                other.classList.add('hidden'); // Oculta a imagem oposta
            } else {
                other.classList.add('expanded'); // Expande a imagem sob o mouse
            }
        });

        preenchimento.classList.add('active'); // Mostra o preenchimento correspondente
    });

    fundador.addEventListener('mouseleave', () => {
        // Transição suave de saída
        setTimeout(() => {
            document.querySelectorAll('.imagem-fundador, .imagem-fundador2').forEach((other) => {
                other.classList.remove('hidden', 'expanded'); // Restaura as imagens suavemente
            });

            preenchimento.classList.remove('active'); // Esconde preenchimento suavemente
        }, 100); // Pequeno atraso para suavizar a transição
    });
});
