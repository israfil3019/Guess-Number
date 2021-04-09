const y = Math.floor(Math.random() * 100 + 1);
console.log(y);
let guess = 1;

const newGuess = document.createElement("li");

const guessNumber = document.getElementsByClassName("ul")[0];
guessNumber.appendChild(newGuess);
let a = document.getElementsByClassName("ul")[1];

let x = document.getElementById("input");

const button = document.getElementById("submit");

button.addEventListener("mouseover", () => (button.value = "Are you sure?"));
button.addEventListener("mouseout", () => (button.value = "Guess"));

button.addEventListener("click", function () {
  if (x.value == "") {
    a.textContent = "!Write Some Number!";
  } else if (x.value == y && guess <= 5) {
    newGuess.textContent = "";
    a.textContent = `Congratulations you found on your ${guess} try.`;
    setTimeout("location.reload(true);", 2000);
  } else if (x.value > y && guess <= 4) {
    a.textContent = "Lower your number!";
    ++guess;
    newGuess.textContent = `Number of guess: ${guess - 1}`;
  } else if (x.value < y && guess <= 4) {
    a.textContent = "Upper your number!";
    ++guess;
    newGuess.textContent = `Number of guess: ${guess - 1}`;
  } else {
    ++guess;
    newGuess.textContent = `Number of guess: ${guess - 1}`;
    a.textContent = `You didn't find in 5 try! Try again`;
    setTimeout("location.reload(true);", 2000);
  }
});
