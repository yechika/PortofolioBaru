'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Users, Database, Code2, Globe, Gamepad2 } from 'lucide-react';
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  snapshot: string;
  impact: string;
  story: string;
  challenge: string;
  solution: string;
  outcome: string;
  tech: string[];
  link?: string;
  github?: string;
  date: string;
  type: 'personal' | 'bslc' | 'academic';
  icon: React.ReactNode;
  metrics?: {
    label: string;
    value: string;
    color: string;
  }[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Umadle',
    snapshot: 'Built a viral daily gaming experience that hooks players',
    impact: 'Created engaging gameplay loop with 500+ daily active players',
    story: 'Noticed the Wordle phenomenon and saw an opportunity to combine it with anime character guessing',
    challenge: 'How do you keep players coming back every day without getting bored?',
    solution: 'Progressive clue system + Google OAuth for saving streaks + daily rotation algorithm',
    outcome: 'Achieved consistent daily engagement with players maintaining 30+ day streaks',
    tech: ['React', 'TypeScript', 'Vite', 'Firebase', 'Tailwind CSS', 'Vercel'],
    link: 'http://umadle.vercel.app/',
    github: 'https://github.com/yechika',
    date: 'Sep 2025',
    type: 'personal',
    icon: <Gamepad2 className="w-5 h-5" />,
    metrics: [
      { label: 'Daily Users', value: '500+', color: 'text-cyber-cyan' },
      { label: 'Avg Streak', value: '30 days', color: 'text-cyber-magenta' }
    ]
  },
  {
    id: 2,
    title: 'Sheet Generator',
    snapshot: 'Transformed hours of manual Excel work into seconds',
    impact: 'Reduced document generation time by 95% for BSLC operations team',
    story: 'The BSLC team spent 2-3 hours weekly creating repetitive Excel reports manually',
    challenge: 'Preserve complex Excel styling (merged cells, fonts, colors) while dynamically filling data',
    solution: 'Built REST API using ExcelJS that parses template structure and maintains formatting integrity',
    outcome: 'What took 2 hours now takes 30 seconds. Team saves 10+ hours monthly',
    tech: ['Express.js', 'Node.js', 'ExcelJS', 'REST API'],
    link: 'https://sheet-generator-bslc.vercel.app/',
    date: 'Aug 2025',
    type: 'bslc',
    icon: <Code2 className="w-5 h-5" />,
    metrics: [
      { label: 'Time Saved', value: '95%', color: 'text-cyber-cyan' },
      { label: 'Templates', value: '12+', color: 'text-cyber-magenta' }
    ]
  },
  {
    id: 3,
    title: "Study2Challenge Platform",
    snapshot: 'Powered backend for 200+ student learning journeys',
    impact: 'Enabled personalized learning paths for BSLC mentorship program',
    story: 'BSLC needed a way to manage hundreds of students across multiple learning tracks',
    challenge: 'Design flexible API that handles role-based data (mentor/mentee) without performance issues',
    solution: 'Built modular Express.js endpoints with MongoDB aggregation for efficient role-based queries',
    outcome: 'Platform now serves 200+ students with <200ms response times',
    tech: ['Express.js', 'MongoDB', 'Node.js', 'REST API'],
    link: 'https://www.study2challenge.bslc.or.id/',
    date: 'May 2025',
    type: 'bslc',
    icon: <Users className="w-5 h-5" />,
    metrics: [
      { label: 'Students', value: '200+', color: 'text-cyber-cyan' },
      { label: 'Response', value: '<200ms', color: 'text-cyber-magenta' }
    ]
  },
  {
    id: 4,
    title: 'Aurevo',
    snapshot: 'Architected complete hotel booking system from database up',
    impact: 'Demonstrated enterprise-level database design and transaction handling',
    story: 'Academic project to master relational database design and complex workflows',
    challenge: 'Handle concurrent bookings, prevent double-booking, maintain data integrity',
    solution: 'Designed normalized MySQL schema with transaction locks and comprehensive validation',
    outcome: 'Zero double-bookings in stress testing with 50 concurrent users',
    tech: ['Laravel', 'Blade', 'MySQL', 'PHP'],
    github: 'https://github.com/yechika/Hotel_DB_Design.git',
    date: 'Feb 2025',
    type: 'academic',
    icon: <Database className="w-5 h-5" />,
    metrics: [
      { label: 'Tables', value: '12', color: 'text-cyber-cyan' },
      { label: 'Integrity', value: '100%', color: 'text-cyber-magenta' }
    ]
  },
  {
    id: 5,
    title: 'TrashPac',
    snapshot: 'Gamified environmental awareness with real-time competition',
    impact: 'Engaged 50+ users in competitive recycling tracking game',
    story: 'Created educational game to make environmental action fun and competitive',
    challenge: 'Sync real-time game state across multiple players without lag',
    solution: 'Leveraged Firebase real-time database with optimistic UI updates',
    outcome: 'Smooth multiplayer experience with <100ms sync time',
    tech: ['Vanilla JS', 'Firebase', 'HTML', 'CSS'],
    link: 'https://daniel-dirgantara.vercel.app/',
    date: 'May 2024',
    type: 'academic',
    icon: <Globe className="w-5 h-5" />,
    metrics: [
      { label: 'Players', value: '50+', color: 'text-cyber-cyan' },
      { label: 'Sync Time', value: '<100ms', color: 'text-cyber-magenta' }
    ]
  },
  {
    id: 6,
    title: 'Alzheimer Prediction API',
    snapshot: 'Deployed ML model as production-ready API for medical predictions',
    impact: 'Made complex ML accessible through simple REST interface',
    story: 'Wanted to bridge gap between ML research and practical medical applications',
    challenge: 'Package trained model with preprocessing pipeline into deployable API',
    solution: 'Built Flask API with containerized deployment, handled model versioning and validation',
    outcome: 'API serves predictions in <2s with 85% model accuracy',
    tech: ['Flask', 'Python', 'Jupyter Notebook', 'REST API', 'HuggingFace', 'Docker', 'Scikit-learn', 'Random Forest'],
    date: 'Oct 2025',
    github: 'https://github.com/yechika/Alzheimer-Prediction-RandomForest',
    link: 'https://salehxgr-alzheimer-prediction.hf.space/',
    type: 'personal',
    icon: <Database className="w-5 h-5" />,
    metrics: [
      { label: 'Accuracy', value: '85%', color: 'text-cyber-cyan' },
      { label: 'Response', value: '<2s', color: 'text-cyber-magenta' }
    ]
  }
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filters = [
    { id: 'all', label: 'All Stories', count: projects.length },
    { id: 'personal', label: 'Personal Ventures', count: projects.filter(p => p.type === 'personal').length },
    { id: 'bslc', label: 'Team Impact', count: projects.filter(p => p.type === 'bslc').length },
    { id: 'academic', label: 'Learning Labs', count: projects.filter(p => p.type === 'academic').length },
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-glow-cyan">Story Snapshots</span>
          </h2>
          <p className="text-xl text-cyber-muted max-w-2xl mx-auto">
            Real problems. Real solutions. Real impact.
            <br />
            <span className="text-sm text-cyber-cyan">Each project tells a story of turning complexity into clarity</span>
          </p>

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
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: hoveredProject === project.id ? 1 : 0,
                    opacity: hoveredProject === project.id ? 0.1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-r from-cyber-cyan to-cyber-magenta rounded-xl"
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
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

                  <div className="mb-4 p-3 rounded-lg bg-cyber-cyan/5 border border-cyber-cyan/20">
                    <p className="text-sm font-semibold text-cyber-cyan mb-1">
                      {project.snapshot}
                    </p>
                    <p className="text-xs text-cyber-muted">
                      {project.impact}
                    </p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: hoveredProject === project.id ? 1 : 0,
                      height: hoveredProject === project.id ? 'auto' : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden space-y-3 mb-4"
                  >
                    <div className="text-xs space-y-2">
                      <div>
                        <span className="font-semibold text-cyber-magenta">Challenge:</span>
                        <p className="text-cyber-muted mt-1">{project.challenge}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-cyber-cyan">Solution:</span>
                        <p className="text-cyber-muted mt-1">{project.solution}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-cyber-purple">Outcome:</span>
                        <p className="text-cyber-muted mt-1">{project.outcome}</p>
                      </div>
                    </div>
                  </motion.div>

                  {project.metrics && (
                    <div className="flex gap-4 mb-4">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className="flex-1 text-center p-2 rounded-lg glass">
                          <div className={`text-lg font-bold font-mono ${metric.color}`}>
                            {metric.value}
                          </div>
                          <div className="text-xs text-cyber-muted">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span key={tech} className="tech-pill text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="tech-pill text-xs">+{project.tech.length - 4}</span>
                    )}
                  </div>

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
