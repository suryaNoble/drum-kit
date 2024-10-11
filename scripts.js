const drumPads = document.querySelectorAll('.drum-pad');


function playSound(e) {
    let sound;

    
    if (e.type === 'keydown') {
        sound = document.getElementById(e.key);
    } else {
        sound = e.target;
    }

    if (!sound) return; 

    const audio = new Audio(sound.dataset.sound);
    audio.currentTime = 0; 
    audio.play().catch(error => {
        console.error("Error playing the sound:", error);
    });


    sound.classList.add('active');
    setTimeout(() => {
        sound.classList.remove('active');
    }, 300); 
}


document.addEventListener('keydown', playSound);
drumPads.forEach(pad => {
    pad.addEventListener('click', playSound);
});
