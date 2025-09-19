import "./highlights.css";
import { highlights } from "../../data/highlights";
import FloatIn from "../FloatIn";

export default function Highlights() {
  return (
    <div>
      <h2 id="highlight-title">Spotlight</h2>

      <div id="highlights-group">
        {highlights.map((highlight, idx) => (
          <FloatIn
            key={`highlight_${idx}`}
            className="highlight"
            delay={idx * 0.2}
          >
            {<highlight.Icon size="5rem" className="highlight-icon" />}
            <p className="highlight-content">{highlight.content}</p>
          </FloatIn>
        ))}
      </div>
    </div>
  );
}
