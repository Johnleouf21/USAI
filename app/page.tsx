import First from "@/components/First";
import Second from "@/components/Second";
import { Flex, Image } from "@chakra-ui/react";
import Third from "@/components/Third";
import Fourth from "@/components/Fourth";
import Fifth from "@/components/Fifth";
import Roadmap from "@/components/Roadmap";

export default function Home() {
  return (
    <Flex direction={'column'} justifyContent="space-between">
      <Image 
        src="images/USAI-TYPO.png" 
        position='absolute'
        left="50%"
        transform="translateX(-50%)"
        w={{base: "200px",sm: "250px",md: "300px",lg: "320px",xl: "400px","2xl": "400px"}} 
        top={{base: 10}}
        zIndex={10}
      />
      <First/>
      <Second/>
      <Third/>
      <Fourth/>
      <Roadmap/>
      <Fifth/>
    </Flex>
  );
}
