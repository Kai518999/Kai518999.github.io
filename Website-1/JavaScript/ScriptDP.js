let model;
const imageInput = document.getElementById('imageInput');
const output = document.getElementById('output');

async function loadModel() {
  model = await cocoSsd.load();
  console.log('Model loaded');
}

loadModel();

async function detectObjects() {
  const file = imageInput.files[0];
  if (!file) return;

  const img = new Image();
  img.onload = async () => {
    // Detect objects in the image
    const predictions = await model.detect(img);

    // Display the detected objects and their labels
    let outputText = '<h3>Detected Objects:</h3>';
    for (const prediction of predictions) {
      outputText += `<p>${prediction.class}: ${Math.round(prediction.score * 100)}% confidence</p>`;
    }
    output.innerHTML = outputText;
  };
  img.src = URL.createObjectURL(file);
}
