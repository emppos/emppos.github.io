let time = document.getElementById('tid');
let buttonElement = document.getElementById('knapp');
let startTime = null;

buttonElement.addEventListener('click', onStart);

function onStart() {
    startTime = new Date();
    setInterval(onTick, 10);
}
function onTick() {
    const now = new Date();
    const elapsedMilliseconds = now.getTime() - startTime.getTime();
    const elapsedSeconds = elapsedMilliseconds / 1000;
    console.log(elapsedSeconds);

    time.innerHTML = (elapsedSeconds)
  }