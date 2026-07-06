import React from "react";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

const experiences = [
  {
    id: 1,
    company: "Trust Fintech Limited",
    role: "Frontend Developer",
    duration: "Aug 2025 - Present",
    location: "Pune, Maharashtra",
    current: true,
    description:
      "Working on enterprise fintech applications and modern web solutions using React.js and related technologies.",

    responsibilities: [
      "Developed responsive React.js web applications.",
      "Built reusable UI components for enterprise software.",
      "Created responsive landing pages and marketing websites.",
      "Integrated REST APIs into frontend applications.",
      "Optimized website performance and loading speed.",
      "Collaborated with UI/UX designers and backend developers.",
      "Maintained production applications and fixed bugs."
    ]
  },

  {
    id: 2,
    company: "Regal Enterprises",
    role: "Full Stack Web Developer Intern",
    duration: "Jan 2024 - Mar 2024",
    location: "Pune, Maharashtra",
    current: false,
    description:
      "Worked on frontend and backend development while learning industry best practices.",

    responsibilities: [
      "Developed frontend using HTML, CSS and JavaScript.",
      "Built backend applications using Node.js.",
      "Worked with MongoDB database.",
      "Performed website deployment and maintenance.",
      "Resolved customer issues and application bugs.",
      "Enhanced website functionality and user experience."
    ]
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-slate-950 text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            Career Journey
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Work Experience
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            My professional journey building scalable web applications,
            fintech solutions, dashboards, and responsive user interfaces.
          </p>

        </div>

        <div className="relative">

          {/* Timeline */}

          <div className="absolute left-5 md:left-1/2 top-0 h-full w-1 bg-cyan-500 transform md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (

            <div
              key={exp.id}
              className={`mb-16 flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center`}
            >

              {/* Empty Side */}

              <div className="hidden md:block md:w-1/2"></div>

              {/* Timeline Icon */}

              <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 bg-cyan-500 p-3 rounded-full shadow-lg">
                <FaBriefcase className="text-white text-xl" />
              </div>

              {/* Card */}

              <div className="w-full md:w-1/2 pl-14 md:pl-10">

                <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-cyan-400 transition duration-300 shadow-xl">

                  <div className="flex justify-between items-center flex-wrap gap-3">

                    <div>

                      <h3 className="text-2xl font-bold">
                        {exp.role}
                      </h3>

                      <h4 className="text-cyan-400 text-lg mt-1">
                        {exp.company}
                      </h4>

                    </div>

                    {exp.current && (
                      <span className="bg-green-500 text-black px-4 py-1 rounded-full font-semibold">
                        Current
                      </span>
                    )}

                  </div>

                  <div className="flex flex-wrap gap-6 mt-6 text-gray-400">

                    <div className="flex items-center gap-2">
                      <FaCalendarAlt />
                      {exp.duration}
                    </div>

                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt />
                      {exp.location}
                    </div>

                  </div>

                  <p className="text-gray-300 mt-6 leading-8">
                    {exp.description}
                  </p>

                  <div className="mt-8">

                    <h4 className="text-xl font-semibold mb-4">
                      Key Responsibilities
                    </h4>

                    <div className="space-y-4">

                      {exp.responsibilities.map((item, i) => (

                        <div
                          key={i}
                          className="flex items-start gap-3"
                        >
                          <FaCheckCircle className="text-cyan-400 mt-1" />

                          <p className="text-gray-300">
                            {item}
                          </p>

                        </div>

                      ))}

                    </div>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;