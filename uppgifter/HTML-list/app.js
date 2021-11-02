let todos = ['Gå till skolan', 'Programmera', 'Köpa mat!'];
let list = document.getElementById('list');
let button = document.getElementById('button');

for(i = 0; i < todos.length; i++){
    let li = document.createElement('li');
    li.textContent = todos[i];
    list.appendChild(li);
    
    li.addEventListener('click', onItemClicked);

function onItemClicked(e) {
    if(li.style.textDecoration == "line-through") {
    li.style.textDecoration = "none";
    }
    else{
        li.style.textDecoration = "line-through";
    }
}
}
function test(){
    let items = [];
    let textvalue = document.getElementById('textbox');
    items.push (textvalue.value);
    textvalue.textContent = list;
};