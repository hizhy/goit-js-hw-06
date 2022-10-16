const textSizedRef = document.querySelector("#text");
const inputRef = document.querySelector("#font-size-control");

inputRef.addEventListener("input", onSizeReg);

function onSizeReg(event) {
  textSizedRef.style.fontSize = `${event.currentTarget.value}px`;
  // console.log(textSizedRef.style.fontSize);
}
