import React from "react";
import Image from "next/image";
import { infoList, toolsData } from "@/assets/assets";

const About = () => {
  return (
    <section
      id="about"
      className="w-full px-6 sm:px-10 md:px-16 lg:px-24 py-16 scroll-mt-20"
    >
      {/* Section Title */}
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-Ovo mb-10">
        What I Know
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Description */}
        <p className="text-center md:text-left mb-12 max-w-3xl text-gray-700 leading-relaxed">
          Proficient in designing robust backend services using Java and Spring Boot, and crafting responsive, user-centric interfaces with JavaScript, React, and Next.js. Known for translating complex requirements into clean, maintainable code and delivering reliable solutions in fast-paced environments.
        </p>

        {/* Info Cards */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {infoList.map(({ icon, title, description }, index) => (
            <li
              key={index}
              className="border border-gray-300 rounded-xl p-6 hover:bg-lightHover hover:-translate-y-1 hover:shadow-md transition duration-300"
            >
              <Image src={icon} alt={title} className="w-15 mb-5" />
              <h3 className="mb-2 font-semibold text-gray-800">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {description}
              </p>
            </li>
          ))}
        </ul>

        {/* Tools Section */}
        <h4 className="mt-14 mb-6 text-gray-700 font-Ovo text-lg">
          Tools I Use
        </h4>

        <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-3xl">
          {toolsData.map((tool, index) => (
            <li
              key={index}
              className="flex items-center justify-center w-12 sm:w-14 md:w-16 aspect-square border border-gray-300 rounded-lg hover:bg-lightHover hover:-translate-y-1 hover:shadow-md transition duration-300"
            >
              <Image src={tool} alt="tool" className="w-5 sm:w-7 md:w-8" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
