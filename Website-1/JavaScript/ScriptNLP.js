function performSentimentAnalysis() {
    const sentence = document.getElementById('inputSentence').value;
  
    // Replace this code with your actual sentiment analysis model or API
    const sentimentScore = Math.random(); // Simulating a random sentiment score
  
    let resultText;
    if (sentimentScore > 0.6) {
      resultText = 'Positive';
    } else if (sentimentScore > 0.3) {
      resultText = 'Neutral';
    } else {
      resultText = 'Negative';
    }
  
    document.getElementById('sentimentResult').textContent = `Sentiment: ${resultText}`;
  }
  