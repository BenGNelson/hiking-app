import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Alert, AlertIcon } from "@chakra-ui/react";

import SignUpForm from "../components/SignUpForm";
import { getUserByName, signUpUser } from "../../services/UserService";

const Signup = (props) => {
  const [errorMsg, setErrorMsg] = useState(null);
  const history = useHistory();

  const signupHandler = async (username, password) => {
    const user = await getUserByName(username);
    if (user) {
      setErrorMsg("Username already exists");
      return;
    }
    try {
      await signUpUser(username, password);
    } catch (error) {
      console.log(error);
    }
    setErrorMsg(null);
    history.push("/login");
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
