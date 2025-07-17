"use client";

import { useState } from "react";
import AbsoluteFooterBg from "./AbsoluteFooterBg";
import { sendContactForm } from "@/app/utils/sendContactForm";

export default function Footer() {
  const [submitMessage, setSubmitMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`event: `, e);
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      await sendContactForm(formData);
      setSubmitMessage("Message sent!");
      form.reset();
    } catch (err) {
      setSubmitMessage("Failed to send message, please try again!");
    }
  };

  return (
    <footer className="w-full h-[120vh] md:h-[110vh] lg:h-[80vh] relative mt-32">
      <div className="absolute inset-0 z-10 p-10 mt-16 md:mt-7 flex flex-col justify-end">
        <section className="w-full h-full md:w-1/3">
          <h1 className="text-end text-6xl md:text-center lg:text-end">
            Contact Me
          </h1>
          <form
            className="flex flex-col items-start md:items-end w-full"
            onSubmit={handleSubmit}
            method="POST"
          >
            <label className="self-start" htmlFor="name">
              Name
            </label>
            <input id="name" type="name" placeholder="John / Jane" required />
            <label className="self-start" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="yourEmail@gmail.com"
              required
            />
            <label className="self-start" htmlFor="subject">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder="Purpose of Contact"
              required
            />
            <label className="self-start" htmlFor="message">
              Message
            </label>
            <textarea id="message" placeholder="Your message..." required />
            {/* anti-spam */}
            <label className="self-start" htmlFor="contact-number"></label>
            <input id="contact-number" type="hidden" />
            <button type="submit" className="text-2xl">
              Submit
            </button>
          </form>
        </section>
      </div>
      <AbsoluteFooterBg />
    </footer>
  );
}
