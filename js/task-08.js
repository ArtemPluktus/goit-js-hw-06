const form = document.querySelector(`.login-form`);

form.addEventListener(`submit`, (e) => {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;
  if (email.value.trim() === `` || password.value.trim() === ``) {
    return alert("Всі поля повинні бути заповнені!");
  }
  const inputValue = {
    email: `${email.value}`,
    password: `${password.value}`,
  };
  console.log(inputValue);

  e.target.reset();
});
