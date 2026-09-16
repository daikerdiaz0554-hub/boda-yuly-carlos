document.addEventListener('DOMContentLoaded', () => {

    const openBtn = document.getElementById('open-btn');
    const welcomeScreen = document.getElementById('welcome-screen');
    const bgMusic = document.getElementById('bg-music');
    const musicBtn = document.getElementById('music-btn');
    let isPlaying = false;

    // ANIMACIÓN DE ABRIR PUERTA + REPRODUCIR MÚSICA
    openBtn.addEventListener('click', () => {
        welcomeScreen.classList.add('opened');
        
        // Reproducir música al abrir
        bgMusic.play().then(() => {
            isPlaying = true;
            musicBtn.classList.add('playing');
            musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
        }).catch(err => {
            console.log("Auto-play de audio bloqueado por el navegador:", err);
        });
    });

    // BOTÓN DE MÚSICA MANUAL
    musicBtn.addEventListener('click', () => {
        if (isPlaying) {
            bgMusic.pause();
            musicBtn.classList.remove('playing');
            musicBtn.innerHTML = '<i class="fas fa-music"></i>';
        } else {
            bgMusic.play();
            musicBtn.classList.add('playing');
            musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
        }
        isPlaying = !isPlaying;
    });

    // CONTADOR REGRESIVO (10 DE NOVIEMBRE DE 2026, 3:00 PM)
    const targetDate = new Date('November 10, 2026 15:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            document.getElementById('days').innerText = days < 10 ? '0' + days : days;
            document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
            document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
            document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
        } else {
            document.getElementById('timer').innerHTML = "<h3>¡Llegó el Gran Día!</h3>";
        }
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();

    // ANIMACIÓN AL DESLIZAR
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });

    fadeElements.forEach(el => observer.observe(el));
});