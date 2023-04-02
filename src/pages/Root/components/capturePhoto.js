import { getFaceExpressions } from "../../../helpers/faceApiSetup";
import getCustomMood from "./getCustomMood";
import getMoodCategory from "./getMoodCategory";

const capturePhoto = async (videoRef) => {
    const photoCanvas = document.createElement("canvas");
    photoCanvas.width = videoRef.current.videoWidth;
    photoCanvas.height = videoRef.current.videoHeight;
    photoCanvas.getContext("2d").drawImage(videoRef.current, 0, 0);
    // const photoDataUrl = photoCanvas.toDataURL("image/jpeg");
    // photoRef.current.src = photoDataUrl;

    const detections = await getFaceExpressions(photoCanvas);
    if (detections && detections[0] && detections[0].expressions) {
        const expressions = detections[0].expressions;

        const customMood = getCustomMood(expressions);

        const moodCategory = getMoodCategory(customMood);

        return moodCategory;
    }

    return null;
};

export default capturePhoto;
