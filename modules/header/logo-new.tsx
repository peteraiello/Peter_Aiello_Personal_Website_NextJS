import React, {useContext} from "react";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";

export const LogoNew = () => {

    const {darkThemeActive, toggleModal} = useContext(ThemeContext);

    return (
        <>
        <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 191.82 191.88">
            <g id="Layer_1-2" data-name="Layer 1">
                <g>
                    <path className="fill-[#6c90ff]" d="M178.82,47.74C162.18,19.21,131.25,0,95.91,0,43.03,0,0,43.03,0,95.91v7.25h8.31v-7.25C8.31,47.61,47.61,8.31,95.91,8.31c31.88,0,59.83,17.12,75.16,42.64l7.75-3.21Z"/>
                    <path className="fill-[#ff5b56]" d="M13,144.14c16.64,28.53,47.57,47.74,82.91,47.74,52.89,0,95.91-43.03,95.91-95.91v-7.33h-8.31v7.33c0,48.3-39.3,87.6-87.6,87.6-31.88,0-59.83-17.12-75.16-42.64l-7.75,3.21Z"/>
                    <g>
                        <path className={ darkThemeActive ? `fill-[#f8f8f8]` : `fill-[#1D1E20]` + `transition-all duration-300 ease-in-out`} d="M67.03,70.54h-34.9c.07,3.12.07,6.45.07,11.41v25.94c0,2,0,4.02,0,6.04-.01,2.48-.03,4.95-.06,7.4h11.48c.01-2.19.02-4.38.01-6.59,0-1.53,0-3.06-.01-4.58h0v-10.25c.41.82.85,1.36,1.14,1.67,2.79,3.04,7.82,3.1,15.34,3.1.15,0,.28,0,.43,0h0c2.56.01,4.83.01,6.52.01,17.45,0,22.14-4.82,22.14-17.04v-.27c0-12.29-4.69-16.84-22.14-16.84ZM77.42,87.71c0,6.19-2.8,7.68-17.34,7.68-13.68,0-16.48-1.65-16.48-7.58v-8.03h16.95c14.09.01,16.87,1.47,16.87,7.68v.25Z"/>
                        <path className={ darkThemeActive ? `fill-[#f8f8f8]` : `fill-[#1D1E20]` + `transition-all duration-300 ease-in-out`} d="M124.04,70.54h-19.35c-4.68,10.87-17.99,41.06-22.54,50.79h12.09l3.8-9.01c1.38-3.27,2.76-6.53,4.14-9.8l1.7-4.15c2.38-5.79,4.75-11.73,6.79-16.96h6.59c2.11,5.44,4.62,11.66,6.99,17.6l1.49,3.51c1.36,3.27,2.72,6.53,4.07,9.8l3.74,9.01h12.63c-4.34-9.73-17.52-39.99-22.14-50.79Z"/>
                        <path className={ darkThemeActive ? `fill-[#f8f8f8]` : `fill-[#1D1E20]` + `transition-all duration-300 ease-in-out`} d="M159.69,109.44v11.89h-12.57v-11.89h12.57Z"/>
                    </g>
                </g>
            </g>
        </svg>
        </>
    )

}