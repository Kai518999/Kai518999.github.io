// Define the scenarios and their options
const scenarios = [
    {
      scenario: "Your AI-powered facial recognition system is being considered for use by law enforcement. How do you ensure that the system is unbiased and does not discriminate against certain groups of people?",
      options: [
        {
          option: "Collect and train the system on a diverse dataset of facial images.",
          feedback: "This is a good approach to reduce bias. A diverse dataset will help the system learn to recognize faces accurately across different groups of people.",
          isCorrect: true
        },
        {
          option: "Use algorithms that are designed to be fair and unbiased.",
          feedback: "This is important, but it is not enough. Even fair algorithms can be biased if they are trained on biased data.",
          isCorrect: false
        },
        {
          option: "Deploy the system with strict oversight and monitoring.",
          feedback: "This is important to ensure that the system is used responsibly and ethically.",
          isCorrect: true
        }
      ]
    },
    {
      scenario: "Your AI-powered hiring system is being used by a major corporation. How do you prevent the system from making decisions based on factors such as race, gender, or socioeconomic status?",
      options: [
        {
          option: "Remove personal information from the data used to train the system.",
          feedback: "This is a good approach to prevent the system from making decisions based on personal information. However, it is important to ensure that the remaining data is still relevant and predictive of job performance.",
          isCorrect: true
        },
        {
          option: "Use algorithms that are specifically designed to be fair and unbiased in hiring decisions.",
          feedback: "This is an important step, but it is not enough. Even fair algorithms can be biased if they are trained on biased data.",
          isCorrect: false
        },
        {
          option: "Implement regular audits and reviews of the system's decision-making process.",
          feedback: "This is important to identify and address any potential biases that may be present in the system.",
          isCorrect: true
        }
      ]
    },
] 
// Define variables for the current scenario and score
let currentScenarioIndex = 0;
let score = 0;

// Function to display the next scenario
function nextScenario() {
  if (currentScenarioIndex < scenarios.length) {
    const scenario = scenarios[currentScenarioIndex];
    const gameInfo = document.getElementById('game-info');
    gameInfo.textContent = scenario.scenario;

    // Clear the options and feedback sections
    const gameOptions = document.getElementById('game-options');
    gameOptions.innerHTML = '';
    const gameFeedback = document.getElementById('game-feedback');
    gameFeedback.textContent = '';

    // Create option buttons for the current scenario
    for (const option of scenario.options) {
      const optionButton = document.createElement('button');
      optionButton.textContent = option.option;
      optionButton.addEventListener('click', () => handleOptionClick(option));
      gameOptions.appendChild(optionButton);
    }
  } else {
    // Game over
    const gameInfo = document.getElementById('game-info');
    gameInfo.textContent = 'Game Over!';

    // Clear the options section
    const gameOptions = document.getElementById('game-options');
    gameOptions.innerHTML = '';

    // Display the final score
    const gameFeedback = document.getElementById('game-feedback');
    gameFeedback.textContent = `Your final score is: ${score}`;
  }
}

// Function to handle option clicks and update feedback and score
function handleOptionClick(option) {
  const gameFeedback = document.getElementById('game-feedback');
  gameFeedback.textContent = option.feedback;

  if (option.isCorrect) {
    score++;
    gameFeedback.textContent += ' Your score is now: ' + score;
  } else {
    gameFeedback.textContent += ` Your answer is incorrect. The correct answer is: ${scenarios[currentScenarioIndex].correctOption}`;
  }

  // Advance to the next scenario
  currentScenarioIndex++;
  nextScenario();
}

// Initialize the game by displaying the first scenario
nextScenario();
