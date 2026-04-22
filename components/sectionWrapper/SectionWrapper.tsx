import React from "react";
import { useRef } from "react";
import {useInView} from 'framer-motion';
import { TrackStraight } from "../icons/TrackStraight";
import { Initials } from "../icons/Initials";

interface SectionWrapperProps {
    /**
     * Children of the react element
     */
    children?: any,
    /**
     * Sectiion ID
     */
    id?: string,
}

export const SectionWrapper = ({
    id,
    children
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
                <div className="wrapper max-w-[1200px] px-5">
                    {children}
                </div>
            }

            <div className="translate-x-[60%]">
            </div>

            <div className="flex gap-[100px]">
                <div className="w-full md:w-[50%]">
                    <TrackStraight />
                </div>
                <div className="hidden md:block md:w-[40%]">
                    <Initials />
                </div>
            </div>

        </section>
    )
}