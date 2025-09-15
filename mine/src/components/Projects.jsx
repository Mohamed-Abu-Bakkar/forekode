import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    tech: ["Vue.js", "Node.js", "Express", "SheetJS"],
  },
  {
    // Project 3: BusMate
    title: "BusMate",
    desc: "A smart bus management platform for schools.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    tech: ["Next.js", "Firebase", "Mapbox", "Chakra UI"],
  },
];

export default function Projects() {
  // hovered: index of hovered project card (for desktop hover effect)
  const [hovered, setHovered] = useState(null);

  return (
    <Background>
      {/* Section Title */}
      <h2 className="relative z-10 text-3xl font-bold text-white mb-8 tracking-wide text-center mt-12">
        What We've Done
      </h2>
      {/* Main container for timeline and cards */}
      <div className="relative z-10 w-full max-w-3xl mx-auto flex justify-center px-2 sm:px-4 max-h-screen overflow-auto">
        {/* Timeline vertical line (desktop only, hidden on mobile) */}
        <div
          className="absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-purple-400 via-blue-400 to-indigo-400 rounded-full -translate-x-1/2 hidden md:block"
          style={{ zIndex: 3 }}
        />
        {/* Project cards list */}
        <div className="mx-0 w-full flex flex-col gap-5 sm:gap-1 sm:">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="relative flex flex-col md:flex-row items-center justify-between w-full"
            >
              {/* Timeline dot (desktop only) */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
                <div className="w-4 h-4 bg-white border border-purple-400 rounded-full shadow" />
              </div>
              {/* Project Card container: responsive width, order, and alignment */}
              <div
                className={`w-full md:w-2/5 ${
                  i % 2 === 0 ? "md:order-1" : "md:order-3"
                } flex justify-center md:justify-${
                  i % 2 === 0 ? "end" : "start"
                }`}
              >
                <motion.div
                  // Card: max-w-xs (mobile), sm:max-w-sm (tablet), rounded, shadow, border, glassy bg
                  className="relative w-full max-w-xs sm:max-w-sm rounded-xl overflow-hidden shadow border border-white/10 bg-white/10 backdrop-blur-md cursor-pointer flex flex-col"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  initial={false}
                  style={{ zIndex: 4 }}
                >
                  {/* Project image: responsive height, covers card top */}
                  {/* create a div for the image and the hover so that they can share the same positioning context */}
                    <motion.img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover"
                      animate={{
                      filter: hovered === i ? "blur(2px)" : "none",
                      scale: hovered === i ? 0.97 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                  {/* Card content always visible on mobile, overlay on desktop hover */}
                  <div className=" flex flex-col gap-2 p-3 md:hidden">
                    {/* Project title (mobile): bold, white, centered */}
                    <div className="font-extrabold text-base sm:text-lg text-white text-center drop-shadow mb-1">
                      {p.title}
                    </div>
                    {/* Project description (mobile): medium, white, centered */}
                    <div className="font-medium text-white text-center mb-2 opacity-90 text-sm sm:text-base">
                      {p.desc}
                    </div>
                    {/* Tech stack badges (mobile): cyan, rounded, bold */}
                    <div className="flex flex-wrap gap-2 justify-center mt-2">
                      {p.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="bg-cyan-500/90 text-xs font-bold px-2 py-1 rounded shadow text-black"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <AnimatePresence>
                    {hovered === i && (
                      <motion.div
                        // Desktop hover overlay: dark bg, white text, centered, larger font  make it relative to the image container so that content doesn't overflow
                        className="absolute inset-0 flex flex-col items-center justify-center text-white text-lg p-6 bg-black bg-opacity-70 font-extrabold text-center"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        style={{ zIndex: 5 }}
                      >
                        <div className="mb-2">{p.title}</div>
                        <div className="font-semibold mb-2">{p.desc}</div>
                        <div className="flex flex-wrap gap-2 justify-center mt-2">
                          {p.tech.map((t, idx) => (
                            <span
                              key={idx}
                              className="bg-cyan-500/80 text-xs font-bold px-2 py-1 rounded shadow text-black"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
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
