import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Home from "./containers/home";
import About from "./containers/about";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import Portfolio from "./containers/portfolio";
import Contact from "./containers/contact";
import Navbar from "./components/navBar";
import particles from "./utils.js/particles";
import { useState } from "react";

function App() {
  const [hide ,setHide]=useState(true)
  const HidenBtn=(val)=>{
setHide(val)
  }
  const location = useLocation();

  const handleInit = async (main) => {
    await loadFull(main);
  };

  const renderParticleJsInHomePage = location.pathname === "/";

  return (
    <div className="App">
      {/* particles js */}

      {renderParticleJsInHomePage && (
        <Particles id="particles" options={particles} init={handleInit} />
      )}

      {/* navbar */}
      <Navbar HidenBtn={HidenBtn}/>

      {/* main page content */}
      <div className="App__main-page-content">
      <Routes>
        <Route index path="/" element={hide?<Home />:<></>} />
        <Route path="/about" element={hide?<About />:<></>} />
        <Route path="/experience" element={hide?<Resume />:<></>} />
        <Route path="/skills" element={hide?<Skills />:<></>} />
        <Route path="/projects" element={hide?<Portfolio />:<></>} />
        <Route path="/contact" element={hide?<Contact />:<></>} />
      </Routes>
      </div>

    </div>
  );
}

export default App;
