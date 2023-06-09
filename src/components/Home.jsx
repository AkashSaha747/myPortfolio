import { Box, Button, Flex,Image,Text } from '@chakra-ui/react'
import React from 'react'
import Navbar from './Navbar'
import { ViewIcon } from '@chakra-ui/icons'
import GithubActivity from './GithubActivity'
import About from "./About"
const Home = () => {


  return (
    <>
    <Box h={"100vh"} p={["20px","40px","40px"]} backgroundImage={["https://images.unsplash.com/photo-1515704089429-fd06e6668458?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=repeat&w=1200&q=80","https://images.unsplash.com/photo-1515704089429-fd06e6668458?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80","https://images.unsplash.com/photo-1515704089429-fd06e6668458?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"]} >
    <Box id="home" p={["20px","40px","60px"]}  >
     <Flex direction={["column","row","row"]}  justifyContent={"space-evenly"} gap={["10px","30px","30px"]}>
      <Flex direction={"column"} w={"40%"} m={"auto"}>
     <Box textAlign={"center"}  m={"auto"}>
     <Image borderRadius='full'
  boxSize={["100px","150px","250px"]}
  src='https://blog.imarticus.org/wp-content/uploads/2017/10/scopet.gif'
  alt='Dan Abramov'></Image>
     </Box>
        <Text textAlign={"center"}color={"yellow"} fontSize={["20px","30px","50px"]} fontFamily={"Brush script MT"}>Akash Saha</Text>
      </Flex>
      <Flex w={"60%"} m={"auto"} direction={"column"} gap={["10px","20px","30px"]}>
        <Box><Text fontSize={["18px","25px","30px"]} fontWeight={"500"} color={"pink"}>Hi, 👋  I am <span style={{fontStyle:"italic",fontWeight:"bold",color:"rgb(253,170,92)"}}>Akash Saha</span> </Text></Box>
        <Box><Text flexWrap={"wrap"} fontSize={["15px","18px","22px"]} fontFamily={"Comic Sans MS"} color={"white"}> a dynamic and self-motivated Full Stack Web Developer with expertise in Tech HTML, CSS, JavaScript Java, DSA, React, Redux, Node.js, Express, and MongoDB.
        </Text></Box>
      </Flex>
     </Flex>
     <Flex display={["none","flex","flex"]} color={"white"} w={"40%"} justifyContent={"center"} >
     <a href={require("../assets/resume.pdf")} onClick={()=>{
      window.open("https://drive.google.com/file/d/1t2yNUTDGluV8V_kIopUPk9Qb5XaBTjFC/view?usp=sharing","_blank")
     }} target='_blank' download={"resume.pdf"}>
  <Button variant={"outline"} color={"rgb(253,170,92)"} borderRadius={"20px"}><ViewIcon/>&nbsp;&nbsp; Resume</Button>
</a>
     </Flex>
     <Box display={["block","none","none"]} color={"white"} w={"100%"} mt={"30px"} textAlign={"center"} justifyContent={"center"} >
     <a style={{width:"100%"}} href={require("../assets/resume.pdf")} onClick={()=>{
      window.open("https://drive.google.com/file/d/1t2yNUTDGluV8V_kIopUPk9Qb5XaBTjFC/view?usp=sharing","_blank")
     }} target='_blank' download={"resume.pdf"}>
  <Button variant={"outline"} color={"rgb(253,170,92)"} borderRadius={"20px"}><ViewIcon/>&nbsp;&nbsp; Resume</Button>
</a>
     </Box>
    </Box>
    </Box>
    {/* <About/> */}
    </>
  )
}

export default Home
