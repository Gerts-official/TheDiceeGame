const imgDiceL = document.querySelectorAll('img')[0];
const imgDiceR = document.querySelectorAll('img')[1];
const button = document.querySelector("button");
const finish = document.querySelector(".header");
const pushButton = document.getElementById('playButton');

function dice() {
    const lRandom = lDice();
    const rRandom = rDice();
    winner(lRandom, rRandom);
    pushButton.classList.toggle('pushed');
}

function lDice() {
    const lRandom = Math.floor(Math.random() * 6 + 1);
    imgDiceL.src = `images/dice${lRandom}.png`;
    return lRandom;
}

function rDice() {
    const rRandom = Math.floor(Math.random() * 6 + 1);
    imgDiceR.src = `images/dice${rRandom}.png`;
    return rRandom;
}

function winner(lRandom, rRandom) {
    setTimeout(function () {
        if (lRandom > rRandom) {
            finish.textContent = "🚩 Player 1 won!";
        } else if (rRandom > lRandom) {
            finish.textContent = "Player 2 won! 🚩";
        } else {
            finish.textContent = "Draw!";
        }
    }, 50);
}

button.addEventListener('click', dice);
