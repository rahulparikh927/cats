import React from "react";
import "./App.css";
import Header from "./components/header";
import CatFeed from "./components/organisms";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CatBreed from "./components/organisms/CatBreed";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="mainContainer">
          {/* <CatFeed /> */}
          <Routes>
            <Route path="/" element={<CatFeed />} />
            <Route path="/cat-breed/:id" element={<CatBreed />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
