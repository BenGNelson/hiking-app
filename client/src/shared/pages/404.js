import { React } from "react";
import { Center, ChakraProvider, Container, Text } from "@chakra-ui/react";

const Hikes404 = () => {
  return (
    <ChakraProvider>
      <Container maxW="container.xl">
        <Center>
          <Text fontSize="4xl">this is not the page ur lookin for</Text>
        </Center>
      </Container>
    </ChakraProvider>
  );
};
export default Hikes404;