import React from "react";
import { FaMountain } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import { MdLogin } from "react-icons/md";
import {
  Flex,
  Spacer,
  Box,
  Heading,
  Button,
  Container,
  Link,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Container maxW="container.xl" py={4}>
      <Flex>
        <Box p="2">
          <Link href="/" style={{ textDecoration: "none" }}>
            <Heading size="lg">Hiking App</Heading>
          </Link>
        </Box>
        <Spacer />
        <Box>
          <Link href="/hikes" style={{ textDecoration: "none" }}>
            <Button rightIcon={<FaMountain />} colorScheme="purple" mr="4">
              Your Hikes
            </Button>
          </Link>
          <Link href="/signup" style={{ textDecoration: "none" }}>
            <Button rightIcon={<BsPlusLg />} colorScheme="orange" mr="4">
              Sign Up
            </Button>
          </Link>
          <Link href="/login" style={{ textDecoration: "none" }}>
            <Button rightIcon={<MdLogin />} colorScheme="teal">
              Log in
            </Button>
          </Link>
        </Box>
      </Flex>
    </Container>
  );
};

export default Navbar;