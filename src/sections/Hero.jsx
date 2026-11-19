import { ArrowUpRight, Download, Code2, Sparkles, Mouse } from "lucide-react";
import { motion } from "framer-motion";

const technologies = [
  { name: "REACT.JS", angle: 0 },
  { name: "NODE.JS", angle: 90 },
  { name: "MONGODB", angle: 180 },
  { name: "EXPRESS.JS", angle: 270 },
];

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#070510] text-white px-6 pt-28 pb-12 flex items-center"
    >
      {/* Cinematic background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-150 bg-violet-700/20 blur-[180px] rounded-full" />
        <div className="absolute -bottom-62.5 -right-25 w-150 h-150 bg-fuchsia-700/10 blur-[180px] rounded-full" />

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(167,139,250,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.3) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
            maskImage:
              "radial-gradient(ellipse at center, black, transparent 75%)",
          }}
        />

        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#070510]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-4">
          {/* LEFT: INTRODUCTION */}
          <div className="relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 border border-violet-400/30 bg-violet-400/10 backdrop-blur-md rounded-full px-4 py-2 mb-9"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
              <span className="text-xs sm:text-sm tracking-wide text-violet-200">
                AVAILABLE FOR OPPORTUNITIES
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-gray-400 text-xl mb-3"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.25 }}
              className="w-full text-[clamp(3.25rem,10vw,8rem)] font-black tracking-[-0.055em] leading-[0.95]"
            >
              <span className="block whitespace-nowrap">ADITH</span>

              <span className="block whitespace-nowrap text-transparent bg-clip-text bg-linear-to-r from-violet-300 via-purple-400 to-fuchsia-500">
                VINOD<span className="text-violet-500">.</span>
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex items-center gap-3 mt-7 mb-6"
            >
              <div className="h-0.5 w-10 bg-violet-500" />
              <h2 className="text-xl sm:text-2xl font-medium text-violet-300 tracking-wide">
                Full Stack Developer
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-lg text-gray-400 text-base sm:text-lg leading-relaxed mb-9"
            >
              Computer Science graduate passionate about building responsive web
              applications and practical digital solutions using modern web
              technologies.
            </motion.p>

            {/* ACTION BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.96 }}
                className="group flex items-center gap-3 rounded-xl bg-linear-to-r from-violet-600 to-fuchsia-600 px-6 py-3.5 font-medium text-white shadow-xl shadow-violet-900/30"
              >
                Explore My Work
                <ArrowUpRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </motion.a>

              <motion.a
                href="/Resume - Adith Vinod.pdf"
                download
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/4 backdrop-blur-md px-6 py-3.5 font-medium text-white hover:border-violet-400/60 transition-colors"
              >
                <Download size={18} />
                Resume
              </motion.a>
            </motion.div>
          </div>

          {/* RIGHT: DIGITAL UNIVERSE */}
          <div className="relative min-h-107.5 sm:min-h-137.5 flex items-center justify-center">
            {/* Large atmospheric glow */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.55, 0.3],
              }}
              transition={{ duration: 7, repeat: Infinity }}
              className="absolute w-75 h-75 sm:w-117.5 sm:h-117.5 rounded-full bg-violet-600/30 blur-[100px]"
            />

            {/* Outer orbit */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-77.5 h-77.5 sm:w-125 sm:h-125 rounded-full border border-violet-400/20"
            >
              <span className="absolute top-[12%] left-[16%] w-3 h-3 bg-violet-300 rounded-full shadow-[0_0_25px_#a78bfa]" />
              <span className="absolute bottom-[15%] right-[10%] w-2 h-2 bg-fuchsia-400 rounded-full shadow-[0_0_20px_#e879f9]" />
            </motion.div>

            {/* Second orbit */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 32,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-65 h-65 sm:w-100 sm:h-100 rounded-full border border-dashed border-purple-300/20"
            >
              <span className="absolute top-1/2 -right-1 w-2 h-2 bg-purple-300 rounded-full" />
            </motion.div>

            {/* Inner orbit */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 24,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-52.5 h-52.5 sm:w-[320px] sm:h-80 rounded-full border border-violet-300/10"
            />

            {/* Main glowing sphere */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 w-47.5 h-47.5 sm:w-72.5 sm:h-72.5 rounded-full flex items-center justify-center"
            >
              {/* Sphere layers */}
              <div className="absolute inset-0 rounded-full bg-linear-to-br from-violet-400/30 via-purple-900/50 to-fuchsia-700/30 blur-[2px] border border-violet-300/40 shadow-[inset_-20px_-20px_60px_rgba(0,0,0,0.8),0_0_80px_rgba(139,92,246,0.35)]" />

              <div className="absolute inset-3 rounded-full border border-violet-200/20 bg-linear-to-br from-violet-500/20 via-transparent to-fuchsia-500/20" />

              <div className="absolute inset-[18%] rounded-full border border-violet-300/20 shadow-[0_0_40px_rgba(167,139,250,0.2)]" />

              {/* Light reflection */}
              <div className="absolute top-[12%] left-[20%] w-[35%] h-[18%] bg-violet-200/20 blur-2xl rounded-full rotate-[-35deg]" />

              {/* Center content */}
              <div className="relative z-10 text-center">
                <Sparkles size={25} className="mx-auto mb-3 text-violet-200" />
                <span className="text-6xl sm:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-br from-white via-violet-200 to-violet-500">
                  AV
                </span>
                <div className="w-12 h-0.5 bg-linear-to-r from-transparent via-violet-300 to-transparent mx-auto mt-3" />
                <p className="text-[9px] sm:text-xs tracking-[0.35em] text-violet-200 mt-3">
                  DIGITAL CREATOR
                </p>
              </div>
            </motion.div>

            {/* Orbiting technology labels */}
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                animate={{
                  y: [0, -8, 0],
                  opacity: [0.75, 1, 0.75],
                }}
                transition={{
                  duration: 3 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.4,
                }}
                className={`absolute z-20 ${
                  index === 0
                    ? "top-[8%] left-[5%]"
                    : index === 1
                      ? "top-[20%] right-0"
                      : index === 2
                        ? "bottom-[15%] left-0"
                        : "bottom-[8%] right-[5%]"
                }`}
              >
                <div className="flex items-center gap-2 border border-violet-300/20 bg-[#100c20]/90 backdrop-blur-xl rounded-full px-3 py-2 shadow-lg shadow-violet-950/40">
                  <Code2 size={13} className="text-violet-300" />
                  <span className="text-[10px] sm:text-xs tracking-wider text-violet-100 font-medium">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            ))}

            {/* Small floating accent */}
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity },
              }}
              className="absolute top-[5%] right-[25%] text-violet-300/60"
            >
              <Sparkles size={24} />
            </motion.div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-5 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
        >
          <div className="flex flex-wrap gap-3 sm:gap-5 text-xs tracking-wider text-gray-500">
            <span>REACT</span>
            <span className="text-violet-500">✦</span>
            <span>JAVASCRIPT</span>
            <span className="text-violet-500">✦</span>
            <span>NODE.JS</span>
            <span className="text-violet-500">✦</span>
            <span>MONGODB</span>
          </div>

          <motion.a
            href="#about"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center gap-2 text-xs text-gray-500 hover:text-violet-300 transition-colors"
          >
            <Mouse size={16} />
            SCROLL TO EXPLORE
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
