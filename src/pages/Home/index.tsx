import Bio from "../../components/Bio";
import Highlights from "../../components/Highlights";
import TabSelection from "../../components/TabSelection";
import "./home.css";

export default function Home() {
  return (
    <>
      <section className="bio-section">
        <div>
          <h1 id="name">Min Kyung Lee</h1>
          <Bio />
        </div>
      </section>

      <section className="highlights-section">
        <Highlights />
      </section>

      {/* <hr className="divider" /> */}

      <section className="tab-selection-section">
        <TabSelection />
      </section>
    </>
  );
}
