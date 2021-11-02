let add    = document.getElementById('increase');
let remove = document.getElementById('decrease');

let int = document.getElementById('number');
let integer = parseInt( localStorage.getItem('integer') );

if(isNaN(integer)){
    integer = 0;
}
int.textContent = integer;

add.addEventListener('click', onIncreaseButtonClicked);

function onIncreaseButtonClicked(){
    integer += 1;
    int.textContent = integer;
    localStorage.setItem('integer', integer);
};

remove.addEventListener('click', onDecreaseButtonClicked);

function onDecreaseButtonClicked(){
    integer -= 1;
    int.textContent = integer;
    localStorage.setItem('integer', integer);
}