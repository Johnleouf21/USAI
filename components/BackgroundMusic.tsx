"use client";

import { useState, useRef, useEffect } from "react";
import { Box, Button, Icon, VStack, Text } from "@chakra-ui/react";
import { FaPlay, FaPause, FaMusic } from "react-icons/fa";
import { DialogRoot, DialogContent, DialogHeader, DialogFooter } from "@/components/ui/dialog";

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const savedState = localStorage.getItem("isPlaying");
    const userAccepted = localStorage.getItem("musicAccepted");

    if (savedState === "true") {
      setIsPlaying(true);
    }

    if (!userAccepted) {
      setShowPopup(true);
    } else {
      attemptPlay();
    }
  }, []);

  const attemptPlay = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((err) => console.error("Autoplay failed:", err));
    }
  };

  const handleAcceptMusic = (accepted: boolean) => {
    setShowPopup(false);
    if (accepted) {
      setIsPlaying(true);
      localStorage.setItem("musicAccepted", "true");
      attemptPlay();
    } else {
      localStorage.setItem("musicAccepted", "true");
    }
  };

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
    <>
      {/* 🚀 MODAL Chakra UI v3 avec un meilleur design */}
      <DialogRoot open={showPopup}>
        <DialogContent
          bg="gray.800"
          color="white"
          p={6}
          borderRadius={10}
          boxShadow="2xl"
          textAlign="center"
          maxW="400px"
          m="auto"
        >
          <DialogHeader fontSize="xl" fontWeight="bold" display="flex" alignItems="center" justifyContent="center">
            <Icon as={FaMusic} boxSize={6} color="yellow.300" mr={2} /> 🎵 Play Background Music?
          </DialogHeader>
          
          <VStack gap={3} mt={3}>
            <Text fontSize="md" color="gray.300">Do you want to enable background music?</Text>
          </VStack>

          <DialogFooter mt={5} display="flex" justifyContent="center" gap={4}>
            <Button 
              colorScheme="blue" 
              onClick={() => handleAcceptMusic(true)}
              bgGradient="linear(to-r, teal.400, blue.500)"
              _hover={{ bgGradient: "linear(to-r, teal.500, blue.600)" }}
            >
              Yes, Play Music 🎶
            </Button>

            <Button 
              colorScheme="gray" 
              onClick={() => handleAcceptMusic(true)}
              bg="gray.700"
              _hover={{ bg: "gray.600" }}
            >
              No, Thanks ❌
            </Button>
          </DialogFooter>
        </DialogContent>
      </DialogRoot>

      {/* Audio player caché */}
      <audio ref={audioRef} src="/music/background-music.mp3" loop />

      {/* Bouton Play/Pause flottant */}
      <Box position="fixed" bottom="20px" right="20px" zIndex={1000}>
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
    </>
  );
};

export default BackgroundMusic;
