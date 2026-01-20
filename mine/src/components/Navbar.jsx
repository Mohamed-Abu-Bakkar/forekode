import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
  { name: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      animate={{
        backgroundColor: scrolled
          ? "rgba(17, 24, 39, 0.95)" // solid dark
          : "rgba(17, 24, 39, 0.0)", // transparent
        boxShadow: scrolled ? "0 2px 16px 0 rgba(0,0,0,0.10)" : "none",
      }}
      className="fixed top-0 left-0 w-full z-30 transition-all duration-300"
      style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="mx-auto flex items-center justify-between px-4 py-3 pr-10 pl-10">
        <a
          href="#home"
          className="flex items-center gap-2 text-cyan-400 font-extrabold text-xl tracking-wide"
        >
          <img src="/QB.png" alt="QBix Logo" className="h-8 w-8 rounded-full" />
          QBix
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/90 hover:text-cyan-400 font-semibold transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        className="md:hidden overflow-hidden"
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-4 py-4 bg-black/90 border-t border-white/10">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/90 hover:text-cyan-400 font-semibold transition py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
