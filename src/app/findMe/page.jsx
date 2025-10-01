"use client";

import React from "react";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function FindMePage() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/nazrul.dobon.islam/",
      color: "bg-blue-600",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/nazrul_dobon",
      color: "bg-pink-500",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/NazrulBoston",
      color: "bg-gray-800",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/yourusername",
      color: "bg-blue-700",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center bg-base-200 px-4 ">
      <h1 className="text-xl sm:text font-bold text-gray-800 mb-3 text-center">
        Find Me On
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              w-6 h-6 flex items-center justify-center rounded-full text-white text-3xl
              hover:scale-110 transform transition duration-300 shadow-lg sm:mb-20
              ${link.color}
            `}
            title={link.name}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </section>
  );
}
