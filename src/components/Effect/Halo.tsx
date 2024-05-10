'use client'

import React, {FC} from "react";
import {CustomValueType, motion, MotionValue} from "framer-motion";
import {Property} from "csstype";
import {useFollowinfMousePosition} from "@/lib/hooks";

interface HaloProps {
    isFollowingMouse?: boolean;
    size?: number;
    parentRef?: React.RefObject<HTMLDivElement>;
    blurLevel?: string;
    height?: number;
    width?: number;
    backgroundColor?: CustomValueType | MotionValue<number> | MotionValue<string> | MotionValue<any> | Property.BackgroundColor
}

export interface MousePosition {
    x: number;
    y: number;
}

export const Halo: FC<HaloProps> = ({
                                        isFollowingMouse = false,
                                        size,
                                        parentRef = {current: null},
                                        blurLevel = 'blur-sm',
                                        height = 32,
                                        width = 32,
                                        backgroundColor = '#FF0000'
                                    }) => {

    const {mousePosition} = useFollowinfMousePosition(isFollowingMouse);

    const parentRect = parentRef.current ? parentRef.current.getBoundingClientRect() : null;

    const haloStyle = isFollowingMouse ? {
        left: mousePosition.x - (parentRect?.left ?? 0) - (size ?? width) / 2,
        top: mousePosition.y - (parentRect?.top ?? 0) - (size ?? height) / 2,
        height: size ?? height,
        width: (size ?? width),
    } : {
        height: size ?? height,
        width: (size ?? width)
    };

    return (
        <motion.span
            className={`absolute rounded-full ${blurLevel} pointer-events-none`}
            style={{...haloStyle, backgroundColor}}
            initial={{scale: 1, opacity: .25}}
            animate={{scale: 2, opacity: 0}}
            transition={{duration: 2.5, repeat: Infinity}}
        />
    );
};