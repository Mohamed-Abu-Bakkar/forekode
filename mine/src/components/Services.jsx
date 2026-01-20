import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Code, Smartphone, Megaphone, Settings } from "lucide-react";
import Background from "./Background";

const services = [
  {
    name: "Web Design",
    desc: "Beautiful, responsive designs for every device.",
    img: "/QBix.png",
    icon: Palette,
  },
  {
    name: "Web Development",
    desc: "Robust, scalable web applications.",
    img: "https://midriffinfosolution.org/wp-content/uploads/2022/03/web-development.jpg",
    icon: Code,
  },
  {
    name: "UI/UX Design",
    desc: "Intuitive interfaces and delightful experiences.",
    img: "https://media.licdn.com/dms/image/v2/C4E12AQHID-qLpkBDrg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1611161988142?e=2147483647&v=beta&t=jGTIQuKRZY_0HUA-abT9nwvyAopCtLA_Q-TvTmOlT9c",
    icon: Smartphone,
  },
  {
    name: "Digital Marketing",
    desc: "Grow your brand with smart digital strategies.",
    img: "https://www.theirmindia.org/blog/wp-content/uploads/2021/03/Top-7-Risks-associated-with-Digital-Marketing-1200x900.jpg",
    icon: Megaphone,
  },
  {
    name: "Custom Tech Solutions",
    desc: "Tailored solutions for unique business needs.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    icon: Settings,
  },
];

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <Background>
      <h2 className="relative z-10 text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-8 md:mb-16 tracking-wide text-center px-4">
        What We Do
      </h2>
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[400px] gap-8 lg:gap-12">
          {/* Service List */}
          <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 w-full lg:w-auto lg:flex-1">
            {services.map((s, i) => (
              <motion.div
                key={s.name}
                className={`text-left text-white cursor-pointer px-2 ${
                  active === i
                    ? "font-extrabold text-xl sm:text-2xl lg:text-3xl"
                    : "text-lg sm:text-xl lg:text-2xl opacity-70"
                }`}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                animate={{
                  scale: active === i ? 1.02 : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3">
                  <s.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${active === i ? 'text-cyan-400' : 'text-white/70'}`} />
                  {s.name}
                </div>
                {active === i && (
                  <motion.div
                    className="text-sm sm:text-base lg:text-lg mt-2 sm:mt-3 lg:mt-4 max-w-md"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {s.desc}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
          {/* Service Image */}
          <div className="w-full lg:w-auto lg:flex-1 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg h-64 sm:h-80 lg:w-96 lg:h-96">
              <motion.img
                key={services[active].img}
                src={services[active].img}
                alt={services[active].name}
                className="w-full h-full object-cover rounded-2xl shadow-2xl border border-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
}
