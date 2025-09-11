import "./App.css";
import Bio from "./components/Bio";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Highlights from "./components/Highlights";
import News from "./components/News";
import Publications from "./components/Publications";

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
        <Publications />
      </div>

      <Footer />
    </>
  );
}
