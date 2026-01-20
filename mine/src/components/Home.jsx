import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Background from "./Background";

export default function Home() {
  const [hovered, setHovered] = useState(false);
  const [cursor, setCursor] = useState({ x: -100, y: -100 });
  const headlineRef = useRef(null);

  // Track mouse position for custom cursor
  useEffect(() => {
    const moveCursor = (e) => {
      if (headlineRef.current && headlineRef.current.contains(e.target)) {
        setCursor({ x: e.clientX, y: e.clientY });
      } else {
        setCursor({ x: -100, y: -100 });
      }
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // Smooth scroll to next section
  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <Background>
      {/* Animated headline */}
      <motion.div
        ref={headlineRef}
        className="relative z-10 text-white font-bold cursor-pointer select-none px-4"
        style={{ fontSize: "clamp(2rem, 5vw, 3rem)", textAlign: "center" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={{
          scale: hovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        {hovered ? (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            Innovate. Create. Elevate.
          </motion.span>
        ) : (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <span>Welcome to </span>
            <span className="text-cyan-400 font-extrabold text-3xl md:text-5xl">
              QBix
            </span>
          </motion.span>
        )}
      </motion.div>

      {/* Custom animated cursor (circle forms on hover) */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="fixed pointer-events-none z-20"
            style={{
              left: cursor.x - 60,
              top: cursor.y - 60,
              width: 120,
              height: 120,
              borderRadius: "50%",
              border: "2px solid rgba(34, 211, 238, 0.6)",
              background: "radial-gradient(circle, rgba(34, 211, 238, 0.1) 0%, transparent 70%)",
              boxShadow: "0 0 40px rgba(34, 211, 238, 0.3)",
            }}
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.3, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        )}
      </AnimatePresence>

      {/* Scroll down indicator */}
      <div className="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
        <button
          onClick={scrollDown}
          className="text-white text-sm md:text-lg bg-black/40 px-4 py-2 rounded-full shadow-lg hover:bg-white hover:text-black transition-colors duration-200"
        >
          Scroll Down
        </button>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-2"
        >
          <ChevronDown className="w-6 h-6 text-white" />
        </motion.div>
      </div>
    </Background>
  );
}
