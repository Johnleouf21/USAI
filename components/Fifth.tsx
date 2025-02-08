import { Box, Button, Card, Heading, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'

const Fifth = () => {
  return (
    <Card.Root 
      width={{base: "90%",sm: "85%",md: "80%",lg: "80%",xl: "75%","2xl": "70%"}} 
      maxW={"1024px"} 
      boxShadow="md" 
      m="auto" 
      borderRadius={20} 
      my={5} 
      bgColor={'#0c0d24'}
    >
      <Card.Body display="flex" flexDirection="column" alignItems="center" height="100%">
        
        {/* 🟢 1ère Partie : Titre + 4 Colonnes + Images */}
        <Box width="100%" textAlign="center" mb={6} p={5}>
          <Text fontSize={{base: "14px",sm: "16px",md: "24px",lg: "32px",xl: "32px","2xl": "32px"}} color="#a41d22" mb={4}>
            HOW TO BUY $USAI ?
          </Text>

          {/* 4 Colonnes */}
          <Box display="grid" color={'white'} gridTemplateColumns="repeat(4, 1fr)" gap={4} width="100%">
            <Text fontSize={{base: "10px",sm: "12px",md: "18px",lg: "24px",xl: "32px","2xl": "32px"}}>STEP 1</Text>
            <Text fontSize={{base: "10px",sm: "12px",md: "18px",lg: "24px",xl: "32px","2xl": "32px"}}>STEP 2</Text>
            <Text fontSize={{base: "10px",sm: "12px",md: "18px",lg: "24px",xl: "32px","2xl": "32px"}}>STEP 3</Text>
            <Text fontSize={{base: "10px",sm: "12px",md: "18px",lg: "24px",xl: "32px","2xl": "32px"}}>STEP 4</Text>
          </Box>
          <Box display="grid" color={'white'} gridTemplateColumns="repeat(4, 1fr)" gap={4} mt={2} width="100%">
            <Text fontSize={{base: "10px",sm: "12px",md: "18px",lg: "24px",xl: "32px","2xl": "32px"}}>CREATE A PHANTOM WALLET</Text>
            <Text fontSize={{base: "10px",sm: "12px",md: "18px",lg: "24px",xl: "32px","2xl": "32px"}}>GET SOME $SOL</Text>
            <Text fontSize={{base: "10px",sm: "12px",md: "18px",lg: "24px",xl: "32px","2xl": "32px"}}>VISIT MOONSHOT</Text>
            <Text fontSize={{base: "10px",sm: "12px",md: "18px",lg: "24px",xl: "32px","2xl": "32px"}}>BUY $USAI</Text>
          </Box>

          {/* Ligne d'images alignée avec les 4 colonnes */}
          <Box display="grid" gridTemplateColumns="repeat(7, 1fr)" gap={4} width="100%" justifyContent="center" alignItems="center" mt={4} >
            <Image src="images/PHANTOM-LOGO.png" alt="Phantom" w="80px" m='auto' />
            <Text color="#a41d22" fontSize={'36px'}>+</Text>
            <Image src="images/SOLANA-LOGO.png" alt="Solana" w="80px" m='auto'/>
            <Text color="#a41d22" fontSize={'36px'}>+</Text>
            <Image src="images/MOON-SHOT-LOGO.png" alt="Moonshot" w="80px" m='auto'/>
            <Text color="#a41d22" fontSize={'36px'}>=</Text>
            <Image src="images/USAI-HEAD.png" alt="USAI" w="80px" m='auto'/>
          </Box>
        </Box>

        {/* 🔵 2ème Partie : Logo + Texte */}
        <Box textAlign="center"  bgColor={'white'} justifyContent="center" w={'100%'} alignItems="center" p={4}>
          <Image src="images/USAI-TYPO.png" alt="Main Logo" boxSize="50%" mx={'auto'} />
          <Text fontSize={{base: "14px",sm: "16px",md: "24px",lg: "32px",xl: "32px","2xl": "32px"}} color={'#0c0d24'}>
            FIRST AI-POWERED MEME COIN
          </Text>
          <Box display={'flex'} justifyContent={'center'} alignItems="center">
            <Text fontSize={{base: "14px",sm: "16px",md: "24px",lg: "32px",xl: "32px","2xl": "32px"}} color={'#0c0d24'}>
              ONLY ON SOLANA &nbsp;
            </Text>
            <Image src="images/SOLANA-LOGO.png" alt="Solana" w="32px"/>
          </Box>
        </Box>

        {/* 🔴 3ème Partie : 3 Logos cliquables */}
        <Box display="flex" justifyContent="center" alignItems="center" gap={6} p={5}>
          <Link href="https://x.com/usai_ai" target='_blank'>
            <Image src="images/X-LOGO.png" alt="Twitter" w="30px" />
          </Link>
          <Link href="https://telegram.org" target='_blank'>
            <Image src="images/TELEGRAM-LOGO.png" alt="Telegram" w="30px" />
          </Link>
          <Link href="https://dexscreener.com/moonshot" target='_blank'>
            <Image src="images/MOON-SHOT-LOGO.png" alt="Loonshot" w="30px" />
          </Link>
          <Link href="https://www.tiktok.com/@usai_project" target='_blank'>
            <Image src="images/TIKTOK.png" alt="Loonshot" w="30px" />
          </Link>
          <Link href="https://reddit.com" >
            <Image src="images/REDDIT-LOGO.png" alt="Twitter" w="30px" />
          </Link>
          <Link href="https://4chan.org" >
            <Image src="images/4CHAN-LOGO.png" alt="Telegram" w="30px" />
          </Link>
          <Link href="https://weibo.com" >
            <Image src="images/WEIBO-LOGO.png" alt="Loonshot" w="30px" />
          </Link>
          <Link href="https://raydium.io" >
            <Image src="images/RAYDIUM-LOGO.png" alt="Loonshot" w="30px" />
          </Link>
        </Box>

      </Card.Body>
    </Card.Root>
  )
}

export default Fifth