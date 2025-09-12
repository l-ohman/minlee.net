import type { Project } from "../../data/research";
import SubProject from "./SubProject";

export default function Project({ project }: { project: Project }) {
  return (
    <>
      <div className="project-large">
        <img src={project.image} />
        <div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      </div>

      <hr className="project-divider" />

      {project.subProjects?.map((subProject) => (
        <SubProject key={subProject.title} subProject={subProject} />
      ))}

      <hr />
    </>
  );
}
