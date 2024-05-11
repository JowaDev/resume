'use client'

import {FC, useRef} from "react";
import {AreaChartIcon, GitBranchIcon, RefreshCcwIcon} from "lucide-react";
import Link from "next/link";
import {Halo} from "@/components/Effect/Halo";
import {motion} from "framer-motion";

interface ConsoleFooterProps {

}

export const ConsoleFooter: FC<ConsoleFooterProps> = () => {
    const parentRef = useRef<HTMLDivElement>(null);
    return (
        <div
            className='flex fixed bottom-0 w-full border-t border-primary h-8 items-center overflow-hidden z-20 text-[12px] font-thin bg-console'
            ref={parentRef}
        >
            <Halo
                size={32}
                isFollowingMouse={true}
                blurLevel=''
                parentRef={parentRef}
            />
            <div
                className='px-2 h-full border-r border-primary flex items-center w-fit space-x-2'
            >
                <GitBranchIcon
                    size={15}
                    className='text-secondary'
                />
                <Link
                    href='https://github.com/JowaDev/resume'
                    target='_blank'
                >
                    <span>
                        master
                    </span>
                </Link>
            </div>
            <div
                className='px-2 h-full flex items-center w-fit space-x-2 border-r border-primary'
            >
                <motion.span
                    whileHover={{
                        rotate: 360,
                        transition: {
                            repeat: Infinity,
                            duration: 1,
                        }
                    }}
                >
                    <RefreshCcwIcon
                        size={15}
                        className='text-secondary'
                    />
                </motion.span>
            </div>
            <div
                className='px-2 h-full flex items-center w-fit space-x-2 border-r border-primary'
            >
                <Link
                    href='https://eu.umami.is/share/mhcJrIxVskrjqxV1/resume.jowa.dev'
                    target='_blank'
                >
                    <AreaChartIcon
                        size={15}
                        className='text-secondary'
                    />
                </Link>
            </div>
        </div>
    )
}