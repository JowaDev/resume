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
        {
            id: 0,
            title: "2015",
            description: "Description 1",
            rotate: 0
        },
        {
            id: 1,
            title: "2016",
            description: "Description 2",
            rotate: 0
        },
        {
            id: 2,
            title: "2018",
            description: "Description 3",
            rotate: 0
        },
        {
            id: 3,
            title: "2020",
            description: "Description 4",
            rotate: 0
        },
        {
            id: 4,
            title: "2022",
            description: "Description 5",
            rotate: 0
        },
        {
            id: 5,
            title: "2024",
            description: "Description 6",
            rotate: 0
        }
    ]);
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: isWindowReduced && 1 || 0
            }}
            exit={{
                opacity: 0,
            }}
            transition={{
                opacity: {
                    duration: .33
                }
            }}
        >
            <Spotlight/>
            <div
                className="flex fixed top-1/4 left-1/2 transform -translate-y-1/4 -translate-x-1/2 z-[1]"
            >
                {
                    cards.map(({id, title, description, rotate}) => (
                        <Card
                            key={id}
                            title={title}
                            description={description}
                            rotate={rotate}
                        />
                    ))
                }
            </div>
        </motion.div>
    );
};

interface CardProps {
    title: string;
    description: string;
    rotate: number;
}

const Card: FC<CardProps> = ({title, description, rotate}) => {
    const {isWindowReduced} = useContext(globalContext);
    const [cardIsOverlapped, setCardIsOverlapped] = useState(false);
    return (
        <motion.div
            className={`fixed bg-console h-[450px] w-[250px] rounded-lg p-4 border border-${cardIsOverlapped ? 'secondary' : 'primary'} origin-bottom-left overflow-hidden`}
            onMouseOver={() => {
                setCardIsOverlapped(true);
            }}
            onMouseOut={() => {
                setCardIsOverlapped(false);
            }}
            initial={{
                rotate: 0
            }}
            animate={{
                rotate: isWindowReduced ? rotate : 0,
                y: cardIsOverlapped && -50 || 0
            }}
            transition={{
                rotate: {
                    duration: isWindowReduced ? 1 : .33
                },
                y: {
                    duration: .33
                }
            }}
            exit={{
                rotate: isWindowReduced ? rotate : 0,
            }}
            style={{
                zIndex: cardIsOverlapped && 1 || 0
            }}
        >
            <h2>
                {title}
            </h2>
            <p>
                {description}
            </p>
            <span
                className="fixed -bottom-10 -left-8 bg-secondary h-16 w-12 transform rotate-45 animate-pulse"
            />
        </motion.div>
    )
        ;
};
