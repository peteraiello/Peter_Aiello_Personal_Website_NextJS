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
    theme?: "overview" | "portfolio" | "blog" | "experience"
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
                <div className="flex items-center gap-[100px] mt-[50px] md:mt-[118px]">
                    <div className="w-full md:w-[60%] z-10 relative block">
                        <TrackStraight />
                    </div>
                    <div className="hidden md:flex items-center md:w-[40%] relative">
                        <Image quality={100} className="absolute left-[-25%] z-[-1]" width={640} height={424} src={!darkThemeActive ? InitialsGradient?.src : InitialsGradientDarkBg?.src} alt={"Initials gradient"} />                                
                        <div className="relative w-[50%]">
                            <Initials />
                        </div>
                    </div>
                </div>
            : theme === "portfolio" ?
                <div className="relative flex items-center gap-[100px] mt-[50px] md:mt-[118px] mb-[25px] md:mb-[59px] ">
                    <div className="w-full md:w-[60%] absolute right-0">
                        <TrackStraight />
                    </div>
                    <div className="hidden md:flex md:justify-end md:w-[40%] absolute left-0">
                        <div className="flex items-center justify-center relative">
                            <div className="w-[125px] mr-[112px]">
                                <ForwardSlash />
                            </div>
                            <Image className="absolute top-0 left-[-20%] z-[-1] scale-[200%]" quality={100} alt={"Gradient portfolio section"} src={!darkThemeActive ? PortfolioGradient?.src : PortfolioGradientDrk?.src} width={200} height={200} />
                        </div>

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
                                    <div className="relative w-full h-full z-10">       
                                        <ArticlesTrack />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            :theme === "experience"  ?
                <div className="flex items-center gap-[100px] mt-[50px] md:mt-[118px]">
                    <div className="w-full md:w-[60%] z-10 relative block">
                        <TrackStraight />
                    </div>
                    <div className="hidden md:block md:w-[40%]">    
                        <div className="relative flex items-center justify-start">
                            <Image className="absolute z-[-1] scale-[200%]" quality={100} alt={"Gradient portfolio section"} src={!darkThemeActive ? PortfolioGradient?.src : PortfolioGradientDrk?.src} width={145} height={145} />
                            <div className="relative w-full max-w-[145px]">
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
    )
}