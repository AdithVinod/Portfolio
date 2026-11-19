import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

import {
  ArrowUpRight,
  ExternalLink,
  ShoppingBag,
  ShieldCheck,
  Database,
  Search,
  Terminal,
  Image,
  Code2,
  CheckCircle2,
} from "lucide-react";

import Reveal from "../components/Reveal";

function MarketplacePreview() {
  return (
    <div className="relative h-full min-h-67.5 overflow-hidden rounded-2xl border border-white/10 bg-[#100d20] p-5">
      <div className="absolute top-0 right-0 w-48 h-48 bg-violet-600/20 blur-[80px]" />

      <div className="relative flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <ShoppingBag size={18} className="text-violet-400" />
          <span className="font-bold text-white text-sm">marketplace.</span>
        </div>
        <div className="flex gap-2">
          <span className="w-6 h-6 rounded-full bg-white/10" />
          <span className="w-6 h-6 rounded-full bg-violet-500/30" />
        </div>
      </div>

      <div className="relative mt-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-white text-lg font-bold">Discover products</p>
            <p className="text-gray-500 text-xs mt-1">
              Find something you love
            </p>
          </div>
          <span className="text-[10px] text-violet-300 border border-violet-400/20 rounded-full px-3 py-1">
            EXPLORE
          </span>
        </div>

        <div className="flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-3 py-2 mb-4">
          <Search size={14} className="text-gray-500" />
          <span className="text-gray-500 text-xs">Search products...</span>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: "📱", label: "Electronics", color: "from-blue-500/20" },
            { icon: "🚲", label: "Vehicles", color: "from-violet-500/20" },
            { icon: "🛋️", label: "Furniture", color: "from-fuchsia-500/20" },
          ].map((item) => (
            <div
              key={item.label}
              className={`rounded-xl bg-linear-to-br ${item.color} to-slate-900 border border-white/10 p-3 text-center`}
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <p className="text-[10px] text-gray-300">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-3 right-4 text-[9px] tracking-widest text-gray-600">
        MARKETPLACE UI CONCEPT
      </div>
    </div>
  );
}

