const redButtonElement   = document.getElementById('red');
const greenButtonElement = document.getElementById('green');
const blueButtonElement  = document.getElementById('blue');
const blackButtonElement = document.getElementById('black');
const whiteButtonElement = document.getElementById('white');

redButtonElement.addEventListener('click', changeRed);

function changeRed(){
    document.body.style.background = 'red';
}