// import { Github, Linkedin, Twitter, Mail } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="py-12 px-6 border-t border-border">
//       <div className="container mx-auto">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-6">
//           {/* Copyright */}
//           <p className="text-sm text-muted-foreground">
//             © 2025 Muhammad Ibrahim. All rights reserved.
//           </p>

//           {/* Social Links */}
//           <div className="flex items-center gap-4">
//             <a
//               href="https://github.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-10 h-10 rounded-full bg- hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all"
//               aria-label="GitHub"
//             >
//               <Github className="w-5 h-5" />
//             </a>
//             <a
//               href="https://linkedin.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-10 h-10 rounded-full bg- hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all"
//               aria-label="LinkedIn"
//             >
//               <Linkedin className="w-5 h-5" />
//             </a>
//             <a
//               href="https://twitter.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-10 h-10 rounded-full bg- hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all"
//               aria-label="Twitter"
//             >
//               <Twitter className="w-5 h-5" />
//             </a>
//             <a
//               href="mailto:creatify76@gmail.com"
//               className="w-10 h-10 rounded-full bg- hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all"
//               aria-label="Email"
//             >
//               <Mail className="w-5 h-5" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2025 Muhammad Ibrahim. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">

            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61584175702324"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg- hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-300"
            >
              <img
                src="/facebook.png"
                alt="Facebook"
                className="w-6 h-6 block dark:hidden"
              />
              <img
                src="/facebookwhite.png"
                alt="Facebook"
                className="w-6 h-6 hidden dark:block"
              />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/creatify_76/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg- hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-300"
            >
              <img
                src="/instagram.png"
                alt="Instagram"
                className="w-6 h-6 block dark:hidden"
              />
              <img
                src="/instagramwhite.png"
                alt="Instagram"
                className="w-6 h-6 hidden dark:block"
              />
            </a>

            {/* Threads */}
            <a
              href="https://www.threads.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg- hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-300"
            >
              <img
                src="/threads.png"
                alt="Threads"
                className="w-6 h-6 block dark:hidden"
              />
              <img
                src="/threadswhite.png"
                alt="Threads"
                className="w-6 h-6 hidden dark:block"
              />
            </a>

            {/* Discord */}
            <a
              href="https://discord.com/channels/@me"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg- hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-300"
            >
              <img
                src="/discord.png"
                alt="Discord"
                className="w-6 h-6 block dark:hidden"
              />
              <img
                src="/discordwhite.png"
                alt="Discord"
                className="w-6 h-6 hidden dark:block"
              />
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
