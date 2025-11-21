// import { motion } from "framer-motion";
// import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
// import { useState } from "react";

// // Import all images
// import proj01Slide01 from "@/assets/projects/portfolio mockups (1).jpeg";
// import proj01Slide02 from "@/assets/projects/portfolio mockups (2).jpeg";
// import proj01Slide03 from "@/assets/projects/portfolio mockups (22).jpeg";
// import proj02Slide01 from "@/assets/projects/portfolio mockups (21).jpeg";
// import proj02Slide02 from "@/assets/projects/portfolio mockups (22).jpeg";
// import proj02Slide03 from "@/assets/projects/portfolio mockups (22).jpeg";
// import proj03Slide01 from "@/assets/projects/portfolio mockups (3).jpeg";
// import proj03Slide02 from "@/assets/projects/portfolio mockups (4).jpeg";
// import proj03Slide03 from "@/assets/projects/portfolio mockups (5).jpeg";
// import proj04Slide01 from "@/assets/projects/portfolio mockups (10).jpeg";
// import proj04Slide02 from "@/assets/projects/portfolio mockups (11).jpeg";
// import proj04Slide03 from "@/assets/projects/portfolio mockups (22).jpeg";
// import proj05Slide01 from "@/assets/projects/portfolio mockups (12).jpeg";
// import proj05Slide02 from "@/assets/projects/portfolio mockups (13).jpeg";
// import proj05Slide03 from "@/assets/projects/portfolio mockups (22).jpeg";
// import proj06Slide01 from "@/assets/projects/portfolio mockups (6).jpeg";
// import proj06Slide02 from "@/assets/projects/portfolio mockups (7).jpeg";
// import proj06Slide03 from "@/assets/projects/portfolio mockups (7).jpeg";
// import proj07Slide01 from "@/assets/projects/portfolio mockups (8).jpeg";
// import proj07Slide02 from "@/assets/projects/portfolio mockups (9).jpeg";
// import proj07Slide03 from "@/assets/projects/portfolio mockups (22).jpeg";
// import proj08Slide01 from "@/assets/projects/portfolio mockups (17).jpeg";
// import proj08Slide02 from "@/assets/projects/portfolio mockups (18).jpeg";
// import proj08Slide03 from "@/assets/projects/portfolio mockups (22).jpeg";
// import proj09Slide01 from "@/assets/projects/portfolio mockups (14).jpeg";
// import proj09Slide02 from "@/assets/projects/portfolio mockups (15).jpeg";
// import proj09Slide03 from "@/assets/projects/portfolio mockups (16).jpeg";
// import proj10Slide01 from "@/assets/projects/portfolio mockups (19).jpeg";
// import proj10Slide02 from "@/assets/projects/portfolio mockups (20).jpeg";

// const imageMap: Record<string, string> = {
//   "proj-01-slide-01": proj01Slide01,
//   "proj-01-slide-02": proj01Slide02,
//   "proj-01-slide-03": proj01Slide03,
//   "proj-02-slide-01": proj02Slide01,
//   "proj-02-slide-02": proj02Slide02,
//   "proj-02-slide-03": proj02Slide03,
//   "proj-03-slide-01": proj03Slide01,
//   "proj-03-slide-02": proj03Slide02,
//   "proj-03-slide-03": proj03Slide03,
//   "proj-04-slide-01": proj04Slide01,
//   "proj-04-slide-02": proj04Slide02,
//   "proj-04-slide-03": proj04Slide03,
//   "proj-05-slide-01": proj05Slide01,
//   "proj-05-slide-02": proj05Slide02,
//   "proj-05-slide-03": proj05Slide03,
//   "proj-06-slide-01": proj06Slide01,
//   "proj-06-slide-02": proj06Slide02,
//   "proj-06-slide-03": proj06Slide03,
//   "proj-07-slide-01": proj07Slide01,
//   "proj-07-slide-02": proj07Slide02,
//   "proj-07-slide-03": proj07Slide03,
//   "proj-08-slide-01": proj08Slide01,
//   "proj-08-slide-02": proj08Slide02,
//   "proj-08-slide-03": proj08Slide03,
//   "proj-09-slide-01": proj09Slide01,
//   "proj-09-slide-02": proj09Slide02,
//   "proj-09-slide-03": proj09Slide03,
//   "proj-10-slide-01": proj10Slide01,
//   "proj-10-slide-02": proj10Slide02,
// };

// interface Project {
//   id: string;
//   title: string;
//   category: string;
//   description: string;
//   tags: string[];
//   images: string[];
//   liveUrl: string;
//   techStack?: string[];
// }

