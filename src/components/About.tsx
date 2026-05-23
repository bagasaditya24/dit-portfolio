import { motion } from "framer-motion";
import profile from "../assets/ditz.png";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#fbfbfd] px-6 py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2 md:gap-20">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="order-1 flex justify-center"
        >

          {/* Image Container */}
          <div className="relative">

            {/* Soft Background */}
            <div className="absolute inset-0 scale-90 rounded-full bg-[#f1f1f3]" />

            {/* Profile Image */}
            <img
              src={profile}
              alt="About"
              className="relative z-10 h-80 object-contain sm:h-105 md:h-130"
            />

          </div>

        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="order-2"
        >

          {/* Small Label */}
          <p className="text-sm font-medium tracking-wide text-[#6e6e73]">
            ABOUT ME
          </p>

          {/* Heading */}
          <h2 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-tight text-[#1d1d1f] sm:text-5xl md:text-6xl lg:text-7xl">
            Passionate about
            creating clean and
            modern digital
            experiences.
          </h2>

          {/* Description */}
          <div className="mt-8 space-y-5 sm:mt-10 sm:space-y-6">

            <p className="max-w-2xl text-base leading-relaxed text-[#6e6e73] sm:text-lg">
              I’m Bagas Aditya, an Informatics Engineering
              student focused on building responsive,
              user-focused, and visually modern web applications.
            </p>

            <p className="max-w-2xl text-base leading-relaxed text-[#6e6e73] sm:text-lg">
              I enjoy creating clean interfaces, interactive
              user experiences, and continuously exploring
              modern frontend technologies and design systems.
            </p>

          </div>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap gap-8 sm:gap-12">

            <div>
              <h3 className="text-3xl font-semibold text-[#1d1d1f]">
                15+
              </h3>

              <p className="mt-2 text-sm text-[#6e6e73]">
                Projects Built
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-[#1d1d1f]">
                2+
              </h3>

              <p className="mt-2 text-sm text-[#6e6e73]">
                Years Learning
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-[#1d1d1f]">
                10+
              </h3>

              <p className="mt-2 text-sm text-[#6e6e73]">
                Technologies
              </p>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}