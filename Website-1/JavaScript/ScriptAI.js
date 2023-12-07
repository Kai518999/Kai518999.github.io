let model;
const canvas = document.getElementById('digitCanvas');
const ctx = canvas.getContext('2d');

async function loadModel() {
  model = await tf.loadLayersModel('https://storage.googleapis.com/tfjs-models/tfjs/mnist_v1/model.json');
  console.log('Model loaded');
}

loadModel();

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  document.getElementById('predictionResult').textContent = '';
}

async function predictDigit() {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const inputData = tf.browser.fromPixels(imageData, 1)
    .reshape([1, 28, 28, 1])
    .toFloat()
    .div(255);

  const prediction = model.predict(inputData);
  const predictedClass = prediction.argMax(1).dataSync()[0];
  tf.dispose(inputData);
  tf.dispose(prediction);

  document.getElementById('predictionResult').textContent = `Predicted Digit: ${predictedClass}`;
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', setPosition);
canvas.addEventListener('mouseenter', setPosition);

let x, y;
function setPosition(e) {
  const rect = canvas.getBoundingClientRect();
  x = e.clientX - rect.left;
  y = e.clientY - rect.top;
}

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
