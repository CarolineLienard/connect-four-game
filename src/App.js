import React from "react";
import { Route, HashRouter, Routes } from "react-router-dom";
import MainMenu from "./pages/MainMenu";
import Rules from "./pages/Rules";
import Game from "./pages/Game";
import AudioPlayer from "./components/AudioPlayer";

function App() {
  return (
    <HashRouter>
      <AudioPlayer /> {/* Inclure le lecteur audio ici */}
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
