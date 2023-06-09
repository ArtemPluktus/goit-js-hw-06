function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector(`body`);
const text = document.querySelector(`.color`);
const btn = document.querySelector(`.change-color`);

btn.addEventListener(`click`, (e) => {
  const hexColor = getRandomHexColor();
  body.style.backgroundColor = hexColor;
  text.textContent = hexColor;
});
