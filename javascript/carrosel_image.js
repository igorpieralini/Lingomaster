let slideIndex = 0; // Índice inicial do slide

// Função para carregar as imagens no carrossel
function loadCarouselImages() {
    const slideContainer = document.getElementById('carouselSlide2');
    const storedImages = JSON.parse(localStorage.getItem('carouselImages2')) || [];

    slideContainer.innerHTML = ''; // Limpa o conteúdo

    if (storedImages.length === 0) {
        slideContainer.innerHTML = '<p>Nenhuma imagem disponível.</p>';
        return;
    }

    storedImages.forEach((imageSrc) => {
        // Cria um novo slide para cada imagem
        const slideDiv = document.createElement('div');
        slideDiv.classList.add('carousel2-slide-item');
        slideDiv.style.width = "100%"; // Define a largura do slide para 100%
        slideDiv.style.flex = "0 0 100%"; // Cada slide deve ocupar 100% do contêiner de slides
        slideDiv.style.height = "100%";

        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = 'Slide';
        img.style.width = "100%"; // A imagem deve ocupar todo o slide
        img.style.height = "100%"; // Ajusta a altura para cobrir o slide corretamente
        img.style.objectFit = "cover"; // Garante que a imagem cubra todo o espaço do slide sem distorções

        slideDiv.appendChild(img);
        slideContainer.appendChild(slideDiv);
    });

    showSlide(slideIndex); // Exibe o slide inicial
}

// Função para exibir o slide atual
function showSlide(index) {
    const slides = document.querySelectorAll('.carousel2-slide-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) slideIndex = 0;
    if (index < 0) slideIndex = totalSlides - 1;

    const slideContainer = document.getElementById('carouselSlide2');
    slideContainer.style.transform = `translateX(-${slideIndex * 100}%)`; // Move o slide para a posição correta
    slideContainer.style.transition = "transform 0.5s ease"; // Adiciona uma transição suave
}

// Funções de navegação manual
function nextSlide2() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide2() {
    slideIndex--;
    showSlide(slideIndex);
}

// Função de auto-slide que usa o tempo configurado no admin.html
function autoSlide() {
    const transitionTime = parseInt(localStorage.getItem('carouselTime2')) || 5; // Tempo em segundos
    console.log(`Transição em ${transitionTime} segundos`);

    setTimeout(() => {
        nextSlide2(); // Passa para o próximo slide
        autoSlide(); // Continua o ciclo
    }, transitionTime * 1000); // Converte segundos para milissegundos
}

// Função para salvar o tempo de transição no localStorage
function saveTransitionTime() {
    const timeInput = document.getElementById('carouselTime2');
    const time = timeInput ? timeInput.value : null;

    if (time) {
        localStorage.setItem('carouselTime2', time); // Salva o valor no localStorage
        alert('Tempo de transição salvo com sucesso!');
    } else {
        alert('Por favor, insira um tempo válido.');
    }
}

// Função para carregar o tempo salvo no campo de administração
function loadSavedTransitionTime() {
    const savedTime = localStorage.getItem('carouselTime2');
    const timeInput = document.getElementById('carouselTime2');

    if (savedTime && timeInput) {
        timeInput.value = savedTime; // Preenche o campo com o valor salvo
    }
}

// Inicializa o carrossel e a administração
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('carouselSlide2')) {
        loadCarouselImages();
        autoSlide(); // Inicia a troca automática de slides
    }

    if (document.getElementById('saveTimeBtn2')) {
        loadSavedTransitionTime();
        document.getElementById('saveTimeBtn2').addEventListener('click', saveTransitionTime);
    }
});

// Função para carregar as imagens na administração
function loadAdminImages() {
    const imageList = document.getElementById('carousel2-imageList');
    const storedImages = JSON.parse(localStorage.getItem('carouselImages2')) || [];

    imageList.innerHTML = ''; // Limpa o conteúdo

    storedImages.forEach((imageSrc, index) => {
        const imageDiv = document.createElement('div');
        imageDiv.classList.add('carousel2-image-item');

        const img = document.createElement('img');
        img.src = imageSrc;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Excluir';
        deleteBtn.onclick = () => deleteImage(index);

        imageDiv.appendChild(img);
        imageDiv.appendChild(deleteBtn);
        imageList.appendChild(imageDiv);
    });
}

// Função para excluir uma imagem
function deleteImage(index) {
    const storedImages = JSON.parse(localStorage.getItem('carouselImages2')) || [];
    storedImages.splice(index, 1); // Remove a imagem
    localStorage.setItem('carouselImages2', JSON.stringify(storedImages));
    loadAdminImages();
    loadCarouselImages();
}

// Função para fazer upload de imagens
function uploadImage() {
    const uploadInput = document.getElementById('carousel2-imageUpload');
    const files = uploadInput.files;

    if (files.length > 0) {
        Array.from(files).forEach(file => {
            const reader = new FileReader();

            reader.onload = function (event) {
                const storedImages = JSON.parse(localStorage.getItem('carouselImages2')) || [];
                storedImages.push(event.target.result); // Adiciona a imagem
                localStorage.setItem('carouselImages2', JSON.stringify(storedImages));
                loadAdminImages();
                loadCarouselImages();
            };

            reader.readAsDataURL(file);
        });

        alert('Imagens carregadas com sucesso!');
    } else {
        alert('Por favor, selecione pelo menos uma imagem.');
    }
}

// Inicializa o carrossel e a administração ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    loadCarouselImages();
    loadAdminImages();

    // Associa os botões de navegação
    document.getElementById('nextSlideBtn2').addEventListener('click', nextSlide2);
    document.getElementById('prevSlideBtn2').addEventListener('click', prevSlide2);

    autoSlide(); // Inicia a troca automática de slides
});
