const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const mountain = document.querySelector('.mountain');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    },500);
}

const verify = setInterval(() => {
    const pipeValue = pipe.offsetLeft;
    const marioValue = +window.getComputedStyle(mario).bottom.replace('px', '');
    const mountainValue = mountain.offsetLeft;

    if(pipeValue <= 59 && pipeValue >0 && marioValue < 57){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipeValue}px`;
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioValue}px`;
        mario.src = './img/mario-game-over.png';
        mario.style.width = '9%';

        mountain.style.animation = 'none';
        mountain.style.left = `${mountainValue}px`

        clearInterval(verify);
        
    }

    
}, 10);

document.addEventListener('keydown', jump);