import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
}

refs.form.addEventListener('submit', onFormSubmit)

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    setTimeout(() => resolve({ position, delay }), delay);
  } else {
    setTimeout(() => reject({ position, delay }), delay);
  }
  })
}

function onFormSubmit(event) {
  event.preventDefault();
  let promises = [];
  for (let i = 0; i < +refs.amount.value; i += 1) {
    createPromise(i + 1, +refs.step.value * i + +refs.delay.value)
    .then(({position, delay}) => Notify.success(`Fulfilled promise ${position} in ${delay}ms`))
    .catch(({position, delay}) => Notify.failure(`Rejected promise ${position} in ${delay}ms`))
  }
}