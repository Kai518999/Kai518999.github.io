const inputItem = document.getElementById('input-item');
const submitButton = document.getElementById('submit-button');
const categoryResult = document.getElementById('category-result');
const scoreValue = document.getElementById('score-value');

let score = 0;

submitButton.addEventListener('click', () => {
  const item = inputItem.value.toLowerCase().trim();
  if (item === '') {
    alert('Please enter an item');
    return;
  }

  const category = categorizeItem(item);
  if (category === null) {
    categoryResult.textContent = `Invalid item: ${item}`;
    return;
  }

  // Check if the guessed category is correct
  const correctCategory = getRandomCategory();
  if (category === correctCategory) {
    score++;
    scoreValue.textContent = score;
    categoryResult.textContent = `Correct! The category of ${item} is ${category}`;
  } else {
    categoryResult.textContent = `Incorrect. The category of ${item} is ${correctCategory}`;
  }

  inputItem.value = '';
});

function categorizeItem(item) {
  const fruits = ['apple', 'orange', 'banana', 'grape', 'strawberry'];
  const animals = ['cat', 'dog', 'elephant', 'lion', 'zebra'];
  const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
  const countries = ['usa', 'canada', 'china', 'india', 'brazil','UK'];

  if (fruits.includes(item)) {
    return 'fruit';
  } else if (animals.includes(item)) {
    return 'animal';
  } else if (colors.includes(item)) {
    return 'color';
  } else if (countries.includes(item)) {
    return 'country';
  } else {
    return null;
  }
}

function getRandomCategory() {
  const categories = ['fruit', 'animal', 'color', 'country'];
  return categories[Math.floor(Math.random() * categories.length)];
}
