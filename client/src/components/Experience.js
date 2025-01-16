import React from "react";
import Experiences from "../middleware/exp-data";
import "../Style/Experience.css";

function Experience() {
  return (
    <div className="experience-container" id="Experience">
      <div className="experience-header">
        <h1>Experience</h1>
      </div>
      <table className="experience-table">
        <tbody>
          {Experiences.map((data, index) => (
            <tr key={index} className="experience-row">
              <td className="experience-id">{data.id}</td>
              <td className="experience-details">
                <h1>{data.title}</h1>
                <h3>{data.heading}</h3>
                <p>{data.content}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Experience;
