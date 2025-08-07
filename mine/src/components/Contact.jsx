import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden min-w-screen scrollbar-hide" style={{background: "#181c2f"}}>
      {/* 3D orb effect for consistency */}
      <motion.div
        className="absolute left-1/2 top-1/2"
        style={{
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.13)",
          filter: "blur(12px)",
          zIndex: 1,
          transform: "translate(-50%, -50%)"
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.08, 1],
          x: [0, 20, -20, 0],
          y: [0, -10, 10, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear"
        }}
      />
      <div className=" inset-0 bg-black/20 pointer-events-none z-2" />
<h2 className="text-4xl font-extrabold text-white mb-6 ">
          The only thing u need to..
        </h2>
      <div className="relative z-10 flex flex-col items-center w-full max-w-lg px-8 py-12 rounded-2xl bg-white/5 backdrop-blur shadow-xl">
        
        <form className="w-full flex flex-col gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 rounded bg-white/10 text-white placeholder-gray-400 outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded bg-white/10 text-white placeholder-gray-400 outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="px-4 py-3 rounded bg-white/10 text-white placeholder-gray-400 outline-none resize-none"
          />
          <button
            type="submit"
            className="bg-cyan-400 text-black font-bold py-3 rounded shadow hover:bg-cyan-300 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}
