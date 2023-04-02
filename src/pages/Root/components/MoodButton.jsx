import React from "react";
import { motion } from "framer-motion";

function MoodButton({ onClick }) {
    const buttonVariants = {
        rest: {
            scale: 1,
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
            transition: {
                duration: 0.2,
                ease: "easeInOut",
            },
        },
        hover: {
            scale: 1.1,
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",
            transition: {
                duration: 0.2,
                ease: "easeInOut",
            },
        },
    };

    const textVariants = {
        rest: {
            x: 0,
            transition: {
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
            },
        },
        hover: {
            x: 20,
            transition: {
                duration: 0.2,
                ease: "easeInOut",
            },
        },
    };

    return (
        <motion.button
            onClick={onClick}
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="hover"
            className="absolute sm:relative -bottom-5 sm:bottom-0 z-10 w-full sm:w-auto"
            style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px 32px",
                backgroundColor: "#1DB954",
                color: "#fff",
                borderRadius: "50px",
                fontSize: "20px",
                fontWeight: "bold",
                textTransform: "uppercase",
                cursor: "pointer",
            }}
        >
            <motion.span
                variants={textVariants}
                style={{
                    marginRight: "8px",
                    display: "inline-block",
                }}
            >
                Capture Your Mood
            </motion.span>
            <motion.i
                variants={textVariants}
                className="fas fa-music"
                style={{
                    fontSize: "24px",
                }}
            />
        </motion.button>
    );
}

export default MoodButton;
