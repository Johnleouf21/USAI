import { Box, Button, Card, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const First = () => {
  return (
    <Card.Root 
      width={{base: "90%",sm: "85%",md: "80%",lg: "80%",xl: "75%","2xl": "70%"}} 
      maxW={"1024px"}
      bgColor={'#16183F'}  
      boxShadow="md" 
      m={"auto"} 
      borderRadius={20} 
      mt={{base: 20, xl:28}}
    >
      <Card.Body display="flex" flexDirection="column" justifyContent="space-between" height="100%" borderRadius={20}>
        {/* Partie gauche avec Titre + Texte + Bouton */}
        <Box display="flex" flexDirection="column" flex="1" justifyContent="space-between" p={10}>
          <Text 
            fontSize={{base: "24px",sm: "36px",md: "42px",lg: "52px",xl: "62px","2xl": "62px"}} 
            mt={{base: 2,sm: 8,md: 12}}
          >
            THE OFFICIAL 
          </Text>
          <Text 
            fontSize={{base: "24px",sm: "36px",md: "42px",lg: "52px",xl: "62px","2xl": "62px"}} 
            my={{base: 4,sm: 6,md: 10,lg: 10,xl: 10,"2xl": 10}}
          >
            USAI TOKEN
          </Text>
          <Heading 
            fontSize={{base: "12px",sm: "14px",md: "18px",lg: "24px",xl: "32px","2xl": "32px"}} 
            mb={4}
          >
            JOIN THE USAI COMMUNITY AND 
          </Heading>
          <Heading 
            fontSize={{base: "12px",sm: "14px",md: "18px",lg: "24px",xl: "32px","2xl": "32px"}} 
            mb={4}
          >
            MEET THE UNCLE SAM AI AGENT
          </Heading>
          <Heading 
            fontSize={{base: "12px",sm: "14px",md: "18px",lg: "24px",xl: "32px","2xl": "32px"}} 
            mb={4}
          >
            WE NEED YOU NOW !
          </Heading>
          <Button mr={'auto'} my={10} bgColor="#a41d22" color='white' borderRadius={20} p={{base: 5, xl:10}}>
            <Text 
              fontSize={{base: "12px",sm: "14px",md: "18px",lg: "24px",xl: "32px","2xl": "32px"}} 
            >
              BUY USAI
            </Text>
          </Button>
        </Box>

        {/* Image comme un sticker en bas à droite, qui peut dépasser légèrement */}
        <Box ml={2} position="absolute" bottom={-1} right={0}>
          <Image 
            src="images/SAMINATOR-1.png" 
            alt="Illustration" 
            boxSize={{base: "250px",sm: "250px",md: "400px",lg: "480px",xl: "500px","2xl": "550px"}} 
            objectFit="contain"
            borderBottomRightRadius={20}
          />
        </Box>
      </Card.Body>
    </Card.Root>
  )
}

export default First