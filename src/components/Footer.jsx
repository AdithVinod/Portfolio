import { ArrowUp, Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#070510] px-6 pt-16 pb-8">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Main footer */}
        <div className="mb-14 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <a href="#home" className="mb-5 inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/30 bg-violet-500/10 text-lg font-bold text-violet-300">
                AV
              </div>

              <span className="text-xl font-bold text-white">
                Adith<span className="text-violet-400">.</span>
              </span>
            </a>

            <p className="max-w-xs text-sm leading-7 text-slate-400">
              Full Stack Developer passionate about building modern, responsive
              and meaningful web experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[3px] text-white">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-fit text-sm text-slate-400 transition-colors duration-300 hover:text-violet-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-[3px] text-white">
              Let's Connect
            </h3>

            <p className="mb-5 text-sm leading-6 text-slate-400">
              Have an idea or opportunity? Let's connect and build something
              great.
            </p>

            <div className="flex gap-3">
              <motion.a
                href="https://github.com/AdithVinod"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-slate-400 transition-colors hover:border-violet-400/40 hover:text-white"
              >
                <FaGithub size={20} />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/adith-vinod"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-slate-400 transition-colors hover:border-violet-400/40 hover:text-blue-400"
              >
                <FaLinkedin size={20} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-violet-500/30 to-transparent" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-5 pt-7 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Adith Vinod. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-xs text-slate-500">
            Crafted with <Heart size={13} className="text-violet-400" /> using
            React & Tailwind CSS
          </p>

          <motion.a
            href="#home"
            aria-label="Back to top"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.9 }}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-300 transition-colors hover:bg-violet-500/20"
          >
            <ArrowUp size={18} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
