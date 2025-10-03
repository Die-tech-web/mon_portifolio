import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPhp,
  SiLaravel,
  SiSpringboot,
  SiMysql,
  SiOracle,
  SiGit,
  SiTailwindcss,
  SiFigma,
  SiNginx,
  SiDocker,
  SiR,
  SiPython,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "JavaScript", level: 90, icon: SiJavascript, color: "#F7DF1E" },
    { name: "React", level: 85, icon: SiReact, color: "#61DAFB" },
    { name: "Node.js", level: 80, icon: SiNodedotjs, color: "#339933" },
    { name: "PHP", level: 85, icon: SiPhp, color: "#777BB4" },
    { name: "Laravel", level: 82, icon: SiLaravel, color: "#FF2D20" },
    { name: "Spring Boot", level: 75, icon: SiSpringboot, color: "#6DB33F" },
    { name: "MySQL", level: 88, icon: SiMysql, color: "#4479A1" },
    { name: "Oracle", level: 80, icon: SiOracle, color: "#F80000" },
    { name: "Git", level: 85, icon: SiGit, color: "#F05032" },
    { name: "Tailwind CSS", level: 90, icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Figma", level: 78, icon: SiFigma, color: "#F24E1E" },
    { name: "Nginx", level: 75, icon: SiNginx, color: "#009639" },
    { name: "Docker", level: 80, icon: SiDocker, color: "#2496ED" },
    { name: "R", level: 75, icon: SiR, color: "#276DC3" },
    { name: "Python", level: 85, icon: SiPython, color: "#3776AB" },
  ];

  const SkillBar = ({ skill, index }: { skill: any; index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: index * 0.1 }}
        className="glass p-6 rounded-xl hover:scale-105 transition-transform"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
            >
              <skill.icon className="text-3xl" style={{ color: skill.color }} />
            </motion.div>
            <span className="font-semibold text-lg">{skill.name}</span>
          </div>
          <span className="text-primary font-bold">{skill.level}%</span>
        </div>

        <div className="relative h-3 bg-muted rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level}%` } : {}}
            transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full glow"
          />
        </div>
      </motion.div>
    );
  };

  const categories = [
    {
      title: "Frontend",
      skills: ["JavaScript", "React", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "PHP", "Laravel", "Spring Boot", "MySQL", "Oracle"],
    },
    {
      title: "DevOps",
      skills: ["Git", "Docker", "Nginx"],
    },
  ];

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
            Compétences
          </h1>
          <p className="text-xl text-muted-foreground">
            Mon expertise technique et mes outils de prédilection
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {skills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold mb-4 gradient-text">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-12 glass p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-4">Autres compétences</h3>
            <div className="flex flex-wrap gap-3">
              {["Java", "C", "UML", "Canvas", "IA", "Réseaux", "Admin Système", "Docker", "R", "Python"].map(
                (skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full font-medium border border-primary/30"
                  >
                    {skill}
                  </motion.span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
