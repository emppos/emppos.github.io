let plusBtn = document.getElementById('plus');
let minusBtn = document.getElementById('minus');
let counterDisplay = document.getElementById('counter');

counter = 0;

minusBtn.addEventListener('click', onMinus);
plusBtn.addEventListener('click', onPlus);

function onMinus(){
    counter--;
    counterDisplay.textContent = counter;
}


function onPlus(){
    counter++;
    counterDisplay.textContent = counter;
}