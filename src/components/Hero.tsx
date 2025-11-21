// import { motion } from "framer-motion";
// import { Download, ArrowRight, Code2, Palette, Figma, Layers } from "lucide-react";
// import profileImg from "@/assets/profile.jpg";

// const Hero = () => {
//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const floatingIcons = [
//     { Icon: Code2, position: "top-20 left-10", delay: 0 },
//     { Icon: Palette, position: "top-40 right-20", delay: 0.5 },
//     { Icon: Figma, position: "bottom-32 left-20", delay: 1 },
//     { Icon: Layers, position: "top-60 left-1/4", delay: 1.5 },
//     { Icon: Code2, position: "bottom-20 right-1/4", delay: 2 },
//   ];

//   return (
//     <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div className="absolute inset-0 z-0">
//         <div 
//           className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 opacity-30"
//           style={{
//             backgroundImage: 'url("https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2000&q=80")',
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             filter: 'blur(3px)',
//           }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
//       </div>

//       {/* Floating Icons */}
//       {floatingIcons.map(({ Icon, position, delay }, index) => (
//         <motion.div
//           key={index}
//           className={`floating-icon ${position}`}
//           initial={{ opacity: 0, scale: 0 }}
//           animate={{ opacity: 0.05, scale: 1 }}
//           transition={{ delay, duration: 1 }}
//         >
//           <Icon className="w-24 h-24" />
//         </motion.div>
//       ))}

//       <div className="container mx-auto relative z-10">
//         {/* <div className="grid lg:grid-cols-2 gap-12 items-center"> */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-left">

//           {/* Left: Text Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="space-y-6"
//           >
//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.2 }}
//               className="text-sm uppercase tracking-widest text-accent font-semibold"
//             >
//               UI/UX Designer & Frontend Developer
//             </motion.p>
            
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//               className="text-6xl lg:text-7xl xl:text-8xl font-display font-extrabold leading-tight"
//             >
//               MUHAMMAD
//               <br />
//               IBRAHIM
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.4 }}
//               className="text-xl text-muted-foreground max-w-lg font-medium"
//             >
//               Crafting premium digital experiences through bold design and seamless functionality
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5 }}
//               className="flex flex-wrap gap-4 pt-4"
//             >
//               <button
//                 onClick={() => scrollToSection("projects")}
//                 className="btn-hero group"
//               >
//                 View Projects
//                 <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
//               </button>
//               {/* <button className="inline-flex items-center justify-center rounded-xl px-8 py-4 text-sm font-semibold border-2 border-border hover:border-accent hover:bg-secondary transition-all duration-300">
//                 <Download className="w-5 h-5 mr-2" />
//                 Contact Me
//               </button> */
//               <a
//   href="https://wa.me/923272707907?text=Hi%20Muhammad%20Ibrahim%2C%20I%20am%20interested%20in%20your%20services.%20Can%20we%20discuss%20more%3F
// "
//   target="_blank"
//   rel="noopener noreferrer"
//   className="inline-flex items-center justify-center rounded-xl px-8 py-4 text-sm font-semibold border-2 border-border hover:border-accent hover:bg- transition-all duration-300"
// >
//   {/* <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="w-5 h-5 mr-2"
//     fill="currentColor"
//     viewBox="0 0 24 24"
//   >
//     <path d="M20.52 3.48A11.85 11.85 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.61 5.98L0 24l6.21-1.63A12 12 0 1 0 20.52 3.48zM12 22a9.9 9.9 0 0 1-5.1-1.46l-.36-.21-3.69.97.99-3.6-.23-.37A10 10 0 1 1 12 22zm5.27-7.54c-.29-.15-1.72-.85-1.99-.94-.27-.1-.47-.15-.67.15s-.77.94-.95 1.13c-.17.2-.35.22-.64.07a8.3 8.3 0 0 1-2.45-1.51 9.1 9.1 0 0 1-1.69-2.1c-.18-.3 0-.45.14-.59.14-.14.3-.35.45-.52s.2-.3.3-.5c.1-.2.05-.37-.02-.52s-.67-1.62-.92-2.22c-.24-.58-.5-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1-1.04 2.45s1.07 2.84 1.22 3.04c.15.2 2.1 3.2 5.09 4.48.71.31 1.27.5 1.7.64.72.23 1.38.2 1.9.12.58-.09 1.72-.7 1.97-1.38.24-.67.24-1.24.17-1.38-.07-.14-.26-.22-.55-.37z" />
//   </svg> */}
//     <img 
//     src="/wa business logo.png"
//     alt="WhatsApp" 
//     className="w-5 h-5 mr-2 dark:hidden"
//   />
//   <img
//     src="/wa business white.png"
//     alt="WhatsApp White"
//     className="w-5 h-5 mr-2 hidden dark:inline"
//   />

//   Contact Me
// </a>
// }
//             </motion.div>
//           </motion.div>

//           {/* Right: Profile Image */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             className="relative"
//           >
//             <div className="relative w-full aspect-square max-w-lg mx-auto">
//               {/* Animated Border with Glow */}
//               <motion.div
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                 className="absolute inset-0 rounded-[40%_60%_70%_30%/60%_30%_70%_40%]"
//                 style={{
//                   background: "linear-gradient(45deg, hsl(var(--accent)) 0%, hsl(var(--accent)) 100%)",
//                   padding: "4px",
//                   filter: "drop-shadow(0 0 20px hsl(var(--accent) / 0.4))",
//                 }}
//               >
//                 <div className="w-full h-full bg-background rounded-[40%_60%_70%_30%/60%_30%_70%_40%]" />
//               </motion.div>
              
