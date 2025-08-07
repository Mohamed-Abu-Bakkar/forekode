import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const services = [
  {
    name: "Web Design",
    desc: "Beautiful, responsive designs for every device.",
    img: "https://images.unsplash.com/photo-1465101178521-c1a4c8a0f8f5?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Web Development",
    desc: "Robust, scalable web applications.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "UI/UX Design",
    desc: "Intuitive interfaces and delightful experiences.",
    img: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Digital Marketing",
    desc: "Grow your brand with smart digital strategies.",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Custom Tech Solutions",
    desc: "Tailored solutions for unique business needs.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
  }
]

export default function Services() {
  const [active, setActive] = useState(0)
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
    <div className="relative w-full h-full flex flex-col items-center justify-center py-24 overflow-hidden" style={{background: "#181c2f"}}>
      {/* Unique 3D orb effect */}
      <motion.div
        className="absolute left-1/2 top-1/2"
        style={{
          width: 360,
          height: 360,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.07)",
          filter: "blur(22px)",
          zIndex: 1,
          transform: "translate(-50%, -50%)"
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.05, 1],
          x: [0, 25, -25, 0],
          y: [0, -10, 10, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 11,
          ease: "linear"
        }}
      />
      <div className="absolute inset-0 bg-black/40 pointer-events-none z-2" />

      <h2 className="relative z-10 text-5xl font-extrabold text-white mb-16 tracking-wide">What We Do</h2>
      <div className="relative z-10 w-full max-w-5xl flex items-center justify-between min-h-[400px]">
        <div className="flex flex-col gap-12">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              className={`text-left text-white cursor-pointer transition-all duration-300 ${active === i ? 'font-extrabold text-3xl' : 'text-2xl opacity-70'}`}
              onMouseEnter={() => setActive(i)}
              initial={false}
              animate={{
                scale: active === i ? 1.12 : 1,
                opacity: active === i ? 1 : 0.7
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {s.name}
              <AnimatePresence>
                {active === i && (
                  <motion.div
                    className="text-lg mt-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {s.desc}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        <div className="absolute right-0 top-0 w-[400px] h-[400px]">
          <AnimatePresence mode="wait">
            <motion.img
              key={services[active].img}
              src={services[active].img}
              alt={services[active].name}
              className="w-full h-full object-cover rounded-2xl shadow-2xl border border-white/10"
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: 30 }}
              transition={{ duration: 0.4 }}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
