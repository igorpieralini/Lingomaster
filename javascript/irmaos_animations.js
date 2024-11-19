document.querySelectorAll('.imagem-fundador, .imagem-fundador2').forEach((fundador, index) => {
    const preenchimento = index === 0
        ? document.querySelector('.imagem-preenchimento') // Preenchimento para Luiz
        : document.querySelector('.imagem-preenchimento2'); // Preenchimento para Gabriel

    fundador.addEventListener('mouseenter', () => {
        document.querySelectorAll('.imagem-fundador, .imagem-fundador2').forEach((other, i) => {
            if (other !== fundador) {
                other.classList.add('hidden'); // Oculta o outro fundador
            } else {
                other.classList.add('expanded'); // Expande o fundador destacado
            }
        });

        preenchimento.classList.add('active'); // Mostra o texto correspondente
    });

    fundador.addEventListener('mouseleave', () => {
        // Remove as classes e restaura o estado original para ambos os fundadores
        document.querySelectorAll('.imagem-fundador, .imagem-fundador2').forEach((other) => {
            other.classList.remove('hidden'); // Restaura a visibilidade do outro fundador
            other.classList.remove('expanded'); // Restaura o tamanho original
        });

        preenchimento.classList.remove('active'); // Oculta o texto correspondente
    });
});
