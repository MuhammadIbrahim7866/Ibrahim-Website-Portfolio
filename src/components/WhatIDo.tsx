import { motion } from "framer-motion";
import { Palette, Code2, Layers } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces with attention to detail and user experience best practices.",
  },
  {
    icon: Code2,
    title: "Web Development",
    description: "Building fast, responsive, and scalable web applications using modern technologies and frameworks.",
  },
  {
    icon: Layers,
    title: "Frontend Engineering",
    description: "Crafting pixel-perfect, performant frontend solutions with clean code and optimal architecture.",
  },
];

const WhatIDo = () => {
  return (
    <section id="services" className="py-32 px-6 bg-">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-display font-extrabold mb-6">
            What I Do
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specializing in creating exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-card border-2 border-border rounded-2xl p-8 hover:border-accent transition-all duration-300 hover:shadow-strong"
            >
              <div className="mb-6 w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
