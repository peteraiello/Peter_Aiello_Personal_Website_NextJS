import React from "react";
import cx from "classnames";
import { DownloadIcon } from "../icons/download";
import { NewWindowIcon } from "../icons/new-window";
import Link from "next/link";

export type buttonIconType = 'download' | 'new-window' | 'none';

export interface buttonProps {
    /**
     * label
     */
    label?: string,
    /**
     * download link
     */
    href?: string,
    /**
     * icon
     */
    icon?: buttonIconType,
    /** 
     * True / False
    */
    border?: boolean,
    /**
     * On click 
     */
    onClick?: any,
}

export const Button = ({
    label,
    href,
    icon,
    onClick, 
    border
}: buttonProps) => {

    const base = `drop-shadow-lg cursor button group px-5 py-2 bg-black dark:bg-white rounded-[10px]`;

    const typography = `text-white dark:text-brandBlue text-sm tracking-wide font-bold font-transducer`;
    
    const animationHover = `transition-all duration-300 ease-in-out`;
    
    return (
        <div className="flex gap-3">
            <Link href={href} onClick={onClick} className={cx( 
                base, 
                typography, 
                animationHover,
                border && "border-2 dark:border-brandBlueLighter"
            )} 
                target={icon === 'new-window' ? '_blank' : '_self'}>
                <div className="flex items-center gap-x-3">
                {label}
                {icon === 'download' &&
                    <div className="h-[16px]">
                        <DownloadIcon />
                    </div>
                }
                {icon === 'new-window' &&
                    <div className="h-[16px] hidden">
                       <NewWindowIcon />
                    </div>
                }
                </div>
            </Link>
        </div>
    )
}