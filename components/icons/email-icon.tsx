import React, {useContext} from "react";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";


export const EmailIcon = () => {
    const {darkThemeActive} = useContext(ThemeContext);
    return (
        <>
            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113.39 113.39">
                <g id="Layer_1-2" data-name="Layer 1">
                    <g>
                        <path className={ darkThemeActive === false ? `fill-[#fd8f8c]` : `fill-[#9bb3fd]` } d="M9.35,87.87c.74,1.12,1.51,2.22,2.33,3.29,1.19,1.55,1.77,3.39,1.78,5.22h83.36c2.6-2.6,4.95-5.45,7.01-8.5H9.35Z"/>
                        <path className={ darkThemeActive === false ? `fill-[#fcaaa7]` : `fill-[#b2c4fc]` } d="M11.31,102.05c-.11.12-.21.24-.32.35l-6.15,6.15c-1.79,1.79-.52,4.84,2,4.84h48.92c12.86,0,24.82-4.21,34.48-11.34H11.31Z"/>
                        <path className={ darkThemeActive === false ? `fill-[#fe7571]` : `fill-[#83a1fe]` } d="M2.61,73.7c.93,2.95,2.09,5.79,3.46,8.5h101.12c1.4-2.72,2.59-5.56,3.54-8.5H2.61Z"/>
                        <path className={ darkThemeActive === false ? `fill-[#ff5b56]` : `fill-[#6c90ff]` } d="M112.22,68.03c.78-3.77,1.19-7.68,1.16-11.69C113.19,24.32,86.45-1.4,54.07.06,24.69,1.38.97,25.45.03,54.84c-.14,4.53.25,8.95,1.12,13.19h111.08ZM77.95,49.61c3.91,0,7.09,3.17,7.09,7.09s-3.17,7.09-7.09,7.09-7.09-3.17-7.09-7.09,3.17-7.09,7.09-7.09ZM56.69,49.61c3.91,0,7.09,3.17,7.09,7.09s-3.17,7.09-7.09,7.09-7.09-3.17-7.09-7.09,3.17-7.09,7.09-7.09ZM35.43,49.61c3.91,0,7.09,3.17,7.09,7.09s-3.17,7.09-7.09,7.09-7.09-3.17-7.09-7.09,3.17-7.09,7.09-7.09Z"/>
                    </g>
                </g>
            </svg>
        </>
    )
}