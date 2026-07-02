import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            Contact
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Get In Touch
          </h2>

          <div className="w-24 h-1 bg-cyan-400 rounded-full mx-auto mt-5"></div>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Feel free to contact me regarding React.js Development,
            Full Stack Projects, Freelancing, or Job Opportunities.
          </p>

        </div>

        {/* Contact Card */}

        <div className="flex justify-center">

          <div className="w-full max-w-4xl bg-slate-900 rounded-3xl border border-slate-700 p-10 shadow-xl hover:border-cyan-500 transition duration-500">

            <h3 className="text-3xl font-bold text-center mb-10">
              Contact Information
            </h3>

            <div className="grid md:grid-cols-2 gap-8">

              {/* Name */}

              <div className="flex items-center gap-5 bg-slate-800 p-5 rounded-2xl">

                <div className="w-14 h-14 rounded-full bg-cyan-500 flex items-center justify-center">
                  <FaUser className="text-black text-xl" />
                </div>

                <div>
                  <h4 className="text-lg font-semibold">
                    Name
                  </h4>

                  <p className="text-gray-400">
                    Vighnesh Sapkale
                  </p>
                </div>

              </div>

              {/* Email */}

              <div className="flex items-center gap-5 bg-slate-800 p-5 rounded-2xl">

                <div className="w-14 h-14 rounded-full bg-cyan-500 flex items-center justify-center">
                  <FaEnvelope className="text-black text-xl" />
                </div>

                <div>
                  <h4 className="text-lg font-semibold">
                    Email
                  </h4>

                  <p className="text-gray-400 break-all">
                    vighneshsapkale@gmail.com
                  </p>
                </div>

              </div>

              {/* Phone */}

              <div className="flex items-center gap-5 bg-slate-800 p-5 rounded-2xl">

                <div className="w-14 h-14 rounded-full bg-cyan-500 flex items-center justify-center">
                  <FaPhoneAlt className="text-black text-xl" />
                </div>

                <div>
                  <h4 className="text-lg font-semibold">
                    Phone
                  </h4>

                  <p className="text-gray-400">
                    +91 8087474249 / +91 9021243803
                  </p>
                </div>

              </div>

              {/* Location */}

              <div className="flex items-center gap-5 bg-slate-800 p-5 rounded-2xl">

                <div className="w-14 h-14 rounded-full bg-cyan-500 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-black text-xl" />
                </div>

                <div>
                  <h4 className="text-lg font-semibold">
                    Location
                  </h4>

                  <p className="text-gray-400">
                    Pune, Maharashtra, India
                  </p>
                </div>

              </div>

            </div>

            {/* Social Links */}

            <div className="mt-12 text-center">

              <h3 className="text-2xl font-bold mb-6">
                Connect With Me
              </h3>

              <div className="flex justify-center gap-6">

                <a
                  href="https://github.com/vighneshsapkale2002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center text-2xl hover:bg-cyan-500 hover:text-black transition duration-300"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://linkedin.com/in/vighnesh-sapkale-24447a257"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center text-2xl hover:bg-cyan-500 hover:text-black transition duration-300"
                >
                  <FaLinkedin />
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;