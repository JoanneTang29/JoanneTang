let myCircle = document.querySelector('.innerCircle');
let clickLeft = document.getElementById('left');
let clickRight = document.getElementById('right');
let clickUp = document.getElementById('up');
let clickDown = document.getElementById('down');
 
clickLeft.addEventListener('click', () => movePacman('left'));
clickRight.addEventListener('click', () => movePacman("right"));
clickUp.addEventListener('click', () => movePacman("up"));
clickDown.addEventListener('click', () => movePacman("down"));

function movePacman(direction) {
    console.log(direction)
    switch(direction) {
        case 'left':
            myCircle.style.transform = "translateX(-50px)"
            break;
        case 'right':
            myCircle.style.transform = "translateX(50px)"
            break;
        case 'up':
            myCircle.style.transform = "translateY(-50px)"
            break;
        case 'down':
            myCircle.style.transform = "translateY(50px)"
            break;
    }
}
