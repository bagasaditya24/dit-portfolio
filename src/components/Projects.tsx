import { motion } from "framer-motion";
import {
  ArrowUpRight,
} from "lucide-react";

import freshbeef from "../assets/freshbeef.png";
import jasajoki from "../assets/jasajoki.png";
import farfetch from "../assets/farfetch.png";

const projects = [
  {
    title: "FreshBeef — Company Profile Website",
    description:
      "A modern meat commerce website built with React, TypeScript, and Tailwind CSS, focused on clean shopping experiences and seamless WhatsApp ordering integration.",
    image: freshbeef,
    link: "https://freshbeef-landingpage.vercel.app/",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "WhatsApp API",
    ],
  },

  {
    title: "DitzCreative — Freelance Services",
    description:
      "A clean and modern creative agency experience built to present freelance digital services with simplicity and elegance.",
    image: jasajoki,
    link: "#",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },

  {
    title: "Fashion E-Commerce Interface Concept",
    description:
      "A modern fashion e-commerce UI concept designed in Figma, focused on clean layouts, minimalist shopping experiences, and elegant visual presentation.",
    image: farfetch,
    link: "https://www.figma.com/proto/XxNRKY6T5pxg8m7XgpcUKf/Tugas-Web-Lanjut-2026?node-id=2171-493&p=f&t=BRcDNA8LU3RDQw2N-0&scaling=min-zoom&content-scaling=fixed&page-id=2171%3A3&starting-point-node-id=2171%3A493",
    tech: [
      "Figma",
      "UI/UX",
      "Prototype",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-white px-6 py-24 sm:py-32"
    >

      <div className="mx-auto max-w-7xl">

        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-sm font-medium tracking-wide text-[#6e6e73]"
        >
          FEATURED PROJECTS
        </motion.p>

        {/* Projects */}
        <div className="space-y-32">

          {projects.map((project, index) => (
            <div
              key={project.title}
              className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20"
            >

              {/* CONTENT */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className={
                  index % 2 !== 0
                    ? "lg:order-2"
                    : ""
                }
              >

                {/* Small Label */}
                <p className="text-sm font-medium tracking-wide text-[#6e6e73]">
                  PROJECT {index + 1}
                </p>

                {/* Title */}
                <h2 className="mt-5 text-4xl font-semibold leading-none tracking-tight text-[#1d1d1f] sm:text-5xl md:text-6xl">
                  {project.title}
                </h2>

                {/* Description */}
                <p className="mt-6 max-w-xl text-base leading-relaxed text-[#6e6e73] sm:text-lg">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-8 flex flex-wrap gap-3">

                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-[#f5f5f7] px-4 py-2 text-sm text-[#1d1d1f]"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* Button */}
                <div className="mt-10">

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-[#0071e3]"
                  >
                    View Project

                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />

                  </a>

                </div>
              </motion.div>

              {/* IMAGE */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className={
                  index % 2 !== 0
                    ? "relative lg:order-1"
                    : "relative"
                }
              >

                {/* Soft Background */}
                <div className="absolute inset-0 scale-95 rounded-4xl bg-[#f5f5f7]" />

                {/* Image Card */}
                <div className="relative overflow-hidden rounded-4xl border border-black/5 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.06)]">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                  />

                </div>

              </motion.div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}