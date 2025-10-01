"use client";

import React from "react";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function ExpertisePage() {
  const skills = [
    { name: "React.js", icon: <FaReact className="text-blue-500 text-4xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-4xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-700 text-4xl" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-600 text-4xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black text-4xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500 text-4xl" /> },
    { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-600 text-4xl" /> },
  ];

  const expertise = [
    {
      title: "Frontend Development",
      description: "Building responsive, user-friendly interfaces with React, Next.js, and Tailwind CSS.",
    },
    {
      title: "Backend Development",
      description: "Designing secure, scalable server-side applications using Node.js and Express.js.",
    },
    {
      title: "Database Management",
      description: "Working with MongoDB for efficient, schema-less database design and integration.",
    },
    {
      title: "Tools & Technologies",
      description: "Version control with Git/GitHub, API integration, and deployment workflows.",
    },
  ];

  return (
    <section className="py-16 mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Side - Technical Skills */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center ">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="card bg-white shadow-md hover:shadow-xl transition rounded-xl p-8 flex flex-col items-center justify-center gap-4 min-h-[160px]"
              >
                {skill.icon}
                <span className="text-lg font-semibold text-gray-700">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Area of Expertise */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center ">
            Area of Expertise
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="card bg-white shadow-md hover:shadow-xl transition rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
