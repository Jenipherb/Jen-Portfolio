import "../App.css";
import Landing from "./Landing";
import React from "react";
import NavBar from "./NavBar";
import Projects from "./Projects";
import Blogs from "./Blogs";
import { Routes, Route} from "react-router-dom";

function App() {
  console.log("this");
  return (
    <div className="App" style={{backgroundColor: "#ded8ee"}}>
    
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      
    </div>
  );
}

export default App;
