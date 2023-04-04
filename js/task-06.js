const input = document.querySelector(`#validation-input`);


input.addEventListener(`blur`, (evt) => {
  // input.classList.toggle("valid", input.value.length === inputLength);
  // input.classList.toggle("invalid", input.value.length > inputLength);
  // input.classList.toggle("invalid", input.value.length < inputLength);
  input.classList.add(`invalid`);
  if (evt.target.value.length === Number(evt.target.dataset.length)) {
    input.classList.replace("invalid", "valid");
  }
});
