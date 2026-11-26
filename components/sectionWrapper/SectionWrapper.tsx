import React, {useContext} from "react";
import { useRef } from "react";
import {useInView} from 'framer-motion';
import { TrackStraight } from "../icons/TrackStraight";
import { ArticlesTrack } from "../icons/article-track";
import { Initials } from "../icons/Initials";
import InitialsGradient from "../../public/images/gradients/initials-gradient.png";
import InitialsGradientDarkBg from "../../public/images/gradients/initials-gradient-dark.png";
import { ForwardSlash } from "../icons/forwardSlash";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";
import ArticleGradientBlue from "../../public/images/gradients/gradient-track-drk.png";
import ArticleGradientRed from "../../public/images/gradients/gradient-red.png";
import PortfolioGradientDrk from "../../public/images/gradients/portfolio-gradient-drk-theme.png";
import PortfolioGradient from "../../public/images/gradients/portfolio-gradient.png";
import Image from "next/image";
import { Asterisk } from "../icons/asterisk";
import cx from "classnames";

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
    theme?: "overview" | "portfolio" | "blog" | "experience" | "contact"
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
        <>
        <section 
            ref={ref} id={id !== null ? id : undefined} 
            className={cx(theme === "overview" ? "overflow-x-clip overflow-y-visible" : " ", `relative transition-all ease-in-out duration-500 text-darkGray dark:text-white ${isInView ? 'opacity-100 translate-y-0' : 'translate-y-10 opacity-0'}`)}
        >
            {children &&
                <div className="wrapper max-w-[1400px] px-5">
                    {children}
                </div>
            }           
            {theme === "overview" ?    
                    <div className="flex items-center gap-x-[30%] md:gap-x-[100px] mt-[80px] md:mt-[118px]">
                        <div className="w-1/2 scale-150 md:scale-100 md:w-[60%] relative block z-[1]">
                            <TrackStraight />
                        </div>
                        <div className="flex items-center w-1/2 md:w-[40%] relative">
                            <Image quality={100} className="absolute scale-150 md:scale-100 left-[-25%]" width={640} height={424} src={!darkThemeActive ? InitialsGradient?.src : InitialsGradientDarkBg?.src} alt={"Initials gradient"} />                                
                            <div className="relative w-[50%] scale-150 md:scale-100">
                                <Initials />
                            </div>
                        </div>
                    </div>
            : theme === "portfolio" ?
                    <div className="relative flex items-center gap-[10%] md:gap-x-[100px] my-[118px] z-[-10] overflow-visible">
                        <div className="w-[40%] md:w-[60%]  absolute right-0 z-[2] overflow-x-clip">
                           <div className="scale-150 md:scale-100"><TrackStraight /></div>
                        </div>
                        <div className="flex justify-center items-center w-[40%] absolute left-0">
                            <div className="w-[100px] z-[1]">
                                <ForwardSlash />
                            </div>
                            <Image width={750} height={750} className="absolute" quality={100} alt={"Gradient portfolio section"} src={!darkThemeActive ? PortfolioGradient?.src : PortfolioGradientDrk?.src} />
                        </div>
                    </div>
            : theme === "blog" ?
                    <div className="wrapper max-w-[1400px]">
                        <div className="my-[60px]">
                            <div className="grid grid-cols-12">
                                <div className="col-start-5 col-span-8">
                                    <div className="flex relative">
                                        <div className="flex absolute top-0 left-0 w-full h-full  items-center justify-center">
                                            <Image quality={100} className="scale-100" fill={true} src={ darkThemeActive ? ArticleGradientBlue.src : ArticleGradientRed?.src} alt={"dark theme pattern"} />
                                        </div> 
                                        <div className="relative w-full h-full">       
                                            <ArticlesTrack />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            :theme === "experience" ?
                <div className="flex items-center gap-[20%] md:gap-[50px] my-[50px] md:my-[118px] overflow-x-clip">
                    <div className="w-[40%] md:w-[60%] scale-150 md:scale-100">
                        <TrackStraight />
                    </div>
                    <div className="w-[60%] md:w-[40%]">    
                        <div className="relative flex items-center justify-center">
                            <Image className="absolute scale-150 md:scale-100 z-[-10]" width={750} height={750} quality={100} alt={"Gradient portfolio section"} src={!darkThemeActive ? PortfolioGradient?.src : PortfolioGradientDrk?.src} />
                            <div className="relative w-[145px] scale-[80%] md:scale-100">
                                <Asterisk />
                            </div>
                        </div>
                    </div>
                </div>
            :
                <>
                </>
            }
        </section>        
        </>
    )
}