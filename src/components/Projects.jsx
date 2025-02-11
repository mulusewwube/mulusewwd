import React, { useState, useEffect } from "react";
import "../assets/Projects.css";


function Projects() {
  const projectData = [
    {
      title: "Optima",
      description: "Combines habit tracking and project management.",
      image: "/assets/images/optima.jpg",
      link: "#",
      tools: ["React", "Node.js", "Postgres", "CSS"]
    },
    {
      title: "Union",
      description: "Personalized support for academic & professional growth.",
      image: "/assets/images/unionnewweeb.png",
      link: "#",
      tools: ["JavaScript", "Django", "HTML", "Bootstrap", "PostgresSQL"]
    },
    {
      title: "Medlink",
      description: "MEDLINK is a leading company specializing in the import and export of high-quality medical equipment and supplies to Ethiopia.",
      image: "/assets/images/medlinkweb.png",
      link: "#",
      tools: ["JavaScript", "Django", "HTML", "Bootstrap","PostgresSQL"]
    },

    {
      title: "UTOPIA HOMES",
      description: "UTOPIA HOMES is a premier home selling, buying, and renting service in Ethiopia, designed to make property transactions seamless and hassle-free.",
      image: "/assets/images/utopiahomeweb.png",
      link: "#",
      tools: ["JavaScript", "Django", "HTML", "Bootstrap","PostgresSQL"]
    },
    {
      title: "BK Business Card",
      description: "BK Business Card is a cutting-edge digital and physical business card service designed to help professionals and businesses leave a lasting impression.",
      image: "/assets/images/bk.png",
      link: "#",
      tools: ["Adobe Illustrator"]
    },



  ];

  return (
<section className="projects" id="projects">
  <div className="section-header">
    <div className="section-header-wrapper">
      <span className="title-decorator"></span>
      <h2 className="section-title">Featured Projects</h2>
      <span className="title-decorator"></span>
    </div>
    <p className="section-subtitle">Discover my latest digital creations</p>
  </div>

 

      <div className="projects-grid">
        {projectData.map((project, index) => (
          <article className="project-card" key={index}>
            <div className="card-image" style={{ backgroundImage: `url(${project.image})` }}>
              <div className="card-overlay" />
            </div>
            
            <div className="card-content">
              <div className="content-header">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
              
              <div className="tech-stack">
                {project.tools.map((tool, i) => (
                  <span key={i} className="tech-tag">{tool}</span>
                ))}
              </div>

              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"/>
                </svg>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects; // ✅ Added this line to fix the error
