'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { MapPin, University, Calendar, Award, Users, Code } from 'lucide-react';

export function About() {
  const [currentText, setCurrentText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  
  const fullText = "A motivated Computer Science student at BINUS University specializing in database management and backend development. Currently seeking opportunities to solve real-world problems through innovative technology solutions.";
  
  useEffect(() => {
    if (currentText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(fullText.slice(0, currentText.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentText, fullText]);

  const experiences = [
    {
      title: 'Database Administrator',
      company: 'Bina Nusantara IT Division',
      period: 'Feb 2025 – Present',
      type: 'Professional',
      description: 'Conduct audits and streamline user accounts, manage compliance, and perform routine database restoration drills.',
      icon: <Code className="w-5 h-5" />
    },
    {
      title: 'IT Development',
      company: 'Binus Student Learning Community',
      period: 'Dec 2024 – Present',
      type: 'Development',
      description: 'Developed key API endpoints and main landing page using NextJS for improved user interaction.',
      icon: <Users className="w-5 h-5" />
    },
    {
      title: 'Freshmen Leader B2028',
      company: 'BINUS University',
      period: 'Jun 2024 – Sep 2024',
      type: 'Leadership',
      description: 'Led and guided freshmen during First Year Program activities, ensuring smooth implementation.',
      icon: <University className="w-5 h-5" />
    }
  ];

  // Certifications section removed per request
  const certifications: string[] = [];

  return (
    <section id="about" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-aurora opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Profile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-glow-cyan">Protocol: About</span>
              </h2>
              
              {/* Typing Animation */}
              <div className="relative">
                <p className="text-lg text-cyber-muted leading-relaxed mb-6">
                  {currentText}
                  {!isComplete && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="text-cyber-cyan"
                    >
                      |
                    </motion.span>
                  )}
                </p>
              </div>
            </div>

            {/* Personal Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass rounded-lg p-4 border-l-4 border-cyber-cyan"
              >
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-cyber-cyan" />
                  <div>
                    <div className="font-semibold text-cyber-text">Location</div>
                    <div className="text-sm text-cyber-muted">Jakarta, Indonesia</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass rounded-lg p-4 border-l-4 border-cyber-magenta"
              >
                <div className="flex items-center space-x-3">
                  <University className="w-5 h-5 text-cyber-magenta" />
                  <div>
                    <div className="font-semibold text-cyber-text">Education</div>
                    <div className="text-sm text-cyber-muted">BINUS University</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass rounded-lg p-4 border-l-4 border-cyber-purple"
              >
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-cyber-purple" />
                  <div>
                    <div className="font-semibold text-cyber-text">Expected Grad</div>
                    <div className="text-sm text-cyber-muted">2027</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass rounded-lg p-4 border-l-4 border-cyber-cyan"
              >
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-cyber-cyan" />
                  <div>
                    <div className="font-semibold text-cyber-text">Specialization</div>
                    <div className="text-sm text-cyber-muted">Backend & Database</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Experience & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Experience Timeline */}
            <div>
              <h3 className="text-2xl font-bold text-cyber-text mb-8 flex items-center">
                <div className="w-1 h-8 bg-cyber-cyan mr-4"></div>
                Experience Log
              </h3>
              
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                    className="glass rounded-lg p-6 border-l-4 border-cyber-cyan/50 hover:border-cyber-cyan transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-2 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30 flex-shrink-0 mt-1">
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h4 className="font-semibold text-cyber-text">{exp.title}</h4>
                          <span className="text-xs font-mono text-cyber-cyan px-2 py-1 rounded-full border border-cyber-cyan/30 bg-cyber-cyan/5 mt-1 sm:mt-0">
                            {exp.type}
                          </span>
                        </div>
                        <div className="text-cyber-magenta font-medium mb-1">{exp.company}</div>
                        <div className="text-xs text-cyber-muted font-mono mb-3">{exp.period}</div>
                        <p className="text-sm text-cyber-muted leading-relaxed">{exp.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications removed */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}