import "./highlights.css";
import { highlights } from "../../data/highlights";

export default function Highlights() {
  return (
    <div>
      <h2 id="highlight-title">Spotlight</h2>

      <div id="highlights-group">
        {highlights.map((highlight, idx) => (
          <div key={`highlight_${idx}`} className="highlight">
            {<highlight.Icon size="5rem" className="highlight-icon" />}
            <p className="highlight-content">{highlight.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
