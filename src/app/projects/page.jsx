import Template from "../../components/Template";
import Card from "../../components/Card";
import DelayedTransition from "../../components/DelayedTransition";

import { projects } from "../../data/portfolio";

const Projects = () => {
  return (
    <Template title="My Projects">
      <div className="my-12 grid gap-8 lg:grid-cols-3">
        {projects.map((project, index) => (
          <DelayedTransition
            key={project.href}
            delay={index * 100}
            enter={`transition duration-400`}
            enterFrom="opacity-0 scale-50"
            enterTo="opacity-100 scale-100"
            leave="duration-200 transition ease-in-out"
            leaveFrom="opacity-100 rotate-0 scale-100 "
            leaveTo="opacity-0 scale-95 "
          >
            <Card data={project} />
          </DelayedTransition>
        ))}
      </div>
    </Template>
  );
};

export default Projects;
