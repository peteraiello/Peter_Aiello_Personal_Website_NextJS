import React, {useContext} from "react"
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";

export const TrackStraight = () => {

    const {darkThemeActive, toggleDarkTheme} = useContext(ThemeContext);

    return (
        <>        
            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 937.7 86.78">
                <g id="Layer_1-2" data-name="Layer 1">
                    <rect className={`${darkThemeActive === false ? "fill-[#ff5b56]" : "fill-[#6c90ff]" }`} x="0" y="0" width="937.7" height="17.36"/>
                    <rect className={`${darkThemeActive === false ? "fill-[#fd8f8c]" : "fill-[#9bb3fd]" }`} x="0" y="47.73" width="937.7" height="13.02"/>
                    <rect className={`${darkThemeActive === false ? "fill-[#fcaaa7]" : "fill-[#b2c4fc]" }`} x="0" y="69.42" width="937.7" height="17.36"/>
                    <rect className={`${darkThemeActive === false ? "fill-[#fe7571]" : "fill-[#83a1fe]"}`} x="0" y="26.03" width="937.7" height="13.02"/>
                </g>
            </svg>        
        </>
    )
}