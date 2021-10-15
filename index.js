//change dice pics randomly
function rollDice() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var leftImg = document.querySelector(".img1");
  var rightImg = document.querySelector(".img2");

  leftImg.setAttribute("src", "images/dice" + randomNumber1 + ".png");

  rightImg.setAttribute("src", "images/dice" + randomNumber2 + ".png");

  changeTitle(randomNumber1, randomNumber2);
}
//show header depending on the results
function changeTitle(randomNumber1, randomNumber2) {
  var h1Text = document.querySelector("h1");
  if (randomNumber1 > randomNumber2) {
    h1Text.innerHTML = "🚩Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    h1Text.innerHTML = "Player 2 Wins!🚩";
  } else {
    h1Text.innerHTML = "Draw";
  }
}
//start the game after clicking the button
var clickMe = document.querySelector(".btn");
clickMe.addEventListener("click", rollDice);