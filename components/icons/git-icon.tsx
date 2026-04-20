import React, {useContext} from "react"
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";

export const GitIcon = () => {

    const {darkThemeActive, toggleDarkTheme} = useContext(ThemeContext);

    return (    
    <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113.39 113.39">    
        <g id="Layer_1-2" data-name="Layer 1">
                <g>
                    <path className={`${darkThemeActive ? "fill-[#9bb3fd]" : "fill-[#fd8f8c]"}`} d="M8.59,88.76l7.61,7.61h80.98l7.61-7.61-.89-.89H9.48l-.89.89Z"/>
                <g>
                    <path className={`${darkThemeActive ? "fill-[#b2c4fc]" : "fill-[#fcaaa7]" }`} d="M86.01,102.05c.92.92,1.83,1.83,2.75,2.75l2.75-2.75h-5.5Z"/>
                    <path className={`${darkThemeActive ? "fill-[#b2c4fc]" : "fill-[#fcaaa7]" }`} d="M36.49,102.05c2.83,1.26,5.79,2.28,8.87,3v8.34h22.68v-8.33c3.06-.72,6.01-1.74,8.84-3h-40.38Z"/>
                    <path className={`${darkThemeActive ? "fill-[#b2c4fc]" : "fill-[#fcaaa7]" }`} d="M21.87,102.05l2.75,2.75,2.75-2.75h-5.5Z"/>
                </g>
                <g>
                    <path className={`${darkThemeActive ? "fill-[#6c90ff]" : "fill-[#ff5b56]" }`} d="M30.68,68.03c-1.78-4.11-2.63-8.73-2.24-13.57,1.08-13.74,12.22-24.87,25.95-25.96,17.47-1.38,31.93,13.09,30.56,30.56-.25,3.16-1.04,6.18-2.26,8.97h30.7v-22.68h-8.42c-1.25-5.3-3.34-10.27-6.14-14.76,1.99-1.99,3.98-3.98,5.97-5.97l-16.04-16.04-5.99,5.99c-4.49-2.78-9.45-4.86-14.75-6.1V0h-22.68v8.46c-5.27,1.24-10.23,3.34-14.72,6.13-2-2-4-4-6.01-6.01-5.35,5.35-10.69,10.69-16.04,16.04,2,2,3.99,3.99,5.99,5.99-2.81,4.49-4.92,9.46-6.17,14.74H0v22.68h30.68Z"/>
                    <path className={`${darkThemeActive ? "fill-[#6c90ff]" : "fill-[#ff5b56]" }`} d="M48.13,68.03c-3.4-2.59-5.61-6.67-5.61-11.27,0-7.83,6.35-14.17,14.17-14.17s14.17,6.35,14.17,14.17c0,4.61-2.21,8.69-5.61,11.27h12.73c1.79-3.36,2.8-7.2,2.8-11.27,0-13.31-10.79-24.09-24.09-24.09s-24.09,10.79-24.09,24.09c0,4.07,1.02,7.91,2.8,11.27h12.73Z"/>
                </g>
                <g>
                    <path className={`${darkThemeActive ? "fill-[#83a1fe]" : "fill-[#fe7571]" }`} d="M14.13,82.2h30.08c-4.05-1.99-7.55-4.92-10.23-8.5H10.08c1.08,2.98,2.45,5.82,4.05,8.5Z"/>
                    <path className={`${darkThemeActive ? "fill-[#83a1fe]" : "fill-[#fe7571]" }`} d="M79.38,73.7c-2.69,3.58-6.19,6.51-10.23,8.5h30.07c1.62-2.69,2.99-5.53,4.08-8.5h-23.92Z"/>
                    <path className={`${darkThemeActive ? "fill-[#83a1fe]" : "fill-[#fe7571]" }`} d="M39.57,73.7c4.37,4.41,10.43,7.15,17.13,7.15s12.76-2.74,17.13-7.15h-34.25Z"/>
                </g>
            </g>
        </g>
    </svg>
    )
}