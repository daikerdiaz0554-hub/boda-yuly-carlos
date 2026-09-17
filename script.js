document.addEventListener('DOMContentLoaded', () => {
    const welcomeOverlay = document.getElementById('welcomeOverlay');
    const btnOpenInvitation = document.getElementById('btnOpenInvitation');
    const bgMusic = document.getElementById('bgMusic');
    const btnMusicToggle = document.getElementById('btnMusicToggle');
    const btnMap = document.getElementById('btnMap');
    const btnRsvp = document.getElementById('btnRsvp');

    // Apertura de Invitación y reproducción de música
    if (btnOpenInvitation) {
        btnOpenInvitation.addEventListener('click', () => {
            // Ocultar portada
            if (welcomeOverlay) {
                welcomeOverlay.classList.add('hidden');
            }

            // Iniciar música
            if (bgMusic) {
                bgMusic.play().then(() => {
                    if (btnMusicToggle) btnMusicToggle.classList.remove('hidden');
                }).catch(err => {
                    console.log("Error al reproducir audio:", err);
                    if (btnMusicToggle) btnMusicToggle.classList.remove('hidden');
                });
            }
        });
    }

    // Toggle de Música (Pausar / Reproducir)
    if (btnMusicToggle && bgMusic) {
        btnMusicToggle.addEventListener('click', () => {
            if (bgMusic.paused) {
                bgMusic.play();
                btnMusicToggle.textContent = '🎵';
            } else {
                bgMusic.pause();
                btnMusicToggle.textContent = '🔇';
            }
        });
    }

    // Botón Ubicación (Google Maps)
    if (btnMap) {
        btnMap.addEventListener('click', () => {
            const address = "Calle 97 # 73B - 34, Piso 3, Medellin, Colombia";
            const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
            window.open(mapUrl, '_blank');
        });
    }

    // Botón RSVP a WhatsApp
    if (btnRsvp) {
        btnRsvp.addEventListener('click', () => {
            const phoneNumber = "573019331094";
            const message = "¡Hola! Confirmamos nuestra asistencia a la boda de Yuly y Carlos ✨";
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    }
});
