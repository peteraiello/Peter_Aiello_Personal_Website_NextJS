import React from "react";
import {Heading} from '../../components/typography/heading';
import { SectionWrapper } from "../../components/sectionWrapper";
import { ProfileLink, profileLinkProps } from "./profileLink";
import { v4 as uuidv4} from 'uuid';
import { Button, buttonProps } from "../../components/button/button";
import { TextContent } from "../../components/typography/textContent";
import { Card, CardProps } from "../../components/card/card";
import { CustomImage, customImageProps } from "../../components/image/image";
import { GradientWrapper } from "../../components/gradients/gradientWrapper";
import { Tags } from "../../components/tag/tags";
import { GreaterThanIcon } from "../../components/icons/greater-than-icon";
import { LessThanIcon } from "../../components/icons/less-than-icon";

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
        <SectionWrapper id={id}>
            <div className="grid gap-y-5 grid-cols-12">
                <div className="col-span-12 md:col-span-6">
                    <div className="flex flex-col gap-5">
                        {name &&
                            <div className="flex items-center gap-[10px]">
                                <span className="w-[40px] h-[40px]"><GreaterThanIcon /></span>
                                    <Heading variant={"primary"} weight={"bold"} fontStyle={"san-serif"} hTag="1" fontSize={"xl"}>{name}</Heading>                        
                                <span className="w-[40px] h-[40px]"><LessThanIcon /></span>
                            </div>
                        }                    
                        {jobTitle && 
                            <Heading variant={"lighter"} hTag="2" fontSize={"lg"} fontStyle={'san-serif'} classes="font-normal">{jobTitle}</Heading>
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
                            <div className="profile-overview">
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
                <div className="col-span-12 md:col-start-8 md:col-span-5">
                    <div className="flex flex-col justify-center md:justify-end w-full">
                        <div className="rounded-full overflow-hidden w-[300px] h-[300px] relative">
                            {profileImage &&
                                <GradientWrapper>
                                    <CustomImage 
                                        src={profileImage?.src}
                                        alt={profileImage?.alt}
                                        size={'profile'}
                                        fit={'cover'}
                                    />
                                </GradientWrapper>
                            }                       
                        </div>        
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