import {
  Briefcase,
  GraduationCap,
  Code2,
  CalendarDays,
  MapPin,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

function Experience() {
  const experiences = [
    {
      number: "01",
      type: "Currently Training",
      title: "MERN Stack Developer Trainee",
      organization: "ARCITE School of Technical Education",
      location: "Kochi, Kerala",
      icon: Code2,
      period: "June 2026 – Present",
      description:
        "Developing full-stack web applications using the MERN stack, building responsive user interfaces, implementing RESTful APIs and working with database-driven applications.",
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Tailwind CSS",
        "REST APIs",
      ],
    },
    {
      number: "02",
      type: "Internship",
      title: "Python Full Stack Developer Intern",
      organization: "Arcite Project Management Consultancy",
      location: "Kochi, Kerala",
      icon: Briefcase,
      period: "December 2025 – January 2026",
      description:
        "Worked on full-stack web development using Python and Django, creating application components and integrating frontend interfaces with backend functionality.",
      technologies: ["Python", "Django", "HTML5", "CSS3"],
    },
    {
      number: "03",
      type: "Education",
      title: "B.Tech in Computer Science and Engineering",
      organization: "Vimal Jyothi Engineering College",
      location: "Chemperi, Kerala",
      icon: GraduationCap,
      period: "October 2022 – June 2026",
      description:
        "Completed undergraduate studies in Computer Science and Engineering, developing a foundation in programming, software development, databases and computer science concepts.",
      technologies: ["Computer Science", "Programming", "Software Development"],
    },
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#090616] px-6 py-28"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-fuchsia-600/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section heading */}
        <Reveal direction="up">
          <div className="mb-20 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[5px] text-violet-400">
              04 / Career Journey
            </p>

            <h2 className="mb-5 text-4xl font-bold text-white md:text-5xl">
              Experience &{" "}
              <span className="bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Education.
              </span>
            </h2>

            <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
              Every step has contributed to my growth as a developer. Here's a
              look at my education, practical experience and professional
              training.
            </p>
          </div>
        </Reveal>

        {/* Journey introduction */}
        <Reveal direction="up" delay={0.1}>
          <div className="mb-16 flex flex-col items-center justify-between gap-5 rounded-3xl border border-white/10 bg-white/3 p-6 backdrop-blur-xl md:flex-row md:p-8">
            <div className="flex items-center gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
                <Sparkles size={25} />
              </div>

              <div>
                <p className="mb-1 text-lg font-semibold text-white">
                  Building my developer journey
                </p>
                <p className="text-sm text-slate-400">
                  From computer science fundamentals to full-stack development.
                </p>
              </div>
            </div>

            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-medium text-emerald-300">
              Open to opportunities
            </span>
          </div>
        </Reveal>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute bottom-0 left-5 top-0 w-px bg-linear-to-b from-violet-400 via-fuchsia-500/50 to-transparent md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-14">
            {experiences.map((item, index) => {
              const Icon = item.icon;
              const isRight = index % 2 === 0;

              return (
                <div
                  key={item.number}
                  className={`relative flex items-start md:items-center ${
                    isRight ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline marker */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 150,
                    }}
                    whileHover={{ scale: 1.15 }}
                    className="absolute left-5 top-8 z-10 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-violet-300/30 bg-[#17102b] text-violet-300 shadow-[0_0_25px_rgba(139,92,246,0.25)] md:left-1/2"
                  >
                    <Icon size={18} />
                  </motion.div>

                  {/* Timeline card */}
                  <div
                    className={`ml-16 w-full md:ml-0 md:w-[calc(50%-55px)] ${
                      isRight ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <Reveal
                      direction={isRight ? "left" : "right"}
                      delay={index * 0.12}
                    >
                      <motion.div
                        whileHover={{ y: -7 }}
                        transition={{ duration: 0.3 }}
                        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-300 hover:border-violet-400/40 hover:bg-white/5.5 md:p-8"
                      >
                        {/* Card glow */}
                        <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-500/10 blur-[80px] transition-all duration-500 group-hover:bg-violet-500/20" />

                        <div className="relative">
                          {/* Number and type */}
                          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                            <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[2px] text-violet-300">
                              {item.type}
                            </span>

                            <span className="text-sm font-semibold text-white/20">
                              {item.number}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="mb-4 text-xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-violet-300 md:text-2xl">
                            {item.title}
                          </h3>

                          {/* Organization */}
                          <p className="mb-3 text-sm font-medium text-violet-300">
                            {item.organization}
                          </p>

                          {/* Date and location */}
                          <div className="mb-6 flex flex-wrap gap-x-5 gap-y-3 text-xs text-slate-400">
                            <span className="flex items-center gap-2">
                              <CalendarDays
                                size={14}
                                className="text-violet-400"
                              />
                              {item.period}
                            </span>

                            <span className="flex items-center gap-2">
                              <MapPin size={14} className="text-violet-400" />
                              {item.location}
                            </span>
                          </div>

                          {/* Divider */}
                          <div className="mb-6 h-px bg-linear-to-r from-violet-500/30 to-transparent" />

                          {/* Description */}
                          <p className="mb-7 text-sm leading-7 text-slate-400">
                            {item.description}
                          </p>

                          {/* Technologies */}
                          <div>
                            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[2px] text-slate-500">
                              Technologies & Focus
                            </p>

                            <div className="flex flex-wrap gap-2">
                              {item.technologies.map((tech, techIndex) => (
                                <motion.span
                                  key={tech}
                                  initial={{ opacity: 0, y: 8 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true }}
                                  transition={{
                                    duration: 0.3,
                                    delay: techIndex * 0.06,
                                  }}
                                  whileHover={{ y: -3 }}
                                  className="rounded-lg border border-white/8 bg-white/4 px-3 py-2 text-xs text-slate-300 transition-colors hover:border-violet-400/30 hover:text-violet-300"
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </div>

                          <div className="mt-7 flex justify-end text-violet-400/50 transition-all duration-300 group-hover:translate-x-1 group-hover:text-violet-300">
                            <ArrowUpRight size={19} />
                          </div>
                        </div>
                      </motion.div>
                    </Reveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
