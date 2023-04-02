const setupWebcam = async (videoRef) => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
        });
        videoRef.current.srcObject = stream;
    }
};

export default setupWebcam;
