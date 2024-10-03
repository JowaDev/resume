import {ReactNode} from "react";
import {GlobalContext} from "@/components/Layout/GlobalContext";
import {ConsoleBackground} from "@/components/Console/ConsoleBackground";
import {Console} from "@/components/Console/Console";
import {CardFan} from "@/components/Card/CardFan";

interface LayoutConsoleProps {
    children: ReactNode;
}

export default function LayoutConsole({children}: LayoutConsoleProps) {
    return (
        <div
            className='overflow-y-hidden'
        >
            <main
                className="h-screen w-screen p-12 bg-[#121212] text-white"
            >
                <GlobalContext>
                    <ConsoleBackground>
                        <Console>
                            {children}
                        </Console>
                    </ConsoleBackground>
                    <CardFan/>
                </GlobalContext>
            </main>
        </div>
    )
}