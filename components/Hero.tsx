"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Code2,
  Database,
  Server,
  ArrowDownRight,
} from "lucide-react";
import Squares from "./Squares";
import SplitText from "./SplitText";

export function Hero() {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    "Backend Developer",
    "Database Administrator",
    "Full-Stack Developer",
    "Problem Solver",
  ];

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const current = texts[currentIndex];

        if (!isDeleting) {
          setCurrentText(current.substring(0, currentText.length + 1));

          if (currentText === current) {
            setTimeout(() => setIsDeleting(true), 1000);
          }
        } else {
          setCurrentText(current.substring(0, currentText.length - 1));

          if (currentText === "") {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-aurora opacity-10"></div>
      <div className="absolute inset-0 -z-10">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#1f2937"
          hoverFillColor="#0b1020"
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyber-cyan/5 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-magenta/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Pre-title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center space-x-4 text-cyber-muted"
          >
            <SplitText
              text="Hello, World... i'm"
              tag="h1" 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-wider"
              delay={80}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 50, scale: 0.8 }}
              to={{ opacity: 1, y: 0, scale: 1 }}
            />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
          >
            <span className="bg-gradient-to-r from-cyber-cyan via-cyber-magenta to-cyber-purple bg-clip-text text-transparent">
              Daniel
            </span>
            <br />
            <span className="text-cyber-text">Dirgantara</span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="h-16 flex items-center justify-center"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-cyber-cyan font-mono">
              {currentText}
              <span className="animate-pulse">|</span>
            </h2>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-cyber-muted leading-relaxed"
          >
            Computer Science student at{" "}
            <span className="text-cyber-cyan font-mono">BINUS University</span>{" "}
            specializing in database management and backend development.
            <br />
          </motion.p>

          {/* Tech Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex items-center justify-center space-x-8 pt-4"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotateY: 360 }}
              transition={{ duration: 0.6 }}
              className="p-3 border border-cyber-cyan/30 rounded-lg glass"
            >
              <Code2 className="w-6 h-6 text-cyber-cyan" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, rotateY: 360 }}
              transition={{ duration: 0.6 }}
              className="p-3 border border-cyber-magenta/30 rounded-lg glass"
            >
              <Database className="w-6 h-6 text-cyber-magenta" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, rotateY: 360 }}
              transition={{ duration: 0.6 }}
              className="p-3 border border-cyber-purple/30 rounded-lg glass"
            >
              <Server className="w-6 h-6 text-cyber-purple" />
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="pt-8"
          > */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("projects")}
            className="cyber-button text-lg px-8 py-4 rounded-lg"
            data-cursor="pointer"
          >
            <span className="relative z-10 flex items-center gap-2 justify-center">
              Explore My Work
              <ArrowDownRight className="w-5 h-5" />
            </span>
          </motion.button>
          {/* </motion.div> */}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => scrollToSection("projects")}
            className="text-cyber-muted hover:text-cyber-cyan transition-colors duration-300"
            data-cursor="pointer"
          ></motion.button>
        </motion.div>
      </div>
    </section>
  );
}
