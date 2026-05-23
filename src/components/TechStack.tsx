import {
  FaReact,
  FaNodeJs,
  FaLaravel,
  FaGithub,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaVuejs,
  FaJava,
  FaPython,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const techStack = [
  FaHtml5,
  FaCss3Alt,
  FaJs,
  SiTypescript,
  FaReact,
  FaVuejs,
  SiTailwindcss,
  FaNodeJs,
  FaLaravel,
  FaGithub,
  FaFigma,
  FaJava,
  FaPython,
];

export default function TechStack() {
  return (
    <section className="overflow-hidden bg-white py-14 sm:py-16">

      {/* Title */}
      <div className="mb-8 text-center sm:mb-10">

        <p className="text-sm font-medium tracking-wide text-[#6e6e73]">
          TECHNOLOGIES I USE
        </p>

      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">

        {/* Fade Left */}
        <div className="absolute left-0 top-0 z-10 h-full w-16 bg-linear-to-r from-white to-transparent sm:w-32" />

        {/* Fade Right */}
        <div className="absolute right-0 top-0 z-10 h-full w-16 bg-linear-to-l from-white to-transparent sm:w-32" />

        {/* Icons */}
        <div className="flex w-max animate-marquee items-center gap-12 sm:gap-16 md:gap-20">

          {[...techStack, ...techStack].map((Icon, index) => (
            <div
              key={index}
              className="text-[#1d1d1f]/70 transition-all duration-300 hover:text-[#1d1d1f]"
            >

              <Icon
                size={30}
                className="sm:h-9 sm:w-9 md:h-10.5 md:w-10.5"
              />

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}