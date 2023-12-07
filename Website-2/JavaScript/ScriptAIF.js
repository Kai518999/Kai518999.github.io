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
{ 
    scenario: "Your AI-powered system is being used to identify potential fraud in insurance claims. How do you ensure that the system is accurate and does not unfairly flag legitimate claims?",
options: [
  {
    option: "Rely solely on the AI system's flagging mechanism to determine which claims to investigate.",
    feedback: "This is not a reliable approach, as the system may produce false positives and unfairly flag legitimate claims. Human review is crucial for ensuring accuracy and fairness.",
    isCorrect: false
  },
  {
    option: "Implement a multi-stage review process that involves human experts to verify the system's findings.",
    feedback: "This is a more effective approach, as it combines the AI system's ability to identify potential fraud patterns with the expertise of human reviewers to assess individual claims. Human review can help reduce false positives and ensure fairness.",
    isCorrect: true
  },
  {
    option: "Continuously monitor and refine the system's algorithms to improve its accuracy and reduce false positives.",
    feedback: "This is an ongoing process that is essential for maintaining the system's effectiveness and fairness. Regularly monitoring and refining the algorithms can help minimize errors and ensure that the system is not unfairly flagging legitimate claims.",
    isCorrect: true
  }
]
},
{
    scenario: "Your AI-powered system is being used to personalize news feeds for users. How do you prevent the system from creating filter bubbles that reinforce existing biases and limit exposure to diverse viewpoints?",
    options: [
      {
        option: "Allow users to control their news feeds entirely, letting them choose the sources and topics they want to see.",
        feedback: "While this may give users more control over their news feeds, it could also lead to them self-selecting into filter bubbles, reinforcing their existing biases and limiting their exposure to diverse viewpoints.",
        isCorrect: false
      },
      {
        option: "Incorporate algorithms that prioritize content from a variety of sources and perspectives, including those that challenge the user's existing beliefs.",
        feedback: "This is a more effective approach, as it actively exposes users to a wider range of information and perspectives, potentially counteracting the effects of filter bubbles. Algorithms can balance user preferences with exposure to diverse viewpoints.",
        isCorrect: true
      },
      {
        option: "Provide users with tools and resources to identify and evaluate potential biases in their news feeds.",
        feedback: "This is an important step in empowering users to make informed decisions about their news consumption. Providing educational resources and tools can help users recognize biases, assess the credibility of sources, and seek out diverse viewpoints.",
        isCorrect: true
      }
    ]
  },
  {
    scenario: "Your AI-powered system is being used to predict the risk of recidivism among criminal offenders. How do you ensure that the system is fair and does not perpetuate existing inequalities in the criminal justice system?",
    options: [
      {
        option: "Use the system's predictions as the sole basis for sentencing and parole decisions.",
        feedback: "This is not a fair approach, as the system may perpetuate existing biases in the criminal justice system, leading to unfair outcomes for certain groups of offenders.",
        isCorrect: false
      },
      {
        option: "Implement algorithms that explicitly account for factors such as socioeconomic status and access to resources.",
        feedback: "This is a more equitable approach, as it considers factors that may contribute to recidivism beyond an individual's criminal history. Algorithms should consider the broader context and potential mitigating factors.",
        isCorrect: true
      },
      {
        option: "Regularly audit and review the system's decision-making process to identify and address any potential discrepancies.",
        feedback: "This is crucial for ensuring transparency and accountability. Regular audits can help identify and address potential biases or errors in the system's predictions, promoting fairness in its application.",
        isCorrect: true
      }
    ]
  },
  {
    scenario: "Your AI-powered system is being used to make recommendations for personalized education plans. How do you ensure that the system's recommendations are equitable and do not perpetuate existing educational inequalities?",
    options: [
      {
        option: "Use the system's recommendations as the sole basis for assigning students to courses and programs.",
        feedback: "This is not an equitable approach, as the system may perpetuate existing biases in the education system and lead to unfair outcomes for certain groups of students.",
        isCorrect: false
      },
      {
        option: "Consider the system's recommendations alongside other factors, such as student interests, teacher input, and parental involvement.",
        feedback: "This is a more equitable approach, as it takes into account the individual needs and circumstances of each student. Recommendations should be considered as a guide, not a rigid determinant of educational pathways.",
        isCorrect: true
      },
      {
        option: "Regularly evaluate and refine the system's algorithms to ensure they are not perpetuating existing biases in the education system.",
        feedback: "This is crucial for promoting fairness and in clusivity in education. Ongoing evaluation and refinement can help identify and address potential biases in the system's recommendations.",
        isCorrect: true
      }
    ]
  },
  {
    scenario: "Your AI-powered system is being used to optimize traffic flow in cities. How do you balance the efficiency of traffic flow with the privacy and freedom of movement of individual citizens?",
    options: [
      {
        option: "Implement the system without considering the privacy implications of tracking individual vehicle movements.",
        feedback: "This is not an acceptable approach, as it raises significant privacy concerns and could infringe on the freedom of movement of individuals.",
        isCorrect: false
      },
      {
        option: "Employ anonymized data and privacy-preserving techniques to protect the identities of individuals while optimizing traffic flow.",
        feedback: "This is a more responsible approach, as it balances the need for efficient traffic management with the protection of individual privacy. Anonymization and privacy-preserving techniques can help ensure that individual movements are not tracked or linked to their identities.",
        isCorrect: true
      },
      {
        option: "Engage in public dialogue and seek community input to establish guidelines for the use of AI-powered traffic management systems.",
        feedback: "This is essential for ensuring transparency and accountability. Public engagement can help build trust, address concerns, and establish clear principles for the ethical use of AI in traffic management.",
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
