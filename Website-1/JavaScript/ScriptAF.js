// JavaScript for handling the mobile menu toggle (same as previous answers)

function predictY() {
    const inputX = parseFloat(document.getElementById('inputX').value);
    
    // Simple linear regression formula: y = 2x + 1
    const predictedY = 2 * inputX + 1;
  
    const resultElement = document.getElementById('result');
    resultElement.textContent = predictedY;
  }
  // JavaScript for handling the mobile menu toggle (same as previous answers)

function predictY() {
    const inputX = parseFloat(document.getElementById('inputX').value);
    
    // Simple linear regression formula: y = 2x + 1
    const predictedY = 2 * inputX + 1;
  
    const resultElement = document.getElementById('result');
    resultElement.textContent = predictedY;
  
    drawRegressionLine(inputX, predictedY);
  }
  
  function drawRegressionLine(x, y) {
    const canvas = document.getElementById('regressionCanvas');
    const ctx = canvas.getContext('2d');
  
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    // Draw the data point
    const pointSize = 5;
    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(x, y, pointSize, 0, Math.PI * 2);
    ctx.fill();
  
    // Draw the regression line (y = 2x + 1)
    const startX = 0;
    const endX = canvas.width;
    const startY = 2 * startX + 1;
    const endY = 2 * endX + 1;
    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
  }


  // JavaScript for handling the mobile menu toggle (same as previous answers)

function predictClass() {
  const inputFeature = parseFloat(document.getElementById('inputFeature').value);
  
  // Simple decision tree classifier: If feature = 0, class = A, else class = B
  const predictedClass = inputFeature === 0 ? 'A' : 'B';

  const classResultElement = document.getElementById('classResult');
  classResultElement.textContent = predictedClass;
}

  