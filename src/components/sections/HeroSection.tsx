"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  const images = [
    {
      src: "/assets/ieee3.jpg",
      link: "https://ieeexplore.ieee.org/document/10911694",
    },
    {
      src: "/assets/chess.png",
      link: "https://www.chess.com/member/keenkingdom",
    },
    {
      src: "/assets/leetcode.png",
      link: "https://leetcode.com/u/harsh-verma001/",
    },
    { src: "/assets/creative.jpg" },
    { src: "/assets/creative2.webp" },
    { src: "/assets/quote.png" },
  ];

  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="shape-blob absolute top-20 left-20 w-96 h-96 opacity-40"></div>
        <div className="shape-blob absolute bottom-20 right-20 w-96 h-96 opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-stripe-gradient-1/10 border border-stripe-gradient-1/20 backdrop-blur-sm rounded-lg px-4 py-2 inline-block"
            >
              <p className="text-sm font-medium text-stripe-gradient-1">
                Full-stack Developer
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="leading-tight"
            >
              Building <span className="gradient-text">Scalable</span> &
              <br className="hidden sm:block" />
              <span className="gradient-text">Intelligent</span> Web
              Applications
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="text-lg text-gray-300 max-w-2xl"
            >
              I craft responsive web applications where technology meets
              creativity. Focused on building products that are fast,
              accessible, and user-friendly.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-stripe-gradient-1 to-stripe-gradient-3 text-white hover-glow animate-glow"
              >
                <Link href="/#contact">Let's Connect</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-gray-700 hover:border-stripe-gradient-1"
              >
                <Link href="/#projects">View My Work</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Image/Animated card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:block relative"
          >
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-stripe-gradient-1 to-stripe-gradient-3 opacity-20 blur-lg"></div>
            <div className="relative bg-card border border-gray-800 rounded-2xl p-8 shadow-xl overflow-hidden">
              <div className="flex items-start space-x-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-stripe-gradient-1 to-stripe-gradient-3 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">HF</span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold text-white">
                    Full-stack Developer
                  </h3>
                  <p className="text-gray-400">JavaScript • React • Node.js</p>
                </div>
              </div>

              <div className="mt-8 space-y-6">
                <motion.div
                  initial={{ width: "60%" }}
                  animate={{ width: "90%" }}
                  transition={{
                    duration: 1.5,
                    delay: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  className="h-2 bg-gradient-to-r from-stripe-gradient-1 to-stripe-gradient-3 rounded-full"
                ></motion.div>

                <motion.div
                  initial={{ width: "40%" }}
                  animate={{ width: "75%" }}
                  transition={{
                    duration: 1.8,
                    delay: 1.2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  className="h-2 bg-gradient-to-r from-stripe-gradient-2 to-stripe-gradient-5 rounded-full"
                ></motion.div>

                <motion.div
                  initial={{ width: "30%" }}
                  animate={{ width: "85%" }}
                  transition={{
                    duration: 2.1,
                    delay: 1.4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  className="h-2 bg-gradient-to-r from-stripe-gradient-3 to-stripe-gradient-4 rounded-full"
                ></motion.div>
              </div>

              {/* Dynamic Image Grid */}
              <motion.div className="hidden lg:block relative">
                <div className="relative bg-card border border-gray-800 rounded-2xl p-8 shadow-xl overflow-hidden">
                  <div className="mt-8 grid grid-cols-3 gap-4">
                    {images.map((item, index) => (
                      <motion.div
                        key={index}
                        className="aspect-square rounded-md bg-gray-800/50 flex items-center justify-center relative overflow-hidden"
                      >
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full h-full"
                        >
                          <Image
                            src={item.src}
                            alt={`Image ${index + 1}`}
                            fill
                          />
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
