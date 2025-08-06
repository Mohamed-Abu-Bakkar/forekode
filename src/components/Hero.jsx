import { useState, useEffect } from 'react';

function Hero() {
  const [currentWord, setCurrentWord] = useState('');
  const words = ["Code", "Design", "Deliver"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const animateWord = () => {
      const targetWord = words[currentWordIndex];
      
      if (!isDeleting) {
        // Typing forward
        let index = 0;
        setIsTyping(true);
        
        const typeWriter = () => {
          if (index < targetWord.length) {
            setCurrentWord(targetWord.slice(0, index + 1));
            index++;
            setTimeout(typeWriter, 100);
          } else {
            setIsTyping(false);
            // Wait before starting to delete
            setTimeout(() => {
              setIsDeleting(true);
            }, 2000);
          }
        };
        
        typeWriter();
      } else {
        // Backspacing
        let index = currentWord.length;
        setIsTyping(true);
        
        const backspace = () => {
          if (index > 0) {
            setCurrentWord(targetWord.slice(0, index - 1));
            index--;
            setTimeout(backspace, 50); // Faster backspace
          } else {
            setIsTyping(false);
            setIsDeleting(false);
            // Move to next word
            setTimeout(() => {
              setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
            }, 500);
          }
        };
        
        backspace();
      }
    };

    const timer = setTimeout(animateWord, 1000);
    return () => clearTimeout(timer);
  }, [currentWordIndex, isDeleting]);

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
        <p className="text-2xl md:text-3xl mb-8 relative flex justify-center items-center">
          <span className="absolute left-1/2 transform -translate-x-1/2 -translate-x-16">We</span>
          <span className="min-w-[120px] text-left ml-8">
            {currentWord}<span className={`typing-animation ${isTyping ? '' : 'cursor-blink'}`}></span>
          </span>
          <span className="ml-1">.</span>
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
