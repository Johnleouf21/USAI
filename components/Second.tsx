import { Box, Card, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const Second = () => {
  return (
    <Card.Root 
      width={{base: "90%",sm: "85%",md: "80%",lg: "80%",xl: "75%","2xl": "70%"}} 
      maxW={"1024px"}  
      boxShadow="md" m={"auto"} 
      borderRadius={20} 
      mt={10}
    >
      <Card.Body display="flex" bgColor='#a41d22' alignItems="center" height="100%" borderRadius={20} p={{base: 2, md: 5}}>
          <Text 
            color='white' 
            fontSize={{base: "12px",sm: "14px",md: "18px",lg: "24px",xl: "32px","2xl": "32px"}}  
            m={{base: 2, md: 5}}
          >
            SOLANA CONTRACT ADDRESS
          </Text>
          <Box 
            display="flex" 
            flexDirection='row' 
            bgColor='white' 
            my={'auto'} 
            p={{base: 2, md: 4}} 
            borderRadius={10}
          >
          <Text  
            fontSize={{base: "12px",sm: "14px",md: "18px",lg: "24px",xl: "32px","2xl": "32px"}}  
            color='#a41d22'my={'auto'}
          >
            CA : &nbsp;
          </Text >
          <Heading 
            fontSize={{base: "12px",sm: "14px",md: "18px",lg: "24px",xl: "32px","2xl": "32px"}} 
            color='black' 
          >
            0x42gjbneye6212byby444d65fxd56c5d16s5f
          </Heading>
          </Box>
      </Card.Body>
    </Card.Root>
  )
}

export default Second