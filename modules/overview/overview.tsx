import React, {useState, useEffect, useContext} from "react";
import Image from "next/image";
import {Heading} from '../../components/typography/heading';
import { SectionWrapper } from "../../components/sectionWrapper";
import { ProfileLink, profileLinkProps } from "./profileLink";
import { v4 as uuidv4} from 'uuid';
import { Button, buttonProps } from "../../components/button/button";
import { TextContent } from "../../components/typography/textContent";
import { Card, CardProps } from "../../components/card/card";
import {  CustomImage, customImageProps } from "../../components/image/image";
import { Tags } from "../../components/tag/tags";
import { GreaterThanIcon } from "../../components/icons/greater-than-icon";
import { LessThanIcon } from "../../components/icons/less-than-icon";
import { ProfileImage } from "../../components/ProfileImage/ProfileImage";
import profilePicGradient from "../../public/images/gradients/profile-pic-gradient.png";
import profilePicGradientDrk from "../../public/images/gradients/profile-pic-gradient-dark-theme.png";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";

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

    const {darkThemeActive} = useContext(ThemeContext);


    return (
        <SectionWrapper id={id} theme={"overview"}>
            <div className="grid gap-sm grid-cols-12">
                <div className="col-span-12 md:col-span-8 xl:col-span-7">
                    <div className="flex flex-col gap-[40px] md:gap-[60px] lg:gap-[80px]">
                        {profileImage?.src && 
                            <div className="flex items-center justify-center md:hidden">     
                                <div className="w-[60%] relative">
                                    <Image className="absolute w-full h-full scale-150 z-[-1]" quality={100} width={640} height={966} src={ !darkThemeActive ? profilePicGradient.src : profilePicGradientDrk.src } alt={"Profile pic gradient"} />
                                    <ProfileImage image={{src: profileImage?.src, alt: "peter aiello profile pic mobile"}} />                   
                                </div>
                            </div>
                        }
                        {name &&
                            <div className="flex items-center gap-[10px]">
                                <span className="min-w-6 md:w-[55px]">
                                    <GreaterThanIcon />
                                </span>
                                {name &&                                         
                                    <Heading hTag={"1"} fontStyle={"san-serif"} fontSize={"xl"} weight={"bold"} classes={"main-name-heading"}>{name}</Heading>
                                }
                                <span className="min-w-6 md:w-[55px]">
                                    <LessThanIcon />
                                </span>
                            </div>
                        }                                                        
                        {jobTitle && 
                            <div className="lg:mb-lg w-full md:w-[80%] xl:w-full">
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
                <div className="col-span-12 md:col-start-10 md:col-span-3 xl:col-start-9 xl:col-span-4">
                    <div className="flex flex-col justify-center md:justify-end w-full">

                        <div className="hidden md:block relative">                                                
                            <Image className="absolute w-full h-full scale-150 z-[-1]" quality={100} width={640} height={966} src={ !darkThemeActive ? profilePicGradient.src : profilePicGradientDrk.src } alt={"Profile pic gradient"} />
                            <ProfileImage image={{src: profileImage?.src, alt: "peter aiello profile pic desktop"}}  />                   
                        </div>
 
                        {Boolean(skillGroups?.length > 0) &&
                            <div className="flex flex-col gap-md lg:gap-[60px] mt-sm md:mt-md">
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