import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiCode, HiSparkles, HiLightningBolt } from "react-icons/hi";
import { useEffect, useState } from "react";

const Home = () => {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 300);
    }, 4000);

    return () => clearInterval(glitchInterval);
  }, []);

  const title = "DIÉ NIANG";
  const subtitle = "Développeur Full Stack & Ingénieur Logiciel";

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-background/90 animate-pulse-glow" />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}

        <div className="container mx-auto px-6 relative z-10 flex-1 flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              {/* Animated Title */}
              <motion.h1
                className={`text-6xl md:text-7xl lg:text-8xl font-bold mb-6 ${
                  glitch ? "animate-glitch" : ""
                }`}
              >
                {title.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="inline-block gradient-text"
                    style={{ animation: `float 3s ease-in-out infinite` }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-xl md:text-2xl text-muted-foreground mb-12"
              >
                {subtitle}
              </motion.p>

              {/* Feature Icons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
                className="flex justify-start gap-8 mb-12"
              >
                {[
                  { icon: HiCode, text: "Clean Code" },
                  { icon: HiSparkles, text: "Innovation" },
                  { icon: HiLightningBolt, text: "Performance" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <item.icon className="text-4xl text-primary glow" />
                    <span className="text-sm text-muted-foreground">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - Profile Image alignée à droite */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex justify-center lg:justify-end mt-[-1px] lg:mt-0"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-[22rem] h-[22rem] md:w-[26rem] md:h-[26rem]"
              >
                <div className="absolute inset-0 rounded-full border-8 border-primary/40 animate-pulse-slow opacity-80 blur-xl" />
                <div className="absolute inset-8 rounded-full border-4 border-primary/60 animate-pulse-slow opacity-60 blur-md" />
                <motion.div
                  className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl"
                  whileHover={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src="/images/profil.jpeg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        {/* Section boutons tout en bas, centrée */}
        <div className="w-full flex flex-col items-center justify-end pb-8">
          <div className="w-full max-w-2xl h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mb-8" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary rounded-full text-white font-semibold shadow-lg glow"
              >
                Voir mes projets
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass rounded-full font-semibold border border-primary hover:bg-primary/10 transition-colors"
              >
                Me contacter
              </motion.button>
            </Link>
            <a href="/CV/Cv_Dié_Niang1.pdf" download>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass rounded-full font-semibold border border-secondary hover:bg-secondary/10 transition-colors"
              >
                Télécharger PDF
              </motion.button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
