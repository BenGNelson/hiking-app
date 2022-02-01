import React from "react";
import { FaMountain } from "react-icons/fa";
import { BsPlusLg, BsMoonFill } from "react-icons/bs";
import { MdLogin } from "react-icons/md";
import {
  Flex,
  Spacer,
  Box,
  Heading,
  Button,
  Container,
  Link,
  Center,
  IconButton,
  useColorMode, 
} from "@chakra-ui/react";


const Navbar = () => {
const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW="container.xl" py={4}>
      <Flex>
        <Box p="2">
          <Link href="/" style={{ textDecoration: "none" }}>
            <Heading size="lg">Hiking App</Heading>
          </Link>
        </Box>
        <Spacer />
        <Center>
          <Link href="/hikes" style={{ textDecoration: "none" }}>
            <Button leftIcon={<FaMountain />} colorScheme="purple" mr="4">
              Your Hikes
            </Button>
          </Link>
          <Link href="/signup" style={{ textDecoration: "none" }}>
            <Button leftIcon={<BsPlusLg />} colorScheme="orange" mr="4">
              Sign Up
            </Button>
          </Link>
          <Link href="/login" style={{ textDecoration: "none" }}>
            <Button leftIcon={<MdLogin />} colorScheme="teal" mr="4">
              Log in
            </Button>
          </Link>
          
          <Button leftIcon={<BsMoonFill />} colorScheme="gray" mr="4" onClick={toggleColorMode}>
              Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
            </Button>
        </Center>
      </Flex>
    </Container>
  );
};

export default Navbar;