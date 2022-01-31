import { React } from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";

import SignUpForm from "../components/SignUpForm";

const Signup = (props) => {

    return (
      <ChakraProvider>
        <Container maxW="container.md" py={5}>
          <SignUpForm />
        </Container>
      </ChakraProvider>
    );
};

export default Signup;