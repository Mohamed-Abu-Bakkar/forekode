import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Circle } from "lucide-react";
import Background from "./Background";

// Projects data: title, description, image, and tech stack
const projects = [
  {
    // Project 1: QBix Website
    title: "QBix Website",
    desc: "A modern, responsive website.",
    img: "/QBix.png",
    tech: ["React", "Framer Motion", "TailwindCSS", "Vercel"],
  },
  {
    // Project 2: SnapCard (XLS to vCard)
    title: "SnapCard",
    desc: "A tool that converts Excel into vCard (VCF) files.",
    img: "/SnapCard.png",
    tech: ["Vue.js", "Node.js", "Express", "SheetJS"],
  },
  {
    // Project 3: BusMate
    title: "BusMate",
    desc: "A smart bus management platform for schools.",
    img: "/BusMate.png",
    tech: ["Next.js", "Firebase", "Mapbox", "Chakra UI"],
  },
];

export default function Projects() {
  // hovered: index of hovered project card (for desktop hover effect)
  const [hovered, setHovered] = useState(null);

  return (
    <Background>
      {/* Section Title */}
      <h2 className="relative z-10 text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8 tracking-wide text-center mt-12 px-4">
        What We've Done
      </h2>
      {/* Main container for timeline and cards */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Timeline vertical line (desktop only, hidden on mobile) */}
        <div
          className="absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-purple-400 via-blue-400 to-indigo-400 rounded-full -translate-x-1/2 hidden md:block"
          style={{ zIndex: 3 }}
        />
        {/* Project cards list */}
        <div className="w-full flex flex-col gap-6 md:gap-8">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="relative flex flex-col md:flex-row items-center justify-between w-full"
            >
              {/* Timeline dot (desktop only) */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
                <Circle className="w-4 h-4 text-white border border-purple-400 fill-white shadow" />
              </div>
              {/* Project Card container: responsive width, order, and alignment */}
              <div
                className={`w-full md:w-5/12 ${
                  i % 2 === 0 ? "md:order-1" : "md:order-3"
                } flex justify-center md:justify-${
                  i % 2 === 0 ? "end" : "start"
                }`}
              >
                <motion.div
                  // Card: responsive sizing, rounded, shadow, border, glassy bg
                  className="relative w-full max-w-sm sm:max-w-md md:max-w-lg rounded-xl overflow-hidden shadow-lg border border-white/10 bg-white/10 cursor-pointer flex flex-col"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  animate={{
                    scale: hovered === i ? 1.02 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                  style={{ zIndex: 4 }}
                >
                  {/* Project image: responsive height */}
                  <div className="relative h-48 sm:h-56 md:h-64">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Card content always visible on mobile, overlay on desktop hover */}
                  <div className="p-4 md:hidden">
                    {/* Project title: responsive text sizing */}
                    <div className="font-extrabold text-lg sm:text-xl md:text-2xl text-white text-center drop-shadow mb-2">
                      {p.title}
                    </div>
                    {/* Project description: responsive text sizing */}
                    <div className="font-medium text-white text-center mb-3 opacity-90 text-sm sm:text-base md:text-lg">
                      {p.desc}
                    </div>
                    {/* Tech stack badges: responsive sizing */}
                    <div className="flex flex-wrap gap-2 justify-center">
                      {p.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="bg-cyan-500/90 text-xs sm:text-sm font-bold px-2 py-1 rounded shadow text-black"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Desktop hover overlay */}
                  <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 bg-black/70 font-extrabold text-center rounded-xl hidden md:flex"
                    animate={{
                      opacity: hovered === i ? 1 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                    style={{ zIndex: 5 }}
                  >
                    <div className="mb-2 text-lg sm:text-xl md:text-2xl">
                      {p.title}
                    </div>
                    <div className="font-semibold mb-3 text-sm sm:text-base md:text-lg">
                      {p.desc}
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {p.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="bg-cyan-500/80 text-xs sm:text-sm font-bold px-2 py-1 rounded shadow text-black"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </div>
              {/* Spacer for timeline symmetry (desktop only) */}
              <div className="w-1/5 md:order-2 hidden md:block" />
            </div>
          ))}
        </div>
      </div>
    </Background>
  );
}
