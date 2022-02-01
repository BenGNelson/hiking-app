import { React } from "react";
import { Container } from "@chakra-ui/react";

import LoginForm from "../../login/components/LoginForm";

const Login = (props) => {
  return (
    <Container maxW="container.md" py={5}>
      <LoginForm />
    </Container>
  );
};

export default Login;