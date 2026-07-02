import React from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaHtml5,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "SoftTrust Corporate Website",
    image: "/src/assets/softtrust.png",
    description:
      "Developed a modern corporate website with responsive UI, reusable React components, animations, SEO-friendly pages, and optimized performance.",
    technologies: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
    ],
    github: "https://github.com/yourusername/softtrust",
    demo: "https://softtrust-demo.vercel.app/",
  },

  {
    id: 2,
    title: "Admin Dashboard",
    image: "/src/assets/admin-dashboard.png",
    description:
      "Designed and developed a responsive admin dashboard with authentication, analytics, CRUD operations, charts, user management, filtering, and dark mode.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
    ],
    github: "https://github.com/yourusername/dashboard",
    demo: "https://admin-dashboard-alpha-inky-17.vercel.app/",
  },

  {
    id: 3,
    title: "News Application",
    image: "/src/assets/inshorts.png",
    description:
      "A real-time news application using News API with category filters, search functionality, responsive layouts, and optimized user experience.",
    technologies: [
      "React.js",
      "REST API",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
    ],
    github: "https://github.com/vighneshsapkale2002/News-Application",
    demo: "https://your-demo-link.com",
  },

];

const getIcon = (tech) => {
  switch (tech) {
    case "React.js":
      return <FaReact className="text-cyan-400" />;
    case "Node.js":
      return <FaNodeJs className="text-green-500" />;
    case "Express.js":
      return <SiExpress className="text-gray-300" />;
    case "MongoDB":
      return <SiMongodb className="text-green-500" />;
    case "Next.js":
      return <SiNextdotjs className="text-white" />;
    case "Tailwind CSS":
      return <SiTailwindcss className="text-cyan-500" />;
    case "HTML":
      return <FaHtml5 className="text-orange-500" />;
    default:
      return null;
  }
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-slate-900 text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            Portfolio
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Featured Projects
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            A collection of professional web applications, dashboards,
            enterprise solutions and frontend projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (

            <div
              key={project.id}
              className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-400 transition duration-300 hover:-translate-y-2 shadow-xl"
            >

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-300 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-6">

                  {project.technologies.map((tech, index) => (

                    <span
                      key={index}
                      className="flex items-center gap-2 bg-slate-700 px-4 py-2 rounded-full text-sm"
                    >
                      {getIcon(tech)}
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="flex gap-4 mt-8">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex justify-center items-center gap-2 bg-slate-700 hover:bg-slate-600 py-3 rounded-xl transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex justify-center items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-3 rounded-xl transition"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;