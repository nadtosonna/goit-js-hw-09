const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
}
let timerId = null;

refs.startBtn.addEventListener('click', changeColor);
refs.stopBtn.addEventListener('click', stopChangeColor);

function changeColor() {
    timerId = setInterval(() => {
        let color = getRandomHexColor();
        document.body.style.backgroundColor = color;
}, 1000);
}
function stopChangeColor() {
    clearInterval(timerId);
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}