import { useEffect, useState } from 'react'
import experiences from './data/experience.json'
import projects from './data/projects.json'
import './App.css'

const github = 'https://github.com/k0LecA'
const linkedin = 'https://www.linkedin.com/in/jonas-butrimas-3a4a052b7'
const nkkmCourses = ['Programming course', 'System administration course', 'Unity C# game development course']
const covers = [
  { name: 'Imageboard', image: '/images/imgbrd.jpg', category: 'Image-sharing & discussion', alt: 'Anonymous image board illustration with discussion threads and shared images' },
  { name: 'Movie collection', image: '/images/cinema.jpg', category: 'Full-stack application', alt: 'Rows of red seats in a cinema' },
]

function Arrow({ direction = 'up' }) {
  return <span aria-hidden="true" className="arrow">{direction === 'down' ? '↘' : direction === 'top' ? '↑' : '↗'}</span>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    const closeOnEscape = event => { if (event.key === 'Escape') setMenuOpen(false) }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header page-width" id="top">
        <a className="wordmark" href="#top" aria-label="Jonas Butrimas, back to top">JB<span>.</span></a>
        <button className="menu-toggle" aria-expanded={menuOpen} aria-controls="navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close' : 'Menu'} <span aria-hidden="true">{menuOpen ? '−' : '+'}</span></button>
        <nav id="navigation" aria-label="Main navigation" className={menuOpen ? 'navigation is-open' : 'navigation'}>
          {[['Work', '#work'], ['About', '#about'], ['Contact', '#contact']].map(([label, href]) => <a href={href} key={href} onClick={() => setMenuOpen(false)}>{label}<span aria-hidden="true">↘</span></a>)}
        </nav>
      </header>
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="page-width">
            <h1 id="hero-title">Jonas Butrimas<span>.</span></h1>
            <div className="hero-intro">
              <p className="hero-role">Software engineer &amp; curious builder</p>
              <p className="hero-description">I’m a software engineering student focused on building REST APIs with Node.js, Express, and PostgreSQL.</p>
              <a href="#work" className="primary-link">Explore my work <Arrow direction="down" /></a>
            </div>
          </div>
          <figure className="hero-image">
            <img src="/images/architecture.jpg" alt="Sweeping white architectural forms set against an open sky" width="2000" height="1333" fetchPriority="high" />
            <figcaption><span>Thoughtful structure. Reliable foundations.</span><a href="#work">Scroll to explore <Arrow direction="down" /></a></figcaption>
          </figure>
        </section>
        <section className="work-section page-width section-space" id="work" aria-labelledby="work-title">
          <div className="section-heading"><h2 id="work-title">Selected work<span>.</span></h2><p>A few things I’ve built.</p></div>
          <div className="project-grid">
            {projects.map((project, index) => {
              const cover = covers[index]
              return (
                <article className="project" key={project.link}>
                  <a className={`project-cover project-cover-${index}`} href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Explore ${cover.name} on GitHub (opens in a new tab)`}>
                    <img src={cover.image} alt={cover.alt} width={index === 0 ? '1920' : '1000'} height={index === 0 ? '1080' : '667'} loading="lazy" />
                    <div className="cover-caption"><span>{cover.category}</span><strong>{cover.name}</strong></div><span className="cover-arrow"><Arrow /></span>
                  </a>
                  <div className="project-title"><h3>{cover.name}</h3><span>0{index + 1}</span></div>
                  <p className="project-description">{project.description}</p>
                  <ul className="technology-list" aria-label={`${cover.name} technologies`}>{project.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul>
                  <a className="text-link" href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub <Arrow /></a>
                </article>
              )
            })}
          </div>
          <a className="all-work-link" href={github} target="_blank" rel="noopener noreferrer">More experiments live on GitHub <Arrow /></a>
        </section>
        <section className="about-section page-width section-space" id="about" aria-labelledby="about-title">
          <div className="about-intro">
            <h2 id="about-title">Built through experience<span>.</span></h2>
            <p className="about-lead">Software engineering student. Hands-on developer. Always learning.</p>
            <p className="about-description">From Linux servers to live video and machine learning, I’m interested in how systems work and how to make them work better.</p>
            <a className="text-link" href={linkedin} target="_blank" rel="noopener noreferrer">More about me <Arrow /></a>
          </div>
          <div className="experience-list">
            {experiences.map(experience => (
              <article className="experience" key={experience.company}>
                <p className="experience-period">{experience.period.replace(' — ', ' – ')}</p>
                <h3>{experience.company}</h3><p className="experience-role">{experience.role}</p>
                <ul className="experience-description">{experience.description.map(item => <li key={item}>{item}</li>)}</ul>
                <ul className="technology-list" aria-label={`${experience.company} technologies`}>{experience.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul>
              </article>
            ))}
            <section className="courses" aria-labelledby="courses-title">
              <div className="courses-heading">
                <h3 id="courses-title">NKKM courses</h3>
                <a className="text-link" href="https://kompiuteriumokykla.lt/" target="_blank" rel="noopener noreferrer">NKKM website <Arrow /></a>
              </div>
              <ul className="course-list">
                {nkkmCourses.map(course => <li key={course}>{course}</li>)}
              </ul>
            </section>
          </div>
        </section>
        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="page-width">
            <div className="contact-content">
              <div><h2 id="contact-title">Have something in mind?</h2><p>Open to opportunities, interesting projects, and good conversations.</p></div>
              <a className="contact-link" href={linkedin} target="_blank" rel="noopener noreferrer">Let’s connect <Arrow /></a>
            </div>
            <footer className="site-footer">
              <a className="footer-name" href="#top">Jonas Butrimas.</a>
              <div className="social-links"><a href={github} target="_blank" rel="noopener noreferrer">GitHub <Arrow /></a><a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <Arrow /></a></div>
              <a className="back-to-top" href="#top">Back to top <Arrow direction="top" /></a>
              <small>© {new Date().getFullYear()} Jonas Butrimas</small>
            </footer>
          </div>
        </section>
      </main>
    </>
  )
}
export default App
