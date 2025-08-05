import { useEffect } from 'react';

function Navigation() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleClick = (e) => {
      e.preventDefault();
      const target = document.querySelector(e.target.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener("click", handleClick);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 glass-card">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-cyan-400">ForeKode</div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-cyan-400 transition-colors">
              Home
            </a>
            <a href="#work" className="hover:text-cyan-400 transition-colors">
              Our Work
            </a>
            <a href="#services" className="hover:text-cyan-400 transition-colors">
              Services
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
