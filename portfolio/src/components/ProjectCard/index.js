import React from "react";
import "./style.css";

function ProjectCard(props) {
  function contributors(arr) {
    let formatContributors = [];
    for (let i = 0; i < arr.length - 1; i++) {
      formatContributors.push(`${arr[i]}, `);
    }
    formatContributors.push(arr[arr.length - 1]);
    return formatContributors;
  }

  return (
    <div className="col-12">
      <a href={props.project.link} rel="noopener noreferrer" target="_blank">
        <div className="card text-center">
          <img
            className="card-image"
            src={props.project.image}
            alt={props.project.alt}
          />
          <div className="card-img-overlay">
            <h4 className="card-title">
              <strong>{props.project.name}</strong>
            </h4>
            <p className="description">{props.project.description}</p>
            <p className="contributors">
              Contributors: {contributors(props.project.contributors)}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ProjectCard;
