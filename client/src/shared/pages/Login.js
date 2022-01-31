import { React } from "react";
import { ChakraProvider, Container, Box } from "@chakra-ui/react";

import AddHike from "../../hikes/components/AddHike";

const Login = (props) => {

    return (
      <ChakraProvider>
        <Container maxW="container.md" py={5}>
          <AddHike />
        </Container>
      </ChakraProvider>
    );
};

export default Login;