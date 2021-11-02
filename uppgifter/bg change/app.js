redButton   = document.getElementById('red');
greenButton = document.getElementById('green');
blueButton  = document.getElementById('blue');
blackButton = document.getElementById('black');
whiteButton = document.getElementById('white');

redButton.addEventListener('click', changeBGtoRed);
greenButton.addEventListener('click', changeBGtoGreen);
blueButton.addEventListener('click', changeBGtoBlue);
blackButton.addEventListener('click', changeBGtoBlack);
whiteButton.addEventListener('click', changeBGtoWhite);

document.body.style.backgroundColor = localStorage.getItem('color');

function changeBGtoRed(){
    localStorage.setItem('color', 'red');
    document.body.style.background = 'red';
}

function changeBGtoGreen(){
    localStorage.setItem('color', 'green');
    document.body.style.background = 'green';
}

function changeBGtoBlue(){
    localStorage.setItem('color', 'blue');
    document.body.style.background = 'blue';
}

function changeBGtoBlack(){
    localStorage.setItem('color', 'black');
    document.body.style.background = 'black';
}

function changeBGtoWhite(){
    localStorage.setItem('color', 'white');
    document.body.style.background = 'white';
}