// const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   const nextSlide = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     setCurrentSlide((prev) => (prev + 1) % project.images.length);
//   };

//   const prevSlide = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     setCurrentSlide((prev) => (prev - 1 + project.images.length) % project.images.length);
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: index * 0.1, duration: 0.6 }}
//       whileHover={{ y: -8, scale: 1.04 }}
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//       className="group relative bg-card border-2 border-border rounded-2xl overflow-hidden shadow-soft hover:shadow-strong hover:border-accent transition-all duration-300"
//     >
//       {/* Image Carousel */}
//       <div className="relative aspect-[4/3] overflow-hidden bg-muted">
//         <motion.img
//           key={currentSlide}
//           src={imageMap[project.images[currentSlide]]}
//           alt={`${project.title} - Slide ${currentSlide + 1}`}
//           className="w-full h-full object-cover transition-transform duration-500"
//           initial={{ opacity: 0, scale: 1 }}
//           animate={{ 
//             opacity: 1, 
//             scale: isHovered ? 1.05 : 1 
//           }}
//           transition={{ duration: 0.5, ease: "easeOut" }}
//         />

//         {/* Carousel Controls */}
//         {isHovered && project.images.length > 1 && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="absolute inset-0 flex items-center justify-between px-4"
//           >
//             <button
//               onClick={prevSlide}
//               className="w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
//             >
//               <ChevronLeft className="w-5 h-5" />
//             </button>
//             <button
//               onClick={nextSlide}
//               className="w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
//             >
//               <ChevronRight className="w-5 h-5" />
//             </button>
//           </motion.div>
//         )}

//         {/* Dots Indicator */}
//         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
//           {project.images.map((_, i) => (
//             <button
//               key={i}
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setCurrentSlide(i);
//               }}
//               className={`w-2 h-2 rounded-full transition-all ${
//                 i === currentSlide ? "bg-accent w-6" : "bg-white/50"
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-6 space-y-4">
//         <div>
//           <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-accent transition-colors">
//             {project.title}
//           </h3>
//           <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{project.description}</p>
//         </div>

//         {/* Tags */}
//         <div className="flex flex-wrap gap-2 mb-4">
//           {project.tags.map((tag) => (
//             <span
//               key={tag}
//               className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-secondary/ text-foreground border border-border"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>

//         {/* Tech Stack */}
//         {project.techStack && project.techStack.length > 0 && (
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
//             transition={{ duration: 0.3 }}
//             className="mb-4"
//           >
//             <p className="text-xs font-semibold text-muted-foreground mb-2">Tech Used:</p>
//             <div className="flex flex-wrap gap-2">
//               {project.techStack.map((tech) => (
//                 <span
//                   key={tech}
//                   className="px-2 py-1 text-xs font-medium rounded bg-accent/10 text-accent border border-accent/20"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </div>

//       {/* Live View Button - Full Width at Bottom */}
//       <a
//         href={project.liveUrl}
//         target="_blank"
//         rel="noopener noreferrer"
//         onClick={(e) => e.stopPropagation()}
//         className="block w-full py-4 text-center text-sm font-bold bg-accent/5 hover:bg-accent text-accent hover:text-accent-foreground border-t-2 border-accent/20 hover:border-accent transition-all duration-300"
//       >
//         <span className="inline-flex items-center gap-2">
//           <ExternalLink className="w-4 h-4" />
//           Live View
//         </span>
//       </a>
//     </motion.div>
//   );
// };

// export default ProjectCard;
import { motion } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

