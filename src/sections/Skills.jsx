import {
  SiJavascript,
  SiPython,
  SiC,
  SiReact,
  SiHtml5,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiRedux,
  SiLinux,
} from "react-icons/si";

import { FaCss3Alt } from "react-icons/fa";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import {
  Code2,
  Monitor,
  Server,
  Database,
  Wrench,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import Reveal from "../components/Reveal";

function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      number: "01",
      title: "Programming Languages",
      subtitle: "The foundation",
      skills: [
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "Java", image: "/images/java.jpg", color: "#ED8B00" },
        { name: "C", image: "/images/c.jpg", color: "#A8B9CC" },
      ],
    },
    {
      icon: Monitor,
      number: "02",
      title: "Frontend Development",
      subtitle: "Crafting interfaces",
      skills: [
        { name: "React.js", icon: SiReact, color: "#61DAFB" },
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
        { name: "Redux", icon: SiRedux, color: "#764ABC" },
      ],
    },
    {
      icon: Server,
      number: "03",
      title: "Backend Development",
      subtitle: "Powering applications",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
        { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
        { name: "Django", icon: SiDjango, color: "#44B78B" },
        { name: "REST APIs", icon: null, color: "#A78BFA", label: "API" },
      ],
    },
    {
      icon: Database,
      number: "04",
      title: "Databases",
      subtitle: "Managing information",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      ],
    },
    {
      icon: Wrench,
      number: "05",
      title: "Tools & Technologies",
      subtitle: "Building efficiently",
      skills: [
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
        { name: "VS Code", iconify: "logos:visual-studio-code" },
        { name: "Linux", icon: SiLinux, color: "#FCC624" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#070510] py-28 px-6"
    >
      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 -right-37.5 w-112.5 h-112.5 rounded-full bg-violet-700/10 blur-[150px]" />
        <div className="absolute bottom-0 -left-37.5 w-112.5 h-112.5 rounded-full bg-fuchsia-700/10 blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* SECTION HEADING */}
        <Reveal direction="up">
          <div className="flex items-center gap-4 mb-14">
            <span className="text-violet-400 font-mono text-sm">02 /</span>

            <div>
              <p className="text-violet-400 text-xs font-semibold tracking-[4px] uppercase mb-2">
                My Technical Expertise
              </p>

              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                Technical{" "}
                <span className="bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Skills.
                </span>
              </h2>
            </div>

            <div className="hidden sm:block h-px flex-1 bg-linear-to-r from-violet-500/40 to-transparent ml-5" />
          </div>

          <p className="text-gray-400 max-w-2xl leading-8 mb-14">
            Technologies and tools I work with to build responsive applications
            and practical software solutions.
          </p>
        </Reveal>

        {/* FEATURED INTRO PANEL */}
        <Reveal direction="up">
          <div className="relative overflow-hidden rounded-3xl border border-violet-400/20 bg-linear-to-r from-violet-600/15 via-[#130d27] to-slate-950 p-7 md:p-10 mb-10">
            <div className="absolute right-0 top-0 w-72 h-72 bg-violet-500/15 rounded-full blur-[100px]" />

            <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 text-violet-300 text-sm mb-4">
                  <Sparkles size={17} />
                  <span className="tracking-widest uppercase text-xs font-semibold">
                    My technology stack
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Turning concepts into
                  <span className="text-violet-400"> working solutions.</span>
                </h3>

                <p className="text-gray-400 text-sm md:text-base leading-7">
                  A collection of programming languages, frameworks and tools I
                  use across frontend and backend development.
                </p>
              </div>

              <div className="relative shrink-0 flex items-center justify-center w-32 h-32 rounded-2xl border border-violet-300/20 bg-violet-500/10">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-2 rounded-full border border-dashed border-violet-300/30"
                />

                <Code2 size={54} className="text-violet-300" />
              </div>
            </div>
          </div>
        </Reveal>

        {/* SKILL CATEGORY CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-5">
          {skillCategories.map((category, index) => {
            const CategoryIcon = category.icon;

            return (
              <Reveal
                key={category.title}
                direction="up"
                delay={index * 0.1}
                className={index < 2 ? "lg:col-span-3" : "lg:col-span-2"}
              >
                <motion.div
                  whileHover={{ y: -7 }}
                  transition={{ duration: 0.25 }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-white/6.5 to-white/1.5 backdrop-blur-xl p-6 hover:border-violet-400/40 hover:shadow-xl hover:shadow-violet-950/20 transition-colors duration-300"
                >
                  {/* Card glow */}
                  <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-violet-500/10 blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Category header */}
                  <div className="relative flex items-start justify-between mb-7">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-300 group-hover:bg-violet-500 group-hover:text-white transition-all duration-300">
                        <CategoryIcon size={23} />
                      </div>

                      <div>
                        <h3 className="text-white font-semibold text-base md:text-lg">
                          {category.title}
                        </h3>

                        <p className="text-gray-500 text-xs mt-1">
                          {category.subtitle}
                        </p>
                      </div>
                    </div>

                    <span className="text-xs font-mono text-violet-400/60">
                      {category.number}
                    </span>
                  </div>

                  {/* Technologies */}
                  <div className="relative grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = skill.icon;

                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{
                            duration: 0.35,
                            delay: skillIndex * 0.07,
                          }}
                          whileHover={{ y: -4, scale: 1.035 }}
                          className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-black/20 px-3 py-3 hover:border-violet-400/40 hover:bg-violet-500/6 transition-colors duration-300"
                        >
                          {skill.image ? (
                            <img
                              src={skill.image}
                              alt={`${skill.name} logo`}
                              className="w-6 h-6 object-contain"
                            />
                          ) : skill.iconify ? (
                            <Icon icon={skill.iconify} width="24" height="24" />
                          ) : SkillIcon ? (
                            <SkillIcon
                              size={24}
                              style={{ color: skill.color }}
                            />
                          ) : (
                            <span
                              className="w-6 text-center font-bold text-sm"
                              style={{ color: skill.color }}
                            >
                              {skill.label}
                            </span>
                          )}

                          <span className="text-gray-300 text-xs sm:text-sm font-medium">
                            {skill.name}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-linear-to-r from-violet-500 to-fuchsia-500 group-hover:w-full transition-all duration-500" />
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        {/* BOTTOM SIGNATURE */}
        <Reveal direction="up" delay={0.2}>
          <div className="mt-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-white/10 pt-7">
            <p className="text-gray-500 text-sm">
              Always exploring new technologies and building better solutions.
            </p>

            <motion.a
              href="#projects"
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-violet-300 text-sm font-medium"
            >
              See my projects
              <ArrowUpRight size={17} />
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Skills;
