const getCustomMood = (expressions) => {
    console.log("expressions", expressions);

    // if neutral less than 0.9 remove it
    if (expressions.neutral < 0.9) {
        delete expressions.neutral;
    }

    // const moodMapping = {
    //     angry: { energetic: -0.5, happy: -1 },
    //     disgusted: { energetic: -0.5, happy: -1 },
    //     fearful: { energetic: -0.5, happy: -0.5 },
    //     happy: { energetic: 1, happy: 1 },
    //     neutral: { energetic: 0, happy: 0 },
    //     sad: { energetic: -1, happy: -0.5 },
    //     surprised: { energetic: 0.5, happy: 0.5 },
    // };
    const moodMapping = {
        angry: { energetic: -0.4, happy: -0.9 },
        disgusted: { energetic: -0.4, happy: -0.9 },
        fearful: { energetic: -0.3, happy: -0.4 },
        happy: { energetic: 0.9, happy: 0.9 },
        neutral: { energetic: 0, happy: 0 },
        sad: { energetic: -0.9, happy: -0.3 },
        surprised: { energetic: 0.6, happy: 0.6 },
    };

    let customMood = { energetic: 0, happy: 0 };

    for (const expression in expressions) {
        const probability = expressions[expression];
        if (moodMapping[expression]) {
            customMood.energetic +=
                moodMapping[expression].energetic * probability;
            customMood.happy += moodMapping[expression].happy * probability;
        }
    }

    customMood.energetic += (Math.random() - 1) * 0.3;
    customMood.happy += (Math.random() - 1) * 0.3;

    console.log("customMood", customMood);

    return customMood;
};

export default getCustomMood;
