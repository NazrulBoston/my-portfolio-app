"use client";

import React from "react";
import { ReactTyped } from "react-typed";

export default function BannerPage() {
    return (
        <div className="hero bg-base-200 min-h-screen mt-12">
            <div className="hero-content flex-col lg:flex-row lg:flex justify-center items-center">

                {/* Left Side - Image */}
                <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    alt="Developer workspace"
                    className="w-full max-w-sm rounded-lg shadow-2xl"
                />

                {/* Right Side - Text */}
                <div className="text-center lg:text-left lg:ml-10">
                    <h1 className="text-5xl md:text-5xl font-bold text-gray-800">
                        Hi, I’m <span className="text-primary">Nazrul Islam</span>
                    </h1>
                    {/* Typing Effect */}
                    <h2 className="mt-2 text-3xl font-semibold text-red-300">
                        <ReactTyped
                            strings={[
                                "MERN Stack Developer",
                                "Full Stack Engineer",
                                "Problem Solver",
                                "Tech Enthusiast",
                            ]}
                            typeSpeed={50}
                            backSpeed={30}
                            loop
                        />
                    </h2>

                    <p className="py-6 text-gray-500 max-w-2xl leading-relaxed">
                        I specialize in building modern, responsive, and scalable web applications
                        using <span className="font-semibold">MongoDB</span>,{" "}
                        <span className="font-semibold">Express.js</span>,{" "}
                        <span className="font-semibold">React</span>, and{" "}
                        <span className="font-semibold">Node.js</span>. Passionate about creating
                        seamless user experiences and robust back-end solutions.
                    </p>

                    <p className="text-gray-500 max-w-2xl leading-relaxed">
                        I enjoy transforming complex ideas into clean, efficient, and
                        user-friendly digital products. With a strong foundation in{" "}
                        <span className="font-semibold">JavaScript, REST APIs, and database design</span>,
                        I build applications that are both powerful and intuitive.
                    </p>

                    <p className="mt-4 text-gray-500 max-w-2xl leading-relaxed">
                        I’m comfortable working across the full stack — from designing
                        front-end interfaces to architecting secure back-end services.
                        Collaboration and communication are at the heart of my workflow,
                        ensuring projects align with client and team goals.
                    </p>

                    <p className="mt-4 text-gray-500 max-w-2xl leading-relaxed">
                        I thrive in fast-paced environments where continuous learning and
                        problem-solving are key. Currently, I’m expanding my expertise in{" "}
                        <span className="font-semibold">cloud deployment, and Next.js</span>{" "}
                        to deliver even more performant and reliable solutions.
                    </p>

                    {/* Call-to-Action Button */}
                    <div className="mt-6 flex justify-center lg:justify-start">
                        <a
                            href="/Nazrul_Islam_Resume.pdf"
                            download
                            className="btn bg-blue-900 text-white p-2 cursor-pointer"
                        >
                            Download Resume
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}
