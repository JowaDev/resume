import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const getRotations = (totalCards: number): number[] => {
    const pas: number = 90 / (totalCards - 1);
    const rotations: number[] = [];

    for (let i = 0; i < totalCards; i++) {
        rotations.push(-45 + (pas * i));
    }

    return rotations;
}
