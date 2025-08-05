import { useState, useEffect } from 'react';

function Hero() {
  const [taglineText, setTaglineText] = useState('');
  const fullText = "We Code. We Design. We Deliver.";

  useEffect(() => {
    let index = 0;
    const typeWriter = () => {
      if (index < fullText.length) {
        setTaglineText(fullText.slice(0, index + 1));
        index++;
        setTimeout(typeWriter, 100);
      }
    };

    // Start typing animation after component mounts
    const timer = setTimeout(typeWriter, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleCTAClick = () => {
    document.querySelector("#contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 fade-in">
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          <span className="text-white">Fore</span>
          <span className="text-cyan-400">Kode</span>
        </h1>
        <p className="text-2xl md:text-3xl mb-8 typing-animation">
          {taglineText}
        </p>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          A student-led tech agency crafting innovative digital solutions with
          passion, creativity, and cutting-edge technology.
        </p>
        <button
          onClick={handleCTAClick}
          className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 neon-glow"
        >
          Let's Work Together
        </button>
      </div>
    </section>
  );
}

export default Hero;
