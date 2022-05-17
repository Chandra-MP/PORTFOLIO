import "./App.css";
import LandingPage from "./MyComponents/Landingpage";
import About from "./MyComponents/About";
import Overview from "./MyComponents/Overview";
import Contact from ".//MyComponents/Contact";
import React from "react";

function App() {

  return (

      <div className="AppWrapper">
        <LandingPage />
        <About />
        <Overview />
        <Contact/>
      </div>
    
  );
}

export default App;
