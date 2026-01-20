import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { CheckCircle, XCircle } from "lucide-react";
import Background from "./Background";

export default function Contact() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    emailjs
      .sendForm(
        "your_service_id", // replace with your EmailJS service ID
        "your_template_id", // replace with your EmailJS template ID
        e.target,
        "your_user_id" // replace with your EmailJS user ID (public key)
      )
      .then(
        () => {
          setStatus("success");
          e.target.reset();
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <Background>
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-8">
        {/* Simple background effect */}
        <div className="absolute left-1/2 top-1/2 w-32 h-32 bg-white/10 rounded-full blur-xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute inset-0 bg-black/10" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 sm:mb-6 text-center px-4">
          The only thing you have to do is ..
        </h2>
        <p className="text-white/80 text-center mb-6 sm:mb-8 max-w-lg text-sm sm:text-base px-4">
          We'd love to hear from you. Please fill out the form below and we'll
          get back to you as soon as possible.
        </p>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-green-400 text-center font-semibold flex items-center justify-center gap-2"
          >
            <CheckCircle className="w-5 h-5" />
            Message sent! We'll get back to you soon.
          </motion.div>
        )}
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-red-400 text-center font-semibold flex items-center justify-center gap-2"
          >
            <XCircle className="w-5 h-5" />
            Something went wrong. Please try again.
          </motion.div>
        )}
        <div className="relative z-10 flex flex-col items-center w-full max-w-md sm:max-w-lg px-4 sm:px-6 py-6 sm:py-8 rounded-2xl bg-white/10 shadow-xl border border-white/10">
          <form
            className="w-full flex flex-col gap-4 sm:gap-6"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Full Name"
              className="px-4 py-3 sm:px-4 sm:py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 outline-none text-sm sm:text-base border border-white/20 focus:border-cyan-400 transition"
              name="name"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-3 sm:px-4 sm:py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 outline-none text-sm sm:text-base border border-white/20 focus:border-cyan-400 transition"
              name="email"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="px-4 py-3 sm:px-4 sm:py-3 rounded-lg bg-white/10 text-white placeholder-gray-400 outline-none resize-none text-sm sm:text-base border border-white/20 focus:border-cyan-400 transition"
              name="message"
              required
            />
            <button
              type="submit"
              className="bg-cyan-500 text-black font-bold py-3 sm:py-3 rounded-lg shadow hover:bg-cyan-400 transition text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </Background>
  );
}
