"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

// Project interface
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink: string;
  githubLink: string;
}

// Project data
const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform inspired by Amazon.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    tags: ["Javascript", "React", "Node.js"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 2,
    title: "Gemini Clone",
    description:
      "An AI-powered content generation tool that helps writers create blog posts and marketing copy.",
    image:
      "https://images.unsplash.com/photo-1677442135136-760c813052d1?q=80&w=800&auto=format&fit=crop",
    tags: ["Javascript", "React.js", "Gemini API", "CSS"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 3,
    title: "Spotify Clone",
    description:
      "Interactive dashboard for business analytics with real-time data visualization and reporting.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    tags: ["React", "Javascript", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 4,
    title: "Chat Application",
    description:
      "A responsive chat application with real-time messaging, notifications, and content sharing.",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop",
    tags: ["React Native", "GraphQL", "AWS Amplify", "Redux"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 5,
    title: "Dermanest",
    description:
      "A comprehensive skin disease detection platform for monitoring skin wellness and early identifying of disease.",
    image:
      "https://images.unsplash.com/photo-1550259979-ed79b48d2a30?q=80&w=800&auto=format&fit=crop",
    tags: ["React.js", "Node.js", "TailwindCSS"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 6,
    title: "Portfolio Website",
    description:
      "A modern dark-themed portfolio website with interactive animations and responsive design.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800&auto=format&fit=crop",
    tags: ["Next.js", "Framer Motion", "TypeScript", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            My <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-stripe-gradient-1 to-stripe-gradient-3 mx-auto rounded-full"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-gray-300 max-w-2xl mx-auto"
          >
            Explore my recent work. Each project represents a unique challenge
            solved with creativity and technical expertise.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: Readonly<ProjectCardProps>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="bg-card border border-gray-800 overflow-hidden h-full card-hover">
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={450}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-xl">{project.title}</CardTitle>
          <CardDescription className="text-gray-400">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-stripe-gradient-1/10 text-stripe-gradient-1 border border-stripe-gradient-1/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between gap-4">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="w-full border-gray-700 hover:border-stripe-gradient-1"
          >
            <Link href={project.githubLink}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="mr-2"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
              Code
            </Link>
          </Button>
          <Button
            asChild
            size="sm"
            className="w-full bg-gradient-to-r from-stripe-gradient-1 to-stripe-gradient-3"
          >
            <Link href={project.liveLink}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              Live Demo
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
