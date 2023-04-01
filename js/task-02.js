const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector(`#ingredients`);

const ingredientsArray = [];

ingredients.forEach((name) => {
  const li = document.createElement("li");
  li.textContent = name;
  ingredientsArray.push(li);
});

list.appendChild(...ingredientsArray);
