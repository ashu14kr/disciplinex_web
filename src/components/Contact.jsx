import React from "react";
import logo from "../assets/Group 26-2.png";
import name from "../assets/DISCIPLINEX.png";

function Contact() {
  return (
    <section className="w-full bg-[#fcfcfc] lg:py-10 py-3 lg:px-6 px-5 flex">
      <div className="max-w-4xl mx-auto w-full text-center">

        {/* Logo Header */}
        <div className="flex items-center justify-center gap-3 lg:mb-8 mb-10">
          <div className="lg:w-15 lg:h-15 w-12 h-12">
            <img
              className="object-cover lg:rounded-2xl rounded-[15px]"
              src={logo}
              alt="Disciplinex logo"
            />
          </div>
          <img className="lg:h-8 h-6" src={name} alt="Disciplinex" />
        </div>

        <div className="py-25" >
            {/* Heading */}
        <h1 className="font-heading lg:text-[50px] text-[35px] leading-tight font-extrabold text-gray-900 lg:mb-5 mb-4">
          Need Help?
        </h1>

        {/* Subtext */}
        <p className="font-body text-gray-500 lg:text-[20px] text-[15px] max-w-2xl mx-auto lg:mb-12 mb-12">
          We’re here to support you. Reach out through Discord or send us an
          email — we’ll get back to you as soon as possible.
        </p>

        {/* Contact Options */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">

          {/* Discord Button */}
          <a
            href="https://discord.gg/NFQPUPMk"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-xl border border-gray-300 text-gray-900 font-body text-[15px] hover:bg-gray-100 transition-all duration-200"
          >
            Join our Discord
          </a>

          {/* Email Button */}
          <a
            href="mailto:disciplinex9@gmail.com"
            className="px-8 py-3 rounded-xl border border-gray-300 text-gray-900 font-body text-[15px] hover:bg-gray-100 transition-all duration-200"
          >
            Email Support
          </a>

        </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;