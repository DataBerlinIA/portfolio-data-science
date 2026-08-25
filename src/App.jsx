import { useState } from 'react'
import { ArrowUpRight, BriefcaseBusiness, Check, Mail, Menu, Terminal, X, Zap } from 'lucide-react'

const projects = [
  { title: 'FoodDelivery AI Agent', label: 'WhatsApp & Payment Orchestrator', description: 'Conversational agent automating real-time orders, webhook bank reconciliation, and dynamic dispatch routing to the closest delivery driver.', stack: ['n8n', 'WhatsApp Cloud API', 'Supabase', 'Webhooks', 'REST APIs'], href: 'https://github.com/DataBerlinIA' },
  { title: 'Autonomous Agent Workflows', label: 'Tool Calling', description: 'Autonomous multi-step agents with tool and function calling, local/cloud script execution, and serverless deployment.', stack: ['OpenClaw', 'Gemini API', 'Python', 'Vercel'], href: 'https://github.com/DataBerlinIA' },
  { title: 'WhatsOrder IA', label: 'B2B Automation', description: 'Automated B2B lead prospecting pipeline with structured conversation state persistence and LLM-powered qualification.', stack: ['Python', 'Playwright', 'Supabase', 'LLM APIs'], href: 'https://github.com/DataBerlinIA' },
]

