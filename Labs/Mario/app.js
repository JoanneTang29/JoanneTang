
const attackMario = () => {
    let shroomDude = document.querySelector('.shroom');
    shroomDude.classList.toggle('initiateAttack');
}

const jumpUp = () => {
    let mario = document.querySelector('.plumber');
    mario.classList.toggle('initiateJump');
}

let score = 0;

const addPoint = () => {
    let ticker = document.querySelector('.point');
    ticker.innerHTML = score += 1;
}