// Seleciona todos os botões e cursos
const buttons = document.querySelectorAll(".tech-button");
const cursos = document.querySelectorAll(".cursos > div");

// Função para pausar vídeos do YouTube em iframes usando a API
function pauseVideos() {
    const iframes = document.querySelectorAll("iframe");
    iframes.forEach(iframe => {
        iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    });
}

// Função para mostrar apenas o curso selecionado
function showCurso(cursoClass) {
    // Oculta todos os cursos e pausa seus vídeos
    cursos.forEach(curso => {
        curso.style.display = "none"; // Oculta o curso
    });
    pauseVideos(); // Pausa vídeos após ocultar

    // Exibe apenas o curso correspondente
    const cursoToShow = document.querySelector(`.${cursoClass}`);
    if (cursoToShow) {
        cursoToShow.style.display = "flex";
    }
}

// Configuração inicial ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    showCurso("curso-html"); // Exibe apenas o curso de HTML inicialmente
    buttons[0].classList.add("active"); // Marca o botão HTML como ativo ao carregar a página
});

// Adiciona um evento de clique a cada botão
buttons.forEach(button => {
    button.addEventListener("click", () => {
        // Remove a classe 'active' de todos os botões
        buttons.forEach(btn => btn.classList.remove("active"));

        // Adiciona a classe 'active' ao botão clicado
        button.classList.add("active");

        // Pega o texto do botão e formata como a classe de curso correspondente
        const cursoClass = `curso-${button.textContent.toLowerCase()}`;
        showCurso(cursoClass);
    });
});
