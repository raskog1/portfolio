import React from "react";
import ProjectCard from "../ProjectCard";

class Projects extends React.Component {
  render() {
    // Only render projects that are set to be featured

    // Why won't this work outside of the render?
    const featured = this.props.projects.filter((project) => project.featured);

    return (
      <section className="projects">
        <h2 className="text-dark">Featured Projects</h2>
        {featured.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </section>
    );
  }
}

export default Projects;
