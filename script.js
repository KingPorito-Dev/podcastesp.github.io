// Obtener elementos del DOM
const audioPlayer = document.getElementById("audio-player");
const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");

// Función para reproducir el episodio
function reproducirEpisodio() {
    audioPlayer.play();
    playButton.disabled = true;
    pauseButton.disabled = false;
}

// Función para pausar el episodio
function pausarEpisodio() {
    audioPlayer.pause();
    playButton.disabled = false;
    pauseButton.disabled = true;
}

// Agregar eventos de clic a los botones
playButton.addEventListener("click", reproducirEpisodio);
pauseButton.addEventListener("click", pausarEpisodio);
