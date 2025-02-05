import { Box, Card, Text, Image } from '@chakra-ui/react'
import React from 'react'

const Fourth = () => {
  return (
    <Card.Root 
      width={{base: "90%",sm: "85%",md: "80%",lg: "80%",xl: "75%","2xl": "70%"}} 
      maxW={"1024px"} 
      boxShadow="md" 
      m="auto" 
      borderRadius={20} 
      mt={10}
      backgroundImage="url('images/FLAG-BACKGROUND-MINI.png')" // Définition du fond
      backgroundSize="cover" 
      backgroundPosition="center"
    >
      <Card.Body display="flex" alignItems="center" height="100%" borderRadius={20} p={5}>
          <Text color='#0c0d24' fontSize={{base: "14px",sm: "16px",md: "24px",lg: "32px",xl: "32px","2xl": "32px"}} m={3} textShadow="2px 2px 0px #ffffff">
            UNCLE SAMINATOR IS WATCHING
          </Text>
          <Text  fontSize={{base: "14px",sm: "16px",md: "24px",lg: "32px",xl: "32px","2xl": "32px"}} color='white' m={3} textShadow="2px 2px 0px #0c0d24">
            HODL. Or be forgotten by history
          </Text >
      </Card.Body>
    </Card.Root>
  )
}

export default Fourth