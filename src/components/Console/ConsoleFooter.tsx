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
            className='flex fixed bottom-0 w-full border-t border-[#28282b] h-8 items-center overflow-hidden z-20 text-[12px] font-thin bg-[#09090b]'
            ref={parentRef}
        >
            <Halo
                size={32}
                isFollowingMouse={true}
                blurLevel=''
                parentRef={parentRef}
            />
            <div
                className='px-2 h-full border-r border-[#28282b] flex items-center w-fit space-x-2'
            >
                <GitBranchIcon
                    size={15}
                    color='#FF0000'
                />
                <span>
                    main
                </span>
            </div>
            <div
                className='px-2 h-full flex items-center w-fit space-x-2 border-r border-[#28282b]'
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
                        color='#FF0000'
                    />
                </motion.span>
            </div>
            <div
                className='px-2 h-full flex items-center w-fit space-x-2 border-r border-[#28282b]'
            >
                <Link
                    href='https://eu.umami.is/share/mhcJrIxVskrjqxV1/resume.jowa.dev'
                    target='_blank'
                >
                    <AreaChartIcon
                        size={15}
                        color='#FF0000'
                    />
                </Link>
            </div>
        </div>
    )
}