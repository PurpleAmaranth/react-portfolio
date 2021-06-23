import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./components/Header"
import ProjectCard from "./components/ProjectCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    //DEFAULT
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    // populate webpage:
    <div>
      <Navbar />
      <Header />
      <ProjectCard />
      <Footer />
    </div>
  );
}

export default App;
