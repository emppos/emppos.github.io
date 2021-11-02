const plusButton = document.getElementById('plus');
let minusButton = document.getElementById('minus');

let countDisplay = document.getElementById('number');

plusButton.addEventListener('click', onPlusButtonClicked);
minusButton.addEventListener('click', onMinusButtonClicked);

counter = 0;

function onPlusButtonClicked(){
    counter++;
    countDisplay.textContent = counter;
}

function onMinusButtonClicked(){
    counter--;
    countDisplay.textContent = counter;
}