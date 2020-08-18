import React from "react";

import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import CodingLink from "./components/CodingLinks";

import projects from "./projects.json";
import links from "./links.json";

class App extends React.Component {
  // state = { projects: projects };

  render() {
    return (
      <>
        <Navbar />
        {/* Image, profile, and featured projects grid */}
        <div className="container">
          {/* Row containing main bio section and aside */}
          <div className="row">
            {/* Column containing main bio section and projects */}
            <div className="col-md-12 col-lg-9">
              <Profile />
              {/* Projects section */}
              {/* <Projects projects={this.state.projects} /> */}
              <Projects projects={projects} />
            </div>

            {/* Links aside */}
            <aside className="col-12 col-lg-3 text-dark">
              <h3>Support Links for Coding</h3>
              <p>
                Visit the following websites that assisted in developing this
                website
              </p>
              <br />
              <ul>
                <CodingLink
                  name={links[0].name}
                  website={links[0].website}
                  www={links[0].www}
                />
                <CodingLink
                  name={links[1].name}
                  website={links[1].website}
                  www={links[1].www}
                />
                <CodingLink
                  name={links[2].name}
                  website={links[2].website}
                  www={links[2].www}
                />
                <CodingLink
                  name={links[3].name}
                  website={links[3].website}
                  www={links[3].www}
                />
                <CodingLink
                  name={links[4].name}
                  website={links[4].website}
                  www={links[4].www}
                />
              </ul>
            </aside>
          </div>
        </div>
      </>
    );
  }
}

export default App;
