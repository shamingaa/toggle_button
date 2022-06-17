const chk = document.getElementById('chk');

let overBall = document.querySelector(".overBall")
let ball = document.querySelector(".ball")
let moonHoles = document.querySelector(".moonHoles")
let day = document.querySelector(".day")
let whiteShadow = document.querySelector(".whiteShadow")

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
    overBall.classList.toggle("overBall");
    ball.classList.toggle("moon")
    ball.classList.toggle("moonShadow")
    moonHoles.classList.toggle("showMoonHole")

    day.classList.toggle("commot")
    whiteShadow.classList.toggle("whiteShadow")
    whiteShadow.classList.toggle("night")
});