const skillGroups = [
  ['AI & Agents', ['OpenClaw', 'Google AI Studio', 'Gemini API', 'OpenAI API', 'Anthropic API', 'Prompt Engineering', 'Agentic Workflows', 'Function Calling', 'n8n']],
  ['Backend & Cloud', ['Python', 'JavaScript / Node.js', 'PostgreSQL', 'Supabase', 'Odoo ERP / OWL', 'REST APIs', 'Webhooks', 'Linux', 'Vercel']],
  ['Data & ML', ['Pandas', 'Polars', 'Scikit-Learn', 'NumPy', 'Jupyter', 'Power BI', 'Looker Studio']],
  ['Tools', ['Git', 'GitHub / DataBerlinIA']],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const copyEmail = async () => { await navigator.clipboard?.writeText('babeltranavila@gmail.com'); setCopied(true); setTimeout(() => setCopied(false), 1800) }
  const closeMenu = () => setMenuOpen(false)
  return (
    <div className="site-shell">
      <header className="navbar">
        <a className="brand" href="#top" onClick={closeMenu}><span className="brand-mark">DB</span><span>DataBerlinIA</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
        </nav>
        <div className="nav-actions"><a className="icon-link" href="https://github.com/DataBerlinIA" target="_blank" rel="noreferrer" aria-label="GitHub"><Terminal /></a></div>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="status"><span className="status-dot" /> AI & Automation Engineer <span className="status-divider">|</span> Open for Opportunities</div>
            <p className="eyebrow">// berlin.beltrán.ávila — systems builder</p>
            <h1>Engineering the intersection of <span>autonomous AI</span>, backend automation & scalable software.</h1>
            <p className="hero-description">Software Engineer specialized in LLM orchestration, agentic workflows, Odoo ERP integrations, and relational databases.</p>
            <div className="hero-actions"><a className="button button-primary" href="#projects">Explore projects <ArrowUpRight /></a><a className="button button-outline" href="#contact">Get in touch <Mail /></a></div>
            <div className="social-row"><a href="https://github.com/DataBerlinIA" target="_blank" rel="noreferrer"><Terminal /> GitHub</a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><BriefcaseBusiness /> LinkedIn</a><a href="mailto:babeltranavila@gmail.com"><Mail /> Email</a></div>
          </div>
          <div className="hero-terminal" aria-label="System status visual"><div className="terminal-bar"><span /><span /><span /><b>agent_runtime.ts</b></div><div className="terminal-code"><p><i>01</i> <em>const</em> system = <strong>await</strong> orchestrate();</p><p><i>02</i> system.<em>connect</em>(<q>"human intent"</q>);</p><p><i>03</i> system.<em>scale</em>({`{ reliability: 99.9 }`});</p><div className="terminal-result"><Check /> <span>All systems operational</span><small>latency: 42ms</small></div></div></div>
        </section>

        <section id="about" className="section-wrap intro"><p className="eyebrow">01 / About</p><div className="intro-grid"><h2>Practical intelligence,<br /><span>built for production.</span></h2><p>I design the connective tissue between ambitious ideas and reliable systems. From conversational agents that move orders through WhatsApp to ERP automations that keep commercial operations in sync, I build software that does the work.</p></div></section>

        <section id="experience" className="section-wrap"><div className="section-heading"><div><p className="eyebrow">02 / Experience</p><h2>Where I&apos;ve been building.</h2></div><span className="section-count">02 roles</span></div><div className="timeline"><article className="timeline-item"><span className="timeline-dot" /><div className="timeline-meta"><span>2025 — 2026</span><span>Full-time</span></div><div><h3>AI & Full-Stack Developer</h3><p className="company">Ah Cacao</p><p>Python backend and Odoo ERP (OWL) frontend development for commercial operations. Integrated LLM APIs, REST endpoints, and n8n workflows for PostgreSQL synchronization.</p><div className="tag-row"><span>Python</span><span>Odoo</span><span>n8n</span><span>PostgreSQL</span></div></div></article><article className="timeline-item"><span className="timeline-dot" /><div className="timeline-meta"><span>2024</span><span>Training</span></div><div><h3>Data Science & ML Trainee</h3><p className="company">CódigoFacilito</p><p>Built tabular data pipelines with Pandas, Polars, and Scikit-Learn, translating model outputs into decision-ready Power BI and Looker Studio dashboards.</p><div className="tag-row"><span>Pandas</span><span>Scikit-Learn</span><span>Power BI</span></div></div></article></div></section>

        <section id="projects" className="section-wrap projects-section"><div className="section-heading"><div><p className="eyebrow">03 / Selected work</p><h2>Systems that ship.</h2></div><a className="text-link" href="https://github.com/DataBerlinIA" target="_blank" rel="noreferrer">View GitHub <ArrowUpRight /></a></div><div className="project-grid">{projects.map((project, index) => <article className="project-card" key={project.title}><div className="project-top"><span className="project-index">0{index + 1}</span><a href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><ArrowUpRight /></a></div><div><p className="project-label">{project.label}</p><h3>{project.title}</h3><p>{project.description}</p></div><div className="tag-row">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div></section>

        <section id="skills" className="section-wrap skills-section"><div className="section-heading"><div><p className="eyebrow">04 / Capabilities</p><h2>The toolkit.</h2></div><Zap className="heading-icon" /></div><div className="skills-grid">{skillGroups.map(([title, skills]) => <div className="skill-group" key={title}><h3>{title}</h3><div className="skill-list">{skills.map(skill => <span key={skill}>{skill}</span>)}</div></div>)}</div></section>

        <section id="contact" className="section-wrap contact-section"><div className="contact-card"><div><p className="eyebrow">05 / Contact</p><h2>Have a system<br /><span>worth building?</span></h2><p>Let&apos;s talk about how we can turn your next big idea into reliable, intelligent software.</p></div><div className="contact-actions"><a className="button button-primary" href="mailto:babeltranavila@gmail.com">Start a conversation <ArrowUpRight /></a><button className="email-copy" onClick={copyEmail}>{copied ? <Check /> : <Mail />} {copied ? 'Copied' : 'babeltranavila@gmail.com'}</button></div></div></section>
      </main>
      <footer><span>© {new Date().getFullYear()} Berlin Beltrán Ávila</span><span>Engineered for high performance and reliability.</span><a href="#top">Back to top ↑</a></footer>
    </div>
  )
}
export default App
