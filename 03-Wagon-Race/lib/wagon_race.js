// TODO: write your code here
abc=0
xyz=0
document.addEventListener("keyup", (event) => {

  if (event.key =="q") {
    let element1 = document.querySelectorAll("#player1_race td");
    element1[abc].classList.remove("active");
    element1[abc + 1].classList.add("active");
    abc=abc+1
    let button = document.querySelector("#clickme");
      button.addEventListener("click", (event) => {
        element1[abc].classList.remove("active");
        element1[0].classList.add("active");
      });

  }
  if (abc==19) {
    alert("Player 1 is the Winner!");
  }

  if (event.key =="p") {
    let element2 = document.querySelectorAll("#player2_race td");
    element2[xyz].classList.remove("active");
    element2[xyz + 1].classList.add("active");
    xyz=xyz+1
    let button = document.querySelector("#clickme");
      button.addEventListener("click", (event) => {
        element2[xyz].classList.remove("active");
        element2[0].classList.add("active");
      });
  }
  if (xyz==19) {
    alert("Player 2 is the Winner!");
  }
});



