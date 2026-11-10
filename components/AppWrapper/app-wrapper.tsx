import React, {useContext, useEffect} from "react";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";
import { Gradient } from "../gradients/gradient";
import { GradientWrapper } from "../gradients/gradientWrapper";

export const AppWrapper = ({children}) => {

    const {darkThemeActive, toggleModal} = useContext(ThemeContext);

    const onKeyPressed = (e) => {
        /* e.preventDefault() commented out for now, 
            because interfers with HTML form inputs */
        // e.preventDefault();
        if(e.code === "Escape" || e.key === "Escape" || e.keyCode === 27) {
            toggleModal();
        }
    }

    return (
        <div className={darkThemeActive === true ? 'dark bg-darkGray' : 'bg-[#F8F8F8]' } 
            onKeyDown={(e) => onKeyPressed(e)} tabIndex={0}
        >
            <GradientWrapper>
                {darkThemeActive === true &&
                    <>
                        <Gradient fromColour={'darkerGray'} toColour={'black'} gradientDirection={'top-to-bottom'} opacity={'1/4'} zIndex="-z-[1]"/>
                        <Gradient fromColour={'darkGray'} toColour={'brandGold'} gradientDirection={'left-to-right'} opacity={'1/4'} zIndex="-z-[1]"/>   
                    </>                    
                }             

            {children}
            </GradientWrapper>
        </div>
    )
}