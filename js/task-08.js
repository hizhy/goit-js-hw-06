const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onFormSubmit);

const dataInFormRef = {};

function onFormSubmit(event) {
  event.preventDefault();

  if (
    !event.currentTarget.elements.email.value ||
    !event.currentTarget.elements.password.value
  ) {
    alert("All fields must be completed!");
  }

  dataInFormRef.email = event.currentTarget.elements.email.value;
  dataInFormRef.password = event.currentTarget.elements.password.value;

  console.log(dataInFormRef);

  event.currentTarget.reset();
}
