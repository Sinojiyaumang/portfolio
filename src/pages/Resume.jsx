import React, { useState, useEffect } from "react";
import "../styles/resume.css";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("education");

  const educationDetails = [
    {
      title: "Full Stack Web Development Course",
      institution: "Red & White Multimedia Education",
      year: "Aug 2023",
      rating: "YTC",
      description: "A comprehensive program covering front-end and back-end web development technologies."
    },
    {
      title: "12th",
      institution: "Uma School Of Commerce",
      year: "2019 - 20",
      rating: "73.56/100.00",
      description: "Developed a strong foundation in commerce subjects such as Accountancy, Business Studies, and Economics, along with practical exposure to financial concepts and business principles."
    }
  ];
  const educationDetails2 = [
    {
      title: "Bachelor Of Computer Applications",
      institution: "Ganpat University",
      year: "2020 - 23",
      rating: "8.1/10",
      description: "Focused on foundational and advanced concepts of computer applications, programming, and software development."
    },
    {
      title: "10th",
      institution: "Chanakya International School",
      year: "2017-18",
      rating: "81.02/100.00",
      description: "Completed foundational education with a focus on core subjects like Mathematics, Science, and Social Studies, developing strong analytical and problem-solving skills."
    }
  ];

  // Updated skills
  const skillLevels = {
    html: "90%",
    css: "95%",
    javascript: "85%",
    jquery: "80%",
    bootstrap: "95%",
    react: "95%",
    c: "75%",
  };

  useEffect(() => {
    let multiply = 4;
    const delay = 700;

    Object.entries(skillLevels).forEach(([language, percent]) => {
      setTimeout(() => {
      }, delay * multiply);

      multiply++;
    });
  }, []);

  return (
    <div className="resume">
      <div className="resume-header">
        <p>WANT TO START MY CARRIER IN IT</p>
        <h2>My Resume</h2>
      </div>
      {/* Tabs */}
      <div className="tabs">
        <button
          className={activeTab === "education" ? "active" : ""}
          onClick={() => setActiveTab("education")}
        >
          Education
        </button>
        <button
          className={activeTab === "skills" ? "active" : ""}
          onClick={() => setActiveTab("skills")}
        >
          Skills
        </button>
      </div>

      {/* Content */}
      {activeTab === "education" && (
        <div>
          <h1>Education</h1>
          <div className="timeline-container">
            <div className="timeline-column">
              {educationDetails.map((edu, index) => (
                <div key={index} className="timeline-card">
                  <h3>{edu.title}</h3>
                  <p>
                    {edu.institution} <span>({edu.year})</span>
                  </p>
                  <div className="rating">{edu.rating}</div>
                  <p>{edu.description}</p>
                </div>
              ))}
            </div>
            <div className="timeline-column">
              {educationDetails2.map((edu, index) => (
                <div key={index} className="timeline-card">
                  <h3>{edu.title}</h3>
                  <p>
                    {edu.institution} <span>({edu.year})</span>
                  </p>
                  <div className="rating">{edu.rating}</div>
                  <p>{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === "skills" && (
        <div>
          <h1>Skills</h1>
          <ul className="skills-bar-container">
            <li>
              <div className="progressbar-title">
                <h3>HTML5</h3>
                <span className="percent" id="html-pourcent">{skillLevels.html}</span>
              </div>
              <div className="bar-container">
                <span
                  className="progressbar progressred"
                  id="progress-html"
                  style={{ width: skillLevels.html }}
                ></span>
              </div>
            </li>
            <li>
              <div className="progressbar-title">
                <h3>CSS</h3>
                <span className="percent" id="css-pourcent">{skillLevels.css}</span>
              </div>
              <div className="bar-container">
                <span
                  className="progressbar progressblue"
                  id="progress-css"
                  style={{ width: skillLevels.css }}
                ></span>
              </div>
            </li>
            <li>
              <div className="progressbar-title">
                <h3>JavaScript / J Query</h3>
                <span className="percent" id="javascript-pourcent">{skillLevels.javascript}</span>
              </div>
              <div className="bar-container">
                <span
                  className="progressbar progresspurple"
                  id="progress-javascript"
                  style={{ width: skillLevels.javascript }}
                ></span>
              </div>
            </li>
            <li>
              <div className="progressbar-title">
                <h3>Bootstrap</h3>
                <span className="percent" id="bootstrap-pourcent">{skillLevels.bootstrap}</span>
              </div>
              <div className="bar-container">
                <span
                  className="progressbar progressorange"
                  id="progress-bootstrap"
                  style={{ width: skillLevels.bootstrap }}
                ></span>
              </div>
            </li>
            <li>
              <div className="progressbar-title">
                <h3>ReactJS</h3>
                <span className="percent" id="react-pourcent">{skillLevels.react}</span>
              </div>
              <div className="bar-container">
                <span
                  className="progressbar progressgreen"
                  id="progress-react"
                  style={{ width: skillLevels.react }}
                ></span>
              </div>
            </li>
            <li>
              <div className="progressbar-title">
                <h3>C Language</h3>
                <span className="percent" id="c-pourcent">{skillLevels.c}</span>
              </div>
              <div className="bar-container">
                <span
                  className="progressbar progressyellow"
                  id="progress-c"
                  style={{ width: skillLevels.c }}
                ></span>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Resume;
