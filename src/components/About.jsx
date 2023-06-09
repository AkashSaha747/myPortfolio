import { Box, Flex,Image,Text,Button, } from '@chakra-ui/react'
import { ViewIcon } from '@chakra-ui/icons'

import React from 'react'
import Navbar from './Navbar'

const About = () => {
  return (
    <Box id="about" className="about section" h={"100vh"} w={"100%"} p={["20px","40px","40px"]} backgroundImage={"https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"}> 
          <Box id="home" p={["20px","40px","60px"]}  >
     <Flex direction={["column","row","row"]}  justifyContent={"space-evenly"} gap={["10px","30px","30px"]}>
    
      <Flex w={"60%"} m={"auto"} direction={"column"} gap={["10px","20px","30px"]} color={"white"}>
        <Box><Text fontSize={["20px","28px","30px"]} fontWeight={"bold"} textAlign={"center"}> ABOUT ME</Text></Box>
        <Box><Text fontSize={["18px","25px","28px"]} fontWeight={"semibold"} color={"yellow"} textAlign={"center"} id='user-detail-name'>Akash Saha</Text></Box>
        <Box><Text flexWrap={"wrap"} fontSize={["12px","18px","22px"]} fontFamily={"Comic Sans MS"} color={"white"} id='user-detail-intro'> a dynamic and self-motivated Full Stack Web Developer with expertise in Tech HTML, CSS, JavaScript Java, DSA, React, Redux, Node.js, Express, and MongoDB.
        </Text></Box>
      </Flex>

      <Flex direction={"column"}  w={"40%"} m={"auto"}>
     <Box textAlign={"center"}  m={"auto"} >
     <Image borderRadius='full'
  boxSize={["100px","150px","250px"]}
  src='https://bit.ly/dan-abramov'
  alt='Dan Abramov'></Image>
     </Box>
        <Text textAlign={"center"}color={"yellow"} fontSize={["20px","30px","50px"]} fontFamily={"Brush script MT"}>Akash Saha</Text>
      </Flex>
     </Flex>
    </Box>
    </Box>
  )
}

export default About
