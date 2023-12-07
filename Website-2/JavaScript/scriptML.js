document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image-container img');

    images.forEach(img => {
        img.addEventListener('click', () => {
            // Remove 'clicked' class from all images
            images.forEach(image => image.classList.remove('clicked'));

            // Add 'clicked' class to the clicked image
            img.classList.add('clicked');
        });
    });
function showAnswer() {
    const clickedImage = document.querySelector('.image-container img.clicked');
    if (clickedImage) {
        const imageName = clickedImage.dataset.name;
        answerText.innerText = `The image is: ${imageName}`;
    } else {
        answerText.innerText = "Please click an image first.";
    }
}

document.getElementById('showAnswerBtn').addEventListener('click', showAnswer);
});

//Number Guessing Game

const gameFeedback = document.getElementById('game-feedback');
const gameGuess = document.getElementById('game-guess');
const gameCheckButton = document.getElementById('game-check');

let lowerBound = 1;
let upperBound = 100;

gameCheckButton.addEventListener('click', handleCheckClick);

function handleCheckClick() {
    const userGuess = parseInt(gameGuess.value);
    if (userGuess < lowerBound || userGuess > upperBound) {
        gameFeedback.textContent = `Invalid guess. Please enter a number between ${lowerBound} and ${upperBound}.`;
        return;
    }

    const computerGuess = Math.floor((lowerBound + upperBound) / 2);
    if (computerGuess === userGuess) {
        gameFeedback.textContent = `Correct! you guessed my number in ${Math.ceil(Math.log2(upperBound - lowerBound + 1))} attempts.`;
        lowerBound = 1;
        upperBound = 100;
        gameGuess.value = '';
    } else if (computerGuess < userGuess) {
        lowerBound = computerGuess + 1;
        gameFeedback.textContent = `Your guess is higher. Think of a number between ${lowerBound} and ${upperBound}.`;
    } else {
        upperBound = computerGuess - 1;
        gameFeedback.textContent = `Your guess is lower. Think of a number between ${lowerBound} and ${upperBound}.`;
    }
}