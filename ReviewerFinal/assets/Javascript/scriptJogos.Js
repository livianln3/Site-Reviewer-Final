document.addEventListener('DOMContentLoaded', function () {
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.carousel-slide img');

    let counter = 0; // Contador para rastrear a posição atual do carrossel
    const width = carouselImages[0].clientWidth; // Largura de cada imagem

    // Adiciona clones das imagens no início e no fim para criar um loop finito
    carouselImages.forEach((img, idx) => {
        const clone = img.cloneNode(true);
        carouselSlide.appendChild(clone);
    });

    carouselSlide.style.transform = `translateX(${-width * counter}px)`;

    function nextSlide() {
        if (counter >= carouselImages.length / 2 - 1) return; // Impede que o carrossel avance além da última imagem original

        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter++;
        carouselSlide.style.transform = `translateX(${-width * counter}px)`;

        // Se chegou à última imagem original (Imagem 10), não permitir mais avanços
        if (counter >= carouselImages.length / 2 - 1) {
            document.querySelector('#nextBtn').disabled = true;
        } else {
            document.querySelector('#nextBtn').disabled = false;
        }
    }

    function prevSlide() {
        if (counter <= 0) return;

        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter--;
        carouselSlide.style.transform = `translateX(${-width * counter}px)`;

        // Habilitar novamente o botão "Próximo" se voltar para uma imagem original
        if (counter < carouselImages.length / 2 - 1) {
            document.querySelector('#nextBtn').disabled = false;
        }
    }

    document.querySelector('#nextBtn').addEventListener('click', nextSlide);
    document.querySelector('#prevBtn').addEventListener('click', prevSlide);
});



    // Função para filtrar os jogos pelo gênero
    function filterGamesByGenre(genre) {
        carouselImages.forEach(function(image) {
            const genres = image.dataset.genres.split(','); // Obtém os gêneros da imagem
            if (genres.includes(genre)) {
                image.style.display = 'block'; // Exibe a imagem se pertencer ao gênero selecionado
            } else {
                image.style.display = 'none'; // Oculta a imagem se não pertencer ao gênero selecionado
            }
        });
    }

    document.getElementById('toggleMenu').addEventListener('click', function() {
        var verticalNav = document.getElementById('verticalNav');
        var navContainer = document.getElementById('navContainer');
        var menuIcon = document.getElementById('toggleMenu');
        verticalNav.classList.toggle('menu-open');
        menuIcon.classList.toggle('menu-open');
        if (verticalNav.style.display === 'none') {
            verticalNav.style.display = 'block';
            navContainer.style.right = '0';
        } else {
            verticalNav.style.display = 'none';
            navContainer.style.right = '-100px';
        }
    });
    

    const jogos = document.querySelectorAll('.jogo');
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    const closeBtn = document.querySelector('.close');

    jogos.forEach(jogo => {
        jogo.addEventListener('click', () => {
            const sinopse = jogo.getAttribute('data-sinopse');
            modalText.textContent = sinopse;
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
