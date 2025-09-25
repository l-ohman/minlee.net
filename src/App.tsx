import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import BioPage from "./pages/Bio";
import PublicationsPage from "./pages/Publications";
import PressPage from "./pages/Press";
import NewsPage from "./pages/News";
import ResearchPage from "./pages/Research";

export default function App() {
  return (
    <>
      <Header />

      <div id="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<BioPage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/press" element={<PressPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/research" element={<ResearchPage />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}
