import "./news.css";
import { newsItems } from "../../data/news";

export default function News() {
  return (
    <div id="news">
      {newsItems.map((newsItem, idx) => (
        <div key={`newsItem_${idx}`} className="news-item">
          <p className="date">{newsItem.date}</p>
          <p className="content">{newsItem.content}</p>
        </div>
      ))}
    </div>
  );
}
