import React from "react";
import koren from './assets/koren.jpeg'
import "./App.css";

function App() {
  const skills = [
    "C", "Java", "Python", "HTML",
    "CSS", "JavaScript", "React",
    "SQL", "Machine Learning"
  ];

  const projects = [
    {
      title: "Pocket Doctor AI",
      category: "Artificial Intelligence",
      description:
        "An AI-based healthcare application designed to provide smart healthcare assistance.",
      tech: "Python • AI • ML"
    },
    {
      title: "News Aggregation System",
      category: "Web Development",
      description:
        "A web application that collects and displays news using a database.",
      tech: "Python • Flask • SQLite"
    },
    {
      title: "WasteZero",
      category: "Software Project",
      description:
        "A technology-based project focused on waste management.",
      tech: "Web Development"
    },
    {
      title: "Mini Unlock",
      category: "Creative Application",
      description:
        "An interactive application concept with creative digital features.",
      tech: "React • CSS • Python"
    }
  ];

  return (
    <div className="portfolio">

      
      <header className="navbar">
        <a href="#home" className="logo">
          Moni<span>.</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

    
      <section id="home" className="hero">

        <div className="hero-content">
          <p className="welcome">
            WELCOME TO MY PORTFOLIO
          </p>

          <h1>
            Hi, I'm <span>Mini</span>
          </h1>

          <h2>
            Information Technology Student
          </h2>

          <p className="intro">
            Passionate about technology, programming
            and creating innovative digital solutions.
            Exploring Web Development and Artificial
            Intelligence to build meaningful projects.
          </p>

          <div className="hero-buttons">
            <a href="#portfolio" className="btn">
              View My Work ↗
            </a>

            <a href="#contact" className="btn outline">
              Contact Me
            </a>
          </div>

          <div className="social">
            <a href="#contact">GitHub</a>
            <a href="#contact">LinkedIn</a>
            <a href="#contact">Email</a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-circle">
            <img
              src={koren}
              alt="My profile"
            />
          </div>
          <div className="image-glow"></div>
        </div>

      </section>

      <section id="about" className="section">
        <p className="section-label">GET TO KNOW ME</p>
        <h2 className="section-title">
          About <span>Me</span>
        </h2>

        <div className="about-card">
          <h3>Who Am I?</h3>

          <p>
            I am a Bachelor of Technology student
            specializing in Information Technology.
            I am interested in software development,
            web technologies and Artificial Intelligence.
          </p>

          <p>
            I enjoy learning new technologies, solving
            programming problems and developing creative
            projects. My goal is to become a skilled
            software developer.
          </p>

          <div className="about-details">
            <p><b>Degree:</b> B.Tech Information Technology</p>
            <p><b>Field:</b> Software Development</p>
            <p><b>Location:</b> Tamil Nadu, India</p>
            <p><b>Goal:</b> Software Engineer</p>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <p className="section-label">MY TECHNICAL EXPERTISE</p>

        <h2 className="section-title">
          My <span>Skills</span>
        </h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <span>✦</span>
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="portfolio" className="section">
        <p className="section-label">MY RECENT WORK</p>

        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <div className="project-number">
                0{index + 1}
              </div>

              <p className="project-category">
                {project.category}
              </p>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech}
              </div>

            </div>
          ))}
        </div>
      </section>

      <section id="education" className="section">
        <p className="section-label">MY ACADEMIC JOURNEY</p>

        <h2 className="section-title">
          My <span>Education</span>
        </h2>

        <div className="education-card">
          <span className="edu-year">CURRENTLY PURSUING</span>

          <h3>B.Tech - Information Technology</h3>

          <p>Mohamed Sathak AJ College of Engineering</p>

          <p>Chengalpattu, Tamil Nadu</p>

          <p>2024 - 2028</p>
        </div>
      </section>

      <section id="contact" className="section contact">
        <p className="section-label">GET IN TOUCH</p>

        <h2 className="section-title">
          Let's <span>Connect</span>
        </h2>

        <p>
          Interested in technology, collaboration
          and new learning opportunities.
          Feel free to connect with me.
        </p>

        <a
          href="mailto:yourmail@example.com"
          className="btn"
        >
          Send Me an Email ↗
        </a>

        <div className="social contact-social">
          <a href="#home">Home</a>
          <a href="#portfolio">Projects</a>
          <a href="#about">About</a>
        </div>
      </section>
      <footer>
        <p>© 2026 Moni. Designed with passion.</p>
      </footer>

    </div>
  );
}
export default App;
