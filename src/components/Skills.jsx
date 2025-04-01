import React from "react";
import "../assets/Skills.css";
import { FaCode, FaPaintBrush, FaMicrosoft, FaRegLightbulb } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3, DiJavascript1, DiReact } from "react-icons/di";
import { FiFigma } from "react-icons/fi";
import { SiAdobeillustrator, SiAdobephotoshop, SiDjango, SiBootstrap, SiCanva } from "react-icons/si";
import { RiFileWord2Fill, RiFileExcel2Fill, RiFilePpt2Fill } from "react-icons/ri";

function Skills() {
  const skillsData = [
    {
      category: "Technical Skills",
      icon: <FaCode className="category-icon" />,
      skills: [
        { name: "HTML", level: 99.9, icon: <AiOutlineHtml5 /> },
        { name: "CSS", level: 99, icon: <DiCss3 /> },
        { name: "JavaScript", level: 97, icon: <DiJavascript1 /> },
        { name: "React", level: 99.8, icon: <DiReact /> },
        { name: "Django", level: 90, icon: <SiDjango /> },
        { name: "Bootstrap", level: 98, icon: <SiBootstrap /> },
      ],
    },
    {
      category: "Design Skills",
      icon: <FaPaintBrush className="category-icon" />,
      skills: [
        { name: "Figma", level: 80, icon: <FiFigma /> },
        { name: "Adobe Illustrator", level: 100, icon: <SiAdobeillustrator /> },
        { name: "Adobe Photoshop", level: 96, icon: <SiAdobephotoshop /> },
        { name: "UI/UX Design", level: 85, icon: <FiFigma /> },
        { name: "Canva", level: 100, icon: <SiCanva /> },
      ],
    },
    {
      category: "Office Suite",
      icon: <FaMicrosoft className="category-icon" />,
      skills: [
        { name: "Word", level: 98, icon: <RiFileWord2Fill /> },
        { name: "Excel", level: 97, icon: <RiFileExcel2Fill /> },
        { name: "PowerPoint", level: 97, icon: <RiFilePpt2Fill /> },
        { name: "Publisher", level: 95, icon: <FaMicrosoft /> },
      ],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="background-particles">
        {skillsData.flatMap((category) => category.skills).map((skill, index) => (
          <div
            key={`particle-${index}`}
            className="skill-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${index * 0.2}s`,
              fontSize: `${Math.random() * 2 + 1}rem`,
            }}
          >
            {skill.icon}
          </div>
        ))}
      </div>
      
      <div className="skills-content">
        <h2 className="section-title">
          <span className="title-decorator"></span>
          Technical Proficiencies
          <span className="title-decorator"></span>
        </h2>

        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <div className="skill-card" key={index}>
              <div className="card-header">
                {category.icon}
                <h3>{category.category}</h3>
              </div>
              <div className="card-body">
                {category.skills.map((skill, idx) => (
                  <div className="skill-progress" key={idx}>
                    <div className="skill-meta">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="progress-track">
                      <div 
                        className="progress-bar" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;