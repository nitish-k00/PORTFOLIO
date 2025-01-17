import React, { useState, useEffect, useRef } from "react";
import projects from "../middleware/project-data";
import "../Style/project.css";

import { useNavigate } from "react-router-dom";

function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);
  const containerRef = useRef(null);

  const navigate = useNavigate();

  const projectsData = projects.filter((data) => data.main === true);

  const GoToDescription = (id) => {
    navigate(`/description/${id}`);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.dataset.index));
          }
        });
      },
      {
        root: containerRef.current,
        threshold: 0.5,
      }
    );

    const cards = document.querySelectorAll(".img-card");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <div className="container-fluid project-container" id="Projects">
      <div className="row box">
        <div className="col-0 col-md-3 title">
          <h1>PROJECTS</h1>
        </div>
        <div className="col img-card-container" ref={containerRef}>
          <div className="scroll">
            {projectsData.map((data, index) => {
              const isZoomed = activeIndex === index;
              const isNeighbor =
                index === activeIndex - 1 || index === activeIndex + 1;

              return (
                <div
                  key={index}
                  className={`img-card ${isZoomed ? "zoomed" : ""} ${
                    isNeighbor ? "neighbor" : ""
                  }`}
                  data-index={index}
                  onClick={() => GoToDescription(data.id)}
                  style={{ cursor: "pointer" }}
                >
                  <img src={data.image[0]} alt={data.title}></img>
                  <p>{data.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
