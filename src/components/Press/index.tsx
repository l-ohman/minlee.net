import "./press.css";
import press, { type PressArticle } from "../../data/press";
import type { ReactNode } from "react";

export default function Press() {
  return (
    <>
      {press.map((pressCategory) => (
        <div key={pressCategory.name}>
          <h3 className="press-category">{pressCategory.name}</h3>
          {pressCategory.articles.map((article) => {
            if (article && (article as PressArticle).name) {
              article = article as PressArticle;
              return (
                <p className="press-item">
                  <a target="_blank" href={article.url}>
                    {article.name}
                  </a>
                  {" in "}
                  <b>{article.publication}</b>, {article.date}
                </p>
              );
            } else {
              return <p className="press-item">{article as ReactNode}</p>;
            }
          })}
        </div>
      ))}
    </>
  );
}
