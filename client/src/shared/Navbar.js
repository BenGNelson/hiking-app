import { React, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FaMountain } from "react-icons/fa";
import { BsPlusLg, BsMoonFill } from "react-icons/bs";
import { MdLogin, MdLogout } from "react-icons/md";
import {
  Flex,
  Spacer,
  Box,
  Heading,
  Button,
  Container,
  Link,
  Center,
  useColorMode,
} from "@chakra-ui/react";

import { deleteLocalStorage } from "../services/LocalStorageService";
import { AuthContext } from "../auth/AuthContext";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const auth = useContext(AuthContext);
  const history = useHistory();

  const logOutHandler = () => {
    deleteLocalStorage();
    history.push("/");
    history.go();
  };

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
          {auth.isLoggedIn && (
            <Box>
              <Link href="/my-hikes" style={{ textDecoration: "none" }}>
                <Button leftIcon={<FaMountain />} colorScheme="purple" mr="4">
                  Your Hikes
                </Button>
              </Link>
              <Button
                onClick={logOutHandler}
                leftIcon={<MdLogout />}
                colorScheme="red"
                mr="4"
              >
                Log Out
              </Button>
            </Box>
          )}
          {!auth.isLoggedIn && (
            <Box>
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
            </Box>
          )}

          <Button
            leftIcon={<BsMoonFill />}
            colorScheme="gray"
            mr="4"
            onClick={toggleColorMode}
          >
            Toggle {colorMode === "light" ? "Dark" : "Light"}
          </Button>
        </Center>
      </Flex>
    </Container>
  );
};

export default Navbar;
