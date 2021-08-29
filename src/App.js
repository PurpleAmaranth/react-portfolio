import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Navbar";
import Page from "./components/Page";
import Footer from "./components/Footer";

function App() {
  const [pages] = useState([
    {
      name: "bio"
    },
    { name: "portfolio" 
    },
    { name: "contact" 
    },
    {
      name: "experience"
    }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header>
        <Nav pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage}></Nav>
      </Header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer/>
    </div>
  );
}

export default App;