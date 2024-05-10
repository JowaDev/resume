'use client'

import {FC} from "react";
import {motion} from "framer-motion";
import {clsx} from "clsx";

interface WordTranslationProps {
    word: string;
    x?: number;
    y?: number;
    color?: string
    activeColor?: string
}

export const WordTranslation: FC<WordTranslationProps> = ({
                                                              word,
                                                              x = 10,
                                                              y = -5,
                                                              color = '#FF0000',
                                                              activeColor
                                                          }) => {
    return (
        <motion.div
            whileHover={{
                y,
                x,
                color
            }}
            style={{
                color: activeColor ? activeColor : '#FFF'
            }}
        >
            <span className={clsx(activeColor ? 'font-bold' : 'font-[500px]')}>
                {word}
            </span>
        </motion.div>
    )
}