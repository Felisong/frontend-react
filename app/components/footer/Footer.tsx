"use client";

import React, { useEffect, useState } from "react";
import AbsoluteFooterBg from "./AbsoluteFooterBg";
import { sendContactForm } from "@/app/utils/sendContactForm";
import { useToast } from "@/app/utils/context/toast/toastContext";
import { contactFormVerification } from "@/app/utils/contactFormVerification";
export type FormModel = {
  name: string;
  email: string;
  subject: string;
  message: string;
  contact_number: string;
};
export default function Footer() {
  const [submitMessage, setSubmitMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { triggerToast, showToast } = useToast();
  const [formInputs, setFormInputs] = useState<FormModel>({
    name: "",
    email: "",
    subject: "",
    message: "",
    contact_number: "",
  });
  const [formErrors, setFormErrors] = useState<FormModel>({
    name: "",
    email: "",
    subject: "",
    message: "",
    contact_number: "",
  });
  const handleValueChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormErrors(contactFormVerification(formInputs));
    setFormInputs({
      ...formInputs,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = { ...formInputs };
    try {
      await sendContactForm(formData);
      const successMsg = "Message sent!";
      setSubmitMessage(successMsg);
      setFormInputs({
        name: "",
        email: "",
        subject: "",
        message: "",
        contact_number: "",
      });
      triggerToast({ message: successMsg, isError: false, show: true });
    } catch (err) {
      setSubmitMessage("Failed to send message, please try again!");
    }
  };
  console.log(`form error: `, formErrors);

  return (
    <footer className="w-full h-[120vh] md:h-[110vh] lg:h-[80vh] relative mt-32">
      <div className="absolute inset-0 z-10 p-10 mt-16 md:mt-7 flex flex-col justify-end">
        <section className="w-full h-full md:w-1/3">
          <h1 className="text-end text-6xl md:text-center lg:text-end">
            Contact Me
          </h1>
          <form
            className="flex flex-col items-start md:items-end w-full"
            method="POST"
            onSubmit={handleSubmit}
          >
            <label className="self-start" htmlFor="name">
              Name
            </label>
            <input
              onChange={(e) => {
                handleValueChange(e);
              }}
              id="name"
              type="name"
              placeholder="John / Jane"
              required
            />
            <label className="self-start" htmlFor="email">
              Email
            </label>
            <input
              onChange={(e) => {
                handleValueChange(e);
              }}
              id="email"
              type="email"
              placeholder="yourEmail@gmail.com"
              required
            />
            <label className="self-start" htmlFor="subject">
              Subject
            </label>
            <input
              onChange={(e) => {
                handleValueChange(e);
              }}
              id="subject"
              type="text"
              placeholder="Purpose of Contact"
              required
            />
            <label className="self-start" htmlFor="message">
              Message
            </label>
            <textarea
              onChange={(e) => {
                handleValueChange(e);
              }}
              id="message"
              placeholder="Your message..."
              required
            />
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
