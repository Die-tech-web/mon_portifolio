import { motion } from "framer-motion";
import { HiAcademicCap, HiBadgeCheck, HiLocationMarker } from "react-icons/hi";

const About = () => {
  const timeline = [
    {
      year: "2025",
      title: "Formation Orange Digital Center",
      institution: "Orange Digital Center",
      description: "Formation spécialisée en développement web et mobile",
    },
    {
      year: "2023 - 2024",
      title: "Master 1 Génie Logiciel",
      institution: "ESP Dakar",
      description: "Spécialisation en Génie Logiciel et Systèmes d'Information",
    },
    {
      year: "2021 - 2022",
      title: "Licence 3",
      institution: "UADB Bambey",
      description: "Administration et Développement d'Applications",
    },
  ];

  const certifications = [
    "Marketing Digital et Communication - ODC (2022)",
    "PL/SQL - Programmation de base de données (2024)",
    "Oracle PL/SQL Semestres 1 & 2 (2024)",
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-5xl md:text-6xl font-bold gradient-text mb-6"
            >
              À Propos
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground"
            >
              Passionné par le développement et l'innovation
            </motion.p>
          </div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass p-8 rounded-2xl mb-12"
          >
            <div className="flex items-start gap-4 mb-6">
              <HiLocationMarker className="text-3xl text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Localisation</h3>
                <p className="text-muted-foreground">
                  Dakar, Keur Massar, Sénégal
                </p>
              </div>
            </div>

            <p className="text-lg leading-relaxed mb-4">
              Titulaire d'un Master 1 en Génie Logiciel à l'ESP de Dakar, je
              suis un développeur passionné avec une expertise en développement
              web full-stack et systèmes d'information.
            </p>
            <p className="text-lg leading-relaxed">
              Je cherche constamment à valoriser mes compétences en
              développement au sein d'équipes dynamiques et innovantes. Ma
              créativité, mon esprit d'équipe et mon orientation résultats me
              permettent de relever les défis techniques avec enthousiasme.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="mb-12">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-3xl font-bold mb-8 flex items-center gap-3"
            >
              <HiAcademicCap className="text-primary text-4xl" />
              Formation
            </motion.h2>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-8 border-l-2 border-primary/30"
                >
                  <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-primary/80 glow flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                  >
                    <span className="text-sm text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold mt-3 mb-2 gradient-text">
                      {item.title}
                    </h3>
                    <p className="text-secondary font-medium mb-2">
                      {item.institution}
                    </p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-3xl font-bold mb-8 flex items-center gap-3"
            >
              <HiBadgeCheck className="text-secondary text-4xl" />
              Certifications
            </motion.h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="glass p-4 rounded-xl border border-white/10 hover:border-secondary/50 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-secondary/20 p-2 rounded-lg">
                      <HiBadgeCheck className="text-2xl text-secondary" />
                    </div>
                    <p className="font-medium">{cert}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Qualities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-12 glass p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-6">
              Qualités Interpersonnelles
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Créativité",
                "Esprit d'équipe",
                "Adaptabilité",
                "Orientation résultats",
                "Communication",
              ].map((quality, index) => (
                <motion.span
                  key={quality}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full text-sm font-medium border border-primary/30"
                >
                  {quality}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
