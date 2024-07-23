"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+(91)-7697353069",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ak.ankitkumar0202@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Pune, Maharashtra",
  },
];

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState("");
  const [errPop, setErrPop] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const email = form.current.user_email.value;
    const message = form.current.message.value;

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (message.trim() === "") {
      setMessageError("Please enter a message.");
      return;
    }

    setEmailError("");
    setMessageError("");
    setLoading(true);

    emailjs
      .sendForm(
        "service_ott665t",
        "template_fx2mgl9",
        form.current,
        "7fDSxeqmj9R_iUxSm"
      )
      .then(
        (res) => {
          setLoading(false);
          setPopup("Message sent successfully!");
          setTimeout(() => setPopup(""), 3000);
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          setErrPop("Something went wrong");
          setTimeout(() => setErrPop(""), 3000);
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4 },
        ease: "easeIn",
      }}
      className="py-6"
    >
      <div className="container mx-auto relative">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Let’s work together to build effective and innovative solutions.
                I’m eager to help bring your ideas to life.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 gap-6">
                <Input type="text" placeholder="Name" name="user_name" />
                <Input
                  type="email"
                  placeholder="Email address"
                  name="user_email"
                  className={`${emailError ? "border-red-500" : ""}`}
                />
              </div>
              {emailError && (
                <p className="text-red-500 text-sm">{emailError}</p>
              )}

              <Textarea
                name="message"
                className={`h-[200px] ${messageError ? "border-red-500" : ""}`}
                placeholder="Type your message here..."
              />
              {messageError && (
                <p className="text-red-500 text-sm">{messageError}</p>
              )}
              <Button type="submit" size="md" className="max-w-40">
                {loading ? "Sending..." : "Send message"}
              </Button>
            </form>
            {(popup || errPop) && (
              <div
                className={`${
                  popup ? "bg-accent text-primary" : "bg-red-500 text-white"
                } absolute bottom-10 left-1/2 transform -translate-x-1/2 font-semibold py-2 px-4 rounded-xl shadow-lg`}
              >
                {popup || errPop}
              </div>
            )}
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#2727c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
