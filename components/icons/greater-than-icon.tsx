import React, {useContext} from "react"
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";

export const GreaterThanIcon = () => {

    const {darkThemeActive} = useContext(ThemeContext);
    
    return (
            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.97 70.87">        
                <g id="Layer_1-2" data-name="Layer 1">
                    <g>
                        <path className={darkThemeActive === false ? "fill-[#fcaaa7]" : "fill-[#b2c4fc]"} d="M67.75,70.87l.22-.11v-6.98h-13.92c5.13,2.64,9.82,5.06,13.7,7.09Z"/>
                        <path className={darkThemeActive === false ? "fill-[#fe7571]" : "fill-[#83a1fe]"} d="M19.19,46.06c3.43,1.72,6.97,3.51,10.54,5.32h33.02l-11.01-5.32H19.19Z"/>
                        <path className={darkThemeActive === false ? "fill-[#fd8f8c]" : "fill-[#9bb3fd]"} d="M47.14,60.24h20.83v-5.32h-31.26c3.54,1.8,7.04,3.58,10.43,5.32Z"/>
                        <path className={darkThemeActive === false ? "fill-[#ff5b56]" : "fill-[#6c90ff]"} d="M28.99,35.33c5.48-2.58,11.6-5.48,17.82-8.48l21.15-10.2V.11l-.22-.11C50.25,9.02,18.15,25.45,0,34.36v2.15c3.56,1.75,7.68,3.79,12.12,6.01h32.29c-5.33-2.59-10.68-5.07-15.42-7.19Z"/>
                    </g>
                </g>
            </svg>
    )
}

 