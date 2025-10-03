import { motion } from "framer-motion";
import { useState } from "react";
import { HiExternalLink, HiCode } from "react-icons/hi";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Veggie Cart Connect",
      description: "Application backend pour gestion de quincaillerie",
      category: "backend",
      tech: ["Node.js", "Express", "MongoDB"],
      link: "https://github.com/Die-tech-web/quincaillerie.git",
      gradient: "from-primary to-secondary",
      live: "https://veggie-cart-connect.vercel.app/",
      image: "/images/projects/veggie-cart-connect.png",
    },
    {
      title: "API Woyofal",
      description: "API REST complète pour gestion de données métier",
      category: "backend",
      tech: ["Node.js", "Express", "PostgreSQL"],
      link: "https://appwoyofal-jvib.onrender.com",
      gradient: "from-secondary to-accent",
      image: "/images/projects/api-woyofal.png",
    },
    {
      title: "Gestion Quincaillerie",
      description: "Application de gestion de stock et ventes",
      category: "desktop",
      tech: ["Java", "JavaFX", "Oracle"],
      link: "https://github.com/Die-tech-web/quincaillerie.git",
      gradient: "from-secondary to-primary",
      image: "/images/projects/gestion-quincaillerie.png",
    },
    {
      title: "Projet IA Malware",
      description: "Détection de malware utilisant l'intelligence artificielle",
      category: "backend",
      tech: ["Python", "IA", "Machine Learning"],
      link: "https://github.com/Die-tech-web/ProjetIAMalware.git",
      gradient: "from-accent to-primary",
      image: "/images/projects/projet-ia-malware.png",
    },
  ];

  const categories = [
    { id: "all", label: "Tous" },
    { id: "web", label: "Web" },
    { id: "backend", label: "Backend" },
    { id: "desktop", label: "Desktop" },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Mes Projets
          </h1>
          <p className="text-xl text-muted-foreground">
            Une sélection de mes réalisations techniques
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                filter === cat.id
                  ? "bg-gradient-to-r from-primary to-secondary text-white glow"
                  : "glass hover:bg-primary/10"
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="glass rounded-2xl overflow-hidden h-full">
                {/* Project Header with Image or Gradient */}
                <div className="h-40 relative overflow-hidden cursor-pointer" onClick={() => window.open(project.live || project.link, '_blank')}>
                  {project.image ? (
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${project.gradient} relative`}>
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        whileHover={{ scale: 1.5, rotate: 45 }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {(project.live || project.link) ? (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white text-sm font-medium shadow-lg"
                        onClick={() => window.open(project.live || project.link, '_blank')}
                      >
                        <HiExternalLink />
                        {project.live ? "Voir le projet en live" : "Voir le projet"}
                      </motion.button>
                    ) : (
                      <div className="flex items-center gap-2 px-4 py-2 rounded-lg glass text-sm">
                        <HiCode />
                        Projet académique
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
