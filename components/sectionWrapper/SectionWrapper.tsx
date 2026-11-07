import React from "react";
import { useRef } from "react";
import {useInView} from 'framer-motion';
import { TrackStraight } from "../icons/TrackStraight";
import { Initials } from "../icons/Initials";
import { ForwardSlash } from "../icons/forwardSlash";
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
    theme?: "overview" | "portfolio"
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
                <div className="flex gap-[100px] mt-[50px] md:mt-[118px] relative">
                    <div className="w-full md:w-[60%] absolute right-0">
                        <TrackStraight />
                    </div>
                    <div className="hidden md:block md:w-[40%] relative">
                        <div className="absolute right-0">                        
                            <div className="w-[125px] mr-[112px]">
                                <ForwardSlash />
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