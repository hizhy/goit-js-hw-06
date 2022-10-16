function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bgcRef = document.querySelector(".change-color");
bgcRef.addEventListener("click", onChangeColorClick);

const randomColorName = document.querySelector(".color");

function onChangeColorClick() {
  document.body.style.backgroundColor = getRandomHexColor();
  // console.log(document.body.style.backgroundColor);

  randomColorName.textContent = document.body.style.backgroundColor;
}
