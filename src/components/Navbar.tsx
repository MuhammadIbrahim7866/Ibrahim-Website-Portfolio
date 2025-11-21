// import { Moon, Sun } from "lucide-react";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// const Navbar = () => {
//   const [isDark, setIsDark] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const stored = localStorage.getItem("theme");
//     const isDarkStored = stored === "dark";
//     setIsDark(isDarkStored);
//     document.documentElement.classList.toggle("dark", isDarkStored);

//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleTheme = () => {
//     const newDark = !isDark;
//     setIsDark(newDark);
//     document.documentElement.classList.toggle("dark", newDark);
//     localStorage.setItem("theme", newDark ? "dark" : "light");
//   };

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled ? "bg-background/80 backdrop-blur-lg shadow-soft" : "bg-background"
//       }`}
//     >
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="text-2xl font-display font-bold cursor-pointer"
//             onClick={() => scrollToSection("hero")}
//           >
//             MI
//           </motion.div>
          

//           {/* Center Navigation */}
//           <div className="hidden md:flex items-center gap-8">
//             {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
//               <button
//                 key={item}
//                 onClick={() => scrollToSection(item.toLowerCase())}
//                 className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors relative group"
//               >
//                 {item}
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
//               </button>
//             ))}
//           </div>

//           {/* Right Section: Theme Toggle + CTA */}
//           <div className="flex items-center gap-4">
//             <button
//               onClick={toggleTheme}
//               className="w-10 h-10 rounded-full bg- flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
//               aria-label="Toggle theme"
//             >
//               {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
//             </button>
//             <button
//               onClick={() => scrollToSection("contact")}
//               className="hidden md:inline-flex items-center justify-center px-6 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium hover:scale-105 transition-transform duration-300"
//             >
//               Contact
//             </button>
//           </div>
//         </div>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;


// import { Moon, Sun } from "lucide-react";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// const Navbar = () => {
//   const [isDark, setIsDark] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const stored = localStorage.getItem("theme");
//     const isDarkStored = stored === "dark";
//     setIsDark(isDarkStored);
//     document.documentElement.classList.toggle("dark", isDarkStored);

//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleTheme = () => {
//     const newDark = !isDark;
//     setIsDark(newDark);
//     document.documentElement.classList.toggle("dark", newDark);
//     localStorage.setItem("theme", newDark ? "dark" : "light");
//   };

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled ? "bg-background/80 backdrop-blur-lg shadow-soft" : "bg-background"
//       }`}
//     >
//       <div className="container mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="text-2xl font-display font-bold cursor-pointer"
//             onClick={() => scrollToSection("hero")} // Logo scrolls to hero
//           >
//             MI
//           </motion.div>

//           {/* Center Navigation */}
//           <div className="hidden md:flex items-center gap-8">
//             {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
//               <button
//                 key={item}
//                 onClick={() =>
//                   scrollToSection(item.toLowerCase() === "home" ? "hero" : item.toLowerCase())
//                 } // Home scrolls to hero, others to their sections
//                 className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors relative group"
//               >
//                 {item}
//                 <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
//               </button>
//             ))}
//           </div>

//           {/* Right Section: Theme Toggle + CTA */}
//           <div className="flex items-center gap-4">
//             <button
//               onClick={toggleTheme}
//               className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
//               aria-label="Toggle theme"
//             >
//               {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
//             </button>
//             <button
//               onClick={() => scrollToSection("contact")}
//               className="hidden md:inline-flex items-center justify-center px-6 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium hover:scale-105 transition-transform duration-300"
//             >
//               Contact
//             </button>
//           </div>
//         </div>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDarkStored = stored === "dark";
    setIsDark(isDarkStored);
    document.documentElement.classList.toggle("dark", isDarkStored);

    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.classList.toggle("dark", newDark);
    localStorage.setItem("theme", newDark ? "dark" : "light");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false); // Close mobile menu
    }
  };

  const navItems = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg shadow-soft" : "bg-background"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-display font-bold cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            MI
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() =>
                  scrollToSection(item.toLowerCase() === "home" ? "hero" : item.toLowerCase())
                }
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Right Section: Theme Toggle + Hamburger */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Desktop Contact Button */}
            <button
              onClick={() => scrollToSection("contact")}
              className="hidden md:inline-flex items-center justify-center px-6 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium hover:scale-105 transition-transform duration-300"
            >
              Contact
            </button>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background w-full px-6 py-4 shadow-lg">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() =>
                    scrollToSection(item.toLowerCase() === "home" ? "hero" : item.toLowerCase())
                  }
                  className="block text-lg font-medium w-full text-left hover:text-accent transition-colors"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;

