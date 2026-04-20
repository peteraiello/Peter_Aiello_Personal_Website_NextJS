import React, {useContext} from "react";
import { externalLinkProps } from "../../components/externalLink/externalLink";
import { SiteIcon } from "../../components/icons/site-icon";
import { EmailIcon } from "../../components/icons/email-icon";
import { LinkedIcon } from "../../components/icons/linkedin-icon";
import { GitIcon } from "../../components/icons/git-icon";


export interface profileLinkProps {
    /**
     * Pre label (i.e. 'WWW', 'EM', 'GIT' etc)
     */
    preLabel: string
    /**
     * Label (i.e. 'peteraiello.dev')
     */
    label: string,
    /**
     * The link itself (i.e. https://linkedin.com/in/peteraiello)
     */
    customLink: externalLinkProps
}

export const ProfileLink = ({
    preLabel,
    label,
    customLink,
}:profileLinkProps) => {    
    return (
        <li className="w-full lg:w-1/2">
            <a href={customLink?.href} target={customLink?.target} className={"flex flex-row items-center gap-[10px]"}>
                <div className={"icon-wrapper w-[40px] h-[40px]"}>
                    {preLabel === "WWW" ? 
                        <SiteIcon />
                    : preLabel === "EM" ?
                        <EmailIcon />  
                    : preLabel === "IN" ?
                        <LinkedIcon />                
                    : preLabel === "GIT" &&
                        <GitIcon />                
                    }
                </div>               
                {label &&
                    <span className="text-[21px] text-brandRed border-brandRed dark:text-brandBlue hover:opacity-90 underline">{label}</span>
                }
            </a>
        </li>
    )

}
