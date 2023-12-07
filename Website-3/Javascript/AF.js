const questionText = document.querySelector('.question-text');
const answerButtons = document.querySelectorAll('.answer-button');
const feedbackText = document.querySelector('.feedback-text');
const correctAnswer = 'False';

let isPlaying = false;

answerButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (!isPlaying) {
      isPlaying = true;

      const selectedAnswer = button.textContent.trim();
      if (selectedAnswer === correctAnswer) {
        feedbackText.textContent = 'Correct! AI can learn from data and adapt to new situations.';
      } else {
        feedbackText.textContent = 'Incorrect. AI can learn from data and adapt to new situations.';
      }

      setTimeout(() => {
        isPlaying = false;
        feedbackText.textContent = '';
      }, 2000);
    }
  });
});
