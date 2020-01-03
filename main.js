const form = document.getElementById("form");
const btnReset = document.getElementById("reset-form");

form.addEventListener("submit", event => {
  event.preventDefault();

  setTimeout(() => {
    btnReset.click();
  }, 2000);
});

function focusFirstField() {
  window.scrollTo({
    top: 0,
    left: 0
  });

  form.children[0].querySelector("input").focus();
}

btnReset.addEventListener("click", () => focusFirstField());
