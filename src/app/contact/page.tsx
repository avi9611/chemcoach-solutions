"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 8943230074",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "sandeepascube@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Leiden, Netherlands",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [text, setText] = useState("");
  const [status, setStatus] = useState("");
  const [err, setErr] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      firstName: firstName,
      secondName: secondName,
      email: email,
      number: number,
      text: text,
    };

    setStatus("Loading");

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("Success");
      } else {
        console.error("Error in fetching: Response not OK", err);
        setErr("Error fetching form");
      }
    } catch (err) {
      console.error("Error in fetching:", err);
      setErr("Error fetching form");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-blue-50 rounded-xl"
            >
              <h3 className="text-4xl text-blue-500">Contact Us</h3>
              <p className="">We will get back to you</p>

              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="firstname"
                  placeholder="FirstName"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  required
                />
                <Input
                  type="secondname"
                  placeholder="Lastname"
                  value={secondName}
                  onChange={(event) => setSecondName(event.target.value)}
                  required
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
                <Input
                  type="phone"
                  placeholder="Phone Number"
                  maxLength={10}
                  value={number}
                  onChange={(event) => setNumber(event.target.value)}
                  required
                />
              </div>
              <Textarea
                value={text}
                onChange={(event) => setText(event.target.value)}
                className="h-[200px]"
                placeholder="Type your message here."
              />
              {/* button */}
              <Button type="submit" size="md" className="max-w-40">
                {!status
                  ? "Send Message"
                  : status === "Loading"
                  ? "Sending..."
                  : status === "done"
                  ? "Sent!"
                  : "Success"}
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-slate-300 text-blue-500 rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-slate-700">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
