import React from "react";
import Image from "next/image";
import cx from 'classnames';

export type imageSize = 'project' | 'square' | 'profile' | 'portrait' | 'gradient';

type imageSizeType =  'project' | 'square' | 'profile' | 'portrait' | 'gradient';

type fitType = 'cover' | 'contain';

type roundedType = 'full' | 'md';
 
export interface customImageProps {
    /**
     * Alt Text
     */
    alt?: string,
    /**
     * Source Url
     */
    src?: string,
    /**
     * Caption
     */
    caption?: string,
    /**
     * Rounded
     */
    rounded?: roundedType,
    /**
     * Drop shadow
     */
    dropShadow?: boolean,
    /**
     * border
     */
    border?: boolean,
    /**
     * Size
     */
    size?: imageSizeType,
    /**
     * Object fit
     */
    fit?: fitType
}

export const CustomImage = ({
    alt,
    src,
    rounded,
    fit,
    size,
    dropShadow,
    caption,
    border
}:customImageProps) => {

    const getBorder = (border: boolean) => {
        let customClass: string;
        if(border === true) {
            customClass = 'border-[1px] dark:border-brandBlueLighter border-brandRedLighter'
        } else {
            customClass = 'border-0';
        }
        return customClass;
    }

    const getAspectRatio = (size: imageSizeType) => {
        let customClass: string;
        if(size === 'project') {
            customClass = 'aspect-[800/502]';
        } else if(size === 'square') {
            customClass = 'aspect-square';
        } else if(size === 'profile') {
            customClass = 'aspect-square';
        } else if(size === 'portrait') {
            customClass = 'aspect-[356/428]';
        } else {
            customClass = 'w-full h-full';
        }
        return customClass;
    }

    const getObjectFit = (fit: fitType) => {
        let customClass: string; 
        if(fit === 'cover') {
            customClass = 'object-cover';
        } else if (fit === 'contain') {
            customClass = 'object-contain';
        } else {
            customClass = 'object-cover';
        }
        return customClass;
    }

    const getIsRounded = (rounded: roundedType) => {
        let customClass: string;
        if(rounded === 'full') {
            customClass = 'rounded-full overflow-hidden';
        } else {
            customClass = 'rounded-lg overflow-hidden';            
        }
        return customClass;
    }

    const getImageSize = (size: imageSizeType) => {
        let customSize: string; 
        if(size === 'project') {
            customSize = '(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw';
        } else if(size === 'profile') {
            customSize = '(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw';
        } else if (size === 'square') {
            customSize = '100vw';
        } else {
            customSize = '100vw';
        }
        return customSize;
    }

    return(
        <div className={
            cx(
                `relative`,              
                getIsRounded(rounded as roundedType),
                getAspectRatio(size as imageSizeType),
                dropShadow && `drop-shadow-lg`,
            )        
        }>
            {caption ?
                <figure>
                    <Image 
                        src={src ? src : ""}
                        alt={alt ? alt : ""}
                        fill
                        className={
                            cx( 
                                getBorder(border as boolean),
                                getObjectFit(fit as fitType)

                            )
                        }    
                        loading={"lazy"}
                        sizes={getImageSize(size as imageSizeType)}
                    />
                    {caption &&
                        <figcaption className="absolute bottom-[-30px]">
                            <p className="font-transducer-extended text-sm"><i>{caption}</i></p>
                        </figcaption>
                    }
                </figure>
                :
                <Image 
                    src={src ? src : ""}
                    alt={alt ? alt : ""}
                    fill
                    className={
                        cx(
                            getObjectFit(fit as fitType),
                            getBorder(border as boolean)
                        )
                    }
                    sizes={getImageSize(size as imageSizeType)}
                />            
            }        
        </div>
    )
}