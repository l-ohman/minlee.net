/*
  Variant of news component visible on home page
*/
import "./news.css";
import { newsItems } from "../../data/news";

export default function NewsHome({
  visibleNewsCount = 10,
}: {
  visibleNewsCount?: number;
}) {
  const shownNewsItems = newsItems.slice(0, visibleNewsCount + 1);

  return (
    <div id="news">
      <h2 className="section-header">News</h2>

      {shownNewsItems.map((newsItem, idx) => (
        <div key={`newsItem_${idx}`} className="news-item">
          <p className="date">{newsItem.date}</p>
          <p className="content">{newsItem.content}</p>
        </div>
      ))}

      <a href="/news" className="large-link">
        View more
      </a>
    </div>
  );
}