function StegoPreview() {
  return (
    <div className="relative h-full min-h-60 overflow-hidden rounded-2xl border border-white/10 bg-[#0c1420] p-5">
      <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 blur-[80px]" />

      <div className="relative flex justify-between items-center mb-5">
        <div className="flex items-center gap-2">
          <ShieldCheck size={18} className="text-emerald-400" />
          <span className="text-white text-sm font-semibold">
            Image Analysis
          </span>
        </div>
        <span className="text-[9px] text-emerald-300 border border-emerald-500/20 px-2 py-1 rounded-full">
          ANALYSIS
        </span>
      </div>

      <div className="relative flex gap-4 items-center">
        <div className="relative w-28 h-28 shrink-0 rounded-xl overflow-hidden bg-linear-to-br from-indigo-500/50 via-purple-700/40 to-slate-950 border border-violet-400/30 flex items-center justify-center">
          <Image size={45} className="text-violet-200" />

          <motion.div
            animate={{ y: [0, 100, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-0.5 bg-emerald-400 shadow-[0_0_15px_#34d399]"
          />
          <div className="absolute inset-0 bg-linear-to-br from-transparent via-emerald-400/5 to-transparent" />
        </div>

        <div className="flex-1 space-y-3">
          <div>
            <p className="text-gray-500 text-[10px] mb-1">ANALYSIS MODULE</p>
            <p className="text-white text-xs font-semibold">
              Statistical Steganalysis
            </p>
          </div>

          {["LSB Analysis", "Chi-Square Test", "Entropy Analysis"].map(
            (item, i) => (
              <div key={item}>
                <div className="flex justify-between text-[9px] text-gray-400 mb-1">
                  <span>{item}</span>
                  <span className="text-emerald-400">Ready</span>
                </div>
                <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: `${85 - i * 12}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.2 }}
                    className="h-full rounded-full bg-emerald-400"
                  />
                </div>
              </div>
            ),
          )}
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2 text-[10px] text-gray-500">
        <CheckCircle2 size={13} className="text-emerald-400" />
        Image analysis visualization
      </div>
    </div>
  );
}

function ApiPreview() {
  return (
    <div className="relative h-full min-h-60 overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b17] p-5">
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
        <div className="flex items-center gap-2">
          <Terminal size={17} className="text-violet-400" />
          <span className="text-white text-sm font-semibold">API Console</span>
        </div>
        <span className="text-[10px] text-gray-500">localhost:3000</span>
      </div>

      <div className="font-mono text-xs space-y-4">
        <div>
          <p className="text-gray-500 mb-2">// User management API</p>
          <p>
            <span className="text-emerald-400">GET</span>
            <span className="text-gray-300 ml-3">/api/users</span>
          </p>
        </div>

        <div className="rounded-lg border border-white/10 bg-black/30 p-3">
          <p className="text-gray-500 mb-2">// Response</p>
          <p className="text-gray-400">{"{"}</p>
          <p className="pl-4">
            <span className="text-violet-300">"status"</span>
            <span className="text-gray-400">: </span>
            <span className="text-emerald-300">"success"</span>,
          </p>
          <p className="pl-4">
            <span className="text-violet-300">"message"</span>
            <span className="text-gray-400">: </span>
            <span className="text-emerald-300">"Users fetched"</span>,
          </p>
          <p className="pl-4">
            <span className="text-violet-300">"data"</span>
            <span className="text-gray-400">: </span>
            <span className="text-orange-300">[ ... ]</span>
          </p>
          <p className="text-gray-400">{"}"}</p>
        </div>

        <div className="flex items-center gap-2 text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          200 OK
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const projects = [
    {
      number: "01",
      title: "OLX Clone",
      category: "Web Application",
      description:
        "Developed a classified marketplace application where users can create, manage, search and browse product listings.",
      features: [
        "Firebase Authentication",
        "Product Listing Management",
        "Search and Filtering",
        "Edit and Delete Listings",
      ],
      technologies: ["React.js", "Tailwind CSS", "Firebase", "Firestore"],
      github: "https://github.com/AdithVinod/Olx-Clone-Using-React",
      demo: "https://olx-clone-using-react-ashy.vercel.app/",
      visual: MarketplacePreview,
      featured: true,
    },
    {
      number: "02",
      title: "Stego Image Detection and Region Mapping",
      category: "Cybersecurity",
      description:
        "Developed an application to detect hidden data in images using statistical steganalysis techniques.",
      features: [
        "LSB Distribution Analysis",
        "Chi-Square Test",
        "Hidden Message Extraction",
        "Image Visualization",
      ],
      technologies: ["Python", "Flask", "NumPy", "OpenCV", "PIL"],
      github: "https://github.com/AdithVinod/Stego-Image-Detection",
      demo: "",
      visual: StegoPreview,
    },
    {
      number: "03",
      title: "User Management REST API",
      category: "Backend Development",
      description:
        "Built a RESTful API to manage user records with MongoDB and Mongoose.",
      features: [
        "CRUD Operations",
        "Request Validation",
        "Error Handling",
        "HTTP Status Codes",
      ],
      technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
      github: "https://github.com/AdithVinod/REST_API",
      demo: "",
      visual: ApiPreview,
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#090616] py-28 px-6"
    >
      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 -left-37.5 w-112.5 h-112.5 bg-violet-700/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 -right-37.5 w-112.5 h-112.5 bg-fuchsia-700/10 blur-[150px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* SECTION HEADING */}
        <Reveal direction="up">
          <div className="flex items-center gap-4 mb-5">
            <span className="text-violet-400 font-mono text-sm">03 /</span>
            <div>
              <p className="text-violet-400 text-xs font-semibold tracking-[4px] uppercase mb-2">
                Selected work
              </p>
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                Featured <span className="text-violet-400">Projects.</span>
              </h2>
            </div>
            <div className="hidden sm:block h-px flex-1 bg-linear-to-r from-violet-500/40 to-transparent ml-5" />
          </div>

          <p className="text-gray-400 max-w-2xl leading-8 mb-14">
            A collection of projects I've developed using modern technologies,
            focusing on practical applications and real-world problems.
          </p>
        </Reveal>

        {/* PROJECT SHOWCASE */}
        <div className="space-y-7">
          {projects.map((project, index) => {
            const Preview = project.visual;

            return (
              <Reveal key={project.number} direction="up" delay={index * 0.12}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-white/5.5 to-white/1.5 backdrop-blur-xl p-5 md:p-8 hover:border-violet-400/40 hover:shadow-2xl hover:shadow-violet-950/20 transition-colors duration-300 ${
                    project.featured ? "lg:p-10" : ""
                  }`}
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/5 blur-[100px] rounded-full group-hover:bg-violet-500/10 transition-colors" />

                  <div
                    className={`relative grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 ${
                      index === 1 ? "lg:grid-flow-dense" : ""
                    }`}
                  >
                    {/* Project visual */}
                    <div className={index === 1 ? "lg:col-start-2" : ""}>
                      <motion.div
                        whileHover={{ scale: 1.015 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Preview />
                      </motion.div>
                    </div>

                    {/* Project details */}
                    <div
                      className={
                        index === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                      }
                    >
                      <div className="flex flex-wrap items-center gap-3 mb-6">
                        <span className="text-violet-400 font-mono text-sm tracking-widest">
                          PROJECT / {project.number}
                        </span>
                        <span className="text-xs text-gray-400 border border-white/10 rounded-full px-3 py-1.5">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-5 group-hover:text-violet-300 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-gray-400 leading-7 text-sm md:text-base mb-7">
                        {project.description}
                      </p>

                      <div className="mb-7">
                        <h4 className="text-white text-sm font-semibold mb-4">
                          Key Features
                        </h4>

                        <ul className="grid sm:grid-cols-2 gap-3">
                          {project.features.map((feature, featureIndex) => (
                            <motion.li
                              key={feature}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.35,
                                delay: featureIndex * 0.07,
                              }}
                              className="flex items-start gap-2 text-gray-400 text-sm"
                            >
                              <span className="text-violet-400">✦</span>
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs text-violet-300 bg-violet-500/10 border border-violet-500/20 px-3 py-2 rounded-lg"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Project links */}
                      <div className="flex flex-wrap gap-3 pt-6 border-t border-white/10">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          whileHover={{ y: -3, scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm font-medium hover:bg-white/10 hover:border-violet-500/50 hover:text-white transition-colors"
                        >
                          <FaGithub size={18} />
                          GitHub
                          <ArrowUpRight size={15} />
                        </motion.a>

                        {project.demo && (
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ y: -3, scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-linear-to-r from-violet-600 to-purple-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-violet-500/20 transition-shadow"
                          >
                            Live Demo
                            <ExternalLink size={15} />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>

        {/* FOOTER NOTE */}
        <Reveal direction="up" delay={0.2}>
          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 pt-7">
            <p className="text-sm text-gray-500">
              Built with curiosity, creativity and code.
            </p>

            <a
              href="https://github.com/AdithVinod?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-violet-300 text-sm hover:text-violet-200 transition-colors"
            >
              More on GitHub
              <ArrowUpRight size={17} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Projects;
