import React, { useRef, useState } from "react";
import FacialExpressionRecognition from "./FacialExpressionRecognition";
import MoodButton from "./MoodButton";
import capturePhoto from "./capturePhoto";
import { useNavigate } from "react-router-dom";

function PageHeader() {
    const [moodCategory, setMoodCategory] = useState(null);
    const videoRef = useRef();
    const navigate = useNavigate();

    const handleMoodCapture = async () => {
        const moodCategory = await capturePhoto(videoRef);

        if (moodCategory) {
            navigate(`/mood/${moodCategory.toLowerCase()}`);
        }
    };

    return (
        <div className="container max-w-7xl ">
            <div className=" grid sm:grid-cols-2 gap-8 sm:gap-14 items-center pt-10 sm:pt-20 relative">
                <div className="">
                    <h1 className="text-2xl text-center sm:text-left mb-2 font-bold sm:font-normal">
                        MoodTunes
                    </h1>
                    <p className="text-center sm:text-left sm:text-6xl sm:font-bold sm:mb-10 leading-tight">
                        Let MoodTunes set the soundtrack to your emotions!
                    </p>
                    <MoodButton
                        onClick={handleMoodCapture}
                        moodCategory={moodCategory}
                    />
                </div>
                <div>
                    <FacialExpressionRecognition
                        setMoodCategory={setMoodCategory}
                        videoRef={videoRef}
                    />
                </div>
            </div>
        </div>
    );
}

export default PageHeader;
