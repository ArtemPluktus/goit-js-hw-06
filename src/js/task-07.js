const input = document.querySelector(`#font-size-control`);
const text = document.querySelector(`#text`);

input.addEventListener(`input`, (e) => {
  text.style.fontSize = `${input.value}px`;
});
