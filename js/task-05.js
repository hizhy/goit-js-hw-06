const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", (event) => {
  if (event.currentTarget.value.length === 0) {
    outputRef.textContent = "Anonimous";
    return;
  }
  outputRef.textContent = event.currentTarget.value;
});
