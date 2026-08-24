import Template from "../../components/Template";
import Card from "../../components/Card";

import { projects } from "../../data/portfolio";

const Projects = () => {
  return (
    <Template title="My Projects">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,20rem),1fr))] gap-4 sm:gap-6">
        {projects.map((project, index) => (
          <div
            key={project.href}
            className="project-card-reveal"
            style={{ animationDelay: `${index * 65}ms` }}
          >
            <Card data={project} />
          </div>
        ))}
      </div>
    </Template>
  );
};

export default Projects;
