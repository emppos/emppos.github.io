minusButton = document.getElementById('minus');
plusButton = document.getElementById('plus');

numberDisplay = document.getElementById('number');

plusButton.addEventListener('click', onPlus);

function plusButton(){
    counter++;
    numberDisplay.textContent = counter;
}
