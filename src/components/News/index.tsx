import "./news.css";
import { newsItems } from "../../data/news";
import { useState } from "react";

export default function News({
  visibleNewsCount = 99999,
}: {
  visibleNewsCount: number;
}) {
  const [visibleNewsItems, setVisibleNewsItems] = useState(visibleNewsCount);
  const shownNewsItems = newsItems.slice(0, visibleNewsItems + 1);
  const allNewsVisible = visibleNewsItems >= newsItems.length;

  const showMoreNews = () => {
    setVisibleNewsItems(visibleNewsItems + visibleNewsCount);
  };

  return (
    <div id="news">
      {shownNewsItems.map((newsItem, idx) => (
        <div key={`newsItem_${idx}`} className="news-item">
          <p className="date">{newsItem.date}</p>
          <p className="content">{newsItem.content}</p>
        </div>
      ))}
      {!allNewsVisible && (
        <button onClick={() => showMoreNews()} className="show-more">
          Show more
        </button>
      )}
    </div>
  );
}
