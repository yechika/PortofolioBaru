'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Users, Database, Code2, Globe, Gamepad2 } from 'lucide-react';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  link?: string;
  github?: string;
  date: string;
  type: 'personal' | 'bslc' | 'academic';
  icon: React.ReactNode;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Umadle',
    description: 'A Wordle-inspired daily guessing game for Uma Musume characters.',
    longDescription: 'Developed a full-stack, Wordle-inspired daily guessing game featuring character rotation, progressive clue system, and dynamic scoring. Integrated Google OAuth for secure authentication and Firebase Firestore for game progress synchronization.',
    tech: ['React', 'TypeScript', 'Vite', 'Firebase', 'Tailwind CSS', 'Vercel'],
    link: 'http://umadle.vercel.app/',
    github: 'https://github.com/yechika',
    date: 'Sep 2025',
    type: 'personal',
    icon: <Gamepad2 className="w-5 h-5" />,
    image: '/api/placeholder/400/250'
  },
  {
    id: 2,
    title: 'Sheet Generator',
    description: 'Dynamic document generation tool with Excel template parsing.',
    longDescription: 'Developed the backend service using Node.js and Express, creating a REST API for dynamic document generation. Engineered core logic using ExcelJS to parse complex Excel templates while preserving styling, fonts, colors, and merged cells.',
    tech: ['Express.js', 'Node.js', 'ExcelJS', 'REST API'],
    link: 'https://sheet-generator-bslc.vercel.app/',
    date: 'Aug 2025',
    type: 'bslc',
    icon: <Code2 className="w-5 h-5" />,
    image: '/api/placeholder/400/250'
  },
  {
    id: 3,
    title: "Study2Challenge's Website",
    description: 'Backend development for BSLC educational platform.',
    longDescription: 'Developed key API endpoints for the Nindyamaya backend to fetch role-specific homepage data, session details, and mentee lists. Built scalable backend architecture using Express.js and MongoDB for efficient data management.',
    tech: ['Express.js', 'MongoDB', 'Node.js', 'REST API'],
    link: 'https://www.study2challenge.bslc.or.id/',
    date: 'May 2025',
    type: 'bslc',
    icon: <Users className="w-5 h-5" />,
    image: '/api/placeholder/400/250'
  },
  {
    id: 4,
    title: 'Aurevo',
    description: 'Web-based hotel reservation system with comprehensive booking management.',
    longDescription: 'Developed a comprehensive hotel reservation system using Laravel and Blade templates. Implemented MySQL for efficient database management, user authentication, room booking workflows, and reservation management features.',
    tech: ['Laravel', 'Blade', 'MySQL', 'PHP'],
    github: 'https://github.com/yechika/Hotel_DB_Design.git',
    date: 'Feb 2025',
    type: 'academic',
    icon: <Database className="w-5 h-5" />,
    image: '/api/placeholder/400/250'
  },
  {
    id: 5,
    title: 'TrashPac',
    description: 'Real-time web application for environmental awareness.',
    longDescription: 'Developed a web-based application focusing on real-time user interactions and environmental consciousness. Integrated Firebase for database management and real-time data synchronization across multiple users.',
    tech: ['Vanilla JS', 'Firebase', 'HTML', 'CSS'],
    link: 'https://daniel-dirgantara.vercel.app/',
    date: 'May 2024',
    type: 'academic',
    icon: <Globe className="w-5 h-5" />,
    image: '/api/placeholder/400/250'
  }
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'personal', label: 'Personal', count: projects.filter(p => p.type === 'personal').length },
    { id: 'bslc', label: 'BSLC', count: projects.filter(p => p.type === 'bslc').length },
    { id: 'academic', label: 'Academic', count: projects.filter(p => p.type === 'academic').length },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  const getTypeColor = (type: Project['type']) => {
    switch (type) {
      case 'personal': return 'border-cyber-cyan bg-cyber-cyan/5 text-cyber-cyan';
      case 'bslc': return 'border-cyber-magenta bg-cyber-magenta/5 text-cyber-magenta';
      case 'academic': return 'border-cyber-purple bg-cyber-purple/5 text-cyber-purple';
      default: return 'border-cyber-cyan bg-cyber-cyan/5 text-cyber-cyan';
    }
  };

  return (
    <section id="projects" className="py-20 relative">
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
            <span className="text-glow-cyan">Projects</span>
          </h2>
          <p className="text-xl text-cyber-muted max-w-2xl mx-auto">
            A collection of projects that showcase my journey through backend development, 
            database management, and full-stack engineering.
          </p>
          
          {/* Project Filters */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'border-cyber-cyan bg-cyber-cyan/10 text-cyber-cyan'
                    : 'border-cyber-muted/30 text-cyber-muted hover:border-cyber-cyan hover:text-cyber-cyan'
                }`}
                data-cursor="pointer"
              >
                {filter.label} ({filter.count})
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="relative group"
            >
              <div className="glass rounded-xl p-6 h-full transition-all duration-300 hover:border-cyber-cyan/50 relative overflow-hidden">
                {/* Hover Effect Background */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: hoveredProject === project.id ? 1 : 0,
                    opacity: hoveredProject === project.id ? 0.1 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-r from-cyber-cyan to-cyber-magenta rounded-xl"
                />
                
                {/* Project Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="p-2 rounded-lg border border-cyber-cyan/30 bg-cyber-cyan/5">
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-cyber-text">{project.title}</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <Calendar className="w-4 h-4 text-cyber-muted" />
                          <span className="text-sm text-cyber-muted">{project.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-mono border ${getTypeColor(project.type)}`}>
                      {project.type.toUpperCase()}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-cyber-muted mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Long Description - Shows on hover */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: hoveredProject === project.id ? 1 : 0,
                      height: hoveredProject === project.id ? 'auto' : 0 
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-cyber-text mb-4">
                      {project.longDescription}
                    </p>
                  </motion.div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center space-x-4">
                    {project.link && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-cyber-cyan hover:text-cyber-text transition-colors duration-300"
                        data-cursor="pointer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm font-mono">LIVE</span>
                      </motion.a>
                    )}
                    {project.github && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-cyber-muted hover:text-cyber-cyan transition-colors duration-300"
                        data-cursor="pointer"
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm font-mono">CODE</span>
                      </motion.a>
                    )}
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