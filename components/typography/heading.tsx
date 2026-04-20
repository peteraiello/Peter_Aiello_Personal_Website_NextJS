import React from "react";
import cx from "classnames";

interface headingProps {
    /**
     * The heading level 
     */
    hTag?: '1' | '2' | '3' | '4' | '5' | '6',
    /**
     * Font
     */
    fontStyle?: 'serif' | 'san-serif',
    /**
     * Font size
     */
    fontSize?: "xl" | "lg" | "md" | "sm",
    /**
     * Weight
     */
    weight?: 'bold' | 'medium' | 'normal' | 'semibold',
    /**
     * Variant
     */
    variant?: "primary" | "lighter",
    /**
     * Classes (any additional classes you want to add)
     */
    classes?: string,
    /** 
     * The heading text
     */
    children?: string,
}

export const Heading = ({
    hTag, 
    fontStyle = "serif",
    fontSize = "lg",
    weight,
    variant = "primary",
    classes,
    children
}: headingProps) => {

    const getFontColour = ({variant}) => {
        let fontColour;
        switch (variant) {
            case 'primary': 
                fontColour = 'text-brandRed dark:text-brandBlue';
            break;
            case 'lighter': 
                fontColour = 'text-brandRedLighter dark:text-brandBlueLighter';
            break;
            default:
                fontColour = 'text-brandBlue';
        }
        return fontColour;
    }

     const getFontWeight = ({weight}) => {
        let textClass;
        switch (weight) {
            case 'bold': 
                textClass = 'font-bold';
            break;
            case 'semibold': 
                textClass = 'font-semibold';
            break;
            case 'medium': 
                textClass = 'font-medium';
            break;
            case 'normal':
                textClass = 'font-normal';
            break;
            default:
                textClass = 'font-normal';
        }
        return textClass;
    }

    const getFontSize = ({fontSize}) => {
        let fontClass; 
        switch (fontSize) {
            case "xl": 
                fontClass = "text-[72px]"
            break;
            case "lg": 
                fontClass = "text-[48px]"
            break; 
            case "md": 
                fontClass = "text-[24px]" 
            break; 
            case "sm": 
                fontClass = "text-[20px]"
            break;
        }
        return fontClass;
    }
    
    const fontClass = (fontStyle == "serif" ? "font-noto lowercase tracking-wider" : "font-open");

    const htmlTag = React.createElement(`h${hTag}`, {
        dangerouslySetInnerHTML: { __html: children },
            className: 
                cx(
                    fontClass, 
                    classes, 
                    getFontColour({variant}),
                    getFontSize({fontSize}),
                    weight && getFontWeight({weight}))
        });

    return (
        htmlTag 
    )
}