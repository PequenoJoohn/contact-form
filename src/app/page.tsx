"use client";
import Lottie from "lottie-react";
import { FormEvent, useEffect, useState } from "react";

import { Input } from "@/components/Inputs";
import { Radio } from "@/components/Radio";

import animation from "../animation/sendEmail.json";

export default function Home() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [queryType, setQueryType] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  function onSubmitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSuccess(true);
  }

  useEffect(() => {
    if (success) {
      setInterval(() => {
        setSuccess(false)
      }, 4500);
    }
  }, [success])

  return (
    <main className="bg-[hsl(147,39%,91%)] h-full max-h-full px-4 py-6 flex justify-center items-center">
      {!success ?
        <section className="bg-white w-full md:max-w-[840px] h-full rounded-2xl p-6">
          <h1 className="text-[32px] font-[600] text-[hsl(187, 24%, 22%)] pb-6">Contact Us</h1>

          <form className="flex flex-col gap-6" onSubmit={onSubmitForm}>
            <div className="flex flex-col md:flex-row gap-6">
              <Input value={setFirstName} title="First Name" type="text" placeholder="John" required />
              <Input value={setLastName} title="Last Name" type="text" placeholder="Doe" required />
            </div>
            <Input value={setEmailAddress} title="Email Address" type="email" placeholder="johndoe@example.com" required />
            <Radio title="Query Type" required options={["General Enquiry", "Support Request"]} value={setQueryType} selected={queryType} />
            <Input value={setMessage} title="Message" type="textarea" placeholder="Your message" required />

            <div className="flex gap-4 py-2">
              <input type="checkbox" name="contract" id="contract" required />
              <label htmlFor="contract">I consent to being contacted by the team <span className="text-[#87a3a6]">*</span></label>
            </div>

            <button className="bg-[#0c7d69] hover:bg-[#dff1e7] w-full h-[60px] text-white rounded-lg" type="submit">Submit</button>
          </form>
        </section>
        :
        <section className="bg-white w-full md:max-w-[840px] h-screen rounded-2xl p-6 flex flex-col justify-center">
          <h1 className="text-center text-[28px] md:text-[32px] pb-4">Thank you for contacting us</h1>
          <p className="text-center text-[18px] md:text-[24px]">Keep an eye on your email.</p>
          <p className="text-center text-[18px] md:text-[24px]">Soon, we will contact you.</p>
          <Lottie animationData={animation} loop={false} width={40} height={20} className="w-[180px] my-10 mx-auto" />
        </section>
      }
    </main>
  );
}
