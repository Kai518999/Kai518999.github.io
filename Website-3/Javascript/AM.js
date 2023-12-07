const questionText = document.querySelector('.question-text');
const answerButtons = document.querySelectorAll('.answer-button');
const feedbackText = document.querySelector('.feedback-text');
const correctAnswer = 'Convolutional Neural Network (CNN)';

let isPlaying = false;

answerButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (!isPlaying) {
      isPlaying = true;

      const selectedAnswer = button.textContent.trim();
      if (selectedAnswer === correctAnswer) {
        feedbackText.textContent = 'Correct! The answer is Convolutional Neural Network (CNN).';
      } else {
        feedbackText.textContent = 'Incorrect. The correct answer is Convolutional Neural Network (CNN).';
      }

      setTimeout(() => {
        isPlaying = false;
        feedbackText.textContent = '';
      }, 2000);
    }
  });
});
