/*
  Variant of research component visible on home page
*/

import "./research.css";
import { projects } from "../../data/research";
import ProjectAlt from "./Alt/ProjectAlt";

export default function ResearchHome() {
  return (
    <div>
      <h2 className="section-header">Research</h2>
      <p>I conduct research in the three complementary research threads:</p>

      {projects.map((project) => (
        <ProjectAlt key={project.title} project={project} />
      ))}

      <a href="/research" className="large-link">
        Read more
      </a>
    </div>
  );
}
