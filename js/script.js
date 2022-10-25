const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const mountain = document.querySelector('.mountain');
const clouds = document.querySelector('.clouds');
const cloud = document.querySelector('.cloud1');
const cloudss = document.querySelector('.dif1');
const cloudsss = document.querySelector('.dif2');

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
    const cloudsValue = clouds.offsetLeft;
    const cloudValue = cloud.offsetLeft;
    const cloudssValue = cloudss.offsetLeft;
    const cloudsssValue = cloudsss.offsetLeft;

    if(pipeValue <= 59 && pipeValue >0 && marioValue < 57){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipeValue}px`;
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioValue}px`;
        mario.src = './img/mario-game-over.png';
        mario.style.width = '9%';

        mountain.style.animation = 'none';
        mountain.style.left = `${mountainValue}px`;

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsValue}px`;
        cloud.style.animation = 'none';
        cloud.style.left = `${cloudValue}px`;
        cloudss.style.animation = 'none';
        cloudss.style.left = `${cloudssValue}px`;
        cloudsss.style.animation = 'none';
        cloudsss.style.left = `${cloudsssValue}px`;

        clearInterval(verify);
        
    }

    
}, 10);

document.addEventListener('keydown', jump);