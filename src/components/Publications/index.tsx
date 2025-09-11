import { Fragment } from "react/jsx-runtime";
import publicationYears from "../../data/publications";
import "./publications.css";

export default function Publications() {
  return (
    <>
      <p>
        You can also find{" "}
        <a
          href="https://scholar.google.com/citations?hl=en&user=_qr34PIAAAAJ&view_op=list_works&sortby=pubdate	"
          target="_blank"
        >
          most recent
        </a>{" "}
        and{" "}
        <a
          href="https://scholar.google.com/citations?hl=en&user=_qr34PIAAAAJ&view_op=list_works"
          target="_blank"
        >
          most cited
        </a>{" "}
        publications on Google Scholar. <br />
        (Citations: 11,168, h-index: 43)
      </p>

      <div id="publications">
        {publicationYears.map((publicationYear) => (
          <Fragment key={`pubyear_${publicationYear.year}`}>
            <h3 className="publication-year">{publicationYear.year}</h3>
            {publicationYear.papers.map((paper) => (
              <div className="publication">
                <p className="publication-title">{paper.title}</p>
                <p>{paper.authors}</p>
                <p>{paper.journal}</p>
                {paper.award && (
                  <p className="publication-award">{paper.award}</p>
                )}
                <p>
                  <a target="_blank" href={paper.link}>
                    {paper.linkName || "Website"}
                  </a>
                </p>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </>
  );
}
