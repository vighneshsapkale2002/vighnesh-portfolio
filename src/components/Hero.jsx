import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

import heroImage from "../assets/hero.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Side */}
          <div>

            <span className="inline-block px-4 py-2 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500 mb-6">
              👋 Welcome To My Portfolio
            </span>

            <h2 className="text-2xl text-gray-300 font-medium">
              Hello, I'm
            </h2>

            <h1 className="text-5xl md:text-7xl font-extrabold mt-2">
              Vighnesh
              <span className="text-blue-500"> Sapkale</span>
            </h1>

            <h3 className="text-2xl md:text-3xl text-gray-300 mt-6">
              Full Stack Developer
            </h3>

            <p className="text-gray-400 mt-6 leading-8 max-w-xl">
              Passionate Full Stack Developer with experience in
              React.js, Node.js, Express.js and MongoDB.
              I love creating responsive websites, admin dashboards,
              fintech applications and modern web interfaces with
              beautiful UI & excellent user experience.
            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-10">

              <a
                href="/src/assets/Vighnesh_Professional_Resume_2026.pdf"
                download
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-7 py-4 rounded-xl transition duration-300"
              >
                <FaDownload />
                Download Resume
              </a>

              <a
                href="#projects"
                className="flex items-center gap-2 border border-blue-500 hover:bg-blue-600 px-7 py-4 rounded-xl transition duration-300"
              >
                View Projects
                <FaArrowRight />
              </a>

            </div>

            {/* Social Icons */}

            <div className="flex gap-6 mt-10">

              <a
                href="https://github.com/vighneshsapkale2002"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-blue-600 flex justify-center items-center text-xl transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/vighnesh-sapkale-24447a257"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-blue-600 flex justify-center items-center text-xl transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:vighneshsapkale@gmail.com"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-blue-600 flex justify-center items-center text-xl transition"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

          {/* Right Side */}

          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 bg-blue-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>

              <img
                src={heroImage}
                alt="Profile"
                className="relative w-80 h-80 lg:w-[430px] lg:h-[430px] object-cover rounded-full border-8 border-slate-800 shadow-2xl"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;