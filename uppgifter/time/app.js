let textElement;
let text = document.getElementById("span1");
textElement = new Date();

text.innerHTML = textElement;

window.setInterval("run()", 1000);

function run(){
    window .location.reload()
}