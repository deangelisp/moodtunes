import * as faceapi from "face-api.js";

const MODEL_URL = "/models";

export async function loadFaceApiModels() {
    await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
    await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
}

export async function getFaceExpressions(input) {
    const detectionOptions = new faceapi.TinyFaceDetectorOptions({
        inputSize: 224,
        scoreThreshold: 0.5,
    });
    const detections = await faceapi
        .detectAllFaces(input, detectionOptions)
        .withFaceExpressions();
    return detections;
}
