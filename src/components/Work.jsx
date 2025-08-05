function Work() {
  const projects = [
    {
      id: 1,
      name: "EcoTrack",
      title: "EcoTrack App",
      description: "Sustainability tracking mobile application",
      gradient: "from-purple-500 to-pink-500",
      technologies: [
        { name: "React Native", color: "bg-cyan-500/20 text-cyan-400" },
        { name: "Node.js", color: "bg-green-500/20 text-green-400" },
        { name: "MongoDB", color: "bg-blue-500/20 text-blue-400" }
      ]
    },
    {
      id: 2,
      name: "FinanceFlow",
      title: "FinanceFlow Dashboard",
      description: "Personal finance management platform",
      gradient: "from-blue-500 to-cyan-500",
      technologies: [
        { name: "React", color: "bg-cyan-500/20 text-cyan-400" },
        { name: "Python", color: "bg-yellow-500/20 text-yellow-400" },
        { name: "PostgreSQL", color: "bg-red-500/20 text-red-400" }
      ]
    },
    {
      id: 3,
      name: "StudySync",
      title: "StudySync Platform",
      description: "Collaborative learning management system",
      gradient: "from-green-500 to-teal-500",
      technologies: [
        { name: "Vue.js", color: "bg-cyan-500/20 text-cyan-400" },
        { name: "Laravel", color: "bg-purple-500/20 text-purple-400" },
        { name: "MySQL", color: "bg-orange-500/20 text-orange-400" }
      ]
    },
    {
      id: 4,
      name: "GameHub",
      title: "GameHub Community",
      description: "Gaming community and tournament platform",
      gradient: "from-red-500 to-orange-500",
      technologies: [
        { name: "Next.js", color: "bg-cyan-500/20 text-cyan-400" },
        { name: "Express", color: "bg-green-500/20 text-green-400" },
        { name: "Socket.io", color: "bg-blue-500/20 text-blue-400" }
      ]
    },
    {
      id: 5,
      name: "AIAssist",
      title: "AI Assistant Tool",
      description: "Smart productivity and automation assistant",
      gradient: "from-indigo-500 to-purple-500",
      technologies: [
        { name: "Python", color: "bg-cyan-500/20 text-cyan-400" },
        { name: "TensorFlow", color: "bg-yellow-500/20 text-yellow-400" },
        { name: "FastAPI", color: "bg-green-500/20 text-green-400" }
      ]
    },
    {
      id: 6,
      name: "CloudSync",
      title: "CloudSync Storage",
      description: "Secure cloud storage and file sharing platform",
      gradient: "from-teal-500 to-blue-500",
      technologies: [
        { name: "Angular", color: "bg-cyan-500/20 text-cyan-400" },
        { name: "C#", color: "bg-purple-500/20 text-purple-400" },
        { name: "Azure", color: "bg-blue-500/20 text-blue-400" }
      ]
    }
  ];

  return (
    <section id="work" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 fade-in">
          Our <span className="text-cyan-400">Work</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="glass-card rounded-2xl p-6 hover-lift fade-in">
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} rounded-xl mb-4 flex items-center justify-center`}
              >
                <span className="text-2xl font-bold">{project.name}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`${tech.color} px-3 py-1 rounded-full text-sm`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
