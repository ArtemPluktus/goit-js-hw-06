const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector(`#ingredients`);

ingredients.forEach((name) => {
  const li = document.createElement("li");
  li.textContent = name;
  list.appendChild(li);

});