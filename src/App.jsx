import { useState } from 'react'
import experiencesData from './data/experience.json'
import projectsData from './data/projects.json'

function App() {
  const [experiences] = useState(experiencesData)
  const [projects] = useState(projectsData)

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#706a61] font-sans selection:bg-[#4a5d4e]/10 selection:text-[#4a5d4e]">
      <div className="max-w-2xl mx-auto px-6 py-16 space-y-20">
        
        {/* Hero Section */}
        <section className="space-y-5">
          {/* Availability Status */}
          <div className="flex items-center gap-2 text-[10px] font-mono font-bold tracking-widest uppercase text-[#4a5d4e]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4a5d4e] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4a5d4e]"></span>
            </span>
            Available for work
          </div>
          
          {/* Сюда пишем имя */}
          <h1 className="text-4xl font-bold tracking-tight text-[#2d2a26]">
            Jonas Butrimas.
          </h1>
          
          {/* Чуть-чуть подкрутили текст под твой стек из резюме */}
          <p className="text-[#706a61] leading-relaxed text-base">
            Software Engineering student and developer. I build full-stack applications, automate infrastructure, and experiment with Machine Learning. Focused on clean code and reliable backend architecture.
          </p>
        </section>

        {/* Experience Section */}
        <section className="space-y-8">
          <h2 className="text-xs uppercase tracking-widest text-[#706a61]/70 font-mono font-bold">
            Experience
          </h2>
          
          <div className="border-l border-[#e8e4dc] space-y-10 pl-5">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group space-y-3">
                {/* Timeline indicator node */}
                <span className="absolute -left-[25.5px] top-1.5 w-2 h-2 rounded-full bg-[#faf8f5] border border-[#e8e4dc] group-hover:border-[#4a5d4e] transition-colors duration-200"></span>
                
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-base font-medium text-[#2d2a26] group-hover:text-[#4a5d4e] transition-colors duration-200">
                    {exp.role} <span className="text-[#706a61]/65 font-light">@ {exp.company}</span>
                  </h3>
                  <span className="text-xs font-mono text-[#706a61]/60 sm:text-right">
                    {exp.period}
                  </span>
                </div>
                
                <ul className="space-y-1.5 text-sm text-[#706a61] leading-relaxed list-none pl-0">
                  {exp.description.map((item, dIndex) => (
                    <li key={dIndex} className="relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-[#e8e4dc]">
                      {item}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exp.technologies.map((tech, tIndex) => (
                    <span key={tIndex} className="px-2 py-0.5 rounded text-[11px] font-mono bg-white text-[#706a61] border border-[#e8e4dc]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="space-y-8">
          <h2 className="text-xs uppercase tracking-widest text-[#706a61]/70 font-mono font-bold">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 gap-4">
            {projects.map((proj, index) => (
              <a 
                key={index} 
                href={proj.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group p-5 rounded-lg border border-[#e8e4dc] bg-white hover:bg-[#faf8f5]/40 hover:border-[#706a61]/30 transition-all duration-200 hover:-translate-y-0.5 block space-y-2.5 shadow-[0_1px_3px_rgba(45,42,38,0.01)]"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-medium text-[#2d2a26] group-hover:text-[#4a5d4e] transition-colors duration-200">
                    {proj.title}
                  </h3>
                  <span className="text-[#706a61]/60 group-hover:text-[#4a5d4e] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-250 text-sm font-mono">
                    ↗
                  </span>
                </div>
                
                <p className="text-sm text-[#706a61] leading-relaxed">
                  {proj.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.technologies.map((tech, tIndex) => (
                    <span key={tIndex} className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#faf8f5] text-[#706a61] border border-[#e8e4dc]/70">
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Connect Section */}
        <section className="space-y-6">
          <h2 className="text-xs uppercase tracking-widest text-[#706a61]/70 font-mono font-bold">
            Connect
          </h2>
          <div className="flex gap-6">
            <a 
              href="https://github.com/k0LecA" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center gap-2 text-[#706a61] hover:text-[#4a5d4e] transition-colors duration-200"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              <span className="font-mono text-sm">GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/jonas-butrimas-3a4a052b7" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center gap-2 text-[#706a61] hover:text-[#4a5d4e] transition-colors duration-200"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span className="font-mono text-sm">LinkedIn</span>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#e8e4dc] pt-8 text-xs font-mono text-[#706a61]/60">
          <div>
            &copy; {new Date().getFullYear()} &mdash; Developer Portfolio
          </div>
        </footer>

      </div>
    </div>
  )
}

export default App
