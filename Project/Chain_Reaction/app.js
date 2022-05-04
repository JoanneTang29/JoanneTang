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
  ['Golden', 'Goose', 'Feather', 'Weight', 'Loss'],
  ['Forbidden', 'Fruit', 'Salad', 'Dressing', 'Room'],
];

let insertFirstWord = document.getElementById('firstWord');
let insertSecondInput = document.getElementById('secondWord');
let insertThirdInput = document.getElementById('thirdWord');
let insertFourthInput = document.getElementById('fourthWord');
let insertFifthWord = document.getElementById('fifthWord');

// New game
const newGame = document.querySelector('.newGame');
newGame.addEventListener('click', setUpGame);

// Rules - hide and show rules

let activePlayer = 1;
let playerOnePoints = document.getElementById('points1');
let playerTwoPoints = document.getElementById('points2');

// Player Scores
let playerOneScore = 500;
let playerTwoScore = 500;

// Points
let wager = 0;

const points50 = 50;
const points100 = 100;
const points200 = 200;

// Rounds
let round = 1;
let wordCounter = 0;

// Button to select wager
let selectFiftyPoints = document.getElementById('wager50');
selectFiftyPoints.addEventListener('click', () => setWager(50));
let selectHundredPoints = document.getElementById('wager100');
selectHundredPoints.addEventListener('click', () => setWager(100));
let selectTwoHundredPoints = document.getElementById('wager200');
selectTwoHundredPoints.addEventListener('click', () => setWager(200));

// Insert phrases into DOM
const insertPhrases = () => {
  insertFirstWord.replaceChildren(phraseList[round - 1][0]);

  insertSecondInput.placeholder = phraseList[round - 1][1][0];

  insertThirdInput.placeholder = phraseList[round - 1][2][0];

  insertFourthInput.placeholder = phraseList[round - 1][3][0];

  insertFifthWord.replaceChildren(phraseList[round - 1][4]);
};

function setUpGame() {
  randomizeArray(phraseList);
  resetScore();
  insertPhrases();
  resetInput();
  setWager(0);
  activePlayer = 1;
  document.querySelector('.playerOne').style.backgroundColor = '#ff5400';
  insertThirdInput.disabled = true;
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
  console.log('printing randomized arrays', phraseList);
}

function nextRound() {
  round++;
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
    checkForWinner();
  }
};

const guessSecondWord = () => {
  // insertSecondInput.value;
  if (insertSecondInput.value === phraseList[round - 1][1]) {
    addPoints();
    wordCounter++;
    insertSecondInput.disabled = true;
    console.log('word counter', wordCounter);
  } else if (insertSecondInput.value === '') {
    console.log('do nothing');
  } else {
    minusPoints();
  }
  checkActivePlayer();
  verifyIfRoundIsOverAndIncrement();
};

const guessThirdWord = () => {
  // insertThirdInput.value;
  if (insertThirdInput.value === phraseList[round - 1][2]) {
    addPoints();
    wordCounter++;
    insertThirdInput.disabled = true;
    console.log('word counter', wordCounter);
  } else if (insertThirdInput.value === '') {
    console.log('do nothing');
  } else {
    minusPoints();
  }
  checkActivePlayer();
  verifyIfRoundIsOverAndIncrement();
};

const guessFourthWord = () => {
  // insertFourthInput.value;
  if (insertFourthInput.value === phraseList[round - 1][3]) {
    addPoints();
    wordCounter++;
    insertFourthInput.disabled = true;
    console.log('word counter', wordCounter);
  } else if (insertFourthInput.value === '') {
    console.log('do nothing');
  } else {
    minusPoints();
  }
  checkActivePlayer();
  verifyIfRoundIsOverAndIncrement();
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
    playerTwoScore = playeTwoScore - wager;
    playerTwoPoints.innerHTML = playerTwoScore;
  }
};

const checkForWinner = () => {
  if (round === 3) {
    if (playerOneScore > playerTwoScore) {
      console.log('Player One Wins');
    } else {
      console.log('Player Two Wins');
    }
  }
};

function toggleRules() {
  let rules = document.querySelector('.rules');
  if (rules.style.display === 'none') {
    rules.style.display = 'block';
  } else {
    rules.style.display = 'none';
  }
}
/* Extra Stuff
  Section to type player 1 and 2's name
  Show next letter, if a player gets the word wrong
  Once player guesses right, change input to a div, and player gets point
*/
