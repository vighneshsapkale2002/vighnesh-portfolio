import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDocker,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiVercel,
  SiShadcnui,
} from "react-icons/si";

const frontend = [
  { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "JavaScript", icon: <FaJsSquare />, color: "text-yellow-400" },
  { name: "React.js", icon: <FaReact />, color: "text-cyan-400" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-500" },
  { name: "Bootstrap", icon: <FaBootstrap />, color: "text-purple-500" },
];

const backend = [
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "Express.js", icon: <SiExpress />, color: "text-gray-300" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
  { name: "MySQL", icon: <SiMysql />, color: "text-blue-400" },
];

const tools = [
  { name: "Git", icon: <FaGitAlt />, color: "text-orange-500" },
  { name: "GitHub", icon: <FaGithub />, color: "text-white" },
  { name: "Docker", icon: <FaDocker />, color: "text-blue-500" },
  { name: "Postman", icon: <SiPostman />, color: "text-orange-400" },
  { name: "Vercel", icon: <SiVercel />, color: "text-white" },
  { name: "ShadCN UI", icon: <SiShadcnui />, color: "text-gray-300" },
];

const SkillCard = ({ title, skills }) => {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-cyan-400 transition duration-300">
      <h3 className="text-2xl font-bold text-cyan-400 mb-8">
        {title}
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-xl p-5 flex flex-col items-center hover:scale-105 hover:bg-slate-700 transition duration-300"
          >
            <div className={`text-5xl ${skill.color}`}>
              {skill.icon}
            </div>

            <h4 className="mt-4 text-center font-medium">
              {skill.name}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-slate-950 text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-cyan-400 font-semibold">
            My Skills
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Technical Skills
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full mt-5"></div>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 leading-8">
            I build responsive, scalable and modern web applications
            using the latest frontend and backend technologies.
          </p>
        </div>

        <div className="space-y-10">

          <SkillCard
            title="Frontend Development"
            skills={frontend}
          />

          <SkillCard
            title="Backend & Database"
            skills={backend}
          />

          <SkillCard
            title="Developer Tools"
            skills={tools}
          />

        </div>

        {/* Current Learning */}

        <div className="mt-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8">

          <h2 className="text-3xl font-bold">
            Currently Learning 🚀
          </h2>

          <div className="grid md:grid-cols-4 gap-5 mt-8">

            <div className="bg-white/10 rounded-xl p-5 text-center">
              AI Engineering
            </div>

            <div className="bg-white/10 rounded-xl p-5 text-center">
              RAG Development
            </div>

            <div className="bg-white/10 rounded-xl p-5 text-center">
              LangChain
            </div>

            <div className="bg-white/10 rounded-xl p-5 text-center">
              Vector Databases
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;