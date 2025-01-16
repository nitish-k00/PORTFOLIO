import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projects from "../middleware/project-data";
import "../Style/Description.css";

function Description() {
  const { id } = useParams();
  const project = projects.find((data) => data.id === parseInt(id, 10));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <h4 style={{ color: "red", textAlign: "center" }}>Project not found!</h4>
    );
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.image.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.image.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="description-container">
      <h3 className="description-title">{project.title}</h3>

      <p className="description-text">{project.description}</p>

      <div className="image-carousel">
        <img
          src={project.image[currentImageIndex]}
          alt={`Project ${project.title} - Image ${currentImageIndex + 1}`}
        />
        <div className="image-carousel-button">
          <button onClick={handlePrevImage}>Prev</button>
          <button onClick={handleNextImage}>Next</button>
        </div>
      </div>

      <div className="skill-chips">
        {project.skill.map((skill, index) => (
          <span key={index} className="chip">
            {skill}
          </span>
        ))}
      </div>

      <div className="project-links">
        <a href={project.gitLink} target="_blank" rel="noopener noreferrer">
          <button className="btn-primary">GitHub</button>
        </a>
        {project.liveLink !== undefined && (
          <>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-secondary">Live Demo</button>
            </a>
          </>
        )}
      </div>
    </div>
  );
}

export default Description;
