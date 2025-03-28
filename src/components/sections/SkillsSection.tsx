"use client";

import { motion } from "framer-motion";

// Skill categories and items
const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 80 },
      { name: "React", level: 92 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 87 },
      // { name: "Express", level: 85 },
      // { name: "MongoDB", level: 82 },
      { name: "SQL", level: 78 },
      { name: "MySQL", level: 75 },
      { name: "REST API", level: 92 },
      { name: "Firebase", level: 80 },
    ],
  },
  {
    name: "Tools & Others",
    skills: [
      { name: "Git/GitHub", level: 90 },
      // { name: "Docker", level: 78 },
      // { name: "CI/CD", level: 75 },
      // { name: "AWS", level: 70 },
      { name: "Testing", level: 80 },
      { name: "UI/UX Design", level: 85 },
      { name: "Performance Optimization", level: 82 },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="shape-blob absolute top-1/2 left-1/4 w-96 h-96 opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            My <span className="gradient-text">Skills</span>
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
            My technical toolkit includes a range of languages, frameworks, and
            technologies that I've mastered over the years.
          </motion.p>
        </div>

        {/* Skills Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-gray-900/30 border border-gray-800 rounded-2xl p-6 hover-glow"
            >
              <h3 className="text-xl font-bold mb-6 text-center gradient-text">
                {category.name}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-stripe-gradient-1 font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-stripe-gradient-1 to-stripe-gradient-3 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20"
        >
          <h3 className="text-xl font-bold mb-8 text-center">
            Technologies I Work With
          </h3>

          <div className="flex flex-wrap justify-center gap-8 items-center">
            {[
              { name: "React", color: "#61DAFB" },
              { name: "Next.js", color: "#FFFFFF" },
              { name: "Node.js", color: "#339933" },
              { name: "TypeScript", color: "#3178C6" },
              // { name: "MongoDB", color: "#47A248" },
              { name: "Tailwind CSS", color: "#06B6D4" },
              // { name: "PostgreSQL", color: "#4169E1" },
              // { name: "AWS", color: "#FF9900" },
              // { name: "Docker", color: "#2496ED" },
              { name: "Git", color: "#F05032" },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="flex flex-col items-center"
              >
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-2 border border-gray-800"
                  style={{ backgroundColor: `${tech.color}20` }}
                >
                  <div
                    className="w-8 h-8 rounded-md"
                    style={{ backgroundColor: tech.color }}
                  />
                </div>
                <span className="text-sm text-gray-300">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
