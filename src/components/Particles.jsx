function Particles() {
  // Particle configuration data
  const particleData = [
    { size: "w-2 h-2", top: "20%", left: "10%", delay: "0s" },
    { size: "w-1 h-1", top: "60%", left: "80%", delay: "2s" },
    { size: "w-3 h-3", top: "80%", left: "20%", delay: "4s" },
    { size: "w-1 h-1", top: "30%", left: "70%", delay: "1s" },
    { size: "w-2 h-2", top: "70%", left: "50%", delay: "3s" }
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {particleData.map((particle, index) => (
        <div
          key={index}
          className={`particle ${particle.size}`}
          style={{ 
            top: particle.top, 
            left: particle.left, 
            animationDelay: particle.delay 
          }}
        ></div>
      ))}
    </div>
  );
}

export default Particles;
