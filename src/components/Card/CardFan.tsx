'use client'

import {FC, useContext, useState} from "react";
import {motion} from "framer-motion";
import {useRotateCards} from "@/lib/hooks";
import {Spotlight} from "@/components/Effect/Spotlight";
import {globalContext} from "@/components/Layout/GlobalContext";

interface CardFanProps {
}

export const CardFan: FC<CardFanProps> = () => {
    const {isWindowReduced} = useContext(globalContext);
    const {cards} = useRotateCards([
        {id: 0, title: "2015", description: "Description 1", rotate: 0},
        {id: 1, title: "2016", description: "Description 2", rotate: 0},
        {id: 2, title: "2018", description: "Description 3", rotate: 0},
        {id: 3, title: "2020", description: "Description 4", rotate: 0},
        {id: 4, title: "2022", description: "Description 5", rotate: 0},
        {id: 5, title: "2024", description: "Description 6", rotate: 0}
    ]);

    const [clickedCard, setClickedCard] = useState<number | null>(null);

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: isWindowReduced ? 1 : 0}}
            exit={{opacity: 0}}
            transition={{opacity: {duration: 0.33}}}
        >
            <Spotlight
                fill='white'
            />
            <div
                className={`${isWindowReduced ? 'flex' : 'hidden'} fixed top-1/4 left-1/2 transform -translate-y-1/4 -translate-x-1/2 z-[1]`}>
                {cards.map(({id, title, description, rotate}) => (
                    <Card
                        key={id}
                        id={id}
                        title={title}
                        description={description}
                        rotate={rotate}
                        isClicked={clickedCard === id}
                        onClick={() => setClickedCard(id)}
                    />
                ))}
            </div>
        </motion.div>
    );
};

interface CardProps {
    id: number;
    title: string;
    description: string;
    rotate: number;
    isClicked: boolean;
    onClick: () => void;
}

const Card: FC<CardProps> = ({id, title, description, rotate, isClicked, onClick}) => {
    const {isWindowReduced} = useContext(globalContext);
    const [cardIsOverlapped, setCardIsOverlapped] = useState(false);

    return (
        <motion.div
            className={`fixed bg-console h-[450px] w-[250px] rounded-lg p-4 border border-${cardIsOverlapped ? 'secondary' : 'primary'} origin-bottom-left overflow-hidden`}
            onMouseOver={() => setCardIsOverlapped(true)}
            onMouseOut={() => setCardIsOverlapped(false)}
            onClick={onClick}
            initial={{rotateY: 0}}
            animate={{
                rotate: isWindowReduced ? rotate : 0,
                rotateY: isClicked ? 180 : 0,
                y: cardIsOverlapped ? -50 : 0
            }}
            transition={{
                rotate: {duration: isWindowReduced ? 1 : 0.33},
                rotateY: {duration: 0.5},
                y: {duration: 0.33}
            }}
            exit={{rotate: isWindowReduced ? rotate : 0}}
            style={{zIndex: cardIsOverlapped ? 1 : 0}}
        >
            <h2>{title}</h2>
            <p>{description}</p>
            <span className="fixed -bottom-10 -left-8 bg-secondary h-16 w-12 transform rotate-45 animate-pulse"/>
        </motion.div>
    );
};

const pathData = "M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80";

interface AnimatedLineProps {
}

export const AnimatedLine: FC<AnimatedLineProps> = () => {
    return (
        <svg
            className='fixed z-50 top-0'
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            style={{width: "100%", height: "100vh", background: "transparent"}}
        >
            <motion.path
                d={pathData}
                fill="red"
                stroke="red"
                strokeWidth="4"
                strokeDasharray="0 1"
                animate={{
                    pathLength: [0, 1],
                    strokeDasharray: ["0, 1", "1, 0"],
                    rotate: [0, 200],
                    rotateY: [0, 180],
                    rotateX: [0, 260],
                    scale: [0, 1],
                }}
                transition={{
                    duration: 4,
                    ease: "anticipate",
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />
        </svg>
    );
};