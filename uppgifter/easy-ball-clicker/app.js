let balls = document.getElementsByClassName('ball');

balls[0].style.left = ((window.innerWidth - 80) * Math.random()) + 'px';
balls[0].style.top = ((window.innerHeight - 80) * Math.random()) + 'px';

balls[1].style.left = ((window.innerWidth - 80) * Math.random()) + 'px';
balls[1].style.top = ((window.innerHeight - 80) * Math.random()) + 'px';

balls[0].addEventListener('click', onBallClicked);

function onBallClicked(event) {
    console.log(event);
    //document.body.removeChild(balls[0]);
}
document.body.removeChild(Event.target);

balls[0].style.left = ((window.innerWidth - 80) * Math.random()) + "px";
balls[0].style.top = ((window.innerHeight - 80) * Math.random()) + "px";
balls[1].style.left = ((window.innerWidth - 80) * Math.random()) + "px";
balls[1].style.top = ((window.innerHeight - 80) * Math.random()) + "px";
balls[2].style.left = ((window.innerWidth - 80) * Math.random()) + "px";
balls[2].style.top = ((window.innerHeight - 80) * Math.random()) + "px";
balls[3].style.left = ((window.innerWidth - 80) * Math.random()) + "px";
balls[3].style.top = ((window.innerHeight - 80) * Math.random()) + "px";
balls[4].style.left = ((window.innerWidth - 80) * Math.random()) + "px";
balls[4].style.top = ((window.innerHeight - 80) * Math.random()) + "px";
balls[5].style.left = ((window.innerWidth - 80) * Math.random()) + "px";
balls[5].style.top = ((window.innerHeight - 80) * Math.random()) + "px";
balls[6].style.left = ((window.innerWidth - 80) * Math.random()) + "px";
balls[6].style.top = ((window.innerHeight - 80) * Math.random()) + "px";
balls[7].style.left = ((window.innerWidth - 80) * Math.random()) + "px";
balls[7].style.top = ((window.innerHeight - 80) * Math.random()) + "px";
balls[8].style.left = ((window.innerWidth - 80) * Math.random()) + "px";
balls[8].style.top = ((window.innerHeight - 80) * Math.random()) + "px";
balls[9].style.left = ((window.innerWidth - 80) * Math.random()) + "px";
balls[9].style.top = ((window.innerHeight - 80) * Math.random()) + "px";

balls[0].addEventListener('click', onBallClicked);
balls[1].addEventListener('click', onBallClicked);
balls[2].addEventListener('click', onBallClicked);
balls[3].addEventListener('click', onBallClicked);
balls[4].addEventListener('click', onBallClicked);
balls[5].addEventListener('click', onBallClicked);
balls[6].addEventListener('click', onBallClicked);
balls[7].addEventListener('click', onBallClicked);
balls[8].addEventListener('click', onBallClicked);
balls[9].addEventListener('click', onBallClicked);