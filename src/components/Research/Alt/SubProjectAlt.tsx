import { Fragment } from "react/jsx-runtime";
import type { SubProject } from "../../../data/research";

export default function SubProjectAlt({ subProject }: { subProject: SubProject }) {
  return (
    <div className="subproject">
      <h4>{subProject.title}</h4>
      <p>
        {subProject.description}
        {subProject.papers?.length && (
          <span>
            {" "}
            📖 Related papers:{" "}
            {subProject.papers.map((paper, idx) => (
              <Fragment key={paper.title}>
                <a target="_blank" href={paper.url}>
                  {paper.title}
                </a>
                {idx !== subProject.papers!.length - 1 && `, `}
              </Fragment>
            ))}
          </span>
        )}
      </p>
    </div>
  );
}
