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

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
];

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const { setTheme } = useTheme();

    return (
        <>
            <div id="first-header" className=" md:flex justify-between">
                <div className="py-4 px-4  items-center justify-center flex relative">
                    <FiMenu className="mr-auto cursor-pointer" onClick={toggleMenu} />
                    <Link href={"/"} className="font-bold absolute text-center">
                        lifesaddle
                    </Link>
                    <div className="ml-auto flex gap-4" >
                        <IoSearchOutline />
                        <FaUserCircle />
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="absolute top-full left-0 bg-white shadow-md w-full">
                        <ul className="list-none p-4">
                            <li><Link href="/about-keyboards">キーボードについて</Link></li>
                            <li><Link href="/ranking">ランキング</Link></li>
                            <li><Link href="/search-keyboard">キーボードを探す</Link></li>
                            <li><Link href="/favorites">お気に入り</Link></li>
                        </ul>

                    </div>
                )}


            </div >

        </>
    );
}

export default Header;

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
