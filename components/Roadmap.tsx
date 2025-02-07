import { roadmap } from '@/app/data/roadmap'
import { Box, Card, Heading, Image, List, ListItem, Text } from '@chakra-ui/react'
import React from 'react'

const Roadmap
 = () => {
  return (
    <Card.Root 
      width={{base: "90%",sm: "85%",md: "80%",lg: "80%",xl: "75%","2xl": "70%"}} 
      maxW={"1024px"}  
      boxShadow="md" 
      m={"auto"} 
      borderRadius={20} 
      mt={5} 
      bgColor={'#a41d22'}
    >
      <Card.Body display="flex" flexDirection="column" height="100%" borderRadius={20}>
        {/* Partie gauche avec Titre + Texte + Bouton */}
        <Box p={10}>
          <Image 
            src='images/ROADMAP-LOGO.png'
            mb={10}
          />
          
          {roadmap.map((phaseData, index) => (
        <Box 
          key={index}  
        >
          {/* Phase Title */}
          <Text 
            fontSize={{base: "12px",sm: "14px",md: "18px",lg: "24px",xl: "32px","2xl": "32px"}} 
            color="white" mb={2} 
            textShadow="2px 2px 0px #0c0d24"
            my={4}
          >
            {phaseData.phase}
          </Text>

          {/* Objective */}
          <Text 
            fontSize={{base: "12px",sm: "14px",md: "18px",lg: "24px",xl: "32px","2xl": "32px"}} 
            mb={4}>
            {phaseData.objective}
          </Text>

          {/* Description List */}
          <List.Root gap={2}>
            {phaseData.details.map((detail, idx) => (
              <ListItem key={idx}
              fontSize={{base: "14px",sm: "16px",md: "16px",lg: "18px",xl: "24px","2xl": "24px"}}  
               color="#0c0d24"
              >
               {detail}
              </ListItem>
            ))}
          </List.Root>
        </Box>
      ))}
        </Box>

        {/* Image avec texte superposé */}
        <Box position="relative">
          <Image 
            src="images/SAMINATOR-FACE.png" 
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
            color={'white'}
          >
            <Text fontSize={{base: "16px",sm: "18px",md: "22px",lg: "26px",xl: "32px","2xl": "36px"}} fontWeight="bold" color="white">
              IN AI
            </Text>
            <Text fontSize={{base: "16px",sm: "18px",md: "22px",lg: "26px",xl: "32px","2xl": "36px"}} fontWeight="bold" color="white">
              we trust
            </Text>
            <Text fontSize={{base: "16px",sm: "18px",md: "22px",lg: "26px",xl: "32px","2xl": "36px"}} fontWeight="bold" color="white" mt={5}>
              IN $USAI
            </Text>
            <Text fontSize={{base: "16px",sm: "18px",md: "22px",lg: "26px",xl: "32px","2xl": "36px"}} fontWeight="bold" color="white">
              we HODL
            </Text>
          </Box>
        </Box>
      </Card.Body>
    </Card.Root>
  )
}

export default Roadmap