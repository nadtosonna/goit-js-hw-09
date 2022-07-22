import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  input: document.querySelector('input'),
  daysUI: document.querySelector('span[data-days]'),
  hoursUI: document.querySelector('span[data-hours]'),
  minutesUI: document.querySelector('span[data-minutes]'),
  secondsUI: document.querySelector('span[data-seconds]'),
  body: document.querySelector('body'),
}

let timerId = null;
refs.startBtn.setAttribute('disabled', true);

flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (+selectedDates[0] < +Date.now()) {
      Notify.failure('Please choose a date in the future!', {
        position: "center-center",
      });
    } else {
      refs.startBtn.removeAttribute('disabled');
  }
  },
});

refs.startBtn.addEventListener('click', onClickCountdownStart);

function onClickCountdownStart() {
    refs.startBtn.setAttribute('disabled', true);
    const endTime = Date.parse(refs.input.value);
    timerId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = endTime - currentTime;
      const timeUI = convertMs(deltaTime);
      if (deltaTime <= 0) {
        clearInterval(timerId);
        Notify.success('Congratulations! THE TIME IS NOW!', {
          position: "center-center",
        });
        refs.body.className = 'final';
      } else {
        updateTimerUI(timeUI);
    }
  }, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function updateTimerUI({ days, hours, minutes, seconds }) {
  refs.daysUI.textContent = days;
  refs.hoursUI.textContent = hours;
  refs.minutesUI.textContent = minutes;
  refs.secondsUI.textContent = seconds;
}