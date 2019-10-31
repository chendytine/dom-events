// TODO: React to a click on the button!
let element = document.querySelector("#clickme");
element.addEventListener("click", (event) => {
  element.classList.add("disabled");
  element.textContent = "Bingo!";
  document.getElementById('mySound').play();
});
