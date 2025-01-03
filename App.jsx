import { useState } from "react";
import ArtworkCarousel from "./components/ArtworkCarousel";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Exhibitions from "./components/Exhibitions";
export default function App() {
  const [screenContent, setScreenContent] = useState("Home");
  const [darkMode, setDarkMode] = useState(false);

  function changeScreenContent(content) {
    setScreenContent(content);
  }

  function toggleMode() {
    setDarkMode(!darkMode);
  }

  return (
    <>
      <div className={darkMode ? "dark" : "light"}>
        <div className="app-container min-h-screen" style={{
          background: darkMode ? "linear-gradient(180deg, #121212, #1E1E1E)" : "#ffffff",
          color: darkMode ? "#E0E0E0" : "#000000",
        }}>
          <Header verticalAlign="center" onImageClick={changeScreenContent} darkMode={darkMode} />
          <hr />
          <NavBar onButtonClick={changeScreenContent} />
          <div className="dark-mode-toggle text-right p-4">
            <button className="bg-gray-800 text-white px-5 py-2 rounded-full shadow-lg hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-300 transition-all duration-300 ease-in-out transform hover:scale-105"
              onClick={toggleMode}
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
          <hr />
          {screenContent == "Home" && <Home onExplore={changeScreenContent} darkMode={darkMode} />}
          {screenContent == "About Us" && <About darkMode={darkMode} />}
          {screenContent == "Artwork" && <ArtworkCarousel />}
          {screenContent == "Exhibition" && <Exhibitions />}
          <hr />
          <Footer className="mt-4" />
        </div>
      </div>
    </>
  );
}
