import React from "react";
import { Route, HashRouter, Routes } from "react-router-dom";
import MainMenu from "./pages/MainMenu";
import Rules from "./pages/Rules";
import Game from "./pages/Game";
import AudioPlayer from "./components/AudioPlayer"; 
import { AudioProvider } from "./context/AudioContext"; 

function App() {
  return (
    <HashRouter>
      <AudioProvider>
        <AudioPlayer />
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </AudioProvider>
    </HashRouter>
  );
}

export default App;
