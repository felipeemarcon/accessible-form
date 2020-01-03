const form = document.getElementById("form");
const btnReset = document.getElementById("reset-form");

form.addEventListener("submit", event => {
  event.preventDefault();

  setTimeout(() => {
    btnReset.click();
  }, 2000);
});
