import React from "react";
import {
  FaUserGraduate,
  FaLaptopCode,
  FaBriefcase,
  FaCode,
} from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="bg-slate-950 text-white py-20 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h4 className="text-cyan-400 font-semibold uppercase tracking-widest">
            Get To Know Me
          </h4>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Side */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="/hero.jpeg"
                alt="Profile"
                className="w-80 rounded-3xl border-4 border-cyan-500 shadow-2xl"
              />

              <div className="absolute -bottom-5 -right-5 bg-cyan-500 text-black font-bold px-5 py-3 rounded-xl">
                1+ Years Experience
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <h3 className="text-3xl font-bold mb-6">
              Full Stack Web Developer
            </h3>

            <p className="text-gray-300 leading-8 text-lg">
              I'm <span className="text-cyan-400 font-semibold">Vighnesh Sapkale</span>,
              a passionate Full Stack Developer with experience in building
              responsive web applications using React.js, Node.js, Express.js,
              MongoDB, JavaScript, HTML, CSS and Tailwind CSS.
            </p>

            <p className="text-gray-400 leading-8 mt-5">
              Currently working at Trust Fintech Limited, where I develop
              enterprise applications, responsive dashboards, fintech websites,
             landing pages, and reusable UI components.
              I enjoy learning new technologies and I'm currently exploring AI
              Engineering, RAG, LangChain, and Large Language Models.
            </p>

            {/* Cards */}

            <div className="grid grid-cols-2 gap-5 mt-10">

              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-cyan-400 transition">
                <FaBriefcase className="text-cyan-400 text-3xl mb-3" />

                <h4 className="font-bold text-lg">
                  Experience
                </h4>

                <p className="text-gray-400 mt-2">
                  1+ Years Professional Experience
                </p>
              </div>

              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-cyan-400 transition">
                <FaLaptopCode className="text-cyan-400 text-3xl mb-3" />

                <h4 className="font-bold text-lg">
                  Projects
                </h4>

                <p className="text-gray-400 mt-2">
                  15+ React & Full Stack Projects
                </p>
              </div>

              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-cyan-400 transition">
                <FaCode className="text-cyan-400 text-3xl mb-3" />

                <h4 className="font-bold text-lg">
                  Skills
                </h4>

                <p className="text-gray-400 mt-2">
                  React, Node, Express, MongoDB, Tailwind
                </p>
              </div>

              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-cyan-400 transition">
                <FaUserGraduate className="text-cyan-400 text-3xl mb-3" />

                <h4 className="font-bold text-lg">
                  Learning
                </h4>

                <p className="text-gray-400 mt-2">
                  AI Engineering, RAG, LangChain & LLMs
                </p>
              </div>

            </div>

            {/* Button */}

            <div className="mt-10">
              <a
                href="#contact"
                className="inline-block bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-4 rounded-xl transition duration-300"
              >
                Contact Me
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;