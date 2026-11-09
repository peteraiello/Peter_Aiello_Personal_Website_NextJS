import React, {useContext} from "react";
import { useRef } from "react";
import {useInView} from 'framer-motion';
import { TrackStraight } from "../icons/TrackStraight";
import { ArticlesTrack } from "../icons/article-track";
import { Initials } from "../icons/Initials";
import { ForwardSlash } from "../icons/forwardSlash";
import { CustomImage } from "../image/image";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";

import ArticleGradientBlue from "../../public/images/gradients/gradient-blue.png";
import ArticleGradientRed from "../../public/images/gradients/gradient-red.png";


interface SectionWrapperProps {
    /**
     * Children of the react element
     */
    children?: any,
    /**
     * Sectiion ID
     */
    id?: string,
    /**
     * Theme (i.e. overview)
     */
    theme?: "overview" | "portfolio" | "blog"
}

export const SectionWrapper = ({
    id,
    children,
    theme
}: SectionWrapperProps
    ) => {

    const ref = useRef(null);
    const isInView = useInView(ref, 
        { once: false }
    );  


    const {darkThemeActive} = useContext(ThemeContext);

    return(
        <section 
            ref={ref} id={id !== null ? id : undefined} 
            className={` transition-all ease-in-out duration-500 text-darkGray dark:text-white ${isInView ? 'opacity-100 translate-y-0' : 'translate-y-10 opacity-0'}`}
        >
            {children &&
                <div className="wrapper max-w-[1400px] px-5">
                    {children}
                </div>
            }

            <div className="translate-x-[60%]">
            </div>

            {theme === "overview" ?             
                <div className="flex gap-[100px] mt-[50px] md:mt-[118px]">
                    <div className="w-full md:w-[60%]">
                        <TrackStraight />
                    </div>
                    <div className="hidden md:block md:w-[40%]">
                        <Initials />
                    </div>
                </div>
            : theme === "portfolio" ?
                <div className="relative flex items-center gap-[100px] mt-[50px] md:mt-[118px] mb-[25px] md:mb-[59px] ">
                    <div className="w-full md:w-[60%] absolute right-0">
                        <TrackStraight />
                    </div>
                    <div className="hidden md:flex md:justify-end md:w-[40%] absolute left-0">
                        <div className="w-[125px] mr-[112px]">
                            <ForwardSlash />
                        </div>
                    </div>
                </div>
            : theme === "blog" ?
                <div className="wrapper max-w-[1400px]">
                    <div className="mt-[60px]">
                        <div className="grid grid-cols-12">
                            <div className="col-start-5 col-span-8 relative">
                                <div className="w-full h-full absolute">
                                    <CustomImage src={ darkThemeActive ? ArticleGradientBlue.src : ArticleGradientRed?.src} alt={"dark theme pattern"} size={"gradient"} />
                                </div>
                                <div className="relative w-full h-full z-10">       
                                    <ArticlesTrack />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            : 
                <></>
            }

        </section>
    )
}