import React from "react";
import { motion } from "framer-motion";

function SquareImageEffectItem({ delay }) {
    return (
        <motion.div
            className="absolute  top-1/2 left-1/2 bg-black  w-full h-full rounded-full"
            initial={{
                translateY: "-50%",
                translateX: "-50%",
                opacity: 0.5,
                scale: 0,
            }}
            animate={{
                scale: 1.2,
                opacity: 0,
            }}
            transition={{
                repeat: Infinity,
                duration: 3,
                delay: delay,
            }}
        />
    );
}

export default SquareImageEffectItem;
