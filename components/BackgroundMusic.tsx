"use client";

import { useState, useRef, useEffect } from "react";
import { Box, Button, Icon } from "@chakra-ui/react";
import { FaPlay, FaPause } from "react-icons/fa";

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const savedState = localStorage.getItem("isPlaying");
    if (savedState === "true") {
      setIsPlaying(true);
    }

    const handleUserInteraction = () => {
      setHasInteracted(true);
      if (isPlaying && audioRef.current) {
        audioRef.current.play().catch((err) => console.error("Playback failed", err));
      }
    };

    window.addEventListener("click", handleUserInteraction);
    window.addEventListener("keydown", handleUserInteraction);

    return () => {
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
    };
  }, [isPlaying]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        localStorage.setItem("isPlaying", "false");
      } else {
        audioRef.current.play().catch((err) => console.error("Playback failed", err));
        localStorage.setItem("isPlaying", "true");
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <Box position="fixed" bottom="20px" right="20px" zIndex={1000}>
      {/* Audio element */}
      <audio ref={audioRef} src="/music/background-music.mp3" loop />

      {/* Play/Pause Button */}
      <Button 
        onClick={togglePlayPause} 
        bg="gray.800" 
        color="white" 
        _hover={{ bg: "gray.700" }} 
        borderRadius="50%" 
        p={4} 
        boxShadow="lg"
      >
        <Icon as={isPlaying ? FaPause : FaPlay} boxSize={5} />
      </Button>
    </Box>
  );
};

export default BackgroundMusic;
