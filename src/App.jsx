import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MusicPlayer from "./pages/MusicPlayer";
import { SongsProvider, MoodProvider } from "./services/store";

function App() {
  return (
    <div className="relative flex">
      <div className="flex-1 flex flex-col bg-gradient-to-b from-[#103783] to-[#9BAFD9]">
        <div className="px-6 h-screen overflow-y-scroll hide-scrollbar flex xl:flex-row">
          <MoodProvider>
            <SongsProvider>
              <Router>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/music-player" element={<MusicPlayer />} />
                </Routes>
              </Router>
            </SongsProvider>
          </MoodProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
