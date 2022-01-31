import { React } from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";

import LoginForm from "../../shared/components/LoginForm";

const Login = (props) => {

    return (
      <ChakraProvider>
        <Container maxW="container.md" py={5}>
          <LoginForm />
        </Container>
      </ChakraProvider>
    );
};

export default Login;