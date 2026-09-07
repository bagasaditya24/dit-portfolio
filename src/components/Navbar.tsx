import { motion } from "framer-motion";
import { Menu } from "lucide-react";

const navItems = [
  "About",
  "Skills",
  "Projects",
  "Certificates",
  "Experience",
  "Contact",
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5 sm:px-6">

        {/* Logo */}
        <a
          href="#"
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
          className="hidden text-xs font-medium text-[#0071e3] transition-opacity duration-300 hover:opacity-70 md:block"
        >
          DitzDev
        </a>

        {/* Mobile Menu Button */}
        <button className="flex items-center justify-center md:hidden">
          <Menu
            size={20}
            className="text-[#1d1d1f]"
          />
        </button>

      </div>
    </motion.header>
  );
}