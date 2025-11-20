import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Briefcase, Users, Clock } from "lucide-react";

const StatCard = ({ icon: Icon, value, label, delay }: { icon: any; value: number; label: string; delay: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      className="bg-card border border-border rounded-2xl p-8 hover-lift group"
    >
      <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center mb-4 group-hover:bg-teal/20 transition-colors">
        <Icon className="w-6 h-6 text-teal" />
      </div>
      <div className="text-4xl font-display font-bold mb-2">{count}+</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </motion.div>
  );
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-display font-bold mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about creating beautiful, functional digital experiences. With expertise in UI/UX design and frontend development, I transform ideas into intuitive interfaces that users love.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <StatCard
            icon={Briefcase}
            value={173}
            label="Projects Completed"
            delay={0.2}
          />
          <StatCard
            icon={Clock}
            value={5}
            label="Years Experience"
            delay={0.3}
          />
          <StatCard
            icon={Users}
            value={150}
            label="Happy Clients"
            delay={0.4}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary"
          >
            Hire Me
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