// Import all project images
import proj01Slide01 from "@/assets/projects/portfolio mockups (1).jpeg";
import proj01Slide02 from "@/assets/projects/portfolio mockups (2).jpeg";
import proj01Slide03 from "@/assets/projects/portfolio mockups (22).jpeg";
import proj02Slide01 from "@/assets/projects/portfolio mockups (21).jpeg";
import proj02Slide02 from "@/assets/projects/portfolio mockups (22).jpeg";
import proj02Slide03 from "@/assets/projects/portfolio mockups (22).jpeg";
import proj03Slide01 from "@/assets/projects/portfolio mockups (3).jpeg";
import proj03Slide02 from "@/assets/projects/portfolio mockups (4).jpeg";
import proj03Slide03 from "@/assets/projects/portfolio mockups (5).jpeg";
import proj04Slide01 from "@/assets/projects/portfolio mockups (10).jpeg";
import proj04Slide02 from "@/assets/projects/portfolio mockups (11).jpeg";
import proj04Slide03 from "@/assets/projects/portfolio mockups (22).jpeg";
import proj05Slide01 from "@/assets/projects/portfolio mockups (12).jpeg";
import proj05Slide02 from "@/assets/projects/portfolio mockups (13).jpeg";
import proj05Slide03 from "@/assets/projects/portfolio mockups (22).jpeg";
import proj06Slide01 from "@/assets/projects/portfolio mockups (6).jpeg";
import proj06Slide02 from "@/assets/projects/portfolio mockups (7).jpeg";
import proj06Slide03 from "@/assets/projects/portfolio mockups (7).jpeg";
import proj07Slide01 from "@/assets/projects/portfolio mockups (8).jpeg";
import proj07Slide02 from "@/assets/projects/portfolio mockups (9).jpeg";
import proj07Slide03 from "@/assets/projects/portfolio mockups (22).jpeg";
import proj08Slide01 from "@/assets/projects/portfolio mockups (17).jpeg";
import proj08Slide02 from "@/assets/projects/portfolio mockups (18).jpeg";
import proj08Slide03 from "@/assets/projects/portfolio mockups (22).jpeg";
import proj09Slide01 from "@/assets/projects/portfolio mockups (14).jpeg";
import proj09Slide02 from "@/assets/projects/portfolio mockups (15).jpeg";
import proj09Slide03 from "@/assets/projects/portfolio mockups (16).jpeg";
import proj10Slide01 from "@/assets/projects/portfolio mockups (19).jpeg";
import proj10Slide02 from "@/assets/projects/portfolio mockups (20).jpeg";

const imageMap: Record<string, string> = {
  "proj-01-slide-01": proj01Slide01,
  "proj-01-slide-02": proj01Slide02,
  "proj-01-slide-03": proj01Slide03,
  "proj-02-slide-01": proj02Slide01,
  "proj-02-slide-02": proj02Slide02,
  "proj-02-slide-03": proj02Slide03,
  "proj-03-slide-01": proj03Slide01,
  "proj-03-slide-02": proj03Slide02,
  "proj-03-slide-03": proj03Slide03,
  "proj-04-slide-01": proj04Slide01,
  "proj-04-slide-02": proj04Slide02,
  "proj-04-slide-03": proj04Slide03,
  "proj-05-slide-01": proj05Slide01,
  "proj-05-slide-02": proj05Slide02,
  "proj-05-slide-03": proj05Slide03,
  "proj-06-slide-01": proj06Slide01,
  "proj-06-slide-02": proj06Slide02,
  "proj-06-slide-03": proj06Slide03,
  "proj-07-slide-01": proj07Slide01,
  "proj-07-slide-02": proj07Slide02,
  "proj-07-slide-03": proj07Slide03,
  "proj-08-slide-01": proj08Slide01,
  "proj-08-slide-02": proj08Slide02,
  "proj-08-slide-03": proj08Slide03,
  "proj-09-slide-01": proj09Slide01,
  "proj-09-slide-02": proj09Slide02,
  "proj-09-slide-03": proj09Slide03,
  "proj-10-slide-01": proj10Slide01,
  "proj-10-slide-02": proj10Slide02,
};

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  images: string[];
  liveUrl: string;
  techStack?: string[];
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % project.images.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8, scale: 1.04 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-card border-2 border-border rounded-2xl overflow-hidden shadow-soft hover:shadow-strong hover:border-accent transition-all duration-300"
    >
      {/* Image Carousel */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <motion.img
          key={currentSlide}
          src={imageMap[project.images[currentSlide]]}
          alt={`${project.title} - Slide ${currentSlide + 1}`}
          className="w-full h-full object-cover transition-transform duration-500"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        {/* Carousel Controls - always visible on mobile */}
        {project.images.length > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex items-center justify-between px-4"
          >
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {project.images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentSlide(i);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentSlide ? "bg-accent w-6" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{project.description}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-secondary/ text-foreground border border-border"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Tech Stack */}
        {project.techStack && project.techStack.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.3 }}
            className="mb-4"
          >
            <p className="text-xs font-semibold text-muted-foreground mb-2">Tech Used:</p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs font-medium rounded bg-accent/10 text-accent border border-accent/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Live View Button */}
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="block w-full py-4 text-center text-sm font-bold bg-accent/5 hover:bg-accent text-accent hover:text-accent-foreground border-t-2 border-accent/20 hover:border-accent transition-all duration-300"
      >
        <span className="inline-flex items-center gap-2">
          <ExternalLink className="w-4 h-4" />
          Live View
        </span>
      </a>
    </motion.div>
  );
};

export default ProjectCard;
