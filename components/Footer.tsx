'use client';

import { motion } from 'framer-motion';
import { Heart, Code, Coffee } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/danieldtara' },
    { name: 'GitHub', href: 'https://github.com/yechika' },
  ];

  return (
    <footer className="relative border-t border-cyber-muted/20 bg-cyber-darker/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="text-2xl font-bold font-mono text-glow-cyan mb-2">
              {'<DD />'}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.name !== 'Email' ? '_blank' : undefined}
                rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-cyber-muted hover:text-cyber-cyan transition-colors duration-300 text-sm font-mono neon-underline"
                data-cursor="pointer"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <p className="text-cyber-muted text-sm flex items-center justify-center md:justify-end space-x-1">
              <span>© {currentYear} Daniel Dirgantara.</span>
            </p>
            <div className="flex items-center justify-center md:justify-end space-x-1 text-xs text-cyber-muted mt-1">
              <span>Built with</span>
              <Code className="w-3 h-3 text-cyber-cyan" />
              <span>&</span>
              <Coffee className="w-3 h-3 text-cyber-magenta" />
              <span>&</span>
              <Heart className="w-3 h-3 text-red-500" />
            </div>
          </motion.div>
        </div>

        {/* Bottom Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-cyber-muted/10 mt-8 pt-8"
        >
          <div className="flex flex-wrap justify-center items-center space-x-4 text-xs text-cyber-muted">
            <span>Powered by:</span>
            <span className="tech-pill">Next.js</span>
            <span className="tech-pill">TypeScript</span>
            <span className="tech-pill">Tailwind CSS</span>
            <span className="tech-pill">Framer Motion</span>
          </div>
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            y: [0, -10, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-4 left-4 w-1 h-1 bg-cyber-cyan rounded-full"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute top-8 right-8 w-1 h-1 bg-cyber-magenta rounded-full"
        />
        <motion.div
          animate={{
            y: [0, -8, 0],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute bottom-4 left-1/2 w-1 h-1 bg-cyber-purple rounded-full"
        />
      </div>
    </footer>
  );
}