import React from "react";
import "../styles/projects.css"; // CSS for styling
import photo from '../images/Project-ss-1.png'; // Your image path

const Projects = () => {
  // Example projects data with deployed links and images
  const projects = [
    {
      id: 1,
      title: "Louis Vuitton",
      description: "A Luxurious E-Commerce Company",
      link: "https://louis-vuitton-eight.vercel.app/",
      image: photo, // Replace with the actual image URL
    },
  ];

  return (
    <div className="projects-container">
      <div className="resume-header">
        <p>Turning Ideas into Code – A Showcase of My Work</p>
        <h2>My Projects</h2>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => window.open(project.link, "_blank")} // Open project link in a new tab
          >
            <div className="image-container-project">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-details">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <button className="view-details-btn">Visit Project</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
