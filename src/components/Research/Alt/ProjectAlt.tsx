import type { Project } from "../../../data/research";
import SubProjectAlt from "./SubProjectAlt";

export default function ProjectAlt({ project }: { project: Project }) {
  return (
    <div id="project-alt">
      <div className="project-large-alt">
        <img src={project.image} />
        <div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      </div>

      <hr className="project-divider" />

      {project.subProjects?.map((subProject) => (
        <SubProjectAlt key={subProject.title} subProject={subProject} />
      ))}
    </div>
  );
}
