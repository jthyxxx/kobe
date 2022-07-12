const bark = document.querySelector('button');
const barkSound = document.querySelector('audio')

bark.addEventListener('click', ()=> {
    barkSound.currentTime = 12;
    barkSound.play();
})

