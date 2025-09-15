import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Background from "./Background";

const services = [
  {
    name: "Web Design",
    desc: "Beautiful, responsive designs for every device.",
    img: "https://images.unsplash.com/photo-1465101178521-c1a4c8a0f8f5?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Web Development",
    desc: "Robust, scalable web applications.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "UI/UX Design",
    desc: "Intuitive interfaces and delightful experiences.",
    img: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Digital Marketing",
    desc: "Grow your brand with smart digital strategies.",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Custom Tech Solutions",
    desc: "Tailored solutions for unique business needs.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <Background>
      <h2 className="relative z-10 text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-6 md:mb-16 tracking-wide text-center px-2">
        What We Do
      </h2>
      <div className="px-8 relative z-10 w-full max-w-5xl flex flex-col md:flex-row items-center justify-between min-h-[400px] px-2 sm:px-4 gap-8 md:gap-0">
        {/* Service List */}
        <div className="flex flex-col gap-6 md:gap-12 w-full md:w-auto">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              className={`text-left text-white cursor-pointer transition-all duration-300 ${
                active === i
                  ? "font-extrabold text-lg sm:text-xl md:text-3xl"
                  : "text-base sm:text-lg md:text-2xl opacity-70"
              }`}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              initial={false}
              animate={{
                scale: active === i ? 1.08 : 1,
                opacity: active === i ? 1 : 0.7,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {s.name}
              <AnimatePresence>
                {active === i && (
                  <motion.div
                    className="text-sm sm:text-base md:text-lg mt-1 sm:mt-2 md:mt-4"
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
        {/* Service Image */}
        <div className="w-full flex justify-center md:block md:w-[400px] md:h-[400px]">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-none h-[220px] sm:h-[300px] md:w-[400px] md:h-[400px] mt-4 md:mt-0">
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
    </Background>
  );
}
