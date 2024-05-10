'use client'

import {FC, ReactNode, useContext} from "react";
import {motion} from "framer-motion";
import {globalContext} from "@/components/Layout/GlobalContext";
import {useCloseConsole} from "@/lib/hooks";
import {ConsoleHeader} from "@/components/Console/ConsoleHeader";
import {ConsoleFooter} from "@/components/Console/ConsoleFooter";

interface FadeInProps {
    children: ReactNode;
}

export const Console: FC<FadeInProps> = ({children}) => {
    const {isWindowReduced, setIsWindowReduced, isConsoleClosed} = useContext(globalContext);
    useCloseConsole(5000);
    return (
        <motion.div
            className={`absolute inset-0 bg-[#09090b] rounded-lg border border-[#28282b] overflow-hidden h-full w-full ${isWindowReduced && "cursor-pointer"}`}
            onClick={isWindowReduced ? () => setIsWindowReduced(false) : undefined}
            animate={{
                scale: isConsoleClosed ? .9 : 1,
                rotate: isConsoleClosed ? 90 : 0
            }}
            transition={{type: "tween", duration: 1}}
            style={{transformOrigin: "top right"}}
        >
            <ConsoleHeader/>
            {children}
            <ConsoleFooter/>
        </motion.div>
    );
};