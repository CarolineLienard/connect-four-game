import React, { createContext, useContext, useRef, useState } from "react";
import hoverSound from "../assets/audio/hover.mp3";
import clickSound from "../assets/audio/click.mp3";

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const hoverAudioRef = useRef(new Audio(hoverSound));
  const clickAudioRef = useRef(new Audio(clickSound));

  const playHoverSound = () => {
    if (isPlaying) {
      hoverAudioRef.current.currentTime = 0;
      hoverAudioRef.current
        .play()
        .catch((error) => console.error("Playback failed:", error));
    }
  };

  const playClickSound = () => {
    if (isPlaying) {
      clickAudioRef.current.currentTime = 0;
      clickAudioRef.current
        .play()
        .catch((error) => console.error("Playback failed:", error));
    }
  };

  return (
    <AudioContext.Provider
      value={{ playHoverSound, playClickSound, isPlaying, setIsPlaying }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  return useContext(AudioContext);
};
