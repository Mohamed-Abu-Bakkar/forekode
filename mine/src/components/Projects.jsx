import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  {
    title: "Project Alpha",
    desc: "A cutting-edge web platform for modern businesses.",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Project Beta",
    desc: "A mobile-first solution for digital marketing.",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Project Gamma",
    desc: "Custom tech solutions for startups.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
  }
]

export default function Projects() {
  const [hovered, setHovered] = useState(null)
  const [bgAnim, setBgAnim] = useState(0)

  // Animate background
  useEffect(() => {
    let frame
    const animate = () => {
      setBgAnim(a => (a + 0.5) % 360)
      frame = requestAnimationFrame(animate)
    }
    animate()
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center py-16 overflow-hidden" style={{background: "#181c2f"}}>
      {/* Unique 3D orb effect */}
      <motion.div
        className="absolute left-1/2 top-1/2"
        style={{
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.07)",
          filter: "blur(20px)",
          zIndex: 1,
          transform: "translate(-50%, -50%)"
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
          x: [0, 20, -20, 0],
          y: [0, 15, -15, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "linear"
        }}
      />
      <div className="absolute inset-0 bg-black/40 pointer-events-none z-2" />

      <h2 className="relative z-10 text-3xl font-bold text-white mb-8 tracking-wide">What We've Done</h2>
      <div className="relative z-10 w-full max-w-3xl mx-auto flex justify-center">
        {/* Timeline vertical line (thinner) */}
        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-purple-400 via-blue-400 to-indigo-400 rounded-full -translate-x-1/2" style={{zIndex:3}} />
        <div className="w-full flex flex-col gap-10 py-4">
          {projects.map((p, i) => (
            <div key={p.title} className="relative flex items-center justify-between w-full">
              {/* Timeline dot */}
              <div
                className="absolute left-1/2 -translate-x-1/2 z-10"
                style={{top: '50%', transform: 'translate(-50%, -50%)'}}
              >
                <div className="w-4 h-4 bg-white border border-purple-400 rounded-full shadow" />
              </div>
              {/* Project Card */}
              <div className={`w-2/5 ${i % 2 === 0 ? 'order-1' : 'order-3'} flex justify-${i % 2 === 0 ? 'end' : 'start'}`}>
                <motion.div
                  className="relative w-full h-56 rounded-xl overflow-hidden shadow border border-white/10 bg-white/5 backdrop-blur cursor-pointer"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  initial={false}
                  style={{zIndex:4}}
                >
                  <motion.img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover"
                    animate={{
                      filter: hovered === i ? 'blur(2px)' : 'none',
                      scale: hovered === i ? 0.97 : 1
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  />
                  <AnimatePresence>
                    {hovered === i && (
                      <motion.div
                        className="absolute inset-0 flex flex-col items-center justify-center text-white text-base p-4"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        style={{zIndex:5}}
                      >
                        <div className="font-bold mb-1">{p.title}</div>
                        <div className="text-sm">{p.desc}</div>
                        <div className="absolute inset-0 bg-black bg-opacity-40 pointer-events-none" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
              {/* Spacer for timeline symmetry */}
              <div className="w-1/5 order-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
