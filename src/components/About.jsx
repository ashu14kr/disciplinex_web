import React from "react";
import logo from "../assets/Group 26-2.png";
import name from "../assets/DISCIPLINEX.png";
import moc_1 from "../assets/iphone-12-pro-max--silver.png";
import moc_2 from "../assets/iphone-12-pro-max--silver-3.png";
import moc_3 from "../assets/iphone-12-pro-max--silver-2.png";

function About() {
  return (
    <section className="w-full bg-[#fcfcfc] lg:py-10 py-3 lg:px-6 px-5">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 lg:mb-6 mb-8">
          <div className="lg:w-15 lg:h-15 w-12 h-12">
            <img
              className="object-cover lg:rounded-2xl rounded-[15px]"
              src={logo}
              alt=""
            />
          </div>
          <img className="lg:h-8 h-6" src={name} alt="" />
        </div>
        <h1 className="font-heading lg:text-[50px] text-[35px] leading-tight font-extrabold text-gray-900 lg:mb-5 mb-3">
          How You Level Up
        </h1>
        <p className="font-body text-gray-500 lg:text-[22px] text-[15px] max-w-2xl mx-auto lg:mb-12 mb-12">
          Pick a meaningful goal, follow structured challenges, track wins, and build unstoppable consistency.
        </p>
        <InfoCard
          title="Choose Your Challenge"
          description="Select from multiple goal-based missions designed to push you forward and align with what truly matters to you."
          image={moc_3}
          reverse
        />
        <InfoCard
          title="Daily Action Plan"
          description="Get clear, focused tasks every day so you stop overthinking and start executing with purpose."
          image={moc_2}
        />
        <InfoCard
          title="Progress That Shows"
          description="Track wins, measure growth, and watch your execution score rise week after week."
          image={moc_1}
          reverse
        />
      </div>
    </section>
  );
}

function InfoCard({ title, description, image, reverse }) {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } lg:items-center lg:justify-between lg:px-50`}
    >
      {/* Image */}
      <img className="lg:h-100 h-80 mb-10 lg:mb-0 object-contain" src={image} alt={title} />

      {/* Text */}
      <div className="flex flex-col lg:items-start lg:w-100">
        <h1 className="font-heading lg:text-[40px] text-[28px] leading-tight font-extrabold text-gray-900 lg:mb-2 mb-1">
          {title}
        </h1>
        <p className="font-body text-gray-500 lg:text-[17px] text-[14px] max-w-2xl mx-auto lg:mb-12 mb-12 lg:text-start">
          {description}
        </p>
      </div>
    </div>
  );
}

export default About;
