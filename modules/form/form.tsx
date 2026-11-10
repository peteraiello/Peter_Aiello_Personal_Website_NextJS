import React from "react";
import { Heading } from "../../components/typography/heading";

interface FormProps {

}

export const Form = ({}:FormProps) => {
    return(
        <>
            <section id="website-form">
                <div className="wrapper max-w-[1400px]">
                    <div className="grid grid-cols-12 gap-y-16">
                        <div className="col-span-12 md:col-start-2 col-end-12">
                            <Heading classes={"text-center"} hTag={'3'} fontSize={"lg"} fontStyle={"san-serif"} weight={"bold"}>If you would like to get in touch, send me a message.</Heading>
                        </div>
                            <div className="col-span-12 md:col-start-3 md:col-end-11 md:col-span-8">
                            <form>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="first-name">First Name</label>
                                    <input type="text" placeholder="John" id="first-name" name="firstName" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="surname">Surname</label>
                                    <input type="text" placeholder="Smith" id="surname" name="surname"/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" placeholder="johnsmith@example.com" id="email" name="email" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="message">Message</label>
                                    <textarea name="message" id="message" placeholder="Hi, I'm interested in getting to know more about..." />
                                </div>
                                <div>
                                    <button className="dark:bg-brandBlue bg-brandRed dark:text-[#1D1E20] text-white text-center rounded-lg w-full font-transducer font-normal py-3">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}