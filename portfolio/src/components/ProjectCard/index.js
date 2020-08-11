import React from "react";
import "./style.css";

class ProjectCard extends React.Component {
  render() {
    return (
      <div className="col-12">
        <a
          href={this.props.project.link}
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="card text-center">
            <img
              className="card-image"
              src={this.props.project.image}
              alt={this.props.project.alt}
            />
            <div className="card-img-overlay">
              <h4 className="card-title">
                <strong>{this.props.project.name}</strong>
              </h4>
              <p className="description">{this.props.project.description}</p>
              <p className="contributors">{this.props.project.contributors}</p>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default ProjectCard;
