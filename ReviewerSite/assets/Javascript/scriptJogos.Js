document.addEventListener('DOMContentLoaded', function() {
    const carouselSlide = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-slide img');

    // Botões
    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');

    // Contador
    let counter = 1;
    const size = images[0].clientWidth;

    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    // Event listeners
    nextBtn.addEventListener('click', () => {
        if (counter >= images.length - 1) {
            carouselSlide.style.transition = "none";
            counter = 1;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        } else {
            counter++;
            carouselSlide.style.transition = "transform 0.4s ease-in-out";
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
    });

    prevBtn.addEventListener('click', () => {
        if (counter <= 0) {
            carouselSlide.style.transition = "none";
            counter = images.length - 2;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        } else {
            counter--;
            carouselSlide.style.transition = "transform 0.4s ease-in-out";
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
    });

    carouselSlide.addEventListener('transitionend', () => {
        if (images[counter].id === 'lastClone') {
            carouselSlide.style.transition = "none";
            counter = images.length - 2;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
        if (images[counter].id === 'firstClone') {
            carouselSlide.style.transition = "none";
            counter = images.length - counter;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
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
    
    
});
