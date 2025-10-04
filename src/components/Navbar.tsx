import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaFileDownload } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Accueil", path: "/" },
    { name: "À Propos", path: "/about" },
    { name: "Projets", path: "/projects" },
    { name: "Compétences", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/Die-tech-web", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/dié-niang-0baa41198", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://x.com/die_ebeno", label: "X (Twitter)" },
    { icon: FaFileDownload, href: "/CV/Cv_Dié_Niang1.pdf", label: "CV", download: true },
    { icon: FaEnvelope, href: "mailto:dieniang32@gmail.com", label: "Email" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold gradient-text"
          >
            DN
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`relative text-sm font-medium transition-colors ${
                  isActive(item.path) ? "text-primary" : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent"
                  />
                )}
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Social Links */}
        <div className="hidden md:flex items-center gap-4">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              className="text-xl text-foreground/60 hover:text-primary transition-colors glow"
            >
              <social.icon />
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-foreground"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

    {/* Mobile Menu */}
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        className="md:hidden glass mt-4"
      >
        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
            >
              <motion.div
                whileHover={{ x: 10 }}
                className={`text-lg font-medium transition-colors ${
                  isActive(item.path) ? "text-primary" : "text-foreground/80"
                }`}
              >
                {item.name}
              </motion.div>
            </Link>
          ))}
          <div className="flex gap-4 justify-center pt-4 border-t border-white/10">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 360 }}
                className="text-xl text-foreground/60 hover:text-primary transition-colors glow"
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    )}
  </motion.nav>
  );
};

export default Navbar;
