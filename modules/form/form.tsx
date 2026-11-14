import React, {useEffect, useState} from "react";
import { Heading } from "../../components/typography/heading";
import cx from "classnames";

type statusType = "idle" | "sending" | "success" | "error";

interface FormProps {

}

export const Form = ({}:FormProps) => {

    const [messageStyles, setMessageStyles] = useState("");

    const [messageText, setMessageText] = useState("");

    const successText = `Message sent!`;

    const errorText = `Sorry! There was an issue with your form, please try again!`;

    const sendingText = `Message sending...`;

    const [status, setStatus] = useState("idle" as statusType);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("sending");
    
        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form));
    
        try {
          const res = await fetch("api/form", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });
    
          if (!res.ok) throw new Error("Request failed");
          console.log("response", res);
          setStatus("success");
          form.reset();
        } catch {
          setStatus("error");
        }
    }

    useEffect(() => {
        if(status === "idle") {
            setMessageStyles("hidden")
        } else if (status === "success") {
            setMessageText(successText);
            setMessageStyles("border-green-400 bg-green-100 text-green-600")
        } else if (status === "sending") {
            setMessageText(sendingText);
            setMessageStyles("border-orange-400 bg-orange-100 text-orange-600")
        } else if (status === "error") {
            setMessageText(errorText);
            setMessageStyles("border-red-400 bg-red-100 text-red-600")
        }
    }, [status])
    
    return(
        <section id="website-form">
            <div className="wrapper max-w-[1400px]">
                <div className="grid grid-cols-12 gap-y-16">
                    <div className="col-span-12 md:col-start-2 col-end-12">
                        <Heading classes={"text-center"} hTag={'3'} fontSize={"lg"} fontStyle={"san-serif"} weight={"bold"}>If you would like to get in touch, send me a message.</Heading>
                    </div>
                        <div className="col-span-12 md:col-start-3 md:col-end-11 md:col-span-8">
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="first-name">First Name*</label>
                                <input required={true} type="text" placeholder="John" id="first-name" name="firstName" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="surname">Surname*</label>
                                <input required={true} type="text" placeholder="Smith" id="surname" name="surname"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email">Email*</label>
                                <input autoComplete={"true"} required={true} type="email" placeholder="johnsmith@example.com" id="email" name="email" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="message">Message*</label>
                                <textarea required={true} name="message" id="message" placeholder="Hi, I'm interested in getting to know more about..." />
                            </div>
                            <div>
                                <button type="submit" disabled={status === "sending"} className="dark:bg-brandBlue bg-brandRed dark:text-[#1D1E20] text-white text-center rounded-lg w-full font-transducer font-normal py-3">Submit</button>
                            </div>
                            <div className={ cx(messageStyles, `transition-all ease-in-out duration-300 border rounded-lg px-4 py-2`)} role="alert">
                                <p className={cx(status === "sending" ? "text-orange-400 bg-orange-100" : status === "success" ? `text-[green]` : `font-carbon font-bold`)}>
                                    {messageText}
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}