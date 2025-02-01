import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Badge from "./components/Badges";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    title: "Hacien",
    description:
      "HACIEN is a premium tequila brand supplying high-end hospitality and retail locations worldwide. They approached Phunk to undertake a comprehensive design project comprising web, packaging and marketing assets as well as 3D renders of their signature bottles.",
    tags: ["Webflow Development", "UI/UX Design", "Webflow Training", "Graphic Design"],
    caseStudyUrl: "#",
    imgUrl: "https://cdn.prod.website-files.com/6501f1891917bde75ab542ee/65411cf4f8251ab33a7d442b_HACIEN%20Thumbnail.webp",
  },
  {
    title: "Mobilleo",
    description:
      "Mannson Freight operates import and export consolidation services involving sea freight. They engaged us to rebrand their corporate identity and develop a new higher-performance website, as well as a custom-built portal — MFS Pro— including ongoing support.",
    tags: ["Webflow Development", "UI/UX Design", "Webflow Training", "Graphic Design"],
    caseStudyUrl: "#",
    imgUrl: "https://cdn.prod.website-files.com/6501f1891917bde75ab542ee/65411d0755e48e6b5ec08e9a_Mobilio%20Thumbnail.webp",
  },
  {
    title: "Mannson Freight",
    description:
      "Mannson Freight operates import and export consolidation services involving sea freight. They engaged us to rebrand their corporate identity and develop a new higher-performance website, as well as a custom-built portal — MFS Pro— including ongoing support.",
    tags: ["Webflow Development", "UI/UX Design", "Webflow Training", "Graphic Design"],
    caseStudyUrl: "#",
    imgUrl: "https://cdn.prod.website-files.com/6501f1891917bde75ab542ee/65411d16c21a037f3b0a622a_Mannson%20Thumbnail.webp",
  },
  {
    title: "BOX iQ",
    description:
      "BOXiQ Performance Center in Dubai is a globally recognised boxing gym — hosting icons like Tyson Fury and Oleksandr Usyk. Working with Phunk, they now have a high-quality digital presence to match the prestige of their brand.",
    tags: ["UI/UX Design", "Mobile Development", "Branding"],
    caseStudyUrl: "#",
    imgUrl: "https://cdn.prod.website-files.com/6501f1891917bde75ab542ee/65411d311c63649d5c6843d5_Boxiq%20Thumbnail.webp",
  },
  {
    title: "The Honest Watch Dealer",
    description:
      "The Honest Watch Dealer is a luxury watch expert renowned for his popular YouTube channel, as well as founding The Luxury Watch Company. Charlie (his real name) engaged Phunk to develop a brand identity for his channel, with applications across a range of merchandise.",
    tags: ["Branding", "Development", "Strategy"],
    caseStudyUrl: "#",
    imgUrl: "https://cdn.prod.website-files.com/6501f1891917bde75ab542ee/65411d3f05b871765a7cac0c_Honest%20Watch%20Thumbnail.webp",
  },
];

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-5 py-24">
        <div className="sticky top-0 pt-24 pb-5 z-10 bg-black bg-gradient-to-b from-black/90 to-transparent">
          <motion.h1
            className="text-6xl font-extrabold"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Dive into the <span className="text-cyan-400">work.</span>
          </motion.h1>
          <motion.p
            className="text-neutral-400 max-w-2xl mt-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            As creatives ourselves, we know that what you really want to see is the work we've actually put live. Here's
            a showcase of some of our recent projects, across a range of sectors.
          </motion.p>
        </div>

        <div ref={containerRef} className="relative mt-24">
          <div className="sticky top-1/2 left-0 w-1/2 h-[600px] -translate-y-1/2 overflow-hidden">
            {projects.map((project, index) => {
              const yProgress = useTransform(
                scrollYProgress,
                [index / projects.length, (index + 1) / projects.length],
                ["100%", "0%"]
              );
              return (
                <motion.div
                  key={index}
                  style={{ y: yProgress }}
                  className="absolute inset-0 w-full h-full"
                >
                  <motion.img
                    src={project.imgUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    // initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                </motion.div>
              );
            })}
          </div>

          {projects.map((project, index) => (
            <div className="relative flex items-center " key={index}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full ">
                <div className="relative aspect-[3/4] w-full shadow-lg transition-shadow duration-500"></div>

                <div className="space-y-6 pb-0 ml-6">
                  <div className="flex flex-wrap gap-2 pt-0">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        className="bg-black/10 backdrop-blur-sm text-neutral-200 border border-cyan-400"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <h2 className="text-4xl font-extrabold">{project.title}</h2>
                  <p className="text-neutral-400 leading-relaxed">{project.description}</p>

                  <a
                    href={project.caseStudyUrl}
                    className="inline-flex items-center text-neutral-200 hover:text-white gap-2 group underline font-stretch-ultra-expanded" 
                  >
                    See full case study
                    <ArrowUpRight className="w-4 h-4 mt-0 mb-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /> <br />
                    <div className="h-px bg-white mt-1" style={{ width: "max-content" }}></div>
                  </a>
                 
                
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}