const plus = document.querySelector(`button[data-action="increment"]`);
const minus = document.querySelector(`button[data-action="decrement"]`);
const value = document.querySelector(`#value`);

plus.addEventListener(`click`, (e) => {
    let newValue = Number.parseInt(value.textContent);
    value.textContent = newValue + 1;
});

minus.addEventListener(`click`, (e) => {
    value.textContent -= 1;
});