let playerOne,
  playerTwo = "";
let isLoaded = true;

function handleChange() {
  playerOne = document.getElementById("playerOne").value;
  playerTwo = document.getElementById("playerTwo").value;
}

var playerForm = document.getElementById("playerForm");
if (playerForm) {
  playerForm.addEventListener("submit", function (event) {
    event.preventDefault();
    localStorage.setItem("playerOne", playerOne);
    localStorage.setItem("playerTwo", playerTwo);
    window.location.href = "./dice.html";
  });
}

function rollDice() {
  // getting random numbers to display the dice
  const indexOne = Math.floor(Math.random() * 6) + 1;
  const indexTwo = Math.floor(Math.random() * 6) + 1;

  //Setting player name in dice.html page using localstorage
  const playerOne = localStorage.getItem("playerOne");
  const playerTwo = localStorage.getItem("playerTwo");
  if (isLoaded) {
    var playerOneElement = document.getElementById("playerOneHeading");
    playerOneElement.innerHTML = playerOne;
    var playerTwoElement = document.getElementById("playerTwoHeading");
    playerTwoElement.innerHTML = playerTwo;
  }
  isLoaded = false;
  document
    .getElementById("img-1")
    .setAttribute("src", `./images/dice-${indexOne}.jpg`);
  document
    .getElementById("img-2")
    .setAttribute("src", `./images/dice-${indexTwo}.jpg`);

  if (indexOne > indexTwo) {
    document.getElementById(
      "dice-heading"
    ).innerHTML = `${playerOne} wins this round!!!`;
  } else if (indexOne < indexTwo) {
    document.getElementById(
      "dice-heading"
    ).innerHTML = `${playerTwo} wins this round!!!`;
  } else if (indexOne == indexTwo) {
    document.getElementById("dice-heading").innerHTML =
      "Oops! Draw match. Roll the dice again...";
  }
}

function reset() {
  playerOne = playerTwo = "";
  isLoaded = true;
  window.location.href = "./playerForm.html";
}
