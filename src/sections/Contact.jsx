import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  MapPin,
  Send,
  ArrowUpRight,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

function Contact() {
  const formRef = useRef();

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const emailAddress = "adithvinod76@gmail.com";

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSending(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );

      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });

      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSending(false);
    }
  };

  const inputStyle =
    "w-full rounded-xl border border-white/10 bg-[#100c20] px-4 py-3.5 text-sm text-white placeholder:text-slate-600 outline-none transition-all duration-300 focus:border-violet-400/60 focus:ring-2 focus:ring-violet-500/10";

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#090616] px-6 py-28"
    >
      {/* Ambient lighting */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-fuchsia-600/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section heading */}
        <Reveal direction="up">
          <div className="mb-14 flex items-center gap-4">
            <span className="shrink-0 whitespace-nowrap font-mono text-sm text-violet-400">
              05 /
            </span>

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[4px] text-violet-400">
                Get In Touch
              </p>

              <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
                Let's Work{" "}
                <span className="bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Together.
                </span>
              </h2>
            </div>

            <div className="ml-5 hidden h-px flex-1 bg-linear-to-r from-violet-500/40 to-transparent sm:block" />
          </div>

          <p className="mb-14 max-w-2xl text-sm leading-8 text-slate-400 md:text-base">
            Have a project in mind or an opportunity to discuss? I'd love to
            hear from you. Let's connect and create something meaningful.
          </p>
        </Reveal>

        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left - Contact information */}
          <Reveal direction="left">
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl md:p-10">
              {/* Card glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-600/15 blur-[100px]" />

              <div className="relative">
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
                  <MessageCircle size={25} />
                </div>

                <p className="mb-3 text-xs font-semibold uppercase tracking-[3px] text-violet-400">
                  Let's Connect
                </p>

                <h3 className="mb-5 text-2xl font-bold leading-snug text-white md:text-3xl">
                  Let's start a
                  <br />
                  <span className="bg-linear-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                    conversation.
                  </span>
                </h3>

                <p className="mb-12 max-w-md text-sm leading-7 text-slate-400">
                  I'm open to discussing software development opportunities,
                  collaborations and interesting projects. Feel free to reach
                  out!
                </p>

                {/* Email */}
                <motion.a
                  href={`mailto:${emailAddress}`}
                  whileHover={{ x: 6 }}
                  className="group mb-7 flex items-center gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-300 transition-colors group-hover:bg-violet-500/20">
                    <Mail size={21} />
                  </div>

                  <div className="min-w-0">
                    <p className="mb-1 text-xs text-slate-500">Email Me</p>
                    <p className="break-all text-sm font-medium text-white transition-colors group-hover:text-violet-300">
                      {emailAddress}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="ml-auto shrink-0 text-slate-600 transition-colors group-hover:text-violet-300"
                  />
                </motion.a>

                {/* Location */}
                <div className="mb-12 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
                    <MapPin size={21} />
                  </div>

                  <div>
                    <p className="mb-1 text-xs text-slate-500">Location</p>
                    <p className="text-sm font-medium text-white">
                      Kerala, India
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="mb-8 h-px bg-linear-to-r from-violet-500/30 to-transparent" />

                {/* Social links */}
                <div>
                  <p className="mb-5 text-sm font-semibold text-white">
                    Find me on
                  </p>

                  <div className="flex gap-4">
                    <motion.a
                      href="https://github.com/AdithVinod"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      whileHover={{ y: -5, scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-slate-400 transition-all hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white"
                    >
                      <FaGithub size={21} />
                    </motion.a>

                    <motion.a
                      href="https://www.linkedin.com/in/adith-vinod"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      whileHover={{ y: -5, scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-slate-400 transition-all hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-blue-400"
                    >
                      <FaLinkedin size={21} />
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Bottom decoration */}
              <div className="mt-auto hidden items-center gap-2 pt-12 text-xs text-slate-600 sm:flex">
                <Sparkles size={14} className="text-violet-400" />
                <span>Always open to meaningful connections.</span>
              </div>
            </div>
          </Reveal>

          {/* Right - Contact form */}
          <Reveal direction="right" delay={0.15}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="h-full rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition-colors duration-300 hover:border-violet-400/30 md:p-10"
            >
              <div className="mb-8">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[3px] text-violet-400">
                  Send a Message
                </p>

                <h3 className="text-2xl font-bold text-white">Get in touch.</h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Fill out the form below and I'll get back to you as soon as
                  possible.
                </p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                {/* Name and Email */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-xs font-medium text-slate-300"
                    >
                      Your Name
                    </label>

                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      required
                      className={inputStyle}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-xs font-medium text-slate-300"
                    >
                      Your Email
                    </label>

                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                      className={inputStyle}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="mb-2 block text-xs font-medium text-slate-300"
                  >
                    Subject
                  </label>

                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    placeholder="What is this regarding?"
                    required
                    className={inputStyle}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-xs font-medium text-slate-300"
                  >
                    Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Write your message here..."
                    rows="5"
                    required
                    className={`${inputStyle} resize-none`}
                  />
                </div>

                {/* Status */}
                {status.message && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    role="status"
                    aria-live="polite"
                    className={`rounded-xl border px-4 py-3 text-sm ${
                      status.type === "success"
                        ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                        : "border-red-400/20 bg-red-400/10 text-red-300"
                    }`}
                  >
                    {status.message}
                  </motion.p>
                )}

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isSending}
                  whileHover={!isSending ? { scale: 1.02, y: -2 } : {}}
                  whileTap={!isSending ? { scale: 0.97 } : {}}
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-linear-to-r from-violet-600 to-fuchsia-600 py-4 text-sm font-semibold text-white shadow-lg shadow-violet-900/20 transition-all duration-300 hover:shadow-violet-500/20 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSending ? "Sending..." : "Send Message"}
                  <Send size={17} />
                </motion.button>

                <p className="text-center text-xs text-slate-600">
                  Your message will be sent directly to my email.
                </p>
              </form>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
