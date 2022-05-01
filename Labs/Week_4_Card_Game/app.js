let score = 0;
let scoreNumber = document.querySelector('.score');

const cardFlip1 = () => {
    let cardPrompt1 = prompt("What is 3 + 3?");
    let goldCard1 = document.getElementById(card1);
    if (cardPrompt1 === "6") {
        document.querySelector('.screen').innerText = "Answer is correct";
        console.log("Correct")
        score += 1;
        scoreNumber.innerText = score;
        console.log(score);
    } else {
        document.querySelector('.screen').innerText = "Answer is Incorrect";
    };
}

const cardFlip2 = () => {
    let cardPrompt2 = prompt("What is 3 + 7?"); 
    let goldCard1 = document.getElementById(card1);
    if (cardPrompt2 === "10") {
        document.querySelector('.screen').innerText = "Answer is correct";
        console.log("Correct")
        score += 1;
        scoreNumber.innerText = score;
        console.log(score);
    } else {
        document.querySelector('.screen').innerText = "Answer is Incorrect";
    }
}

const cardFlip3 = () => {
    let cardPrompt3 = prompt("What is 1 + 3?");
    let goldCard3 = document.getElementById(card3);
    if (cardPrompt3 === "4") {
        document.querySelector('.screen').innerText = "Answer is correct";
        console.log("Correct")
        score += 1;
        scoreNumber.innerText = score;
        console.log(score);
    } else {
        document.querySelector('.screen').innerText = "Answer is Incorrect";
    }
}