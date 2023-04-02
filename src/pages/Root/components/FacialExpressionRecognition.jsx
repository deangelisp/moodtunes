import React, { useEffect } from "react";
import { loadFaceApiModels } from "../../../helpers/faceApiSetup";
import setupWebcam from "./setupWebcam";

function FacialExpressionRecognition({ videoRef }) {
    useEffect(() => {
        loadFaceApiModels();
        setupWebcam(videoRef);
    }, []);

    return (
        <div
            className="relative rounded-2xl overflow-hidden bg-slate-50 shadow-blur "
            style={{
                paddingBottom: "100%",
            }}
        >
            <video
                ref={videoRef}
                autoPlay
                muted
                className="w-full h-full absolute inset-0 object-cover"
            />
        </div>
    );
}

export default FacialExpressionRecognition;