//               {/* Profile Image */}
//               {/* <div className="absolute inset-3 rounded-[40%_60%_70%_30%/60%_30%_70%_40%] overflow-hidden">
//                 <img
//                   src={profileImg}
//                   alt="Muhammad Ibrahim"
//                   className="w-full h-full object-cover"
//                 />
//               </div> */}
//               <div className="absolute inset-3 rounded-[40%_60%_70%_30%/60%_30%_70%_40%] overflow-hidden">
//   <img
//     src="/profileimage.png"   // <-- yahan apni image ka naam daldo
//     alt="Muhammad Ibrahim"
//     className="w-full h-full object-cover"
//   />
// </div>


//               {/* Floating Particles */}
//               {[...Array(5)].map((_, i) => (
//                 <motion.div
//                   key={i}
//                   className="absolute w-2 h-2 rounded-full bg-accent/30"
//                   style={{
//                     left: `${20 + i * 15}%`,
//                     top: `${10 + i * 20}%`,
//                   }}
//                   animate={{
//                     y: [-20, 20, -20],
//                     opacity: [0.3, 0.8, 0.3],
//                   }}
//                   transition={{
//                     duration: 3 + i,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                 />
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import { motion } from "framer-motion";
import { ArrowRight, Code2, Palette, Figma, Layers } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const floatingIcons = [
    { Icon: Code2, position: "top-20 left-10", delay: 0 },
    { Icon: Palette, position: "top-40 right-20", delay: 0.5 },
    { Icon: Figma, position: "bottom-32 left-20", delay: 1 },
    { Icon: Layers, position: "top-60 left-1/4", delay: 1.5 },
    { Icon: Code2, position: "bottom-20 right-1/4", delay: 2 },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 opacity-30"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2000&q=80")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(3px)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
      </div>

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, position, delay }, index) => (
        <motion.div
          key={index}
          className={`floating-icon ${position}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ delay, duration: 1 }}
        >
          <Icon className="w-24 h-24" />
        </motion.div>
      ))}

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT SECTION
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sm uppercase tracking-widest text-accent font-semibold text-left"
            >
              UI/UX Designer & Frontend Developer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-extrabold leading-tight text-left"
            >
              MUHAMMAD <br /> IBRAHIM
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground max-w-lg font-medium text-left"
            >
              Crafting premium digital experiences through bold design and seamless functionality
            </motion.p>

            {/* BUTTONS SIDE BY SIDE */}
            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-row gap-4 pt-4"
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="btn-hero group"
              >
                View Projects
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="https://wa.me/923272707907?text=Hi%20Muhammad%20Ibrahim%2C%20I%20am%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl px-7 py-4 text-sm font-semibold border-2 border-border hover:border-accent hover:bg-secondary transition-all duration-300"
              >
                <img
                  src="/wa business logo.png"
                  alt="WhatsApp"
                  className="w-5 h-5 mr-2 dark:hidden"
                />
                <img
                  src="/wa business white.png"
                  alt="WhatsApp White"
                  className="w-5 h-5 mr-2 hidden dark:inline"
                />
                Contact Me
              </a>
            </motion.div>
          </motion.div> */}
          {/* LEFT TEXT SECTION */}
<motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="space-y-8 text-left sm:pl-2 max-[400px]:pl-3" // iPhone 12 slight left push
>
  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2 }}
    className="text-sm uppercase tracking-widest text-accent font-semibold text-left"
  >
    UI/UX Designer & Frontend Developer
  </motion.p>

  <motion.h1
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
    className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-extrabold leading-tight text-left"
  >
    MUHAMMAD <br /> IBRAHIM
  </motion.h1>

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.4 }}
    className="text-lg md:text-xl text-muted-foreground max-w-lg font-medium text-left"
  >
    Crafting premium digital experiences through bold design and seamless functionality
  </motion.p>

  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5 }}
    className="flex flex-row gap-4 pt-4 max-[400px]:pl-3" // slight left shift only on mobile
  >
    <button
      onClick={() => scrollToSection("projects")}
      className="btn-hero group"
    >
      View Projects
      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
    </button>

    <a
      href="https://wa.me/923272707907?text=Hi%20Muhammad%20Ibrahim%2C%20I%20am%20interested%20in%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-xl px-7 py-4 text-sm font-semibold border-2 border-border hover:border-accent hover:bg-secondary transition-all duration-300 sm:ml-1"
    >
      <img
        src="/wa business logo.png"
        alt="WhatsApp"
        className="w-5 h-5 mr-2 dark:hidden"
      />
      <img
        src="/wa business white.png"
        alt="WhatsApp White"
        className="w-5 h-5 mr-2 hidden dark:inline"
      />
      Contact Me
    </a>
  </motion.div>
</motion.div>

          {/* RIGHT IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-[95%] md:w-[75%] lg:w-full max-w-xl aspect-square ml-[-10px] mx-auto">
              
              {/* BORDER ANIMATION */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-[40%_60%_70%_30%/60%_30%_70%_40%]"
                style={{
                  background:
                    "linear-gradient(45deg, hsl(var(--accent)) 0%, hsl(var(--accent)) 100%)",
                  padding: "8px",
                  filter: "drop-shadow(0 0 30px hsl(var(--accent) / 0.7))",
                }}
              >
                <div className="w-full h-full bg-background rounded-[40%_60%_70%_30%/60%_30%_70%_40%]" />
              </motion.div>

              {/* PROFILE IMAGE */}
              <div className="absolute inset-3 rounded-[40%_60%_70%_30%/60%_30%_70%_40%] overflow-hidden">
                <img
                  src="/profileimage.png"
                  alt="Muhammad Ibrahim"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

