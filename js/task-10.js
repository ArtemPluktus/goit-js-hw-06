function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector(`[type="number"]`);
const create = document.querySelector(`button[data-create]`);
const destroy = document.querySelector(`button[data-destroy]`);
const boxes = document.querySelector(`#boxes`);

create.addEventListener("click", getAmount);
destroy.addEventListener("click", destroyBoxes);
function getAmount() {
  createBoxes(input.value);
}
function destroyBoxes() {
  boxes.innerHTML = "";
}
function createBoxes(amount) {
  let defaultSize = 30;
  let newSize = 0;
  for (let i = 0; i < amount; i += 1) {
    let box = document.createElement("div");
    newSize = defaultSize + i * 10;
    box.style = `width: ${newSize}px; height: ${newSize}px;
    background-color: ${getRandomHexColor()}`;
    boxes.append(box);
  }
}
