const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const mainGame = document.querySelector(".main_game");
const userScoreValue = document.querySelector("#player_score");
const computerScoreValue = document.querySelector("#computer_score");
const resultScreen = document.querySelector(".result_part");
const playAgain = document.querySelector("#play");
const userPick = document.querySelector("#player");
const computerPick = document.querySelector("#computer");
const resultText = document.querySelector("#winner");
const userChoiceImage = document.querySelector("#userPickImage");
const computerChoiceImage = document.querySelector("#computerChoiceImage");
const userwiningIndicator = document.querySelector("#userwiningIndicator");
const computerwiningIndicator = document.querySelector("#computerwiningIndicator");
const ruleButton = document.querySelector(".rule_button");
const nextButton = document.querySelector("#next_button");
const ruleWrapper = document.querySelector(".rule_contain");
const ruleBoxCloseButton = document.querySelector(".close");

let userChoice;
let computerChoice;

let userScore = localStorage.getItem("player_score") || 0;
let computerScore = localStorage.getItem("computer_score") || 0;

userScoreValue.textContent = userScore;
computerScoreValue.textContent = computerScore;

const generateComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const reset = () => {
  resultScreen.style.display = "none";
  mainGame.style.display = "block";

  userPick.classList.remove(`${userChoice}`);
  userChoiceImage.src = "";

  computerChoiceImage.src = "";
  computerPick.classList.remove(`${computerChoice}`);

  playAgain.textContent = "PLAY AGAIN";
  userChoice = "";
  computerChoice = "";

  userwiningIndicator.style.display = "none";
  computerwiningIndicator.style.display = "none";
};

const userWins = () => {
  userScore++;
  localStorage.setItem("player_score", `${userScore}`);
  userScoreValue.textContent = userScore;
  nextButton.style.display = "flex";
  resultText.textContent = "YOU WIN";
  userwiningIndicator.style.display = "flex";
};

const tieUp = () => {
  resultText.textContent = "TIE UP";
  playAgain.textContent = "REPLAY";
};

const computerWins = () => {
  computerScore++;
  localStorage.setItem("computer_score", `${computerScore}`);
  computerScoreValue.textContent = computerScore;
  nextButton.style.display = "none";
  resultText.textContent = "YOU LOST";
  computerwiningIndicator.style.display = "flex";
};

window.onload = function () {
  reset();
};

playAgain.addEventListener("click", () => {
  reset();
});

let isRuleBoxOpen = true;
ruleButton.addEventListener("click", () => {
  if (!isRuleBoxOpen) {
    ruleWrapper.style.display = "flex";
  }
});

ruleBoxCloseButton.addEventListener("click", () => {
  ruleWrapper.style.display = "none";
  isRuleBoxOpen = false;
});

rock.addEventListener("click", () => {
  userChoice = rock.dataset.value;
  userPick.classList.add(`${userChoice}`);
  userChoiceImage.src = `assests/${userChoice}.png`;

  mainGame.style.display = "none";
  resultScreen.style.display = "block";

  computerChoice = generateComputerChoice();
  computerChoiceImage.src = `assests/${computerChoice}.png`;
  computerPick.classList.add(`${computerChoice}`);

  if (userChoice === "rock" && computerChoice === "scissors") {
    userWins();
  } else if (userChoice === computerChoice) {
    tieUp();
  } else {
    computerWins();
  }
});

paper.addEventListener("click", () => {
  userChoice = paper.dataset.value;
  userPick.classList.add(`${userChoice}`);
  userChoiceImage.src = `assests/${userChoice}.png`;

  mainGame.style.display = "none";
  resultScreen.style.display = "block";

  computerChoice = generateComputerChoice();
  computerChoiceImage.src = `assests/${computerChoice}.png`;
  computerPick.classList.add(`${computerChoice}`);

  if (userChoice === "paper" && computerChoice === "rock") {
    userWins();
  } else if (userChoice === computerChoice) {
    tieUp();
  } else {
    computerWins();
  }
});

scissors.addEventListener("click", () => {
  userChoice = scissors.dataset.value;
  userPick.classList.add(`${userChoice}`);
  userChoiceImage.src = `assests/${userChoice}.png`;

  mainGame.style.display = "none";
  resultScreen.style.display = "block";

  computerChoice = generateComputerChoice();
  computerChoiceImage.src = `assests/${computerChoice}.png`;
  computerPick.classList.add(`${computerChoice}`);

  if (userChoice === "scissors" && computerChoice === "paper") {
    userWins();
  } else if (userChoice === computerChoice) {
    tieUp();
  } else {
    computerWins;
  }
});