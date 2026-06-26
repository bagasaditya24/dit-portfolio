import { motion } from "framer-motion";
import {
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-[#fbfbfd] px-6 py-16">

      <div className="mx-auto max-w-7xl">

        {/* Top */}
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <p className="text-sm font-medium tracking-wide text-[#6e6e73]">
              BAGAS ADITYA
            </p>

            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-[#1d1d1f] sm:text-4xl md:text-5xl">
              Building modern
              digital experiences
              with clean and
              thoughtful design.
            </h2>

          </motion.div>

          {/* Right */}
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="group inline-flex items-center gap-2 text-sm font-medium text-[#0071e3]"
          >
            Back to top

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />

          </motion.a>

        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col gap-4 border-t border-black/5 pt-8 text-sm text-[#6e6e73] md:flex-row md:items-center md:justify-between"
        >

          <p>
            ©  Portfolio - Bagas Aditya. All rights reserved.
          </p>

          <div className="flex items-center gap-6">

            <a
              href="https://github.com/bagasaditya24"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity duration-300 hover:opacity-60"
            >
              GitHub
            </a>

            <a
              href="https://www.instagram.com/bagassadittya24/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity duration-300 hover:opacity-60"
            >
              Instagram
            </a>

            <a
              href="https://www.linkedin.com/in/bagasaditya24"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity duration-300 hover:opacity-60"
            >
              LinkedIn
            </a>

          </div>

        </motion.div>

      </div>
    </footer>
  );
}