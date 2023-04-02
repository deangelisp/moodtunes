const getMoodCategory = (customMood) => {
    const { energetic, happy } = customMood;

    if (energetic > 0.5 && happy > 0.5) {
        return "Radiant";
    } else if (energetic > 0.5 && happy < -0.5) {
        return "Gloomy";
    } else if (energetic < -0.5 && happy > 0.5) {
        return "Joyful";
    } else if (energetic < -0.5 && happy < -0.5) {
        return "Melancholic";
    } else if (energetic > 0.5) {
        return "Energetic";
    } else if (happy > 0.5) {
        return "Happy";
    } else if (energetic < -0.5) {
        return "Calm";
    } else if (happy < -0.5) {
        return "Angry";
    } else if (energetic > 0.25 && happy > 0.25) {
        return "Optimistic";
    } else if (energetic > 0.25 && happy < -0.25) {
        return "Bittersweet";
    } else if (energetic < -0.25 && happy > -0.25) {
        return "Serene";
    } else if (energetic < -0.25 && happy < -0.25) {
        return "Nostalgic";
    } else if (energetic < 0 && energetic > -0.3 && happy < 0 && happy > -0.3) {
        return "Emo";
    } else {
        return "Neutral";
    }
};

export default getMoodCategory;
