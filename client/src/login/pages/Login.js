import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import { Container } from "@chakra-ui/react";

import LoginForm from "../../login/components/LoginForm";
import { logInUser } from "../../services/UserService";
import { addToLocalStorage } from "../../services/LocalStorageService";

const Login = (props) => {
  const [errorMsg, setErrorMsg] = useState(null);
  const history = useHistory();

  const logInHander = async (username, password) => {
    try {
      const response = await logInUser(username, password);
      addToLocalStorage(response);
    } catch (error) {
      console.log(error);
    }
    setErrorMsg(null);
    history.push("/");
    history.go();
  };

  return (
    <Container maxW="container.md" py={5}>
      <LoginForm onLogIn={logInHander} />
    </Container>
  );
};

export default Login;
