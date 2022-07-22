const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
}
let timerId = null;
let isActive = false;

refs.startBtn.addEventListener('click', changeColor);
refs.stopBtn.addEventListener('click', stopChangeColor);

function changeColor() {
    timerId = setInterval(() => {
        let color = getRandomHexColor();
        document.body.style.backgroundColor = color;
    }, 1000);
    offBtn();
}
function stopChangeColor() {
    clearInterval(timerId);
    onBtn();
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function offBtn() {
    if (!isActive) {
        refs.startBtn.setAttribute('disabled', true);
        refs.stopBtn.removeAttribute('disabled');
    } 
}
function onBtn() {
    refs.startBtn.removeAttribute('disabled');
    refs.stopBtn.setAttribute('disabled', true);
}