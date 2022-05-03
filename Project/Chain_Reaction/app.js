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

console.log('list', phraseList);

let roundCounter = 1;

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
let playeTwoScore = 500;

// Points
let wager = 0;

const points50 = 50;
const points100 = 100;
const points200 = 200;

// Button to select wager
let selectFiftyPoints = document.getElementById('wager50');
selectFiftyPoints.addEventListener('click', () => setWager(50));
let selectHundredPoints = document.getElementById('wager100');
selectHundredPoints.addEventListener('click', () => setWager(100));
let selectTwoHundredPoints = document.getElementById('wager200');
selectTwoHundredPoints.addEventListener('click', () => setWager(200));

// Insert phrases into DOM
const insertPhrases = () => {
  insertFirstWord.replaceChildren(phraseList[0][0]);

  insertSecondInput.placeholder = phraseList[0][1][0];

  insertThirdInput.placeholder = phraseList[0][2][0];

  insertFourthInput.placeholder = phraseList[0][3][0];

  insertFifthWord.replaceChildren(phraseList[0][4]);
};

// Grab input section to type word for guessing

// Function to determine if word typed === '______'

// Add wager points to total score if correct answer
// Subtract wager points to total score if wrong answer

// Round 1, 2, 3
// 1) Select Wager
// 2) Guess word
// 3) Add/Subtract Wager for total score
// 4) Next players turn
// 5) repeat until all words are guessed

// Winner Screen

// New game button to reset points and have new words

// Function to add/subtract wager to total score

// Function to randomize phrase
function setUpGame() {
  randomizeArray(phraseList);
  resetScore();
  insertPhrases();
  resetInput();
  setWager(0);
  activePlayer = 1;
  insertThirdInput.disabled = true;
  insertSecondInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      console.log('enter key');
      guessSecondWord();
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
  playeTwoScore = 500;
};

const resetInput = () => {
  insertSecondInput.value = '';
  insertThirdInput.value = '';
  insertFourthInput.value = '';
};

const createRound = (number) => {};

const guessSecondWord = () => {
  insertSecondInput.value;
  console.log(phraseList[0][1]);
  if (insertSecondInput.value === phraseList[0][1]) {
    console.log('1st input correct');
    addPoints();
  } else {
    //subtract points and next player's turn
    minusPoints();
  }
};

const guessThirdWord = () => {
  insertThirdInput.value;
  if (insertThirdInput.value === phraseList[0][2]) {
    console.log('2nd input correct');
    //add points and next player's turn
  } else {
    //subtract points and next player's turn
  }
};

const guessFourthWord = () => {
  insertFourthInput.value;
  if (insertFourthInput.value === phraseList[0][3]) {
    console.log('4th input correct');
    //add points and next player's turn
  } else {
    //subtract points and next player's turn
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
    playeTwoScore = playeTwoScore + wager;
    playerTwoPoints.innerHTML = playeTwoScore;
  }
};

const minusPoints = () => {
  if (activePlayer === 1) {
    playerOneScore = playerOneScore - wager;
    playerOnePoints.innerHTML = playerOneScore;
  } else if (activePlayer === 2) {
    playeTwoScore = playeTwoScore - wager;
    playerTwoPoints.innerHTML = playeTwoScore;
  }
};

/* Extra Stuff
  Section to type player 1 and 2's name
  Show next letter, if a player gets the word wrong
  Once player guesses right, change input to a div, and player gets point
*/
