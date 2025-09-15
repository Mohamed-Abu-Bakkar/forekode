import { motion } from "framer-motion";
import { useMemo } from "react";

export default function Background({ children }) {
  const particles = useMemo(
    () =>
      Array.from({ length: 100 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 6 + 2,
        delay: Math.random() * 10,
        color: [
          "rgba(255,255,255,0.5)",
          "rgba(147,51,234,0.5)",
          "rgba(59,130,246,0.5)",
        ][Math.floor(Math.random() * 3)], // white, purple, blue
      })),
    []
  );

  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-center py-24 overflow-hidden"
      style={{ background: "#181c2f" }}
    >
      {/* Unique 3D orb effect */}
      <motion.div
        className="absolute left-1/2 top-1/2"
        style={{
          width: 360,
          height: 360,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.07)",
          zIndex: 1,
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.05, 1],
          x: [0, 25, -25, 0],
          y: [0, -10, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 11,
          ease: "linear",
        }}
      />
      {/* Floating galaxy dust particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            zIndex: 1,
          }}
          animate={{
            y: [p.y, p.y + 20, p.y],
            x: [p.x, p.x + 10, p.x],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      <div className="absolute inset-0 bg-black/40 pointer-events-none z-2" />
      {children}
    </div>
  );
}
