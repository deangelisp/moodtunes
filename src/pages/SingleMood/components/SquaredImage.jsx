import React from "react";
import { motion } from "framer-motion";
import SquareImageEffectItem from "./SquareImageEffectItem";

function SquaredImage({ src, url }) {
    //create an effect when hovering over the image change the perspective of the image usign motion

    return (
        <div className="relative w-2/3">
            <motion.img
                src={src}
                alt="playlist"
                className="relative z-50 aspect-square object-cover playlist-image w-full"
            />
            <motion.img
                src={src}
                alt="playlist"
                className=" z-40 aspect-square object-cover w-full playlist-image absolute top-1/2 "
                whileHover={{ translateX: "-20px" }}
                initial={{
                    translateX: "0px",
                    translateY: "-50%",
                    scale: 0.9,
                    right: "0px",
                }}
                animate={{
                    translateY: "-50%",
                    right: "-25%",
                    transition: { delay: 0.2 },
                }}
            />
            <motion.img
                src={src}
                alt="playlist"
                className=" z-30 aspect-square object-cover w-full playlist-image absolute top-1/2   "
                whileHover={{ translateX: "-20px" }}
                initial={{
                    translateX: "0px",
                    translateY: "-50%",
                    scale: 0.75,
                    right: "0px",
                }}
                animate={{
                    translateY: "-50%",
                    right: "-50%",
                    transition: { delay: 0.2 },
                }}
            />
            <motion.img
                src={src}
                alt="playlist"
                className=" z-20 aspect-square object-cover w-full playlist-image absolute top-1/2  -right-3/4 "
                whileHover={{ translateX: "-20px" }}
                initial={{
                    translateX: "0px",
                    translateY: "-50%",
                    scale: 0.5,
                    right: "0px",
                }}
                animate={{
                    translateY: "-50%",
                    right: "-75%",
                    transition: { delay: 0.2 },
                }}
            />
            <motion.div
                className="absolute w-full inset-0 h-full z-50 overflow-hidden cursor-pointer "
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
            >
                <SquareImageEffectItem delay={0} />
                <SquareImageEffectItem delay={0.8} />
                <SquareImageEffectItem delay={1.6} />
                <SquareImageEffectItem delay={2.4} />
                <i className="fas fa-play text-6xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"></i>
                <a
                    href={url}
                    className="absolute inset-0 z-50"
                    target="_blank"
                ></a>
            </motion.div>
        </div>
    );
}

export default SquaredImage;
