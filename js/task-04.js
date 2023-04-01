const plus = document.querySelector(`button[data-action="increment"]`);
const minus = document.querySelector(`button[data-action="decrement"]`);
const counterValue = document.querySelector(`#value`);

plus.addEventListener(`click`, (e) => {
  let newValue = Number.parseInt(counterValue.textContent);
  counterValue.textContent = newValue + 1;
});

minus.addEventListener(`click`, (e) => {
  counterValue.textContent -= 1;
});
