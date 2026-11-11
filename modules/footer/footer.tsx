import React from "react";
import { TextContent } from "../../components/typography/textContent";
import { FooterLogo } from "../../components/icons/footer-logo";

interface FooterProps {
    /**
     * Footer Text
     */
    footerText?: string,
}

export const Footer = ({
    footerText
}:FooterProps) => {

    return(
        <footer className="pb-12">
            <div className="wrapper max-w-[1200px] px-4">
                <div className="grid gap-y-4 md:gap-y-0 grid-cols-12">
                    <div className="col-span-12 md:col-span-2">
                        <div className="flex justify-center md:block">
                            <FooterLogo />
                        </div>
                    </div>
                    {footerText &&                    
                        <div className="col-span-12 md:col-start-6 md:col-span-6">
                            <div className="markdown-text footer-text">
                                <TextContent isProject={true}>{footerText}</TextContent>
                            </div>
                        </div>
                    }
                </div>                        
            </div>
        </footer>
    )
}