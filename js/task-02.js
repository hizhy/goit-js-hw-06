const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const markUp = ingredients.map((el) => {
  const itemRef = document.createElement("li");
  itemRef.textContent = el;
  itemRef.classList.add("item");
  return itemRef;
});

const liRef = document.querySelector("#ingredients");
liRef.append(...markUp);
