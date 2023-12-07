const questionText = document.querySelector('.question-text');
const answerButtons = document.querySelectorAll('.answer-button');
const feedbackText = document.querySelector('.feedback-text');
const correctAnswer = 'Backpropagation';

let isPlaying = false;

answerButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (!isPlaying) {
      isPlaying = true;

      const selectedAnswer = button.textContent.trim();
      if (selectedAnswer === correctAnswer) {
        feedbackText.textContent = 'Correct! The answer is Backpropagation.';
      } else {
        feedbackText.textContent = 'Incorrect. The correct answer is Backpropagation.';
      }

      setTimeout(() => {
        isPlaying = false;
        feedbackText.textContent = '';
      }, 2000);
    }
  });
});
