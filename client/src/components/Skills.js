import React from "react";
import Skill from "../middleware/skills-img";
import "../Style/skills.css";

function Skills() {
  return (
    <div className="skill-container" id="Skills">
      <div className="skill-text">
        <h1>SKILLS</h1>
      </div>
      <div className="skill-img-container">
        <div className="skill-img-box">
          <div className="skill-img-box-inner">
            {Skill.map((data, index) => (
              <div
                className="skill-img-card"
                key={index}
                data-text={data.outof}
              >
                <img src={`../Image/skills/${data.img}`} alt={data.img}  loading="lazy" />
              </div>
            ))}
            {Skill.map((data, index) => (
              <div
                className="skill-img-card"
                key={`duplicate-${index}`}
                data-text={data.outof}
              >
                <img src={`../Image/skills/${data.img}`} alt={data.img} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
