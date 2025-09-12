import "./App.css";
import Bio from "./components/Bio";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Highlights from "./components/Highlights";
import News from "./components/News";
import Press from "./components/Press";
import Publications from "./components/Publications";
import Research from "./components/Research";

export default function App() {
  return (
    <>
      <Header />

      <div id="content">
        <h1>Min Kyung Lee</h1>
        <Bio />
        <hr />
        <Highlights />

        <hr />

        {/* <News /> */}
        {/* <Publications /> */}
        {/* <Press /> */}
        <Research />
      </div>

      <Footer />
    </>
  );
}
