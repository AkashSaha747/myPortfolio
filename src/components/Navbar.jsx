import { Box, Flex, Text,Button,useDisclosure,Drawer,DrawerBody,DrawerOverlay,DrawerContent } from '@chakra-ui/react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box id='nav-menu' >
      <Flex display={["none","flex","flex"]} justifyContent='space-evenly' bg='black' p='10px' >
        <Text
          className={`nav-link home ${location.pathname === '/' ? 'active' : ''}`}
          as={Link}
          fontSize={` ${location.pathname === '/' ? '20px' : '18px'}`}
          fontWeight='bold'
          to='/'
          color={location.pathname === '/' ? 'red' : 'teal'}
        >
          Home
        </Text>
        <Text
          className={`nav-link about ${location.pathname === '/about' ? 'active' : ''}`}
          as={Link}
          fontSize={` ${location.pathname === '/about' ? '20px' : '18px'}`}
          fontWeight='bold'
          to='/about'
          color={location.pathname === '/about' ? 'red' : 'teal'}
        >
          About
        </Text>
        <Text
          className={`nav-link skills ${location.pathname === '/skills' ? 'active' : ''}`}
          as={Link}
          fontSize={` ${location.pathname === '/skills' ? '20px' : '18px'}`}
          fontWeight='bold'
          to='/skills'
          color={location.pathname === '/skills' ? 'red' : 'teal'}
        >
          Skills
        </Text>
        <Text
          className={`nav-link projects ${location.pathname === '/projects' ? 'active' : ''}`}
          as={Link}
          fontSize={` ${location.pathname === '/projects' ? '20px' : '18px'}`}
          fontWeight='bold'
          to='/projects'
          color={location.pathname === '/projects' ? 'red' : 'teal'}
        >
          Projects
        </Text>
        <Text
          className={`nav-link contact ${location.pathname === '/contact' ? 'active' : ''}`}
          as={Link}
          fontSize={` ${location.pathname === '/contact' ? '20px' : '18px'}`}
          fontWeight='bold'
          to='/contact'
          color={location.pathname === '/contact' ? 'red' : 'teal'}
        >
          Contact
        </Text>
        <Button
        variant={"outline"}
         id='resume-button-1'
          borderRadius={"20px"}
          as={Link}
          fontSize={` ${location.pathname === '/resume' ? '20px' : '18px'}`}
          fontWeight='bold'
          to='/resume'
          color={location.pathname === '/resume' ? 'red' : 'rgb(253,170,92)'}
        >
          Resume
        </Button>
      </Flex>


      <Flex display={['flex', 'none', 'none']}>
          {/* <Button onClick={onOpen}>Open Drawer</Button> */}
          <HamburgerIcon color={"white"} fontSize={"lg"} onClick={onOpen}/>
          <Drawer placement='top'  onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent bg={"rgb(253,170,92)"} >
              <DrawerBody >
                <Flex direction='column' align='center' background={"rgb(253,170,92)"} gap={"20px"}>
                  <Text
                    className={`nav-link home ${location.pathname === '/' ? 'active' : ''}`}
                    as={Link}
                    fontSize='20px'
                    fontWeight='bold'
                    to='/'
                    color={location.pathname === '/' ? 'red' : 'teal'}
                    onClick={onClose}
                  >
                    Home
                  </Text>
                  <Text
          className={`nav-link about ${location.pathname === '/about' ? 'active' : ''}`}
          as={Link}
          fontSize={` ${location.pathname === '/about' ? '20px' : '18px'}`}
          fontWeight='bold'
          to='/about'
          color={location.pathname === '/about' ? 'red' : 'teal'}
        >
          About
        </Text>
        <Text
          className={`nav-link skills ${location.pathname === '/skills' ? 'active' : ''}`}
          as={Link}
          fontSize={` ${location.pathname === '/skills' ? '20px' : '18px'}`}
          fontWeight='bold'
          to='/skills'
          color={location.pathname === '/skills' ? 'red' : 'teal'}
        >
          Skills
        </Text>
        <Text
          className={`nav-link projects ${location.pathname === '/projects' ? 'active' : ''}`}
          as={Link}
          fontSize={` ${location.pathname === '/projects' ? '20px' : '18px'}`}
          fontWeight='bold'
          to='/projects'
          color={location.pathname === '/projects' ? 'red' : 'teal'}
        >
          Projects
        </Text>
        <Text
          className={`nav-link contact ${location.pathname === '/contact' ? 'active' : ''}`}
          as={Link}
          fontSize={` ${location.pathname === '/contact' ? '20px' : '18px'}`}
          fontWeight='bold'
          to='/contact'
          color={location.pathname === '/contact' ? 'red' : 'teal'}
        >
          Contact
        </Text>
        <Button
          className="nav-link resume"
          id="resume-button-1"
          as={Link}
          fontSize={` ${location.pathname === '/resume' ? '20px' : '18px'}`}
          fontWeight='bold'
          to='/resume'
          color={location.pathname === '/resume' ? 'red' : 'rgb(253,170,92)'}
        >
          Resume
        </Button>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
    
    </Box>
  );
};

export default Navbar;
