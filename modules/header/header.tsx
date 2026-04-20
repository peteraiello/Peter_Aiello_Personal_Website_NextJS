import React, { useState, useRef, useEffect }  from "react";
import Link from "next/link";
import {HeaderIcon} from './logo';
import { AIcon } from "./a-logo";
import { LogoNew } from "./logo-new";
import { ThemeToggleButton } from "../../components/button/theme-toggle";

interface MenuItem {
    /**
     * Item
     */
    label?: string,
    /**
     * href
     */
    href?: string,
}

interface HeaderProps {
    /**
     * Menu Items
     */
    items?: MenuItem[]
}

export const Header = ({items}:HeaderProps) => {

    const headerRef = useRef();

    const [headerScrolled, setHeaderScrolled] = useState(false);

    const handleScroll = () => {

        if(scrollY > 100) {
            setHeaderScrolled(true);
        } else {
            setHeaderScrolled(false);
        }
    }


    useEffect(() => {

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }

    },[]);


    return (
            <header ref={headerRef} className={`absolute md:fixed ${headerScrolled === true ? 'dark:bg-darkGray bg-white bg-opacity-90 ' : ' bg-transparent'} z-[100]  w-full transition-all duration-300 text-darkGray dark:text-white`}>
                <div className="wrapper max-w-[1200px] px-5">
                    <div className="py-5 flex gap-10 items-center justify-between md:justify-normal">
                        <Link href={'/'} className={`focus:rounded-full transition-all duration-300 ${headerScrolled ? 'w-[50px] h-[50px]' : 'w-[88px] h-[88px]' }`}>
                            <span className="opacity-0 absolute font-0 ">Return to homepage</span>
                            <LogoNew /> 
                        </Link>
                        <div className="flex items-center">
                            {
                                (items && items.length > 0) &&
                                <ul className="hidden md:flex mr-10 gap-10 font-open font-medium">
                                    {items?.map((item, index) => {
                                        return (
                                            <li key={index}><Link href={item?.href}>{item?.label}</Link></li>
                                        )
                                    })}
                                </ul>
                            }
                            <ThemeToggleButton />
                        </div>

                    </div>
                </div>
            </header>
    )
}
