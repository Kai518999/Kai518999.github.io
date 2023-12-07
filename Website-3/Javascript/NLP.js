const inputWord = document.getElementById('input-word');
const submitButton = document.getElementById('submit-button');
const gameOutput = document.getElementById('game-output');
const scoreValue = document.getElementById('score-value');

let score = 0;

// Define a word association map
const wordAssociationMap = {
  'happy': ['joyful', 'cheerful', 'glad'],
  'sad': ['depressed', 'gloomy', 'miserable'],
  'love': ['affection', 'romance', 'passion'],
  'hate': ['loathe', 'despise', 'detest'],
  'joy': ['happiness', 'delight', 'excitement'],
  'fear': ['anxiety', 'terror', 'dread']
};

submitButton.addEventListener('click', () => {
  const word = inputWord.value.toLowerCase();
  if (word === '') {
    alert('Please enter a word');
    return;
  }

  // Check if the input word is valid
  if (!Object.keys(wordAssociationMap).includes(word)) {
    alert('Invalid input word');
    return;
  }

  // Get a random related word from the list
  const relatedWord = wordAssociationMap[word][Math.floor(Math.random() * wordAssociationMap[word].length)];

  // Display the related word and update the score
  gameOutput.textContent = `Related word: ${relatedWord}`;
  score++;
  scoreValue.textContent = score;

  inputWord.value = '';
});
