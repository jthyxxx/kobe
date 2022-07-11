const bark = document.querySelector('button');
const barkSound = document.querySelector('audio')

bark.addEventListener('click', ()=> {
    barkSound.currentTime = 10;
    barkSound.play();
})

