import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const certificates = [
  {
    title: "Frontend Web Development",
    issuer: "Dicoding Indonesia",
    year: "2024",
    description:
      "Completed frontend web development training focused on responsive interfaces, modern JavaScript, and user experience fundamentals.",
    link: "#",
  },

  {
    title: "React & TypeScript Fundamentals",
    issuer: "Online Course Platform",
    year: "2024",
    description:
      "Learned modern React development using TypeScript, component architecture, and scalable frontend practices.",
    link: "#",
  },

  {
    title: "UI/UX Design Exploration",
    issuer: "Figma Community",
    year: "2023",
    description:
      "Explored modern UI/UX principles, layout systems, prototyping workflows, and clean visual design concepts.",
    link: "#",
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="bg-[#fbfbfd] px-6 py-24 sm:py-32"
    >

      <div className="mx-auto max-w-7xl">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-sm font-medium tracking-wide text-[#6e6e73]"
        >
          CERTIFICATES
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-[#1d1d1f] sm:text-5xl md:text-6xl"
        >
          Continuous learning
          through modern technology
          and design exploration.
        </motion.h2>

        {/* Certificates */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group rounded-[32px] border border-black/5 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
            >

              {/* Year */}
              <p className="text-sm font-medium text-[#6e6e73]">
                {certificate.year}
              </p>

              {/* Title */}
              <h3 className="mt-4 text-2xl font-semibold leading-tight text-[#1d1d1f]">
                {certificate.title}
              </h3>

              {/* Issuer */}
              <p className="mt-3 text-sm text-[#6e6e73]">
                {certificate.issuer}
              </p>

              {/* Description */}
              <p className="mt-6 text-base leading-relaxed text-[#6e6e73]">
                {certificate.description}
              </p>

              {/* Link */}
              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#0071e3]"
              >
                View Certificate

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}