import Notiflix from 'notiflix';
const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
}

refs.form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
  event.preventDefault();
  let promises = [];
  for (let i = 0; i < +amount.value; i+= 1) {
    createPromise(i + 1, +step.value *(i) + +delay.value)
    .then(({position, delay}) => Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`))
    .catch(({position, delay}) => Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`))
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    setTimeout(() => resolve({ position, delay }), delay);
  } else {
    setTimeout(() => reject({ position, delay }), delay);
  }
}
