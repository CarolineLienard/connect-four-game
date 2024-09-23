import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import musicFile from "../assets/audio/audio.mp3";
import Icon from "./Icon";
import play from "../assets/images/audio.svg";
import pause from "../assets/images/audio-mute.svg";
import { useAudio } from "../context/AudioContext";

const MusicContainer = styled.div`
  background-color: transparent;
  position: fixed;
  top: 2%;
  right: 2%;
`;

const MusicPlayer = styled.audio`
  display: none;
`;

const AudioButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

export default function AudioPlayer() {
  const audioRef = useRef(null);
  const { isPlaying, setIsPlaying } = useAudio();

  const handlePlay = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <MusicContainer>
      <MusicPlayer ref={audioRef} loop>
        <source src={musicFile} type="audio/mpeg" />
        Your browser does not support the audio element.
      </MusicPlayer>
      {isPlaying ? (
        <AudioButton onClick={handlePause}>
          <Icon src={play} />
        </AudioButton>
      ) : (
        <AudioButton onClick={handlePlay}>
          <Icon src={pause} />
        </AudioButton>
      )}
    </MusicContainer>
  );
}
