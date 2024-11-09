// Seleciona todos os botões e cursos
const buttons = document.querySelectorAll(".tech-button");
const cursos = document.querySelectorAll(".cursos > div");

// Função para pausar o vídeo do curso que estava visível
function pauseVisibleVideo() {
    cursos.forEach(curso => {
        if (curso.style.display === "flex") {
            const video = curso.querySelector("video");
            if (video) {
                video.pause(); // Pausa o vídeo se ele estiver visível
            }
        }
    });
}

// Função para mostrar apenas o curso selecionado e garantir que o vídeo correspondente inicie
function showCurso(cursoClass) {
    pauseVisibleVideo(); // Pausa o vídeo do curso atualmente visível

    cursos.forEach(curso => {
        if (curso.classList.contains(cursoClass)) {
            curso.style.display = "flex"; // Exibe o curso selecionado
            const video = curso.querySelector("video");
            if (video) {
                video.play(); // Inicia o vídeo do curso ativo
            }
        } else {
            curso.style.display = "none"; // Oculta os outros cursos
        }
    });
}

// Configuração inicial ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    showCurso("curso-html"); // Exibe o curso HTML inicialmente
    buttons[0].classList.add("active"); // Marca o botão HTML como ativo
});

// Adiciona eventos de clique aos botões
buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove("active")); // Remove a classe 'active'
        button.classList.add("active"); // Marca o botão clicado como ativo

        const cursoClass = `curso-${button.textContent.toLowerCase()}`;
        showCurso(cursoClass); // Mostra o curso correspondente e inicia o vídeo
    });
});
