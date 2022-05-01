// Alien ship

class AlienShip {
  hp;
  firepower;
  accuracy;

  constructor(hp, firepower, accuracy) {
    this.hp = hp;
    this.firepower = firepower;
    this.accuracy = accuracy;
  }
}

// Our Ship

class USSAssembly {
  hp;
  firepower;
  accuracy;

  constructor(hp, firepower, accuracy) {
    this.hp = hp;
    this.firepower = firepower;
    this.accuracy = accuracy;
  }
  dodge = () => {
    console.log("dodge");
  };
}

let ussAssembly = new USSAssembly(20, 5, 0.7);
console.log(ussAssembly);

let alienMob = [];
createAlienMob();

console.log(alienMob);

setAlienHealth();

let targetCounter = 1;

//------------------------------------------------------

const battle = () => {
  let playerOneScore = 100;

  let alienScore = 100;

  console.log("Battle Started!");
  // startGame

  let command = prompt("Ready to [A]ttack? or Retreat?");
  if (command === "A") {
    let target = document.querySelector(".ufo");
    let explosion = document.createElement("img");
    explosion.setAttribute("src", "https://i.gifer.com/4xjg.gif");
    explosion.style.width = "40px";
    explosion.style.marginLeft = "37px";

    // signal explosion

    //decrease alien Point

    let shooter = document.querySelector(".fireball");
    shooter.classList.toggle("initiateAmmo");

    let shipHealth = document.getElementById("shipHP");
    // ussAssembly shooting alien ship
    let alienHealth = document.getElementById("progressBar" + targetCounter);
    if (Math.random() < ussAssembly.accuracy) {
      console.log("ship with accurate hit");
      alienMob[targetCounter - 1].hp -= ussAssembly.firepower;
      setTimeout(() => {
        updateAlienHealth();
      }, 2000);
      console.log("alien mob hp", alienMob[targetCounter - 1].hp);
    }

    if (alienMob[targetCounter - 1].hp > 0) {
      // alien will shoot back
      let alienShooter = document.getElementById("alienFire" + targetCounter);
      alienShooter.classList.toggle("initiateAlienAttack");
      // probability of alien hitting
      if (Math.random() < alienMob[targetCounter - 1].accuracy) {
        console.log("alien with accurate hit");
        ussAssembly.hp -= alienMob[targetCounter - 1].firepower;
        console.log("ship hp", ussAssembly);
        setTimeout(() => {
          shipHealth.value = ussAssembly.hp;
        }, 3000);
      }
    } else if (alienMob[targetCounter - 1].hp <= 0) {
      //explode ufo
      setTimeout(() => target.replaceWith(explosion), 2000);
      targetCounter++;
    }
    setTimeout(() => {
      shooter.classList.toggle("initiateAmmo");
    }, 3500);
    console.log("target counter", targetCounter);
    setTimeout(() => checkIfWin(), 3500);
    setTimeout(() => checkIfLose(), 3500);
  } else {
    console.log("PlayerOne has retreated and loses!");
    window.alert("PlayerOne has retreated and loses!");
  }
};

//
function checkIfWin() {
  if (targetCounter >= 7) {
    const winner = document.querySelector(".winner");
    winner.style.visibility = "visible";
    console.log("You WIN!!!");
  }
}

function checkIfLose() {
  if (ussAssembly.hp === 0) {
    const loser = document.querySelector(".loser");
    loser.style.visibility = "visible";
    console.log("You lose");
  }
}

function createAlienMob() {
  for (let i = 1; i < 7; i++) {
    let alienShip = new AlienShip(
      getRandomNumber(3, 7),
      getRandomNumber(2, 5),
      getRandomNumberDecimal(6, 9)
    );
    alienMob.push(alienShip);
  }
}

function setAlienHealth() {
  for (let i = 0; i < alienMob.length; i++) {
    let progressBar = document.getElementById("progressBar" + [i + 1]);
    progressBar.max = alienMob[i].hp;
    progressBar.value = alienMob[i].hp;
    // console.log(progressBar);
  }
}

function updateAlienHealth() {
  for (let i = 0; i < alienMob.length; i++) {
    let progressBar = document.getElementById("progressBar" + [i + 1]);
    progressBar.value = alienMob[i].hp;
    // console.log(progressBar);
  }
}

// Calculates alien ship properties (hp, firepower, accuracy)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomNumberDecimal(min, max) {
  return Math.floor(Math.random() * (max - min) + min) / 10;
}

//------------------------------------------------------

// Round => each player gets to attack

// const moveShip = document.querySelector(".ship");
// const pos = {x:0, y:0};

// document.addEventListener("keydown", (e) => {

//   const dir = (e.key.match(/(?<=^Arrow)\w+/) || [])[0];
//   if (!dir) return; // Not an arrow key.

//   e.preventDefault(); // Prevent Browser scroll if overflow

//   ({
//     Left:  () => pos.x -= 5,
//     Right: () => pos.x += 5,
//     Up:    () => pos.y -= 5,
//     Down:  () => pos.y += 5,
//   }[dir])();

//   moveShip.style.transform = `translate(${pos.x}px, ${pos.y}px)`
// });
