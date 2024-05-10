'use client'

import {createContext, Dispatch, FC, ReactNode, SetStateAction, useState} from "react";

interface GlobalContextProps {
    children: ReactNode;
}

interface globalContextProps {
    isWindowReduced: boolean;
    setIsWindowReduced: Dispatch<SetStateAction<boolean>>
    isConsoleClosed: boolean;
    setIsConsoleClosed: Dispatch<SetStateAction<boolean>>
}

export const globalContext = createContext({} as globalContextProps)

export const GlobalContext: FC<GlobalContextProps> = ({children}) => {
    const [isWindowReduced, setIsWindowReduced] = useState<boolean>(false)
    const [isConsoleClosed, setIsConsoleClosed] = useState<boolean>(false)
    return (
        <globalContext.Provider
            value={{
                isWindowReduced,
                setIsWindowReduced,
                isConsoleClosed,
                setIsConsoleClosed
            }}
        >
            {children}
        </globalContext.Provider>
    )
}