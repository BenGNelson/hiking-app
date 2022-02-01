import { React, useState } from "react";
import { ChakraProvider, Container, Alert, AlertIcon } from "@chakra-ui/react";

import SignUpForm from "../components/SignUpForm";
import { getUserByName } from "../../services/UserService";

const Signup = (props) => {
  const [errorMsg, setErrorMsg] = useState(null);

  const checkUserExists = async (username) => {
    try {
      return await getUserByName(username);
    } catch (error) {
      console.log(error);
    }
  };

  const signupHandler = async (username, password) => {
    const user = await checkUserExists(username);
    if (user) {
      setErrorMsg("Username already exists");
      return;
    }
    return 0;
  };

  return (
    <Container maxW="container.md" py={5}>
      <SignUpForm onSignup={signupHandler} />
      {errorMsg && (
        <Alert status="error" mt="30px">
          <AlertIcon />
          {errorMsg}
        </Alert>
      )}
    </Container>
  );
};

export default Signup;