import React from "react";
import { AnimatedElement } from "../AnimatedElement/animated-element";

export interface TagProps {
    /**
     * Label
     */
    children?: string,
    index?: number,
}

export const Tag = ({
    children,
    index
}:TagProps) => {
    return(
        <AnimatedElement index={index} speed={'fast'}>
            <div className="tag bg-transparent ring-1 ring-brandRedLighter dark:ring-brandBlueLighter rounded-[10px] px-4 py-2">
                {children &&
                    <p className="text-sm text-brandRedLighter tracking-wide dark:text-brandBlueLighter font-transducer">{children}</p>
                }
            </div>
        </AnimatedElement>
    )
}