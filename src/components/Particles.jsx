function Particles() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div
        className="particle w-2 h-2"
        style={{ top: "20%", left: "10%", animationDelay: "0s" }}
      ></div>
      <div
        className="particle w-1 h-1"
        style={{ top: "60%", left: "80%", animationDelay: "2s" }}
      ></div>
      <div
        className="particle w-3 h-3"
        style={{ top: "80%", left: "20%", animationDelay: "4s" }}
      ></div>
      <div
        className="particle w-1 h-1"
        style={{ top: "30%", left: "70%", animationDelay: "1s" }}
      ></div>
      <div
        className="particle w-2 h-2"
        style={{ top: "70%", left: "50%", animationDelay: "3s" }}
      ></div>
    </div>
  );
}

export default Particles;
