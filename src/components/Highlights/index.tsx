import "./highlights.css";
import { highlights } from "../../data/highlights";

export default function Highlights() {
  return (
    <div>
      <h2 id="highlight-title">SELECTED HIGHLIGHTS</h2>

      <div id="highlights-group">
        {highlights.map((highlight, idx) => (
          <div key={`highlight_${idx}`} className="highlight">
            {highlight}
          </div>
        ))}
      </div>
    </div>
  );
}
