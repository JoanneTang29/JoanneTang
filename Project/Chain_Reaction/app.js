//Array of word phrases
let phraseList = [
  ['House', 'Party', 'Animal', 'Cracker', 'Jack'],
  ['Baby', 'Face', 'Time', 'Out', 'House'],
  ['Slime', 'Ball', 'Pit', 'Bull', 'Shark'],
  ['Throw', 'Rug', 'Burn', 'Cream', 'Cheese'],
  ['Navy', 'Base', 'Ball', 'Park', 'Place'],
  ['Say', 'Cheese', 'Stick', 'Man', 'Down'],
  ['Knee', 'Deep', 'Sleep', 'Tight', 'End'],
  ['House', 'Hunt', 'Down', 'Under', 'Pressure'],
  ['Shoe', 'Store', 'Front', 'Door', 'Lock'],
  ['Sweet', 'Tooth', 'Fairy', 'Dust', 'Cover'],
  ['Crack', 'Open', 'Sesame', 'Street', 'Smart'],
  ['Cookie', 'Monster', 'Truck', 'Stop', 'Sign'],
  ['Baby', 'Blue', 'Corn', 'Dog', 'Park'],
  ['Dark', 'Horse', 'Race', 'Car', 'Show'],
  ['Merry', 'Christmas', 'Tree', 'House', 'Keeping'],
  ['Forbidden', 'Fruit', 'Salad', 'Dressing', 'Room'],
  ['Family', 'Business', 'Card', 'Game', 'Cube'],
];

//Sounds
const buttonSound = new Audio('sounds/26777__junggle__btn402.mp3');
const startSound = new Audio('sounds/243020__plasterbrain__game-start.ogg');
const winSound = new Audio('sounds/269198__mickleness__game-win.mp3');

//Insert phrases and enter input

const insertFirstWord = document.getElementById('firstWord');
const insertSecondInput = document.getElementById('secondWord');
const insertThirdInput = document.getElementById('thirdWord');
const insertFourthInput = document.getElementById('fourthWord');
const insertFifthWord = document.getElementById('fifthWord');

insertSecondInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    console.log('enter key');
    guessSecondWord();
  }
});
insertThirdInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    console.log('enter 3rd key');
    guessThirdWord();
  }
});
insertFourthInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    console.log('enter 4th key');
    guessFourthWord();
  }
});

// New game
const newGame = document.querySelector('.newGame');
newGame.addEventListener('click', setUpGame);
newGame.addEventListener('click', () => startSound.play());

const rules = document.querySelector('.rules');

let activePlayer = 1;
const playerOnePoints = document.getElementById('points1');
const playerTwoPoints = document.getElementById('points2');

// Player Scores
let playerOneScore = 500;
let playerTwoScore = 500;

// Points
let wager = 0;

// Rounds
let round = 1;
let wordCounter = 0;
let roundText = document.getElementById('roundText');

// Button to select wager
const selectFiftyPoints = document.getElementById('wager50');
selectFiftyPoints.addEventListener('click', () => setWager(50));
selectFiftyPoints.addEventListener('click', () => buttonSound.play());
const selectHundredPoints = document.getElementById('wager100');
selectHundredPoints.addEventListener('click', () => setWager(100));
selectHundredPoints.addEventListener('click', () => buttonSound.play());
const selectTwoHundredPoints = document.getElementById('wager200');
selectTwoHundredPoints.addEventListener('click', () => setWager(200));
selectTwoHundredPoints.addEventListener('click', () => buttonSound.play());

// End game display
const endGame = document.querySelector('.end-game');
const winnerOne = document.querySelector('.playerOneWins');
const winnerTwo = document.querySelector('.playerTwoWins');

function setUpGame() {
  randomizeArray(phraseList);
  resetScore();
  resetInput();
  resetWinnerScreen();
  setWager(0);
  rules.style.display = 'none';
  activePlayer = 1;
  document.querySelector('.playerOne').style.backgroundColor = '#ff5400';
  document.querySelector('.playerTwo').style.backgroundColor = '#0d3b66';
  insertSecondInput.disabled = false;
  insertThirdInput.disabled = true;
  insertFourthInput.disabled = false;
  wordCounter = 0;
  round = 1;
  insertPhrases();
  showRoundScreen();
  console.log('printing randomized arrays', phraseList);
}

function nextRound() {
  round++;
  showRoundScreen();
  insertPhrases();
  resetInput();
  setWager(0);
  wordCounter = 0;
  insertSecondInput.disabled = false;
  insertThirdInput.disabled = true;
  insertFourthInput.disabled = false;
}

const randomizeArray = (phraseList) => {
  for (let i = phraseList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    let temp = phraseList[i];
    phraseList[i] = phraseList[j];
    phraseList[j] = temp;
  }
  return phraseList;
};

