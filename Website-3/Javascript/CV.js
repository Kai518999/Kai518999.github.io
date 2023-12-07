const objectImage = document.querySelector('img');
const answerButtons = document.querySelectorAll('.answer-button');
const feedbackText = document.querySelector('.feedback-text');
const correctAnswer = 'Cat';

let isPlaying = false;

answerButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (!isPlaying) {
      isPlaying = true;

      const selectedAnswer = button.textContent.trim();
      if (selectedAnswer === correctAnswer) {
        feedbackText.textContent = 'Correct! The object is a Cat.';
      } else {
        feedbackText.textContent = 'Incorrect. The correct answer is Cat.';
      }

      setTimeout(() => {
        isPlaying = false;
        feedbackText.textContent = '';
      }, 2000);
    }
  });
});
