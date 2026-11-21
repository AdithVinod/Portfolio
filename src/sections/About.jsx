import {
  Code2,
  Server,
  Lightbulb,
  GraduationCap,
  Gamepad2,
  Laptop,
  Dumbbell,
  ArrowUpRight,
  Sparkles,
  Braces,
} from "lucide-react";

import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

function About() {
  const highlights = [
    {
      icon: Code2,
      number: "01",
      title: "Frontend Development",
      description:
        "Creating responsive and interactive user interfaces using React.js, JavaScript and Tailwind CSS.",
    },
    {
      icon: Server,
      number: "02",
      title: "Backend Development",
      description:
        "Building RESTful APIs and backend applications using Node.js, Express.js and MongoDB.",
    },
    {
      icon: Lightbulb,
      number: "03",
      title: "Problem Solving",
      description:
        "Developing practical solutions through programming, logical thinking and database technologies.",
    },
    {
      icon: GraduationCap,
      number: "04",
      title: "Education",
      description:
        "B.Tech in Computer Science and Engineering from Vimal Jyothi Engineering College.",
    },
  ];

  const interests = [
    { icon: Gamepad2, name: "Gaming" },
    { icon: Laptop, name: "Exploring Technology" },
    { icon: Dumbbell, name: "Fitness" },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#090616] py-28 px-6"
    >
      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-45 w-100 h-100 bg-violet-700/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 -right-37.5 w-112.5 h-112.5 bg-fuchsia-700/10 blur-[160px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* SECTION HEADING */}
        <Reveal direction="up">
          <div className="flex items-center gap-4 mb-16">
            <span className="text-violet-400 font-mono text-sm">01 /</span>

            <div>
              <p className="text-violet-400 text-xs font-semibold tracking-[4px] uppercase mb-2">
                Get to know me
              </p>

              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                About{" "}
                <span className="bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Me.
                </span>
              </h2>
            </div>

            <div className="hidden sm:block h-px flex-1 bg-linear-to-r from-violet-500/40 to-transparent ml-5" />
          </div>
        </Reveal>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <Reveal direction="left">
            <div className="relative">
              {/* Decorative AV panel */}
              <div className="relative flex items-center gap-5 mb-12 p-6 rounded-2xl border border-violet-400/15 bg-linear-to-r from-violet-500/10 via-slate-900/60 to-transparent overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-violet-500/10 blur-[70px] rounded-full" />

                <div className="relative w-20 h-20 shrink-0 rounded-2xl border border-violet-400/30 bg-linear-to-br from-violet-500/30 to-purple-900/50 flex items-center justify-center shadow-lg shadow-violet-950/40">
                  <span className="text-4xl font-black text-transparent bg-clip-text bg-linear-to-br from-white to-violet-300">
                    AV
                  </span>
                </div>

                <div className="relative">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles size={14} className="text-violet-400" />
                    <span className="text-xs text-violet-300 tracking-widest uppercase">
                      A little about me
                    </span>
                  </div>

                  <h3 className="text-white text-xl font-semibold">
                    Developer. Creator. Problem Solver.
                  </h3>

                  <p className="text-gray-500 text-sm mt-1">
                    Turning ideas into digital experiences.
                  </p>
                </div>
              </div>

              {/* Introduction */}
              <p className="text-violet-400 text-sm font-semibold tracking-[3px] uppercase mb-4">
                Who I am
              </p>

              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-7">
                Turning ideas into{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-fuchsia-400">
                  functional digital experiences.
                </span>
              </h3>

              <p className="text-gray-400 leading-8 mb-5">
                I'm a Computer Science graduate with hands-on experience in
                full-stack web development. I enjoy creating responsive and
                user-friendly applications using modern web technologies.
              </p>

              <p className="text-gray-400 leading-8 mb-5">
                My experience includes working with React.js, Node.js,
                Express.js and MongoDB, along with developing RESTful APIs and
                managing databases.
              </p>

              <p className="text-gray-400 leading-8 mb-8">
                I'm interested in solving real-world problems through software
                development and building applications that provide practical
                value.
              </p>

              {/* Explore work */}
              <motion.a
                href="#projects"
                whileHover={{ x: 7 }}
                className="inline-flex items-center gap-3 text-violet-300 font-medium group"
              >
                Explore my work
                <ArrowUpRight
                  size={19}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </motion.a>

              {/* Interests */}
              <div className="mt-14 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <Braces size={19} className="text-violet-400" />
                  <h4 className="text-white font-semibold text-lg">
                    Beyond Coding
                  </h4>
                </div>

                <div className="flex flex-wrap gap-3">
                  {interests.map((interest, index) => {
                    const Icon = interest.icon;

                    return (
                      <motion.div
                        key={interest.name}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.12 }}
                        whileHover={{ y: -5, scale: 1.04 }}
                        className="flex items-center gap-2 px-4 py-3 rounded-xl border border-white/10 bg-white/3 backdrop-blur-md text-gray-300 hover:border-violet-400/50 hover:bg-violet-500/10 transition-colors"
                      >
                        <Icon size={17} className="text-violet-400" />
                        <span className="text-sm">{interest.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Quote */}
              <div className="relative mt-9 p-5 rounded-xl border-l-2 border-violet-500 bg-violet-500/6">
                <Sparkles size={16} className="text-violet-400 mb-3" />

                <p className="text-gray-300 italic leading-7">
                  "Strive to create, build and make a difference through
                  technology!"
                </p>
              </div>
            </div>
          </Reveal>

          {/* RIGHT SIDE - HIGHLIGHTS */}
          <div className="relative">
            {/* Ambient glow */}
            <div className="absolute inset-10 bg-violet-600/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative grid sm:grid-cols-2 gap-5">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.number} direction="up" delay={index * 0.15}>
                    <motion.div
                      whileHover={{ y: -9, scale: 1.025 }}
                      transition={{ duration: 0.25 }}
                      className="group relative h-full min-h-61.25 overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-white/[0.07] to-white/1.5 backdrop-blur-xl p-7 hover:border-violet-400/40 transition-colors"
                    >
                      {/* Decorative glow */}
                      <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-violet-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative flex items-center justify-between mb-8">
                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-violet-500/10 border border-violet-400/20 text-violet-300 group-hover:bg-violet-500 group-hover:text-white group-hover:border-violet-400 transition-all duration-300">
                          <Icon size={23} />
                        </div>

                        <span className="text-xs font-mono text-violet-400/60">
                          / {item.number}
                        </span>
                      </div>

                      <div className="relative">
                        <h4 className="text-white text-lg font-semibold mb-3">
                          {item.title}
                        </h4>

                        <p className="text-gray-400 text-sm leading-7">
                          {item.description}
                        </p>
                      </div>

                      {/* Bottom accent */}
                      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-linear-to-r from-violet-500 to-fuchsia-500 group-hover:w-full transition-all duration-500" />
                    </motion.div>
                  </Reveal>
                );
              })}
            </div>

            {/* Bottom decorative element */}
            <Reveal direction="up" delay={0.5}>
              <div className="mt-6 flex items-center justify-between rounded-2xl border border-violet-400/15 bg-violet-500/5 px-6 py-5">
                <div>
                  <p className="text-xs tracking-widest text-violet-400 uppercase mb-2">
                    My approach
                  </p>
                  <p className="text-white font-medium">
                    Learn. Build. Improve.
                  </p>
                </div>

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-11 h-11 rounded-full border border-violet-400/30 flex items-center justify-center"
                >
                  <Sparkles size={20} className="text-violet-300" />
                </motion.div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
