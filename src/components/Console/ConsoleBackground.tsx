'use client'

import {FC, ReactNode, useContext} from "react";
import {motion} from "framer-motion";
import {globalContext} from "@/components/Layout/GlobalContext";

interface ConsoleBackgroundProps {
    children: ReactNode;
}

export const ConsoleBackground: FC<ConsoleBackgroundProps> = ({children}) => {
    const {isWindowReduced, isConsoleClosed} = useContext(globalContext);
    return (
        <>
            <motion.div
                className={`relative h-full w-full rounded-lg overflow-hidden bg-black border ${isConsoleClosed || isWindowReduced ? 'border-[#FF0000]' : 'border-[#28282b]'}`}
                initial={{
                    opacity: 0,
                    y: "-100%"
                }}
                animate={{
                    opacity: 1,
                    y: isWindowReduced ? "-90%" : "0",
                    scale: isConsoleClosed ? .9 : 1
                }}
                transition={{type: "spring", duration: 1, bounce: .5}}
            >
                {children}
            </motion.div>
        </>
    )
}