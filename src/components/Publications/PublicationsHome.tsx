/*
  Variant of publications component visible on home page
*/
import { Fragment } from "react/jsx-runtime";
import publicationYears from "../../data/publications";
import "./publications.css";

const YEAR_COUNT = 1;

export default function PublicationsHome() {
  return (
    <div>
      <h2 className="section-header">Publications</h2>
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
        {publicationYears.slice(0, YEAR_COUNT).map((publicationYear) => (
          <Fragment key={`pubyear_${publicationYear.year}`}>
            
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

        <a href="/publications" className="large-link">
          View more
        </a>
      </div>
    </div>
  );
}
