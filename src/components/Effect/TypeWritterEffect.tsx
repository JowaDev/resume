'use client'

import {FC} from "react";
import {motion} from "framer-motion";
import {useTypeWritterEffect} from "@/lib/hooks";

interface TypeWritterEffectProps {
    words: string;
    className?: string;
}

export const TypeWritterEffect: FC<TypeWritterEffectProps> = ({words, className}) => {
    const {displayText} = useTypeWritterEffect(words);
    return (
        <div
            className={className}
        >
            <motion.span>{displayText}</motion.span>
            <CursorBlinker/>
        </div>
    )
}

const cursorVariants = {
    blinking: {
        opacity: [0, 0, 1, 1],
        transition: {
            duration: 1,
            repeat: Infinity,
            repeatDelay: 0,
            ease: "linear",
            times: [0, 0.5, 0.5, 1]
        }
    }
};

const CursorBlinker = () => {
    return (
        <motion.div
            variants={cursorVariants}
            animate="blinking"
            className="inline-block h-6 w-[1px] translate-y-1 bg-[#FF0000]"
        />
    );
}