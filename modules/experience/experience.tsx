import React from "react";
import { Text } from "../../components/typography/text";
import { Heading } from "../../components/typography/heading";
import { SectionWrapper } from "../../components/sectionWrapper";
import { TextContent } from "../../components/typography/textContent";
import { AnimatedElement } from "../../components/AnimatedElement/animated-element";
import {v4 as uuidv4} from 'uuid';

interface workItem {
    /**
     * company title (name of the agency)
     */
    company?: string,
    /**
     * Position 
     */
    position?: string,
    /**
     * Date (when did you work there)
     */
    date?: string,
    /**
     * Description (responsibilities)
     */
    description?: string,
}

interface ExperienceProps {
    /**
     * Section Id
     */
    id?: string,
    /**
     * Title
     */
    title?: string,
    /**
     * All work experiences
     */
    experiences?: workItem[]
}

export const Experience = ({
    id,
    title,
    experiences
}:ExperienceProps) => {
    return(
        <SectionWrapper id={id} theme={"experience"}>
            <div className="grid grid-cols-12">
                {title &&
                    <div className="col-span-12">
                        <div className="flex flex-col gap-6 md:gap-8 lg:gap-[60px]">
                            <Heading hTag={'4'} weight={"bold"} fontStyle={"san-serif"}>
                                {title}
                            </Heading>

                            {(experiences && experiences.length > 0) &&
                                <div className="flex flex-col gap-5 md:gap-8 lg:gap-10">
                                    {experiences.map((experience, index) => {
                                        let id = uuidv4();
                                        return(
                                            <AnimatedElement index={index} key={id} speed={"medium"}>
                                                <div className="grid grid-cols-12">
                                                    <div className="col-span-12 lg:col-span-4 flex flex-col gap-sm">
                                                        {experience.company &&
                                                            <Heading weight={'bold'} fontStyle={"san-serif"} fontSize={"md"}>{experience.company}</Heading>
                                                        }
                                                        <div className="flex flex-col">
                                                            {experience.position &&
                                                                <Heading variant={"lighter"} fontStyle={"san-serif"} weight={'normal'} fontSize={'sm'}>{experience.position}</Heading>
                                                            }
                                                            {experience.date &&
                                                                <Heading variant={"lighter"} fontStyle={"san-serif"} weight={'normal'} fontSize={'sm'}>{experience.date}</Heading>
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="col-span-12 lg:col-span-8">
                                                        <TextContent>{experience.description}</TextContent>
                                                    </div>
                                                </div>
                                            </AnimatedElement>
                                        )
                                    })}
                                </div>
                            }
                        </div>
                    </div>
                }
            </div>
        </SectionWrapper>
    )
}