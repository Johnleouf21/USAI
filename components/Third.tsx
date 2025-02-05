import { Box, Card, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Third = () => {
  return (
    <Card.Root 
      width={{base: "90%",sm: "85%",md: "80%",lg: "80%",xl: "75%","2xl": "70%"}} 
      maxW={"1024px"}  
      boxShadow="md" 
      m={"auto"} 
      borderRadius={20} 
      mt={5} 
      bgColor={'#16183F'}
    >
      <Card.Body display="flex" flexDirection="column" height="100%" borderRadius={20}>
        {/* Partie gauche avec Titre + Texte + Bouton */}
        <Box p={10}>
          <Text 
            fontSize={{base: "12px",sm: "14px",md: "18px",lg: "24px",xl: "32px","2xl": "32px"}} 
            color='#a41d22' 
            mt={{base: 2, md: 10}}
          >
            WHAT IS USAI? A MEMECOIN?
          </Text>
          <Text 
            fontSize={{base: "12px",sm: "14px",md: "18px",lg: "24px",xl: "32px","2xl": "32px"}} 
            color='#a41d22'
          >
            A CULT? A MOVEMENT? ALL OF THE ABOVE
          </Text>
          <Text 
            fontSize={{base: "12px",sm: "14px",md: "18px",lg: "24px",xl: "32px","2xl": "32px"}}  
            mt={4}
          >
            100% MEME. 100% AI. 100% PATRIOTIC CHAOS
          </Text>
          <Heading 
            fontSize={{base: "10px",sm: "12px",md: "16px",lg: "18px",xl: "24px","2xl": "24px"}} 
            my={4}
          >
            Uncle Saminator has taken over Twitter, Telegram, Reddit, Weibo, TikTok, and 4chan.
          </Heading>
          <Heading 
            fontSize={{base: "10px",sm: "12px",md: "16px",lg: "18px",xl: "24px","2xl": "24px"}}  
            mb={4}
          >
            The AI drops banger tweets and memes every 5 minutes.
            It auto-replies to influencers, roasting them into oblivion.
            It’s more patriotic than an eagle drinking Budweiser on a monster truck.
            The USAI Army is recruiting – Take the most absurd patriotism test ever.
          </Heading>
          <Heading 
            fontSize={{base: "10px",sm: "12px",md: "16px",lg: "18px",xl: "24px","2xl": "24px"}}  
            mb={4}
          >
            "What’s the greatest American movie?" (Correct answer: ALL OF THEM.)
            "Who is the most legendary leader in history?" (Correct answer: Uncle Saminator.)
            "What do you do if another memecoin attacks USAI?" (Correct answer: SHITPOST UNTIL THEY REGRET EVERYTHING.)
            The greatest meme war in history is about to begin.
          </Heading>
        </Box>

        {/* Image avec texte superposé */}
        <Box position="relative">
          <Image 
            src="images/EAGLE.png" 
            alt="Illustration" 
            width="100%"
            borderBottomRadius={20}
          />
          
          {/* Texte superposé sur l'image */}
          <Box 
            position="absolute" 
            top={'20%'}
            right={0} 
            textAlign="left"
            pr={4} 
            py={2} 
            borderRadius={10}
          >
            <Text fontSize={{base: "12px",sm: "14px",md: "18px",lg: "24px",xl: "32px","2xl": "32px"}} fontWeight="bold" color="white">
              THE USAI
            </Text>
            <Text fontSize={{base: "12px",sm: "14px",md: "18px",lg: "24px",xl: "32px","2xl": "32px"}} fontWeight="bold" color="white">
              HAS TOKEN
            </Text>
            <Text fontSize={{base: "12px",sm: "14px",md: "18px",lg: "24px",xl: "32px","2xl": "32px"}} fontWeight="bold" color="white">
              CONTROL
            </Text>
            <Text fontSize={{base: "12px",sm: "14px",md: "18px",lg: "24px",xl: "32px","2xl": "32px"}} fontWeight="bold" color="white" mt={5}>
              JOIN THE USAI
            </Text>
            <Text fontSize={{base: "12px",sm: "14px",md: "18px",lg: "24px",xl: "32px","2xl": "32px"}} fontWeight="bold" color="white">
              REVOLUTION
            </Text>
            <Text fontSize={{base: "12px",sm: "14px",md: "18px",lg: "24px",xl: "32px","2xl": "32px"}} fontWeight="bold" color="white">
              NOW!
            </Text>
          </Box>
        </Box>
      </Card.Body>
    </Card.Root>
  )
}

export default Third