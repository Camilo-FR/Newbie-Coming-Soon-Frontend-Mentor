const form = document.querySelector("form");
const email = document.querySelector("input");

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let emailValue = email.value;
  if (validateEmail(emailValue)) {
    form.classList.remove("error");
    form.classList.add("thanks");
  } else {
    form.classList.add("error");
    form.classList.remove("thanks");
  }
});
