import { motion } from "framer-motion";
import {
  Mail,
  ArrowUpRight,
} from "lucide-react";

import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const contacts = [
  {
    title: "Email",
    value: "farhatsofyan66@gmail.com",
    icon: Mail,
    link: "mailto:farhatsofyan66@gmail.com",
  },

  {
    title: "Instagram",
    value: "@bagassadittya24",
    icon: FaInstagram,
    link: "https://www.instagram.com/bagassadittya24/",
  },

  {
    title: "GitHub",
    value: "github.com/bagasaditya24",
    icon: FaGithub,
    link: "https://github.com/bagasaditya24",
  },

  {
    title: "LinkedIn",
    value: "linkedin.com/in/bagasaditya24",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/bagas-aditya-13a398300",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white px-6 py-24 sm:py-32"
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
          CONTACT
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-[#1d1d1f] sm:text-5xl md:text-6xl"
        >
          Let’s build
          something great
          together.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-[#6e6e73] sm:text-lg"
        >
          Feel free to reach out for collaborations,
          freelance projects, or simply to connect and
          discuss technology and design.
        </motion.p>

        {/* Contact Cards */}
        <div className="mt-20 grid gap-6 md:grid-cols-2">

          {contacts.map((contact, index) => {
            const Icon = contact.icon;

            return (
              <motion.a
                key={contact.title}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="group rounded-[32px] border border-black/5 bg-[#f5f5f7] p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
              >

                {/* Top */}
                <div className="flex items-center justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#1d1d1f] shadow-sm">
                    <Icon size={24} />
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-[#6e6e73] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />

                </div>

                {/* Content */}
                <div className="mt-10">

                  <p className="text-sm font-medium text-[#6e6e73]">
                    {contact.title}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold break-all text-[#1d1d1f]">
                    {contact.value}
                  </h3>

                </div>

              </motion.a>
            );
          })}

        </div>

      </div>
    </section>
  );
}