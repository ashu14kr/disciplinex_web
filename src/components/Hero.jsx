import React from "react";
import logo from "../assets/Group 26-2.png";
import screenshots from "../assets/Group 56-3.png";
import mobileScreenshot from "../assets/Group 102.png";
import button from "../assets/app-store-badge.svg";
import name from "../assets/DISCIPLINEX.png";

function Hero() {
  return (
    <section className="w-full bg-[#fcfcfc] lg:py-10 py-3 lg:px-6 px-5">
      <div className="max-w-6xl mx-auto text-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 lg:mb-5 mb-8">
          <div className="lg:w-15 lg:h-15 w-12 h-12">
            <img
              className="object-cover lg:rounded-2xl rounded-[15px]"
              src={logo}
              alt=""
            />
          </div>
          <img className="lg:h-8 h-6" src={name} alt="" />
        </div>

        {/* Heading */}
        <h1 className="font-heading lg:text-[65px] text-[35px] leading-tight font-extrabold text-gray-900 lg:mb-5 mb-3">
          Level Up Life
        </h1>

        {/* Subtext */}
        <p className="font-body text-gray-500 lg:text-[18px] text-[15px] max-w-2xl mx-auto lg:mb-12 mb-12">
          Turn 12 weeks into a life changing sprint with goal-based challenges
          designed to help you stop procrastinating and start executing.
        </p>

        {/* Mockups */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-12">
          <img
            className="block md:hidden w-full lg:h-90 h-65 object-contain"
            src={mobileScreenshot}
            alt=""
          />
          <img
            className="hidden md:block w-full lg:h-90 h-75 object-contain"
            src={screenshots}
            alt=""
          />
        </div>

        {/* CTA */}
        <div className="flex justify-center items-center lg:h-20 h-20">
          <a
            href="https://apps.apple.com/in/app/disciplinex-level-up-in-irl/id6743348577"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="lg:h-15 h-13 lg:w-100 w-80 object-contain cursor-pointer"
              src={button}
              alt="Download on the App Store"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
