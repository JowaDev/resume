import {useContext, useEffect, useState} from "react";
import {globalContext} from "@/components/Layout/GlobalContext";
import {animate, useMotionValue, useTransform} from "framer-motion";
import {getRotations} from "@/lib/utils";
import {MousePosition} from "@/components/Effect/Halo";

export const useCloseConsole = (time: number) => {
    const {isConsoleClosed, setIsConsoleClosed} = useContext(globalContext);
    useEffect(() => {
        if (isConsoleClosed) {
            setTimeout(() => {
                setIsConsoleClosed(false);
            }, time);
        }
    }, [isConsoleClosed])
};

export const useTypeWritterEffect = (words: string) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) =>
        words.slice(0, latest)
    );
    useEffect(() => {
        const controls = animate(count, words.length, {
            type: "tween",
            duration: 3.3,
            ease: "easeInOut",
        });
        return controls.stop;
    }, [words.length, count]);
    return {displayText};
}

interface Card {
    id: number;
    title: string;
    description: string;
    rotate: number;
}

export const useRotateCards = (initialCards: Card[]) => {
    const [cards, setCards] = useState(initialCards);
    useEffect(() => {
        const rotations = getRotations(cards.length)
        setCards(prevState =>
            prevState.map((card, i) => ({
                ...card,
                rotate: rotations[i]
            }))
        );
    }, []);
    return {cards};
}

export const useFollowinfMousePosition = (isFollowingMouse: boolean) => {
    const [mousePosition, setMousePosition] = useState<MousePosition>({x: 0, y: 0});

    useEffect(() => {
        if (isFollowingMouse) {
            const onMouseMove = (event: MouseEvent) => {
                setMousePosition({
                        x: event.clientX,
                        y: event.clientY
                    }
                );
            };

            window.addEventListener("mousemove", onMouseMove);

            return () => window.removeEventListener("mousemove", onMouseMove);
        }
    }, [isFollowingMouse]);

    return {mousePosition};
};