'use client'

import {FC, useContext, useRef} from "react";
import {Halo} from "@/components/Effect/Halo";
import {ChevronRight} from "lucide-react";
import {NavLink} from "@/components/ui/NavLink";
import {globalContext} from "@/components/Layout/GlobalContext";

interface ConsoleProps {
}

export const ConsoleHeader: FC<ConsoleProps> = () => {
    const parentRef = useRef<HTMLDivElement>(null);
    const {setIsWindowReduced, setIsConsoleClosed} = useContext(globalContext);
    return (
        <div
            className='relative grid grid-cols-12 border-b border-primary h-12 items-center px-[16px] overflow-hidden'
            ref={parentRef}
        >
            <Halo
                size={32}
                isFollowingMouse={true}
                blurLevel=''
                parentRef={parentRef}
            />
            <div
                className='col-span-3 flex items-center border-r border-primary h-full cursor-default text-white'
            >
                <ChevronRight
                    className='animate-pulse text-secondary'
                />
                JowaDev
            </div>
            <div
                className='col-span-2 flex justify-center items-center border-r border-primary h-full'
            >
                <NavLink
                    word={'_welcome'}
                />
            </div>
            <div
                className='col-span-2 flex justify-center items-center border-r border-primary h-full'
            >
                <NavLink
                    word={'_about-me'}
                    href='/about-me'
                />
            </div>
            <div
                className='col-span-2 flex justify-center items-center border-r border-primary h-full'
            >
                <NavLink
                    word={'_portfolio'}
                    href='https://portfolio.jowa.dev'
                    target='_blank'
                />
            </div>
            <span
                className='absolute flex items-center top-1/2 right-[25px] transform -translate-y-1/2 h-3 w-3 bg-secondary rounded-full cursor-pointer animate-pulse'
                onClick={() => setIsConsoleClosed(prevState => !prevState)}
            />
            <span
                className='absolute flex items-center top-1/2 right-[45px] transform -translate-y-1/2 h-3 w-3 bg-green-600 rounded-full'
            />
            <span
                className='absolute flex items-center top-1/2 right-[65px] transform -translate-y-1/2 h-3 w-3 bg-gray-600 rounded-full cursor-pointer animate-pulse'
                onClick={() => setIsWindowReduced(prevState => !prevState)}
            />
        </div>
    )
}