const insertPhrases = () => {
  insertFirstWord.replaceChildren(phraseList[round - 1][0]);

  insertSecondInput.placeholder = phraseList[round - 1][1][0];

  insertThirdInput.placeholder = phraseList[round - 1][2][0];

  insertFourthInput.placeholder = phraseList[round - 1][3][0];

  insertFifthWord.replaceChildren(phraseList[round - 1][4]);
};

const resetScore = () => {
  playerOneScore = 500;
  playerOnePoints.innerHTML = playerOneScore;
  playerTwoScore = 500;
  playerTwoPoints.innerHTML = playerTwoScore;
};

const resetInput = () => {
  insertSecondInput.value = '';
  insertThirdInput.value = '';
  insertFourthInput.value = '';
};

const resetWinnerScreen = () => {
  endGame.style.display = 'none';
  winnerOne.style.display = 'none';
  winnerTwo.style.display = 'none';
};

const checkActivePlayer = () => {
  if (activePlayer === 1) {
    activePlayer = 2;
    document.querySelector('.playerTwo').style.backgroundColor = '#ff5400';
    document.querySelector('.playerOne').style.backgroundColor = '#0d3b66';
  } else {
    activePlayer = 1;
    console.log('active player', activePlayer);
    document.querySelector('.playerOne').style.backgroundColor = '#ff5400';
    document.querySelector('.playerTwo').style.backgroundColor = '#0d3b66';
  }
};

const showRoundScreen = () => {
  if (round === 1) {
    roundText.innerHTML = 'Round 1';
    roundText.style.display = 'block';
  }
  if (round === 2) {
    roundText.innerHTML = 'Round 2';
  }
  if (round === 3) {
    roundText.innerHTML = 'Round 3';
  }
};

const verifyIfRoundIsOverAndIncrement = () => {
  if (wordCounter === 1) {
    insertThirdInput.disabled = false;
  }
  console.log('round', round);
  if (round === 1 && wordCounter === 3) {
    nextRound();
  }
  if (round === 2 && wordCounter === 3) {
    nextRound();
  }
  if (round === 3 && wordCounter === 3) {
    setTimeout(() => checkForWinner(), 1500);
  }
};

const guessSecondWord = () => {
  if (wager === 0) {
    alert('Please select wager');
  } else {
    if (insertSecondInput.value === phraseList[round - 1][1]) {
      addPoints();
      wordCounter++;
      insertSecondInput.disabled = true;
      console.log('word counter', wordCounter);
    } else if (insertSecondInput.value === '') {
      console.log('need input');
    } else {
      minusPoints();
    }
    checkActivePlayer();
    verifyIfRoundIsOverAndIncrement();
  }
};

const guessThirdWord = () => {
  if (wager === 0) {
    alert('Please select wager');
  } else {
    if (insertThirdInput.value === phraseList[round - 1][2]) {
      addPoints();
      wordCounter++;
      insertThirdInput.disabled = true;
      console.log('word counter', wordCounter);
    } else if (insertThirdInput.value === '') {
      console.log('need input');
    } else {
      minusPoints();
    }
    checkActivePlayer();
    verifyIfRoundIsOverAndIncrement();
  }
};

const guessFourthWord = () => {
  if (wager === 0) {
    alert('Please select wager');
  } else {
    if (insertFourthInput.value === phraseList[round - 1][3]) {
      addPoints();
      wordCounter++;
      insertFourthInput.disabled = true;
      console.log('word counter', wordCounter);
    } else if (insertFourthInput.value === '') {
      console.log('need input');
    } else {
      minusPoints();
    }
    checkActivePlayer();
    verifyIfRoundIsOverAndIncrement();
  }
};

const setWager = (number) => {
  console.log('wager:', number);
  let wagerInput = document.querySelector('.wager');
  wager = number;
  wagerInput.innerHTML = number;
};

const addPoints = () => {
  if (activePlayer === 1) {
    playerOneScore = playerOneScore + wager;
    playerOnePoints.innerHTML = playerOneScore;
  } else if (activePlayer === 2) {
    playerTwoScore = playerTwoScore + wager;
    playerTwoPoints.innerHTML = playerTwoScore;
  }
};

const minusPoints = () => {
  if (activePlayer === 1) {
    playerOneScore = playerOneScore - wager;
    playerOnePoints.innerHTML = playerOneScore;
  } else if (activePlayer === 2) {
    playerTwoScore = playerTwoScore - wager;
    playerTwoPoints.innerHTML = playerTwoScore;
  }
};

const checkForWinner = () => {
  if (round === 3) {
    if (playerOneScore > playerTwoScore) {
      console.log('Player One Wins');
      winSound.play();
      endGame.style.display = 'block';
      winnerOne.style.display = 'block';
      roundText.style.display = 'none';
    } else {
      console.log('Player Two Wins');
      winSound.play();
      endGame.style.display = 'block';
      winnerTwo.style.display = 'block';
      roundText.style.display = 'none';
    }
  }
};

const toggleRules = () => {
  if (rules.style.display === 'none') {
    rules.style.display = 'block';
  } else {
    rules.style.display = 'none';
  }
};
