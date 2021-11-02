const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const numberDisplay = document.getElementById('number');

counter = 0;

plusButton.addEventListener('click', onPlusButtonClicked);
minusButton.addEventListener('click', onMinusButtonClicked);

function onPlusButtonClicked(){
    counter++;
    numberDisplay.textContent = counter;
}

function onMinusButtonClicked(){
    counter--;
    numberDisplay.textContent = counter;
}