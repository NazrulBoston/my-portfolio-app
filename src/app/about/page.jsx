"use client";


import React from "react";

export default function AboutPage() {
  return (
    <section id="about" >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-18 items-center">

        {/* Left Side - About Me */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Hi, I’m <span className="font-semibold text-blue-600">Nazrul Islam</span>,
            a passionate MERN Stack Developer with a strong focus on building
            modern, responsive, and scalable applications. I enjoy turning
            complex problems into elegant and user-friendly solutions.
          </p>
          <p className="text-gray-600 leading-relaxed">
            My journey as a developer is fueled by curiosity and continuous learning.
            Beyond coding, I thrive on collaboration and teamwork, ensuring every project
            I work on delivers real impact.
          </p>
        </div>

        {/* experience */}
        <div className="relative flex items-center justify-center w-82 h-82 rounded-full mb-10 bg-gradient-to-r from-red-600 to-orange-500">
          {/* 2+ inside the circle */}
          <span className="text-8xl font-bold text-white text-center">
            2+
            <p className="text-2xl">years of experiences </p>
          </span>
        </div>


      </div>
    </section>
  );
}
