const input = document.querySelector(`#validation-input`);

const inputValid = input.value.length >= 6;

input.addEventListener(`blur`, (e) => {
  input.classList.toggle("valid", inputValid);
  input.classList.toggle("invalid", !inputValid);
});
