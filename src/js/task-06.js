const input = document.querySelector(`#validation-input`);

input.addEventListener(`blur`, (e) => {
  input.classList.toggle("valid", input.value.length >= 6);
  input.classList.toggle("invalid", input.value.length < 6);
});
