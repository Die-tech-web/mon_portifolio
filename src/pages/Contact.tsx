import { motion } from "framer-motion";
import { useState } from "react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const contactInfo = [
    {
      icon: HiMail,
      label: "Email",
      value: "dieniang32@gmail.com",
      link: "mailto:dieniang32@gmail.com",
    },
    {
      icon: HiPhone,
      label: "Téléphone",
      value: "+221 77 880 19 47",
      link: "tel:+221778801947",
    },
    {
      icon: HiLocationMarker,
      label: "Localisation",
      value: "Dakar, Keur Massar",
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      label: "GitHub",
      link: "https://github.com/Die-tech-web",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/dié-niang-0baa41198",
    },
    {
      icon: FaTwitter,
      label: "X (Twitter)",
      link: "https://x.com/die_ebeno",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    const newErrors = {
      name: formData.name.trim() === "",
      email: !formData.email.includes("@"),
      message: formData.message.trim() === "",
    };
    
    setErrors(newErrors);

    if (!Object.values(newErrors).some(error => error)) {
      // Form is valid - In a real app, you would send the data here
      console.log("Form submitted:", formData);
      alert("Message envoyé avec succès! (Demo)");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: false }));
  };

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
            Me Contacter
          </h1>
          <p className="text-xl text-muted-foreground">
            Discutons de votre prochain projet
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold mb-6">Envoyez-moi un message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nom</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-background border-2 rounded-lg focus:outline-none transition-all ${
                    errors.name
                      ? "border-destructive"
                      : "border-primary/30 focus:border-primary glow"
                  }`}
                  placeholder="Votre nom"
                />
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-destructive text-sm mt-1"
                  >
                    Le nom est requis
                  </motion.p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-background border-2 rounded-lg focus:outline-none transition-all ${
                    errors.email
                      ? "border-destructive"
                      : "border-secondary/30 focus:border-secondary glow-secondary"
                  }`}
                  placeholder="votre@email.com"
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-destructive text-sm mt-1"
                  >
                    Email invalide
                  </motion.p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 bg-background border-2 rounded-lg focus:outline-none transition-all resize-none ${
                    errors.message
                      ? "border-destructive"
                      : "border-accent/30 focus:border-accent glow-accent"
                  }`}
                  placeholder="Votre message..."
                />
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-destructive text-sm mt-1"
                  >
                    Le message est requis
                  </motion.p>
                )}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-primary rounded-lg text-white font-semibold shadow-lg"
              >
                Envoyer le message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="glass p-6 rounded-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary rounded-lg">
                      <info.icon className="text-2xl text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-lg font-semibold hover:gradient-text transition-all"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg font-semibold">{info.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold mb-4">Réseaux sociaux</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="p-4 bg-primary rounded-lg text-white text-2xl"
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="glass p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold mb-2">Disponibilité</h3>
              <p className="text-muted-foreground">
                Actuellement ouvert aux opportunités et collaborations freelance.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 bg-green-500 rounded-full"
                />
                <span className="text-sm text-green-500 font-medium">
                  Disponible maintenant
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
