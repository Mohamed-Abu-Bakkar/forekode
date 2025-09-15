import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
        initial={false}
        animate={{
          scale: hovered ? 1.15 : 1,
          opacity: hovered ? 0.8 : 1,
          letterSpacing: hovered ? "0.1em" : "normal",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={hovered ? "welcome" : "innovate"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {hovered ? (
              <>Innovate. Create. Elevate.</>
            ) : (
              <>
                <span>Welcome to </span>

                <span className="text-cyan-400 font-extrabold text-3xl md:text-5xl">
                  QBix
                </span>
              </>
            )}
          </motion.span>
        </AnimatePresence>
      </motion.div>

      {/* Custom animated cursor (bigger diameter) */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="fixed pointer-events-none z-20"
            style={{
              left: cursor.x - 80,
              top: cursor.y - 80,
              width: 160,
              height: 160,
              borderRadius: "50%",
              border: "3px solid white",
              background: "white",
              mixBlendMode: "difference",
              boxShadow: "0 0 64px 16px rgba(255,255,255,0.15)",
            }}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>

      {/* Scroll down indicator */}
      <div className="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
        <button
          onClick={scrollDown}
          className="animate-bounce text-white text-sm md:text-lg bg-black/40 px-4 py-2 rounded-full shadow-lg hover:bg-white hover:text-black transition"
        >
          Scroll Down
        </button>
        <div className="mt-2 w-6 h-6 border-b-2 border-white border-r-2 rotate-45" />
      </div>
    </Background>
  );
}
