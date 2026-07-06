import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo */}

          <div>

            <h2 className="text-3xl font-bold text-white">
              Vighnesh
              <span className="text-cyan-400">.</span>
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              Passionate Full Stack Developer specializing in
              React.js, Node.js, Express.js, MongoDB and
              responsive web applications.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <a href="#home" className="hover:text-cyan-400">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-cyan-400">
                  About
                </a>
              </li>

              <li>
                <a href="#skills" className="hover:text-cyan-400">
                  Skills
                </a>
              </li>

              <li>
                <a href="#experience" className="hover:text-cyan-400">
                  Experience
                </a>
              </li>

              <li>
                <a href="#projects" className="hover:text-cyan-400">
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-cyan-400">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Services
            </h3>

            <ul className="space-y-3">

              <li>React Development</li>

              <li>Frontend Development</li>

              <li>Full Stack Development</li>

              <li>Responsive Web Design</li>

              <li>REST API Integration</li>

              <li>UI Development</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Connect With Me
            </h3>

            <div className="space-y-4">

              <p>
                📧 vighneshsapkale@gmail.com
              </p>

              <p>
                📱 +91 8087474249
              </p>

              <p>
                📍 Pune, Maharashtra
              </p>

            </div>

            <div className="flex gap-4 mt-8">

              <a
                href="https://github.com/yourgithub"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-cyan-500 flex justify-center items-center transition"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://linkedin.com/in/yourlinkedin"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-cyan-500 flex justify-center items-center transition"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="mailto:vighneshsapkale@gmail.com"
                className="w-12 h-12 rounded-full bg-slate-800 hover:bg-cyan-500 flex justify-center items-center transition"
              >
                <FaEnvelope size={22} />
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-center md:text-left text-gray-400">

            © {year} Vighnesh Sapkale.

            Made with{" "}

            <FaHeart className="inline text-red-500" />

            {" "}using React.js & Tailwind CSS.

          </p>

          <button
            onClick={scrollTop}
            className="mt-5 md:mt-0 w-12 h-12 rounded-full bg-cyan-500 hover:bg-cyan-400 flex justify-center items-center transition"
          >
            <FaArrowUp className="text-black text-xl" />
          </button>

        </div>

      </div>

    </footer>
  );
};

export default Footer;