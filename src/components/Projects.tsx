"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Level Up AI",
    subtitle: "Learning AI Web Application",
    description:
      "Implemented an AI-driven content recommendation feature to personalize user experiences. Designed backend logic with structured data handling and containerized the application using Docker.",
    image: "https://image2url.com/r2/default/images/1768282277728-e9f16250-f070-4df3-88d8-9aa9480b621b.png    ",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase"],
    github: "https://github.com/Balachandransakthivel/levelup-ai.git",
    live: "https://levelup-learning-ai.vercel.app/",
  },
  {
    title: "Cafe Pro",
    subtitle: "Restaurant Website",
    description:
      "Designed responsive website with React components for Home, Menu, About, and Contact sections. Implemented modern UI layouts and responsive design principles.",
    image: "https://image2url.com/r2/default/images/1768282334315-027578a4-d414-4916-a60b-7195c0d6e23a.png",
    tech: ["HTML", "CSS", "JavaScript", "React", "Vercel"],
    github: "https://github.com/Balachandransakthivel/cafesoftware.git",
    live: "https://cafesoftware.vercel.app/",
  },
  {
    title: "Text-to-Voice Converter",
    subtitle: "Web Speech Application",
    description:
      "Implemented the Web Speech API to convert user-provided text into natural-sounding speech. Developed a React-based UI with multiple voice and language selection options.",
    image: "https://image2url.com/r2/default/images/1768282386090-82bcf6bb-30e4-4930-bcdd-193fa4dbae69.png",
    tech: ["React, Next.js, JavaScript, TypeScript, Web Speech API"],
    github: "https://github.com/Balachandransakthivel/react-text-to-speech-app",
    live: "https://react-text-to-speech-app.vercel.app/",
  },
];

export function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for building
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    {project.live && (
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-primary text-sm font-medium mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
