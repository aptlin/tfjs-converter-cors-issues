import * as tf from '@tensorflow/tfjs';
const initializeModels = async () => {
  const loadingStart = performance.now();
  const model = await tf.loadGraphModel(
      'https://storage.googleapis.com/tfjs-models/savedmodel/posenet/mobilenet/quant2/100/model-stride8.json');
  status(`Loaded ${model} in ${(performance.now() - loadingStart) / 1000}s`);
};

const status = (message) => {
  const statusMessage = document.getElementById('status-message');
  statusMessage.innerText = message;
  console.log(message);
};

window.onload = initializeModels;