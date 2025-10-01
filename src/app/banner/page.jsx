"use client";

import { ReactTyped } from "react-typed";
import { FaDownload, FaMailBulk } from "react-icons/fa";
import FindMePage from "../findMe/page";

export default function BannerPage() {
    return (
        <div className="hero bg-base-200 min-h-screen mt-12 px-4 sm:px-6 lg:px-16 space-y-7">
            <div
                className="hero-content flex flex-col lg:flex-row justify-center items-center lg:items-center gap-2 w-full" 
                // ADJUSTED HERE: added lg:items-center and w-full for balance
            >

                {/* Left Side - Image */}
                <div className="flex-1 flex justify-center"> 
                    {/* ADJUSTED HERE: wrapped image in flex-1 container */}
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        alt="Developer workspace"
                        className="
                            w-full 
                            max-w-xs 
                            sm:max-w-sm 
                            md:max-w-md 
                            lg:max-w-sm 
                            rounded-lg 
                            shadow-2xl
                        "
                        // ADJUSTED HERE: removed mb-6 lg:mb-0 so spacing is handled by flex/gap
                    />
                </div>

                {/* Right Side - Text */}
                <div className="flex-1 text-center lg:text-left"> 
                    {/* ADJUSTED HERE: added flex-1 for equal width */}
                    <h1 className="text-xl sm:text-5xl md:text-5xl font-bold text-gray-800">
                        <span className="text-3xl">I’m</span>
                        <br />
                        <span className="text-primary text-5xl sm:mt-2">Nazrul Islam,</span>
                    </h1>

                    {/* Typing Effect */}
                    <h2 className="my-2 text-2xl sm:text-3xl font-semibold text-red-500">
                        <ReactTyped
                            strings={[
                                "MERN Stack Developer",
                                "Frontend Web Developer",
                                "UI/UX Enthusiast",
                                "Creative Problem Solver",
                                "Tech Enthusiast",
                            ]}
                            typeSpeed={50}
                            backSpeed={30}
                            loop
                        />
                    </h2>

                    {/* Full Text */}
                    <p
                        className="
                            text-gray-500 
                            leading-relaxed 
                            text-justify 
                            text-sm 
                            sm:text-base 
                            md:text-lg 
                            max-w-full 
                            sm:max-w-xl 
                            md:max-w-2xl 
                            lg:max-w-3xl 
                            mx-auto 
                            lg:mx-0 
                        "
                        // ADJUSTED HERE: responsive widths for smooth scaling
                    >
                        My portfolio is more than a collection of projects — it’s a reflection of my growth as a developer
                        and problem solver. Each piece highlights my ability to turn ideas into meaningful, functional, and engaging
                        digital experiences. It represents my dedication to crafting solutions that blend creativity, technology, and purpose,
                        while showcasing the skills and passion that drive my work in web development.
                    </p>

                    {/* Call-to-Action Buttons */}
                    <div className="mt-6 flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-8">
                        <a
                            href="/Nazrul_Islam_Resume.pdf"
                            download
                            className="btn bg-blue-900 text-white p-2 flex items-center justify-center gap-2 w-full sm:w-auto"
                        >
                            <FaDownload className="text-lg" />
                            Download Resume
                        </a>
                        <a
                            href="/about"
                            className="btn bg-blue-900 text-white p-2 flex items-center justify-center gap-2 w-full sm:w-auto"
                        >
                            <FaMailBulk className="text-lg" />
                            Get In Touch
                        </a>
                    </div>
                </div>
            </div>

            {/* Social Links Section */}
            <FindMePage />
        </div>
    );
}
