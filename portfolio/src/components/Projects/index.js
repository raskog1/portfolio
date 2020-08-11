import React from "react";
import ProjectCard from "../ProjectCard";

class Projects extends React.Component {
  render() {
    return this.props.projects.map((project) => (
      <ProjectCard project={project} />
    ));
  }
}

export default Projects;
