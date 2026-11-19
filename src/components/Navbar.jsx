import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#090616]/85 backdrop-blur-xl">
      <div className="relative flex items-center justify-between px-6 py-4 md:px-12">
        {/* Logo */}
        <a
          href="#home"
          aria-label="Adith Vinod - Home"
          onClick={() => setMenuOpen(false)}
          className="flex items-center"
        >
          <img
            src="/images/av-logo.png"
            alt="AV Logo"
            className="h-11 w-11 object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-slate-400 transition-colors duration-300 hover:text-violet-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          {/* Social Links */}
          <div className="hidden items-center gap-5 sm:flex">
            <a
              href="https://github.com/AdithVinod"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:text-white"
            >
              <FaGithub size={21} />
            </a>

            <a
              href="https://www.linkedin.com/in/adith-vinod"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:text-blue-400"
            >
              <FaLinkedin size={21} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-slate-300 transition-colors hover:border-violet-400/40 hover:text-violet-300 lg:hidden"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-[#090616] lg:hidden"
          >
            <div className="flex flex-col px-6 py-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                  className="border-b border-white/6 py-3.5 text-sm text-slate-400 transition-colors hover:text-violet-300 last:border-0"
                >
                  {link.name}
                </motion.a>
              ))}

              {/* Mobile Social Links */}
              <div className="flex gap-5 pt-5">
                <a
                  href="https://github.com/AdithVinod"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  <FaGithub size={21} />
                </a>

                <a
                  href="https://www.linkedin.com/in/adith-vinod"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="text-slate-400 transition-colors hover:text-blue-400"
                >
                  <FaLinkedin size={21} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
