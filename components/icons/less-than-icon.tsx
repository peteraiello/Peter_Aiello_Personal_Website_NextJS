import React, {useContext} from "react";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";

export const LessThanIcon = () => {

    const {darkThemeActive} = useContext(ThemeContext);

    return (
        <>
            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.97 70.87">            
                <g id="Layer_1-2" data-name="Layer 1">
                    <g>
                        <path className={darkThemeActive === false ? "fill-[#ff5b56]" : "fill-[#6c90ff]"} d="M38.98,35.54c-4.56,2.14-9.56,4.51-14.7,6.98h31.59c4.43-2.22,8.54-4.26,12.1-6.01v-2.15C49.82,25.45,17.29,8.91.21,0l-.21.11v16.86l21.8,10.52c5.91,2.9,11.92,5.69,17.18,8.05Z"/>
                        <path className={darkThemeActive === false ? "fill-[#fd8f8c]" : "fill-[#9bb3fd]"} d="M20.93,60.24c3.39-1.74,6.89-3.52,10.42-5.32H0v5.32h20.93Z"/>
                        <path className={darkThemeActive === false ? "fill-[#fe7571]" : "fill-[#83a1fe]"} d="M16.92,46.06l-11.02,5.32h32.41c3.56-1.81,7.09-3.59,10.51-5.32h-31.9Z"/>
                        <path className={darkThemeActive === false ? "fill-[#fcaaa7]" : "fill-[#b2c4fc]"} d="M0,63.78v6.98l.21.11c3.96-2.04,8.67-4.46,13.79-7.09H0Z"/>
                    </g>
                </g>
            </svg>
        </>
    )
}