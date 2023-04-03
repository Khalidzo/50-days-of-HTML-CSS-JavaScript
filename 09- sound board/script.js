const buttons = document.querySelectorAll('.btn');
const sounds = document.querySelectorAll('audio');


buttons.forEach(button => {
    button.addEventListener('click', () => {
        sounds.forEach(sound => {
            if (sound.id === button.innerHTML) {
                stopSounds();
                sound.play();
            }
        })
    })
});

function stopSounds() {
    sounds.forEach(sound => {
        sound.pause();
        sound.currentTime = 0;
    })
}