import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

import freshbeef from "../assets/freshbeef.png";
import jasajoki from "../assets/jasajoki.png";
import farfetch from "../assets/farfetch.png";
import pesanin from "../assets/pesanin.png"; 
import admin from "../assets/pesanin admin.png";
import kasir from "../assets/pesanin kasir.png";
import kitchen from "../assets/pesanin dapur.png";

const projects = [
  {
    category: "Landing Page",
    title: "FreshBeef — Company Profile Website",
    description:
      "A modern meat commerce website built with React, TypeScript, and Tailwind CSS, focused on clean shopping experiences and seamless WhatsApp ordering integration.",
    image: freshbeef,
    link: "https://freshbeef-landingpage.vercel.app/",
    tech: ["React", "TypeScript", "Tailwind CSS", "WhatsApp API"],
    layout: "split",
  },
  {
    category: "Landing Page",
    title: "DitzCreative — Freelance Services",
    description:
      "A clean and modern creative agency experience built to present freelance digital services with simplicity and elegance.",
    image: jasajoki,
    link: "https://ditz-creative.vercel.app/",
    tech: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
    layout: "split",
  },
  {
    category: "Full-Stack POS System",
    title: "Pesan.in — POS Systems",
    description:
      "A modern self-service food ordering system equipped with table-based Live Tracking, automated E-Receipts for QRIS payments, and a premium interface designed for user convenience.",
    link: "https://github.com/",
    tech: ["Laravel", "Tailwind CSS", "Alpine.js", "MySQL"],
    layout: "grid", 
    features: [
      {
        title: "Menu Order (Customer Page)",
        description: "Premium self-service interface featuring a dynamic cart, table-based live order tracking, and automated E-Receipts for QRIS payments.",
        image: pesanin, 
      },
      {
        title: "Cashier (POS Dashboard)",
        description: "Centralized panel for cashiers to validate incoming transactions (QRIS/Cash) in real-time and forward validated orders to the kitchen queue.",
        image: kasir, 
      },
      {
        title: "Admin Menu (CMS)",
        description: "A CRUD control panel for restaurant catalog management. Allows admins to instantly manage categories, prices, photos, and menu availability.",
        image: admin, 
      },
      {
        title: "Admin Kitchen (KDS)",
        description: "Paperless digital kitchen queue display. Allows chefs to update cooking statuses that sync in real-time with the customer's tracking screen.",
        image: kitchen, 
      },
    ],
  },
  {
    category: "UI/UX Concept",
    title: "Fashion E-Commerce Interface Concept",
    description:
      "A modern fashion e-commerce UI concept designed in Figma, focused on clean layouts, minimalist shopping experiences, and elegant visual presentation.",
    image: farfetch,
    link: "https://www.figma.com/",
    tech: ["Figma", "UI/UX", "Prototype"],
    layout: "split",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white px-6 py-24 sm:py-32">
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

        {/* Projects Container */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div key={project.title}>
              
              {/* === TATA LETAK SPLIT === */}
              {project.layout === "split" && (
                <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className={index % 2 !== 0 ? "lg:order-2" : ""}
                  >
                    <p className="text-sm font-medium tracking-wide text-[#6e6e73] uppercase">
                      {project.category}
                    </p>
                    <h2 className="mt-5 text-4xl font-semibold leading-none tracking-tight text-[#1d1d1f] sm:text-5xl md:text-6xl">
                      {project.title}
                    </h2>
                    <p className="mt-6 max-w-xl text-base leading-relaxed text-[#6e6e73] sm:text-lg">
                      {project.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                      {project.tech.map((tech) => (
                        <span key={tech} className="rounded-full bg-[#f5f5f7] px-4 py-2 text-sm text-[#1d1d1f]">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-10">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-sm font-medium text-[#0071e3]">
                        View Project
                        <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className={index % 2 !== 0 ? "relative lg:order-1" : "relative"}
                  >
                    <div className="absolute inset-0 scale-95 rounded-4xl bg-[#f5f5f7]" />
                    <div className="relative overflow-hidden rounded-4xl border border-black/5 bg-white shadow-[0_20px_80px_rgba(0,0,0,0.06)]">
                      <img src={project.image} alt={project.title} className="w-full object-cover transition-transform duration-700 hover:scale-[1.02]" />
                    </div>
                  </motion.div>
                </div>
              )}

              {/* === TATA LETAK BENTO GRID PREMIUM === */}
              {project.layout === "grid" && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col rounded-[3rem] bg-[#fbfbfd] p-8 sm:p-14 lg:p-20 border border-black/5 shadow-[0_20px_80px_rgba(0,0,0,0.03)]"
                >
                  <div className="relative mb-16 max-w-3xl">
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles size={16} className="text-[#0071e3]" />
                      <p className="text-sm font-medium tracking-wide text-[#0071e3] uppercase">
                        {project.category}
                      </p>
                    </div>
                    <h2 className="text-4xl font-semibold leading-none tracking-tight text-[#1d1d1f] sm:text-5xl md:text-6xl">
                      {project.title}
                    </h2>
                    <p className="mt-6 text-base leading-relaxed text-[#6e6e73] sm:text-lg">
                      {project.description}
                    </p>
                  </div>

                  {/* Penambahan tanda tanya (?) di fitur grid di bawah ini */}
                  <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
                    {project.features?.map((feature, i) => (
                      <div key={i} className="group relative flex flex-col overflow-hidden rounded-3xl bg-white border border-black/5 shadow-sm transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-1">
                        
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#f5f5f7] flex items-center justify-center p-6 border-b border-black/5">
                          <img 
                            src={feature.image} 
                            alt={feature.title} 
                            className="h-full w-full object-contain rounded-lg drop-shadow-sm transition-transform duration-700 group-hover:scale-105" 
                          />
                        </div>
                        
                        <div className="flex flex-1 flex-col p-8 sm:p-10">
                          <h3 className="text-xl font-semibold text-[#1d1d1f] mb-3">{feature.title}</h3>
                          <p className="text-base text-[#6e6e73] leading-relaxed">{feature.description}</p>
                        </div>

                      </div>
                    ))}
                  </div>

                  {/* Footer (Tech Stack & Link) */}
                  <div className="relative mt-16 flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-10 border-t border-gray-200/60">
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech) => (
                        <span key={tech} className="rounded-full bg-white border border-black/5 shadow-sm px-5 py-2.5 text-sm font-medium text-[#1d1d1f]">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-sm font-medium text-[#0071e3] hover:text-[#0077ED] transition-colors">
                      View Repository
                      <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </a>
                  </div>

                </motion.div>
              )}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}