import React, {useContext} from "react"
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";


interface ProfileImageProps {
    image: {
        src?: string
    }
}

export const ProfileImage = ({
    image   
}:ProfileImageProps) => {

    const {darkThemeActive, toggleDarkTheme} = useContext(ThemeContext);


    return (
        <>
            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 425.2 640.82">
            <defs>              
                <clipPath id="clippath">
                <path className="fill-none" d="M339.7,428.27c0,70.09-57.02,127.11-127.1,127.11s-127.1-57.02-127.1-127.11v-215.71c0-70.09,57.02-127.11,127.1-127.11s127.1,57.02,127.1,127.11v215.71Z"/>
                </clipPath>
            </defs>
            <g id="Layer_1-2" data-name="Layer 1">
                <g>
                <g>
                    <g>
                    <path className={`${darkThemeActive === false ? "fill-[#fd8f8c]" : "fill-[#9bb3fd]" }`} d="M212.6,603.25c55.64,0,105.29-26.1,137.36-66.71v-17.47c-29.52,44.51-80.07,73.92-137.36,73.92-39.32,0-75.45-13.85-103.8-36.92l-7.29,7.29c30.24,24.91,68.95,39.89,111.09,39.89Z"/>
                    <path className={`${darkThemeActive === false ? "fill-[#fd8f8c]" : "fill-[#9bb3fd]" }`} d="M49.41,450.69h-10.36c5.5,42.81,26.54,80.82,57.25,108.2l7.26-7.26c-28.84-25.52-48.69-60.97-54.16-100.94Z"/>
                    <path className={`${darkThemeActive === false ? "fill-[#fd8f8c]" : "fill-[#9bb3fd]" }`} d="M387.58,416.21v-203.65c0-5.25-.25-10.44-.7-15.58h-10.3c.48,5.13.74,10.32.74,15.58v274.75c6.63-18.45,10.26-38.33,10.26-59.03v-12.06Z"/>
                    <path className={`${darkThemeActive === false ? "fill-[#fd8f8c]" : "fill-[#9bb3fd]" }`} d="M356.8,527.26c5.14-7.47,9.73-15.35,13.68-23.59v-28.41c-3.4,11.41-8.01,22.31-13.68,32.55v19.45Z"/>
                    <path className={`${darkThemeActive === false ? "fill-[#fd8f8c]" : "fill-[#9bb3fd]" }`} d="M68.4,113.56c-5.14,7.47-9.73,15.35-13.68,23.59v28.41c3.4-11.41,8.01-22.31,13.68-32.55v-19.46Z"/>
                    <path className={`${darkThemeActive === false ? "fill-[#fd8f8c]" : "fill-[#9bb3fd]" }`} d="M37.62,224.72v203.54c0,5.25.25,10.44.7,15.58h10.3c-.48-5.13-.74-10.32-.74-15.58V153.52c-6.63,18.45-10.26,38.33-10.26,59.04v12.17Z"/>
                    <path className={`${darkThemeActive === false ? "fill-[#fd8f8c]" : "fill-[#9bb3fd]" }`} d="M386.15,190.14c-5.5-42.81-26.54-80.82-57.25-108.2l-7.26,7.26c28.84,25.52,48.69,60.97,54.16,100.94h10.36Z"/>
                    <path className={`${darkThemeActive === false ? "fill-[#fd8f8c]" : "fill-[#9bb3fd]" }`} d="M212.6,37.57c-55.64,0-105.29,26.1-137.36,66.71v17.47c29.52-44.51,80.07-73.92,137.36-73.92,39.32,0,75.45,13.85,103.8,36.92l7.29-7.29c-30.24-24.91-68.95-39.89-111.09-39.89Z"/>
                    </g>
                    <g>
                    <path className={`${darkThemeActive === false ? "fill-[#fe7571]" : "fill-[#83a1fe]" }`} d="M370.48,537.53v-19.16c-4.1,7.15-8.68,14-13.68,20.51v16.13c4.88-5.55,9.45-11.38,13.68-17.47Z"/>
                    <path className={`${darkThemeActive === false ? "fill-[#fe7571]" : "fill-[#83a1fe]" }`} d="M20.52,224.72v203.54c0,5.25.22,10.44.63,15.58h10.3c-.44-5.14-.67-10.33-.67-15.58V150.59c-6.65,19.45-10.26,40.29-10.26,61.97v12.17Z"/>
                    <path className={`${darkThemeActive === false ? "fill-[#fe7571]" : "fill-[#83a1fe]" }`} d="M387.58,477.73c-2.69,9.49-6.13,18.66-10.26,27.46v21.78c3.78-6.28,7.21-12.78,10.26-19.5v-29.74Z"/>
                    <path className={`${darkThemeActive === false ? "fill-[#fe7571]" : "fill-[#83a1fe]" }`} d="M47.88,113.86c-3.78,6.28-7.21,12.78-10.26,19.5v29.74c2.69-9.49,6.13-18.66,10.26-27.46v-21.78Z"/>
                    <path className={`${darkThemeActive === false ? "fill-[#fe7571]" : "fill-[#83a1fe]" }`} d="M54.72,103.29v19.16c4.1-7.16,8.68-14,13.68-20.51v-16.13c-4.88,5.55-9.45,11.38-13.68,17.47Z"/>
                    <path className={`${darkThemeActive === false ? "fill-[#fe7571]" : "fill-[#83a1fe]" }`} d="M212.6,20.48c-53.78,0-102.46,22.23-137.36,57.97v15.12c33.36-38.46,82.57-62.82,137.36-62.82,20.81,0,40.81,3.52,59.44,9.99l3.93-9.49c-19.85-6.96-41.18-10.76-63.38-10.76Z"/>
                    <path className={`${darkThemeActive === false ? "fill-[#fe7571]" : "fill-[#83a1fe]" }`} d="M282.39,33.61l-3.93,9.48c61.11,23.84,106.26,79.81,114.57,147.05h10.33c-8.35-71.51-56.13-131.16-120.97-156.53Z"/>
                    <path className={`${darkThemeActive === false ? "fill-[#fe7571]" : "fill-[#83a1fe]" }`} d="M142.8,607.22l3.93-9.48c-61.11-23.84-106.26-79.81-114.57-147.05h-10.33c8.35,71.51,56.13,131.16,120.97,156.53Z"/>
                    <path className={`${darkThemeActive === false ? "fill-[#fe7571]" : "fill-[#83a1fe]" }`} d="M212.6,620.35c53.78,0,102.46-22.23,137.36-57.97v-15.12c-33.36,38.46-82.57,62.82-137.36,62.82-20.81,0-40.81-3.52-59.44-9.99l-3.93,9.49c19.85,6.96,41.18,10.76,63.37,10.76Z"/>
                    <path className={`${darkThemeActive === false ? "fill-[#fe7571]" : "fill-[#83a1fe]" }`} d="M404.68,416.21v-203.65c0-5.25-.22-10.44-.63-15.58h-10.3c.44,5.14.67,10.33.67,15.58v277.68c6.65-19.45,10.26-40.29,10.26-61.97v-12.06Z"/>
                    </g>
                    <g>
                    <path className={`${darkThemeActive === false ? "fill-[#fe7571]" : "fill-[#b2c4fc]" }`} d="M68.4,428.27v-203.54h0v-76.42c-8.78,19.64-13.68,41.38-13.68,64.25v215.71c0,5.26.26,10.45.77,15.58h13.75c-.55-5.12-.84-10.31-.84-15.58Z"/>
                    <path className={`${darkThemeActive === false ? "fill-[#fe7571]" : "fill-[#b2c4fc]" }`} d="M212.6,572.47c-52.47,0-98.48-28.18-123.71-70.19l-12.76,5.29c27.39,46.96,78.31,78.59,136.48,78.59s110.2-32.32,137.36-80.12v-33.86c-18.61,58.11-73.15,100.31-137.36,100.31Z"/>
                    <path className={`${darkThemeActive === false ? "fill-[#fe7571]" : "fill-[#b2c4fc]" }`} d="M336.31,138.55l12.76-5.29c-27.39-46.96-78.31-78.59-136.48-78.59s-110.2,32.32-137.36,80.12v33.86c18.61-58.12,73.15-100.31,137.36-100.31,52.47,0,98.49,28.18,123.71,70.19Z"/>
                    <path className={`${darkThemeActive === false ? "fill-[#fe7571]" : "fill-[#b2c4fc]" }`} d="M356.8,212.56v203.65h0v76.31c8.78-19.64,13.68-41.38,13.68-64.25v-215.71c0-5.26-.26-10.45-.77-15.58h-13.75c.55,5.12.84,10.32.84,15.58Z"/>
                    <path className={`${darkThemeActive === false ? "fill-[#fe7571]" : "fill-[#b2c4fc]" }`} d="M352.41,139.28l-12.69,5.26c7.51,13.99,12.79,29.35,15.33,45.6h13.83c-2.59-18.12-8.26-35.25-16.47-50.86Z"/>
                    <path className={`${darkThemeActive === false ? "fill-[#fe7571]" : "fill-[#b2c4fc]" }`} d="M72.79,501.54l12.69-5.26c-7.51-13.99-12.79-29.35-15.33-45.6h-13.83c2.59,18.12,8.26,35.25,16.47,50.86Z"/>
                    </g>
                    <g>
                    <path className={`${darkThemeActive === false ? "fill-[#fe7571]" : "fill-[#6c90ff]" }`} d="M356.8,584.33c4.77-4.41,9.33-9.02,13.68-13.84v-21.37c-4.28,5.58-8.84,10.93-13.68,16.02v19.19Z"/>
                    <path className={`${darkThemeActive === false ? "fill-[#fe7571]" : "fill-[#6c90ff]" }`} d="M387.58,522.81c-3.15,5.8-6.57,11.42-10.26,16.86v22.85c3.6-4.41,7.02-8.96,10.26-13.65v-26.06Z"/>
                    <path className={`${darkThemeActive === false ? "fill-[#fe7571]" : "fill-[#6c90ff]" }`} d="M20.52,160.81c2.69-9.96,6.13-19.62,10.26-28.9v-29.44c-3.73,6.14-7.15,12.49-10.26,19.02v39.32Z"/>
                    <path className={`${darkThemeActive === false ? "fill-[#fe7571]" : "fill-[#6c90ff]" }`} d="M68.4,56.49c-4.77,4.41-9.33,9.02-13.68,13.84v21.37c4.28-5.58,8.84-10.93,13.68-16.02v-19.18Z"/>
                    <path className={`${darkThemeActive === false ? "fill-[#fe7571]" : "fill-[#6c90ff]" }`} d="M37.62,118.01c3.15-5.8,6.57-11.42,10.26-16.86v-22.85c-3.6,4.41-7.02,8.96-10.26,13.65v26.06Z"/>
                    <path className={`${darkThemeActive === false ? "fill-[#fe7571]" : "fill-[#6c90ff]" }`} d="M209.18,0c-50.99.81-97.67,19.66-133.94,50.43v18.38C110.2,35.38,157.31,14.56,209.18,13.68V0Z"/>
                    <path className={`${darkThemeActive === false ? "fill-[#fe7571]" : "fill-[#6c90ff]" }`} d="M14.29,443.85c-.4-5.14-.61-10.34-.61-15.58V137.54C5.46,159.26.7,182.66.08,207.07c-.05,1.78-.07,3.57-.07,5.36,0,.04,0,.08,0,.12h0v215.71c0,5.24.2,10.43.57,15.58h13.72Z"/>
                    <path className={`${darkThemeActive === false ? "fill-[#fe7571]" : "fill-[#6c90ff]" }`} d="M410.91,196.98c.4,5.14.61,10.34.61,15.58v290.72c7.94-20.99,12.65-43.56,13.52-67.09v-.06c.05-1.28.09-2.57.11-3.85.02-1.33.05-2.67.05-4.01h0v-215.71c0-5.24-.2-10.43-.57-15.58h-13.72Z"/>
                    <path className={`${darkThemeActive === false ? "fill-[#fe7571]" : "fill-[#6c90ff]" }`} d="M216.02,13.68c100.56,1.71,183.18,78.4,194.23,176.46h13.77C412.94,84.37,324.31,1.71,216.02,0v13.68Z"/>
                    <path className={`${darkThemeActive === false ? "fill-[#fe7571]" : "fill-[#6c90ff]" }`} d="M209.18,627.14c-100.56-1.71-183.18-78.4-194.23-176.46H1.18c11.09,105.76,99.71,188.43,208,190.14v-13.68Z"/>
                    <path className={`${darkThemeActive === false ? "fill-[#fe7571]" : "fill-[#6c90ff]" }`} d="M216.02,640.82c50.99-.81,97.67-19.66,133.94-50.43v-18.38c-34.97,33.43-82.07,54.25-133.94,55.13v13.68Z"/>
                    <path className={`${darkThemeActive === false ? "fill-[#fe7571]" : "fill-[#6c90ff]" }`} d="M404.68,480.01c-2.69,9.96-6.13,19.62-10.26,28.9v29.44c3.73-6.14,7.15-12.49,10.26-19.02v-39.32Z"/>
                    </g>
                </g>
                <g className="cls-6 " style={{ clipPath: "url(#clippath)" }}>
                    {image.src &&
                        <image width="1062" height="1416" transform="translate(32.33 77.28) scale(.34)"  xlinkHref={image.src}  />
                    }
                </g>
                </g>
            </g>
            </svg>
        </>
    )
}