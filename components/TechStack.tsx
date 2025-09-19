'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Tech {
  name: string;
  category: 'language' | 'framework' | 'database' | 'tool';
  level: 'beginner' | 'intermediate' | 'advanced';
  icon: string;
  description: string;
}

const technologies: Tech[] = [
  // Languages
  { name: 'JavaScript', category: 'language', level: 'advanced', icon: '🟨', description: 'Dynamic programming language for web development' },
  { name: 'Python', category: 'language', level: 'intermediate', icon: '🐍', description: 'Versatile language for backend and data science' },
  { name: 'Java', category: 'language', level: 'intermediate', icon: '☕', description: 'Object-oriented programming for enterprise applications' },
  { name: 'C', category: 'language', level: 'intermediate', icon: '⚡', description: 'Low-level programming language for system development' },
  
  // Frameworks
  { name: 'Next.js', category: 'framework', level: 'advanced', icon: '🔺', description: 'React framework for production-ready applications' },
  { name: 'React', category: 'framework', level: 'advanced', icon: '⚛️', description: 'Component-based library for building UIs' },
  { name: 'Laravel', category: 'framework', level: 'intermediate', icon: '🔧', description: 'PHP framework for web artisans' },
  { name: 'Express.js', category: 'framework', level: 'advanced', icon: '🚂', description: 'Fast, unopinionated Node.js framework' },
  
  // Databases
  { name: 'MySQL', category: 'database', level: 'advanced', icon: '🗄️', description: 'Relational database management system' },
  { name: 'Firebase', category: 'database', level: 'intermediate', icon: '🔥', description: 'NoSQL cloud database platform' },
  { name: 'MongoDB', category: 'database', level: 'intermediate', icon: '🍃', description: 'Document-based NoSQL database' },
  
  // Tools
  { name: 'Git', category: 'tool', level: 'advanced', icon: '📚', description: 'Distributed version control system' },
  { name: 'Vercel', category: 'tool', level: 'intermediate', icon: '▲', description: 'Deployment platform for modern web apps' },
  { name: 'GitHub', category: 'tool', level: 'advanced', icon: '🐙', description: 'Code hosting and collaboration platform' },
];

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Arsenal', count: technologies.length },
    { id: 'language', label: 'Languages', count: technologies.filter(t => t.category === 'language').length },
    { id: 'framework', label: 'Frameworks', count: technologies.filter(t => t.category === 'framework').length },
    { id: 'database', label: 'Databases', count: technologies.filter(t => t.category === 'database').length },
    { id: 'tool', label: 'Tools', count: technologies.filter(t => t.category === 'tool').length },
  ];

  const filteredTech = activeCategory === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === activeCategory);

  const getLevelColor = (level: Tech['level']) => {
    switch (level) {
      case 'advanced': return 'text-cyber-cyan border-cyber-cyan/50 bg-cyber-cyan/5';
      case 'intermediate': return 'text-cyber-magenta border-cyber-magenta/50 bg-cyber-magenta/5';
      case 'beginner': return 'text-cyber-purple border-cyber-purple/50 bg-cyber-purple/5';
      default: return 'text-cyber-cyan border-cyber-cyan/50 bg-cyber-cyan/5';
    }
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-glow-cyan">My Arsenal</span>
          </h2>
          <p className="text-xl text-cyber-muted max-w-2xl mx-auto">
            Tools and technologies I use to craft digital solutions and solve complex problems.
          </p>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full border transition-all duration-300 font-mono text-sm ${
                  activeCategory === category.id
                    ? 'border-cyber-cyan bg-cyber-cyan/10 text-cyber-cyan glow-cyan'
                    : 'border-cyber-muted/30 text-cyber-muted hover:border-cyber-cyan hover:text-cyber-cyan'
                }`}
                data-cursor="pointer"
              >
                {category.label} ({category.count})
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {filteredTech.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredTech(tech.name)}
              onHoverEnd={() => setHoveredTech(null)}
              className="relative group"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.1,
                  rotateY: 10,
                  z: 50 
                }}
                whileTap={{ scale: 0.95 }}
                className="glass rounded-xl p-6 text-center cursor-pointer relative overflow-hidden transition-all duration-300 hover:border-cyber-cyan/50"
                data-cursor="pointer"
              >
                {/* Hover Glow Effect */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: hoveredTech === tech.name ? 0.2 : 0,
                    scale: hoveredTech === tech.name ? 1 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-r from-cyber-cyan to-cyber-magenta rounded-xl"
                />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    animate={{ 
                      scale: hoveredTech === tech.name ? 1.2 : 1,
                      rotate: hoveredTech === tech.name ? 360 : 0 
                    }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl mb-3"
                  >
                    {tech.icon}
                  </motion.div>
                  
                  {/* Name */}
                  <h3 className="font-semibold text-cyber-text mb-2 text-sm">
                    {tech.name}
                  </h3>
                  
                  {/* Level Badge */}
                  <div className={`px-2 py-1 rounded-full text-xs font-mono border ${getLevelColor(tech.level)}`}>
                    {tech.level.toUpperCase()}
                  </div>
                  
                  {/* Tooltip Description */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: hoveredTech === tech.name ? 1 : 0,
                      y: hoveredTech === tech.name ? 0 : 10 
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-cyber-darker border border-cyber-cyan/30 rounded-lg p-2 text-xs text-center whitespace-nowrap z-50 pointer-events-none"
                  >
                    {tech.description}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-cyber-cyan/30"></div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 glass rounded-xl p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {categories.slice(1).map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="text-3xl font-bold text-cyber-cyan font-mono">
                  {category.count}
                </div>
                <div className="text-cyber-muted text-sm uppercase tracking-wider">
                  {category.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}