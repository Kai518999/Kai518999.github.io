let model;
const moves = ['rock', 'paper', 'scissors'];
let playerMove = 'none';

async function loadModel() {
  model = await tf.loadLayersModel('path/to/your/model.json'); // Replace with the actual path to the model
  console.log('Model loaded');
}

loadModel();

function clearCanvas() {
  playerMove = 'none';
  document.getElementById('result').textContent = '';
  const canvas = document.getElementById('digitCanvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

async function predict() {
  if (playerMove === 'none') {
    alert('Draw a move first by clicking on "Rock", "Paper", or "Scissors" buttons.');
    return;
  }

  const canvas = document.getElementById('digitCanvas');
  const image = tf.browser.fromPixels(canvas).resizeBilinear([224, 224]).expandDims();
  const predictions = model.predict(image);
  const index = tf.argMax(predictions.squeeze(), 1).dataSync()[0];
  const predictedMove = moves[index];
  tf.dispose(image);

  document.getElementById('result').textContent = `You chose ${playerMove}, Computer chose ${predictedMove}.`;

  // You can add logic here to determine the winner
}

function play(move) {
  playerMove = move;
  const outcomes = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * outcomes.length);
  const predictedMove = outcomes[randomIndex];
  document.getElementById('result').textContent = `Randomly picked: ${predictedMove}`;
  document.getElementById('result').textContent = `You chose ${playerMove}, Computer picked ${predictedMove}.`;
}

let canvas, ctx;
window.onload = function() {
  canvas = document.getElementById('digitCanvas');
  ctx = canvas.getContext('2d');

  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mousedown', setPosition);
  canvas.addEventListener('mouseenter', setPosition);

  function setPosition(e) {
    const rect = canvas.getBoundingClientRect();
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
  }

  let x, y;
  function draw(e) {
    if (e.buttons !== 1) return;
    ctx.beginPath();
    ctx.lineWidth = 16;
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'black';
    ctx.moveTo(x, y);
    setPosition(e);
    ctx.lineTo(x, y);
    ctx.stroke();
  }
};
