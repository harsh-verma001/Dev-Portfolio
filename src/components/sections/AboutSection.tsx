"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Career timeline data
const timelineData = [
  {
    year: "Aug 2024 - Dec 2024",
    role: "Junior Software Developer",
    company: "Deetya Soft. Pvt. Ltd.",
    description:
      "Leading front-end architecture for enterprise application with React, Node.js, and JavaScript.",
  },
];

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-stripe-gradient-1 to-stripe-gradient-3 mx-auto rounded-full"
          ></motion.div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left column: Bio and image */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="col-span-1 lg:col-span-2 flex flex-col space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-stripe-gradient-1 to-stripe-gradient-3 opacity-20 blur"></div>
                <Avatar className="h-48 w-48 border-2 border-stripe-gradient-1/30">
                  <AvatarImage
                    src="/assets/image.webp"
                    alt="Developer portrait"
                  />
                  <AvatarFallback className="text-4xl bg-gradient-to-br from-stripe-gradient-1 to-stripe-gradient-3">
                    DF
                  </AvatarFallback>
                </Avatar>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-4 text-center lg:text-left"
            >
              <h3 className="text-2xl font-bold">Who I Am</h3>
              <p className="text-gray-300">
                I'm a passionate full-stack developer with expertise in building
                modern, scalable web applications. With 1+ years of relevant
                experience, I specialize in JavaScript ecosystems including
                React, Next.js, Node.js, and TypeScript.
              </p>
              <p className="text-gray-300">
                I believe in clean code, thoughtful architecture, and creating
                user experiences that are both beautiful and functional. My
                approach combines technical expertise with creative
                problem-solving to build solutions that exceed expectations.
              </p>
              <div className="pt-4">
                <motion.div
                  className="inline-flex items-center space-x-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <div className="flex justify-center space-x-4">
                    {/* Social icons */}
                    <a
                      href="https://www.linkedin.com/in/harsh-verma001/"
                      className="h-10 w-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-stripe-gradient-1 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="text-gray-300"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                      </svg>
                    </a>
                    <a
                      href="https://github.com/harsh-verma001"
                      className="h-10 w-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-stripe-gradient-1 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="text-gray-300"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    </a>
                    <a
                      href="https://x.com/brooHarsh"
                      className="h-10 w-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-stripe-gradient-1 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="text-gray-300"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column: Career timeline */}
          <div className="col-span-1 lg:col-span-3">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold mb-8 text-center lg:text-left"
            >
              Career Journey
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  <div className="flex flex-col md:flex-row gap-4">
                    {/* Year */}
                    <div className="md:w-1/4">
                      <div className="p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover-glow">
                        <p className="font-mono text-stripe-gradient-1">
                          {item.year}
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:w-3/4 relative">
                      <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-stripe-gradient-1 to-transparent hidden md:block"></div>
                      <div className="absolute top-6 -left-1.5 h-3 w-3 rounded-full bg-stripe-gradient-1 hidden md:block"></div>

                      <div className="p-6 bg-gray-900/30 border border-gray-800 rounded-lg ml-0 md:ml-6 hover-glow">
                        <h4 className="text-xl font-semibold">{item.role}</h4>
                        <p className="text-stripe-gradient-3">{item.company}</p>
                        <p className="mt-2 text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
