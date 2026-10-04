import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f5f5f7]">

      {/* Soft Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_55%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-24 pb-20 text-center sm:pt-28">

        {/* Small Label */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sm font-medium tracking-wide text-[#6e6e73]"
        >
          Welcome to my portfolio
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
            mt-4
            max-w-4xl
            text-4xl
            font-semibold
            leading-none
            tracking-tight
            text-[#1d1d1f]
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
          "
        >
          Web Developer
          <br />
          & Tech Enthusiast.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="
            mt-6
            max-w-xl
            px-2
            text-base
            leading-relaxed
            text-[#6e6e73]
            sm:text-lg
          "
        >
          Building modern, responsive, and user-focused
          web applications with clean and elegant experiences.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="
            mt-9
            flex
            w-full
            flex-col
            items-center
            justify-center
            gap-3
            sm:w-auto
            sm:flex-row
          "
        >
          <a
            href="#projects"
            className="
              w-full
              rounded-full
              bg-[#0071e3]
              px-7
              py-3.5
              text-sm
              font-medium
              text-white
              transition-all
              duration-300
              hover:bg-[#0077ED]
              sm:w-auto
            "
          >
            View Projects
          </a>

          <a
            href="https://www.linkedin.com/in/bagas-aditya-13a398300/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-full
              rounded-full
              border
              border-[#0071e3]
              px-7
              py-3.5
              text-sm
              font-medium
              text-[#0071e3]
              transition-all
              duration-300
              hover:bg-[#0071e3]
              hover:text-white
              sm:w-auto
            "
          >
            LinkedIn Profile
          </a>
        </motion.div>

      </div>
    </section>
  );
}