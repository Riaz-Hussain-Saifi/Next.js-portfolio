"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

function Portfolio() {
  const projects = [
    {
      title: "Dynamic Resume Builder",
      description: "A resume builder that allows users to dynamically add, edit, and preview sections in real-time.",
      image: "/resume-builder.webp",
      link: "https://editable-resume-wine.vercel.app/",
    },
    {
      title: "Multi-Page Portfolio Website",
      description: "A responsive, multi-page portfolio website with custom CSS and Tailwind integration.",
      image: "/portfolio.jpeg",
      link: "https://saifi-developers.vercel.app/",
    },
    {
      title: "To-Do List App",
      description: "An interactive to-do list app that helps users manage their daily tasks efficiently.",
      image: "/todo-app.png",
      link: "https://riaz-hussain-saifi.github.io/task-app/",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-purple-500 via-blue-600 to-teal-500 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-12">Portfolio</h1>
        <p className="text-lg leading-relaxed mb-8">
          Welcome to my portfolio! Here you can explore some of my recent projects that showcase my skills in web development, UI/UX design, and dynamic application building. Each project reflects my dedication to creating responsive, user-friendly, and visually appealing digital solutions. Take a look around and explore the details!
        </p>
      </div>

      {/* Portfolio Projects Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 text-gray-900 hover:shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            <div className="h-64 w-full rounded overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                layout="responsive"
                width={600}
                height={400}
                className="rounded-t-lg"
              />
            </div>
            <h3 className="text-2xl font-semibold mt-4 mb-2">{project.title}</h3>
            <p className="text-base mb-4">{project.description}</p>
            <Link href={project.link} target="_blank">
              <button className="px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-md hover:from-blue-500 hover:to-green-400">
                View Project
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto mt-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Interested in Collaborating?</h2>
        <p className="text-lg leading-relaxed mb-8">
          I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let’s connect and bring your ideas to life!
        </p>
        <Link href="/Contact">
          <button className="px-6 py-3 bg-gradient-to-r from-teal-400 to-purple-600 text-white font-semibold rounded-md hover:bg-teal-500 transition-colors duration-300">
            Contact Me
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Portfolio;
