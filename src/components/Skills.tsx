export default function Skills() {
  const skills = [
    {
      title: "Frontend Development",
      desc: "Building modern, responsive, and interactive web experiences.",
      icon: "⌘",
      items: ["React", "Vue.js", "Tailwind CSS", "HTML / CSS"],
      size: "md:col-span-2",
    },
    {
      title: "UI/UX Design",
      desc: "Designing clean and intuitive interfaces focused on user experience.",
      icon: "✦",
      items: ["Figma", "Canva", "Wireframing", "Prototyping"],
      size: "",
    },
    {
      title: "Backend & Database",
      desc: "Developing application systems and managing structured data.",
      icon: "{}",
      items: ["Laravel", "PHP", "MySQL"],
      size: "",
    },
    {
      title: "Development Tools",
      desc: "Tools and workflow I use throughout the development process.",
      icon: "⚡",
      items: ["GitHub", "VS Code", "Vite", "npm"],
      size: "md:col-span-2",
    },
  ];

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">

          <div>
            <p className="text-sm font-medium text-blue-500 mb-3">
              WHAT I WORK WITH
            </p>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
              Skills &{" "}
              <span className="text-blue-500">
                Expertise
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm md:text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Technologies and tools I use to build modern,
            functional, and user-focused digital experiences.
          </p>

        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

          {skills.map((skill) => (
            <div
              key={skill.title}
              className={`
                ${skill.size}
                group relative overflow-hidden
                p-6 md:p-7
                min-h-60
                rounded-3xl
                border border-gray-200 dark:border-white/10
                bg-white/60 dark:bg-white/4
                backdrop-blur-xl
                transition-all duration-500
                hover:-translate-y-1
                hover:border-blue-400/40
                hover:shadow-2xl
                hover:shadow-blue-500/10
              `}
            >

              {/* Glow */}
              <div
                className="
                  absolute -right-16 -top-16
                  w-40 h-40
                  rounded-full
                  bg-blue-500/10
                  blur-3xl
                  group-hover:bg-blue-500/20
                  transition-all duration-500
                "
              />

              {/* Icon */}
              <div
                className="
                  relative
                  flex items-center justify-center
                  w-11 h-11
                  rounded-2xl
                  bg-gray-100 dark:bg-white/10
                  border border-gray-200 dark:border-white/10
                  text-lg font-bold
                  text-gray-800 dark:text-white
                  mb-6
                  group-hover:scale-110
                  transition-transform duration-300
                "
              >
                {skill.icon}
              </div>

              {/* Title */}
              <h3 className="relative text-xl font-semibold text-gray-900 dark:text-white">
                {skill.title}
              </h3>

              {/* Description */}
              <p className="relative mt-2 max-w-md text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                {skill.desc}
              </p>

              {/* Skills */}
              <div className="relative flex flex-wrap gap-2 mt-6">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="
                      px-3 py-1.5
                      rounded-full
                      text-xs font-medium
                      bg-gray-100 dark:bg-white/10
                      text-gray-600 dark:text-gray-300
                      border border-gray-200 dark:border-white/5
                      group-hover:border-blue-400/20
                      transition-colors
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}