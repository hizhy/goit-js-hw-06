let counterValue = 0;

const valueRef = document.querySelector("#value");
const decrValue = document.querySelector('[data-action="decrement"]');
const incrValue = document.querySelector('[data-action="increment"]');

decrValue.addEventListener("click", () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
});

incrValue.addEventListener("click", () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
});
