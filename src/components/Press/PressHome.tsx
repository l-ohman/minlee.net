/*
  Variant of Press component visible on home page
*/
import "./press.css";
import press, { type PressArticle } from "../../data/press";
import type { ReactNode } from "react";

const ARTICLE_COUNT = 8;

export default function PressHome() {
  return (
    <div>
      <h2 className="section-header">Press</h2>

      <div>
        {press[0].articles.slice(0, ARTICLE_COUNT).map((article, idx) => {
          if (article && (article as PressArticle).name) {
            article = article as PressArticle;
            return (
              <p className="press-item" key={article.name}>
                <a target="_blank" href={article.url}>
                  {article.name}
                </a>
                {" in "}
                <b>{article.publication}</b>, {article.date}
              </p>
            );
          } else {
            return (
              <p className="press-item" key={`article-${idx}`}>
                {article as ReactNode}
              </p>
            );
          }
        })}
      </div>

      <a href="/press" className="large-link">
        View more
      </a>
    </div>
  );
}
