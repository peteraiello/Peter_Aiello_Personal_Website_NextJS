import React, {useContext, useEffect} from "react";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";
import { MoonIcon } from "../icons/moon-icon";
import { SunIcon } from "../icons/sun-icon";

export const ThemeToggleButton = () => {

    const {darkThemeActive, toggleDarkTheme} = useContext(ThemeContext);

    const clickHandler = (e) => {
        e.preventDefault();
        toggleDarkTheme();
    }

    return (
        <div className="flex items-center">
            <button className={`transition-all ease-in-out duration-[300ms] inline-block h-[34px] relative rounded-full w-[68px] ${darkThemeActive === true ? "bg-white" : "bg-darkGray"}`} onClick={(e) => clickHandler(e)} aria-label="Toggle Dark Theme">                 
                <span className={`flex items-center justify-center py-[3px] w-[34px] h-[34px] transition-all duration-300 ${darkThemeActive === true ? 'translate-x-[33px]' : 'translate-x-0'}`}>
                    {darkThemeActive ? 
                        <>
                            <MoonIcon />
                        </>    
                    : 
                        <>
                            <SunIcon />
                        </>
                    }
                </span>
            </button>
        </div>
    )
}