import "./research.css";
import { pastProjects, projects } from "../../data/research";
// import Project from "./Project";
// import PastProject from "./PastProject";
import ProjectAlt from "./Alt/ProjectAlt";
import PastProjectAlt from "./Alt/PastProjectAlt";

export default function Research() {
  return (
    <>
      <p>I conduct research in the three complementary research threads:</p>
      {/* <hr /> */}

      {projects.map((project) => (
        <ProjectAlt key={project.title} project={project} />
      ))}

      {/* <p>My past projects investigated human-robot interaction:</p> */}
      <h2>Past Projects</h2>

      {pastProjects.map((pastProject) => (
        <PastProjectAlt key={pastProject.title} pastProject={pastProject} />
      ))}
    </>
  );
}
