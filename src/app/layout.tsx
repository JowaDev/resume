import type {Metadata} from "next";
import {Fira_Code} from "next/font/google";
import "./globals.css";

import {cn} from "@/lib/utils"
import {ReactNode} from "react";
import {Console} from "@/components/Console/Console";
import {GlobalContext} from "@/components/Layout/GlobalContext";
import {ConsoleBackground} from "@/components/Console/ConsoleBackground";
import {CardFan} from "@/components/Card/CardFan";
import Script from "next/script";

const fontSans = Fira_Code({
    subsets: ["latin"],
    style: "normal",
})

export const metadata: Metadata = {
    title: "Resume - JowaDev",
    description: "Dasek Joiakim's resume",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html
            lang="en"
        >
        <body
            className={cn(
                "min-h-screen bg-background antialiased overflow-y-hidden",
                fontSans.className
            )}
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
        </body>
        <Script
            defer
            src="https://analytics.eu.umami.is/script.js"
            data-website-id="2a82a781-5131-4e23-a95c-72416b2d3cd6"
        />
        </html>
    );
}
