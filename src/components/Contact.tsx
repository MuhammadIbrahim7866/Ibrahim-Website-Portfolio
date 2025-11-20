// import { motion, useInView } from "framer-motion";
// import { useRef, useState } from "react";
// import { Mail, MapPin, Phone } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";

// const Contact = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//     projectType: "UI/UX Design",
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Basic validation
//     if (!formData.name || !formData.email || !formData.message) {
//       toast({
//         title: "Error",
//         description: "Please fill in all required fields",
//         variant: "destructive",
//       });
//       return;
//     }

//     toast({
//       title: "Message Sent!",
//       description: "Thank you for reaching out. I'll get back to you soon!",
//     });

//     // Reset form
//     setFormData({
//       name: "",
//       email: "",
//       message: "",
//       projectType: "UI/UX Design",
//     });
//   };

//   return (
//     <section id="contact" className="py-32 px-6 bg-secondary/30" ref={ref}>
//       <div className="container mx-auto max-w-6xl">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={isInView ? { opacity: 1 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-5xl lg:text-6xl font-display font-bold mb-6">Get In Touch</h2>
//           <p className="text-lg text-muted-foreground">
//             Let's discuss your next project
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="space-y-8"
//           >
//             <div className="space-y-6">
//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
//                   <Mail className="w-5 h-5 text-accent" />
//                 </div>
//                 <div>
//                   <h3 className="font-medium mb-1">Email</h3>
//                   <a href="mailto:creatify76@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
//                     creatify76@gmail.com
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
//                   <Phone className="w-5 h-5 text-teal" />
//                 </div>
//                 <div>
//                   <h3 className="font-medium mb-1">Phone</h3>
//                   <a href="https://wa.me/923272707907?text=Hi%20Muhammad%20Ibrahim%2C%20I%20am%20interested%20in%20your%20services.%20Can%20we%20discuss%20more%3F" className="text-muted-foreground hover:text-teal transition-colors">
//                     +92 327 2707907
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
//                   <MapPin className="w-5 h-5 text-accent" />
//                 </div>
//                 <div>
//                   <h3 className="font-medium mb-1">Location</h3>
//                   <p className="text-muted-foreground">Karachi, Pakistan</p>
//                 </div>
//               </div>
//             </div>

//             {/* <div className="pt-8">
//               <h3 className="font-medium mb-4"></h3>
//               <a
//                 href="https://wa.me/1234567890"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-teal text-teal-foreground hover:scale-105 transition-transform"
//               >
//                 WhatsApp
//               </a>
//             </div> */}
//           </motion.div>

//           {/* Contact Form */}
//           <motion.form
//             initial={{ opacity: 0, x: 30 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             onSubmit={handleSubmit}
//             className="space-y-6"
//           >
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium mb-2">
//                 Name *
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 value={formData.name}
//                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                 className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors"
//                 placeholder="Your name"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-sm font-medium mb-2">
//                 Email *
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 value={formData.email}
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                 className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors"
//                 placeholder="your@email.com"
//               />
//             </div>

//             <div>
//               <label htmlFor="projectType" className="block text-sm font-medium mb-2">
//                 Project Type
//               </label>
//               <select
//                 id="projectType"
//                 value={formData.projectType}
//                 onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
//                 className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors"
//               >
//                 <option>UI/UX Design</option>
//                 <option>Frontend Development</option>
//                 <option>Full Website</option>
//                 <option>Consultation</option>
//               </select>
//             </div>

//             <div>
//               <label htmlFor="message" className="block text-sm font-medium mb-2">
//                 Message *
//               </label>
//               <textarea
//                 id="message"
//                 value={formData.message}
//                 onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                 rows={5}
//                 className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors resize-none"
//                 placeholder="Tell me about your project..."
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full py-3 px-6 rounded-full bg-accent text-accent-foreground font-medium hover:scale-105 transition-transform"
//             >
//               Send Message
//             </button>
//           </motion.form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

// Contact.tsx
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import toast, { Toaster } from 'react-hot-toast'; // ✅ toast library

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    projectType: "UI/UX Design",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill all required fields!");
      return;
    }

    setLoading(true);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("projectType", formData.projectType);
    data.append("message", formData.message);

    try {
      const res = await fetch("https://formspree.io/f/mdkbkjwe", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "", projectType: "UI/UX Design" });
      } else {
        toast.error("Oops! Something went wrong.");
      }
    } catch {
      toast.error("Error submitting form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-" ref={ref}>
      <Toaster position="top-right" reverseOrder={false} /> {/* ✅ toast container */}

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-display font-bold mb-6">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">Let's discuss your next project</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Email</h3>
                <a href="mailto:creatify76@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
                  creatify76@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-teal" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Phone</h3>
                <a href="https://wa.me/923272707907?text=Hi%20Muhammad%20Ibrahim,%20I%20am%20interested%20in%20your%20services.%20Can%20we%20discuss%20more%3F" className="text-muted-foreground hover:text-teal transition-colors">
                  +92 327 2707907
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Location</h3>
                <p className="text-muted-foreground">Karachi, Pakistan</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="projectType" className="block text-sm font-medium mb-2">Project Type</label>
              <select
                id="projectType"
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors"
              >
                <option>UI/UX Design</option>
                <option>Frontend Development</option>
                <option>Full Website</option>
                <option>Consultation</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-6 rounded-full bg-accent text-accent-foreground font-medium hover:scale-105 transition-transform"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
