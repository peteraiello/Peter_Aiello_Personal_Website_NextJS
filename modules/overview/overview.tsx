import React from "react";
import {Heading} from '../../components/typography/heading';
import { SectionWrapper } from "../../components/sectionWrapper";
import { ProfileLink, profileLinkProps } from "./profileLink";
import { v4 as uuidv4} from 'uuid';
import { Button, buttonProps } from "../../components/button/button";
import { TextContent } from "../../components/typography/textContent";
import { Card, CardProps } from "../../components/card/card";
import {  customImageProps } from "../../components/image/image";
import { Tags } from "../../components/tag/tags";
import { GreaterThanIcon } from "../../components/icons/greater-than-icon";
import { LessThanIcon } from "../../components/icons/less-than-icon";
import { ProfileImage } from "../../components/ProfileImage/ProfileImage";

interface OverviewProps {
    /**
     * Name
     */
    name?: string,
    /**
     * Job title
     */
    jobTitle?: string,
    /**
     * Profile desc
     */
    profileDesc?: string,
    /**
     * Profile links
     */
    links?: profileLinkProps[],
    /**
     * Resume link
     */
    resumeLink?: buttonProps,
    /**
     * Skills
     */
    skillGroups?: {
        /**
         * Group title i.e. "Soft skills", "Software skills"
         */
        title: string,
        /**
         * The tags
         */
        skills?: string[]
    }[],
    /**
     * Cards
     */
    cards?: CardProps[],
     /**
     * Section Id
     */
     id?: string,
    /**
     * Custom Image
     */
    profileImage?: customImageProps,
}

export const Overview = ({
    name, 
    jobTitle,
    profileDesc,
    links,
    resumeLink,
    skillGroups,
    cards,
    id,
    profileImage
}:OverviewProps) => {
    return (
        <SectionWrapper id={id} theme={"overview"}>
            <div className="grid gap-y-5 grid-cols-12">
                <div className="col-span-12 md:col-span-8 lg:col-span-7">
                    <div className="flex flex-col gap-[40px] md:gap-[60px] lg:gap-[80px]">
                        {name &&
                            <div className="flex items-center gap-[10px]">
                                <span className="w-[40px] h-[40px]">
                                    <GreaterThanIcon />
                                </span>
                                    {name && 
                                        <h1 className="font-bold text-brandBlue text-[40px] md:text-[65px] lg:text-[72px]">{name}</h1>
                                    }
                                <span className="w-[40px] h-[40px]">
                                    <LessThanIcon />
                                </span>
                            </div>
                        }                    
                        {jobTitle && 
                            <div className="mb-[40px] md:mb-lg xl:mb-[145px] w-full md:w-[80%] xl:w-full">
                                <Heading variant={"lighter"} hTag="2" fontSize={"lg"} fontStyle={'san-serif'} classes="font-normal">{jobTitle}</Heading>
                            </div>
                        }
                        {links &&
                            <ul className="list-none flex flex-col gap-y-5">
                                {links?.map((link) => {
                                    let id = uuidv4();
                                    return(
                                        <ProfileLink 
                                            preLabel={link?.preLabel}
                                            label={link?.label}
                                            customLink={{href: link?.customLink?.href, target: link?.customLink?.target}}
                                            key={id}
                                        />
                                    )
                                })}
                            </ul>
                        }
                        
                        {profileDesc && 
                            <div className="profile-overview w-full md:w-[80%]">
                                <TextContent>
                                    {profileDesc}
                                </TextContent>
                            </div>
                        }

                        {resumeLink.label &&
                            <div className="lg:mt-5">
                                <Button 
                                    label={resumeLink?.label}
                                    href={resumeLink?.href}
                                    icon={resumeLink?.icon}
                                />
                            </div>
                        }
                    </div>                 
                </div>
                <div className="col-span-12 md:col-span-4 lg:col-span-5">
                    <div className="flex flex-col justify-center md:justify-end w-full">
                        {profileImage?.src &&
                            <ProfileImage image={{src: profileImage?.src}} />                   
                        }
                        {Boolean(skillGroups?.length > 0) &&
                            <div className="flex flex-col gap-3 mt-sm md:mt-md">
                                {skillGroups?.map((group, index) => {   
                                    return (                 
                                        <div key={index} className="flex flex-col gap-2">                               
                                            {Boolean(group?.skills) &&
                                                <Tags title={group?.title} tags={group?.skills} />
                                            }
                                        </div>      
                                    )                                                                 
                                })}
                            </div>
                        }             
                    </div>
                </div>
            </div>           

            {(cards && cards.length > 0) && 
                <div className="flex flex-col md:flex-row gap-5 mt-sm md:mt-md lg:mt-lg">
                    {(cards && cards.length > 0) && 
                        cards?.map((card, i) => {
                            let id = uuidv4();
                            return(
                                <Card { ...card } key={id} index={i}/>
                            )
                        })
                    }
                </div>    
            }
        </SectionWrapper>
    )
}