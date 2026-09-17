document.addEventListener("DOMContentLoaded", () => {
    const welcomeScreen = document.getElementById("welcome-screen");
    const openBtn = document.getElementById("open-btn");
    const bgMusic = document.getElementById("bg-music");
    const musicBtn = document.getElementById("music-btn");

    // LÓGICA PARA ABRIR LA INVITACIÓN
    if (openBtn && welcomeScreen) {
        openBtn.addEventListener("click", () => {
            // Oculta la pantalla de bienvenida con animación
            welcomeScreen.classList.add("opened");

            // Reproduce la música de fondo
            if (bgMusic) {
                bgMusic.play().then(() => {
                    if (musicBtn) musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
                }).catch((error) => {
                    console.log("Reproducción automática bloqueada por el navegador:", error);
                });
            }
        });
    }

    // CONTROL DEL BOTÓN FLOTANTE DE MÚSICA
    if (musicBtn && bgMusic) {
        musicBtn.addEventListener("click", () => {
            if (bgMusic.paused) {
                bgMusic.play();
                musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
            } else {
                bgMusic.pause();
                musicBtn.innerHTML = '<i class="fas fa-music"></i>';
            }
        });
    }

    // CONTADOR REGRESIVO PARA EL 10 DE NOVIEMBRE DE 2026 A LAS 3:00 PM
    const targetDate = new Date("November 10, 2026 15:00:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            const daysElem = document.getElementById("days");
            const hoursElem = document.getElementById("hours");
            const minutesElem = document.getElementById("minutes");
            const secondsElem = document.getElementById("seconds");

            if (daysElem) daysElem.innerText = days < 10 ? "0" + days : days;
            if (hoursElem) hoursElem.innerText = hours < 10 ? "0" + hours : hours;
            if (minutesElem) minutesElem.innerText = minutes < 10 ? "0" + minutes : minutes;
            if (secondsElem) secondsElem.innerText = seconds < 10 ? "0" + seconds : seconds;
        }
    }

    // Actualiza el contador cada segundo
    setInterval(updateCountdown, 1000);
    updateCountdown();
});
