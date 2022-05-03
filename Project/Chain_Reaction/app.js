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

// Player Scores
let playerScore1 = 500;
let playerScore2 = 500;

// Randomize which array of phrases is selected
// Grab array index and insert array index into div/input
// Create blank array, and insert array into

// Insert phrases into DOM
const insertPhrases = () => {
  insertFirstWord.replaceChildren(phraseList[0][0]);

  insertSecondInput.placeholder = phraseList[0][1][0];

  insertThirdInput.placeholder = phraseList[0][2][0];

  insertFourthInput.placeholder = phraseList[0][3][0];

  insertFifthWord.replaceChildren(phraseList[0][4]);
};

// Button to select wager

// Grab input section to type word for guessing

// Function to determine if word typed === '______'

// Add wager points to total score if correct answer
// Subtract wager points to total score if wrong answer

// Round 1, 2, 3

// Winner Screen

// New game button to reset points and have new words

// Function to add/subtract wager to total score

// Function to randomize phrase
function setUpGame() {
  randomizeArray(phraseList);
  resetScore();
  insertPhrases();
  resetInput();
  insertThirdInput.disabled = true;
  insertSecondInput.addEventListener('keypress', (e) => {
    console.log(e.key);
    if (e.key === 'Enter') {
      console.log('enter key');
      guessSecondWord();
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
  playerScore1 = 500;
  playerScore2 = 500;
};

const resetInput = () => {
  insertSecondInput.value = '';
  insertFourthInput.value = '';
};

const createRound = (number) => {};

const guessSecondWord = () => {
  insertSecondInput.value;
  console.log(phraseList[0][1]);
  if (insertSecondInput.value === phraseList[0][1]) {
    console.log('it works');
  }
};

const calculatePoints = () => {
  let fiftyPoints = document.getElementById('wager50');
  let hundredPoints = document.getElementById('wager100');
  let twoHundredPoints = document.getElementById('wager200');
};

/* Extra Stuff
  Section to type player 1 and 2's name
  Show next letter, if a player gets the word wrong
  Once player guesses right, change input to a div, and player gets point
*/
