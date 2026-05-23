import { motion } from "framer-motion";

const experiences = [
  {
    title: "Web Development Bootcamp",
    company: "KlikFest UNINDRA",
    year: "2025",
    description:
      "Participated in an intensive web development bootcamp focused on building modern and responsive web applications using current frontend technologies.",
  },

  {
    title: "Freelance Web Developer",
    company: "DitzCreative",
    year: "2024 - Present",
    description:
      "Developed modern landing pages and digital experiences for freelance clients with a focus on clean UI, responsive layouts, and modern branding.",
  },

  {
    title: "Frontend Developer Projects",
    company: "Personal & Academic Projects",
    year: "2023 - Present",
    description:
      "Built multiple frontend projects using React, TypeScript, and Tailwind CSS while continuously improving UI/UX and responsive development skills.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#f5f5f7] px-6 py-24 sm:py-32"
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
          EXPERIENCE
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-[#1d1d1f] sm:text-5xl md:text-6xl"
        >
          Learning, building,
          and growing through
          real digital experiences.
        </motion.h2>

        {/* Experience List */}
        <div className="mt-20 space-y-6">

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="rounded-[32px] border border-black/5 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.05)]"
            >

              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

                {/* Left */}
                <div>

                  <p className="text-sm font-medium text-[#6e6e73]">
                    {experience.company}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold text-[#1d1d1f]">
                    {experience.title}
                  </h3>

                </div>

                {/* Right */}
                <p className="text-sm font-medium text-[#6e6e73]">
                  {experience.year}
                </p>

              </div>

              {/* Description */}
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#6e6e73]">
                {experience.description}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}