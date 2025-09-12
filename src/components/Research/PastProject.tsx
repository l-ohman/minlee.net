import type { PastProject } from "../../data/research";

export default function PastProject({
  pastProject,
}: {
  pastProject: PastProject;
}) {
  return (
    <div className="past-project">
      <img src={pastProject.image} />

      <div>
        <h3>{pastProject.title}</h3>
        <p>{pastProject.description}</p>
      </div>
    </div>
  );
}
