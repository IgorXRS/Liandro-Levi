// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Suavização de rolagem ao clicar nos links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
// script.js
document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audioPlayer');
    const playPauseBtn = document.getElementById('playPause');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');

    // Lista de músicas
    const tracks = [
        "/music/te-odiar.mp3",
        "/music/adamantio.mp3",
        "/music/ai-calica-ai-caralho.mp3"
    ];

    let currentTrack = 0;


    // Play/Pause
    playPauseBtn.addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.muted = true;
            audioPlayer.play();
            audioPlayer.muted = false;
            playPauseBtn.innerHTML = '<i class="bi bi-pause"></i>';
        } else {
            audioPlayer.pause();
            playPauseBtn.innerHTML = '<i class="bi bi-play"></i>';
        }
    });

    // Play/Pause
    play.addEventListener('click', () => {
        if (audioPlayer.paused) {
            play.style.display = 'none';
            audioPlayer.play();
            playPauseBtn.innerHTML = '<i class="bi bi-pause"></i>';
        } else {
            audioPlayer.pause();
            playPauseBtn.innerHTML = '<i class="bi bi-play"></i>';
        }
    });

    // Next track
    nextBtn.addEventListener('click', () => {
        currentTrack = (currentTrack + 1) % tracks.length;
        audioPlayer.src = tracks[currentTrack];
        audioPlayer.play();
        playPauseBtn.innerHTML = '<i class="bi bi-pause"></i>';
    });

    // Previous track
    prevBtn.addEventListener('click', () => {
        currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
        audioPlayer.src = tracks[currentTrack];
        audioPlayer.play();
        playPauseBtn.innerHTML = '<i class="bi bi-pause"></i>';
    });

    // Automatically play the next track when the current one ends
    audioPlayer.addEventListener('ended', () => {
        nextBtn.click();
    });
});


document.getElementById('toggle-stars-btn').addEventListener('click', function () {
    const particles = document.querySelector('.particles-js');

    // Alterna a visibilidade dos elementos
    particles.classList.toggle('hidden');
});


// Mostrar o botão quando o usuário rolar 20px para baixo a partir do topo
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const backToTopBtn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// Levar o usuário de volta ao topo da página quando o botão for clicado
document.getElementById("backToTopBtn").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"  // Para um efeito de rolagem suave
    });
});