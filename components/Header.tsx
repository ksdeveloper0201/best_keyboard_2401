"use client";

import * as React from "react";
import Link from "next/link";
import { useState } from "react";

import { FaUserCircle } from "@react-icons/all-files/fa/FaUserCircle";
import { FaHeart } from "@react-icons/all-files/fa/FaHeart";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import { FiMenu } from "@react-icons/all-files/fi/FiMenu";
import { IoSearchOutline } from "@react-icons/all-files/io5/IoSearchOutline";




import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// const components: { title: string; href: string; description: string }[] = [
//     {
//         title: "Alert Dialog",
//         href: "/docs/primitives/alert-dialog",
//         description:
//             "A modal dialog that interrupts the user with important content and expects a response.",
//     },
//     {
//         title: "Hover Card",
//         href: "/docs/primitives/hover-card",
//         description:
//             "For sighted users to preview content available behind a link.",
//     },
//     {
//         title: "Progress",
//         href: "/docs/primitives/progress",
//         description:
//             "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
//     },
//     {
//         title: "Scroll-area",
//         href: "/docs/primitives/scroll-area",
//         description: "Visually or semantically separates content.",
//     },
//     {
//         title: "Tabs",
//         href: "/docs/primitives/tabs",
//         description:
//             "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
//     },
//     {
//         title: "Tooltip",
//         href: "/docs/primitives/tooltip",
//         description:
//             "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
//     },
// ];

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }


    return (
        <>
            <div className="relative z-10">

                <div className="flex justify-between items-center p-4">
                    <FiMenu className="text-3xl cursor-pointer md:hidden" onClick={toggleMenu} />
                    <Link href={"/"} className="font-bold text-xl text-center">
                        lifesaddle
                    </Link>
                    <div className="flex gap-4" >
                        <IoSearchOutline className="text-2xl" />
                        <FaUserCircle className="text-3xl" />
                    </div>
                </div>
            </div>
            <div className={`absolute top-12 left-0 h-full w-1/2 bg-white shadow-md transition-all ease-in-out duration-300 z-20 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
                <ul className="list-none p-4">
                    <li>
                        <Link href="/about-keyboards" className="block p-2 hover:bg-gray-100">
                            キーボードについて
                        </Link>
                    </li>
                    <li>
                        <Link href="/ranking" className="block p-2 hover:bg-gray-100">
                            ランキング
                        </Link>
                    </li>
                    <li>
                        <Link href="/search-keyboards" className="block p-2 hover:bg-gray-100">
                            キーボードを調べる
                        </Link>
                    </li>
                    <li>
                        <Link href="/favorites" className="block p-2 hover:bg-gray-100">
                            お気に入り
                        </Link>
                    </li>

                </ul>
            </div>
            <div className="bg-gray-100 p-4 flex justify-center divide-x divide-gray-400 hidden md:flex">
                <Link href="/about-keyboards" className="mx-4">
                    About Keyboards
                </Link>
                <Link href="/ranking" className="mx-4">
                    Ranking
                </Link>
                <Link href="/search-keyboards" className="mx-4">
                    Search Keyboards
                </Link>
                <Link href="/favorites" className="mx-4">
                    Favorites
                </Link>
            </div>


        </>
    );
}

export default Header;
