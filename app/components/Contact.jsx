"use client";
import React, { useState } from "react";
//   
import Link from "next/link";
import Image from "next/image";
import { socialLinks } from "../lib/data";


const Contact = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    if (response.status === 200) {
        console.log("Message sent.");
        setEmailSubmitted(true);
      }
    };
  return (
    <section>
        <h1 className="text-2xl text-[#030303] mt-[30px] text-center relative">Contact
          <hr className='w-8 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
        </h1>
        <div className="grid md:grid-cols-2 my-12 md:my-12 gap-4 relative">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
        <div className="z-10">
            <h5 className="text-xl font-bold text-[#030303] my-2">
                Let&apos;s Connect
            </h5>
            <p className="text-[#030303] mb-4 max-w-md">
                {" "}
                I&apos;m open to new opportunities, my inbox is always
                active. Whether you have a question or just want to say hi, I&apos;ll
                try my best to get back to you!
            </p>
            <div className='flex items-center gap-3 mt-4'>
                      {socialLinks.map((link, index)=><Link href={`${link.path}`} key={index}>{link.display}</Link>)}
            </div>
        </div>
        <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-[#030303] block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-[#030303] block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="border border-[#33353F] placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2.5"
                placeholder="Subject "
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-[#030303] block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea

              name="message"
              id="message"
              className="border border-[#070707] placeholder-[#9CA2A9] text-black text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
        </div>

    </section>
  )
}

export default Contact
