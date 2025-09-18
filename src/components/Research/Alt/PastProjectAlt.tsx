import type { PastProject } from "../../../data/research";

export default function PastProjectAlt({
  pastProject,
}: {
  pastProject: PastProject;
}) {
  return (
    <div className="past-project-alt">
      <img src={pastProject.image} />

      <div>
        <h3>{pastProject.title}</h3>
        <p>{pastProject.description}</p>
      </div>
    </div>
  );
}
