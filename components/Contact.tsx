'use client';

import { motion } from 'framer-motion';
import { Linkedin, Github, MapPin, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [hoveredContact, setHoveredContact] = useState<string | null>(null);
  // Send message form removed per request

  const contacts = [
    {
      id: 'linkedin',
      label: 'LinkedIn',
      value: '/in/danieldtara',
      href: 'https://www.linkedin.com/in/danieldtara',
      icon: <Linkedin className="w-5 h-5" />,
      description: 'Connect professionally'
    },
    {
      id: 'github',
      label: 'GitHub',
      value: '/yechika',
      href: 'https://github.com/yechika',
      icon: <Github className="w-5 h-5" />,
      description: 'Check out my code'
    }
  ];

  // Form handlers removed

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Retro Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark via-transparent to-cyber-dark"></div>
        <motion.div
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Perspective Grid Lines */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-cyber-dark to-transparent">
          <motion.div
            animate={{
              transform: ['perspective(1000px) rotateX(60deg) translateZ(0)', 'perspective(1000px) rotateX(60deg) translateZ(-100px)'],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 255, 0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 255, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-glow-cyan">Establish Connection</span>
          </h2>
          <p className="text-xl text-cyber-muted max-w-2xl mx-auto">
            Ready to build something extraordinary together? Let's connect and discuss your next project.
          </p>
          
          <div className="flex items-center justify-center space-x-2 mt-4 text-cyber-muted">
            <MapPin className="w-4 h-4" />
            <span className="font-mono text-sm">Jakarta, Indonesia</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 max-w-2xl mx-auto"
          >
            <div>
              <h3 className="text-2xl font-bold text-cyber-text mb-6 flex items-center">
                <div className="w-1 h-8 bg-cyber-cyan mr-4"></div>
                Contact Channels
              </h3>
              
              <div className="space-y-4">
                {contacts.map((contact, index) => (
                  <motion.a
                    key={contact.id}
                    href={contact.href}
                    target={contact.id === 'linkedin' || contact.id === 'github' ? '_blank' : undefined}
                    rel={contact.id === 'linkedin' || contact.id === 'github' ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    onHoverStart={() => setHoveredContact(contact.id)}
                    onHoverEnd={() => setHoveredContact(null)}
                    className="glass rounded-lg p-6 hover:border-cyber-cyan/50 transition-all duration-300 cursor-pointer group block"
                    data-cursor="pointer"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30 group-hover:bg-cyber-cyan/20 transition-colors duration-300">
                        {contact.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-cyber-text group-hover:text-cyber-cyan transition-colors duration-300">
                              {contact.label}
                            </div>
                            <div className="text-cyber-muted font-mono text-sm">{contact.value}</div>
                          </div>
                          <motion.div
                            animate={{ x: hoveredContact === contact.id ? 5 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ExternalLink className="w-4 h-4 text-cyber-muted group-hover:text-cyber-cyan transition-colors duration-300" />
                          </motion.div>
                        </div>
                        <div className="text-xs text-cyber-muted mt-1">{contact.description}</div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Stats removed */}
          </motion.div>

          {/* Contact form removed */}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="glass rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-cyber-text mb-4">
              Let's Build Something Extraordinary
            </h3>
            <p className="text-cyber-muted mb-6">
              Whether you need a robust backend system, database optimization, 
              or a full-stack solution, I'm here to help turn your ideas into reality.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="tech-pill">Available for Internships</span>
              <span className="tech-pill">Open to Collaboration</span>
              <span className="tech-pill">Remote Friendly</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}