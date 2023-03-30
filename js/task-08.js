const form = document.querySelector(`.login-form`);

form.addEventListener(`submit`, (e) => {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;
  const inputValue = {
    email: `${email.value}`,
    password: `${password.value}`,
  };
  console.log(inputValue);
  if (email.value === `` || password.value === ``) {
    window.alert("Всі поля повинні бути заповнені!");
  }

  e.target.reset();
});
