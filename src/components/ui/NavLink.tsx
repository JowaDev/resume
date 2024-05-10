'use client'

import {FC, HTMLAttributeAnchorTarget} from "react";
import {WordTranslation} from "@/components/Effect/WordTranlsation";
import Link from "next/link";
import {usePathname} from "next/navigation";

interface NavLinkProps {
    word: string
    target?: HTMLAttributeAnchorTarget
    href?: string
}

export const NavLink: FC<NavLinkProps> = ({word, target = '_self', href = '/'}) => {
    const pathname = usePathname()
    return (
        <Link
            href={href}
            target={target}
            className='select-none'
        >
            <WordTranslation
                activeColor={pathname === href ? '#FF0000' : ''}
                word={word}
            />
        </Link>
    )
}