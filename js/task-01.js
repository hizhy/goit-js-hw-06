const itemRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemRef.length}`);

const allElems = itemRef.forEach((el) => {
  const titleRef = el.querySelector("h2");
  console.log(`Categoty: ${titleRef.textContent}`);
  const liItemsRef = el.querySelectorAll("li");
  console.log(`Elements: ${liItemsRef.length}`);
});
