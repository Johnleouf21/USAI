import { Box, Button, Card, Flex, Heading, Image, Text } from '@chakra-ui/react'
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
      <Card.Body display="flex" color={'white'} flexDirection="column" justifyContent="space-between" height="100%" borderRadius={20}>
        {/* Partie gauche avec Titre + Texte + Bouton */}
        <Box display="flex" flexDirection="column" flex="1" justifyContent="space-between" p={10}>
          <Text 
            fontSize={{ base: "24px", sm: "36px", md: "42px", lg: "52px", xl: "62px", "2xl": "62px" }}
            mt={{ base: 2, sm: 8, md: 12 }}
            lineHeight={0.5}
            textShadow="2px 2px 0px #0c0d24"
          >
            THE <Text as="span" color="#a41d22">OFFICIAL</Text>
          </Text>
          <Text 
            fontSize={{base: "24px",sm: "36px",md: "42px",lg: "52px",xl: "62px","2xl": "62px"}} 
            mb={{base: 4,sm: 6,md: 10,lg: 10,xl: 10,"2xl": 10}}
            textShadow="2px 2px 0px #0c0d24"
          >
            USAI TOKEN
          </Text>
          <Heading 
            fontSize={{base: "12px",sm: "14px",md: "18px",lg: "24px",xl: "32px","2xl": "32px"}} 
            lineHeight={1.1}
          >
            JOIN THE USAI COMMUNITY AND <br/>
            MEET THE UNCLE SAM AI AGENT
          </Heading>
          <Heading 
            fontSize={{base: "12px",sm: "14px",md: "18px",lg: "24px",xl: "32px","2xl": "32px"}} 
            mt={4}
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
        <Box 
          position={{ base: "relative", sm: "absolute" }} 
          bottom={{ base: -1.5, sm: -1.5, md: -2, lg: -2.5 }} 
          right={{ base: "auto", sm: 0 }}
          alignSelf={{ base: "flex-end", sm: "auto" }} 
          ml="auto"
          display="flex" 
          justifyContent={{ base: "center", sm: "flex-end" }} 
          mt={{ base: -200, sm: 0 }}
          
        >
          <Image 
            src="images/SAMINATOR-1.png" 
            alt="Illustration" 
            boxSize={{base: "250px",sm: "250px",md: "350px",lg: "480px",xl: "500px","2xl": "520px"}} 
            objectFit="contain"
            borderBottomRightRadius={30}
          />
        </Box>
      </Card.Body>
    </Card.Root>
  )
}

export default First