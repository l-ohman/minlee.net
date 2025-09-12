import "./research.css";
import { pastProjects, projects } from "../../data/research";
import Project from "./Project";
import PastProject from "./PastProject";

export default function Research() {
  return (
    <>
      <p>I conduct research in the three complementary research threads:</p>
      <hr />
      {projects.map((project) => (
        <Project key={project.title} project={project} />
      ))}

      <p>My past projects investigated human-robot interaction:</p>
      {pastProjects.map((pastProject) => (
        <PastProject key={pastProject.title} pastProject={pastProject} />
      ))}
    </>
  );
}
