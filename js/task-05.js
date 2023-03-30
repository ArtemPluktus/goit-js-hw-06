const input = document.querySelector(`#name-input`);
const output = document.querySelector(`#name-output`);

function changeName(e) {
  output.textContent = e.currentTarget.value.trim();
  if (output.textContent.length === 0) {
    output.textContent = `Anonymous`;
  }
}

input.addEventListener(`input`, changeName);
