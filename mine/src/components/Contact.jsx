import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
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
      <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden scrollbar-hide px-2 sm:px-4">
        {/* 3D orb effect for consistency */}
        <motion.div
          className="absolute left-1/2 top-1/2"
          style={{
            width: 220,
            height: 220,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.13)",
            filter: "blur(12px)",
            zIndex: 1,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.08, 1],
            x: [0, 20, -20, 0],
            y: [0, -10, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
        />
        <div className="inset-0 bg-black/20 pointer-events-none z-2" />
        <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-white mb-2 sm:mb-4 text-center px-2 sm:px-4">
         The only thing you have to do is ..
        </h2>
        <p className="text-white/80 text-center mb-6 sm:mb-8 max-w-xl">
          We'd love to hear from you. Please fill out the form below and we'll
          get back to you as soon as possible.
        </p>
        {status === "success" && (
          <div className="mb-4 text-green-400 text-center font-semibold">
            Message sent! We'll get back to you soon.
          </div>
        )}
        {status === "error" && (
          <div className="mb-4 text-red-400 text-center font-semibold">
            Something went wrong. Please try again.
          </div>
        )}
        <div className="relative z-10 flex flex-col items-center w-full max-w-lg px-2 sm:px-4 py-8 sm:py-12 rounded-2xl bg-white/5 backdrop-blur shadow-xl">
          <form
            className="w-full flex flex-col gap-4 sm:gap-6"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Full Name"
              className="px-3 py-2 sm:px-4 sm:py-3 rounded bg-white/10 text-white placeholder-gray-400 outline-none text-sm sm:text-base"
              name="name"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="px-3 py-2 sm:px-4 sm:py-3 rounded bg-white/10 text-white placeholder-gray-400 outline-none text-sm sm:text-base"
              name="email"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="px-3 py-2 sm:px-4 sm:py-3 rounded bg-white/10 text-white placeholder-gray-400 outline-none resize-none text-sm sm:text-base"
              name="message"
              required
            />
            <button
              type="submit"
              className="bg-cyan-500 text-black font-bold py-2 sm:py-3 rounded shadow hover:bg-cyan-400 transition text-sm sm:text-base"
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
