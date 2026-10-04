import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  "About",
  "Skills",
  "Projects",
  "Certificates",
  "Experience",
  "Contact",
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur-xl"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        {/* Navbar */}
        <div className="flex h-14 items-center justify-between">

          {/* Logo */}
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="text-sm font-semibold tracking-tight text-[#1d1d1f]"
          >
            Bagas aditya
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex lg:gap-10">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs font-medium text-[#1d1d1f] transition-opacity duration-300 hover:opacity-60"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop Contact */}
          <a
            href="#contact"
            className="hidden text-xs font-medium text-[#0071e3] transition-opacity duration-300 hover:opacity-70 md:block"
          >
            DitzDev
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center rounded-lg p-2 text-[#1d1d1f] transition-colors hover:bg-black/5 md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={21} /> : <Menu size={21} />}
          </button>

        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          className="overflow-hidden md:hidden"
        >
          <nav className="flex flex-col border-t border-black/5 py-3">

            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-[#1d1d1f] transition-colors hover:bg-black/5"
              >
                {item}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-1 rounded-lg px-3 py-3 text-sm font-medium text-[#0071e3] transition-colors hover:bg-blue-50"
            >
              DitzDev
            </a>

          </nav>
        </motion.div>

      </div>
    </motion.header>
  );
}