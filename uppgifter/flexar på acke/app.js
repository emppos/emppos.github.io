const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const displayNumber = document.getElementById('number');

plusButton.addEventListener('click', onPlus);
minusButton.addEventListener('click', onMinus);

counter = 0;

function onPlus(){
    counter++;
    displayNumber.textContent = counter;
}

function onMinus(){
    counter--;
    displayNumber.textContent = counter;
}