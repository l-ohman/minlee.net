import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import BioPage from "./pages/Bio";

export default function App() {
  return (
    <>
      <Header />

      <div id="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<BioPage />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}
