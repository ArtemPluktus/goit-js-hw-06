const input = document.querySelector(`#validation-input`);
const inputLength = input.dataset.length;

input.addEventListener(`blur`, (e) => {
  input.classList.toggle("valid", input.value.length >= inputLength);
  input.classList.toggle("invalid", input.value.length < inputLength);
  // if (input.value.length === inputLength) {
  //   input.classList.add(`valid`);
  //   input.classList.remove(`invalid`);
  // } else {
  //   input.classList.add(`invalid`);
  //   input.classList.remove(`valid`);
  // };
});
