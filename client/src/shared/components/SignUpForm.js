import React, { useState } from "react";
import {
  FormControl,
  Input,
  Button,
  VStack,
  Box,
} from "@chakra-ui/react";

const LoginForm = (props) => {
  const [enteredUsername, setenteredUsername] = useState("");
  const [enteredPassword, setenteredPassword] = useState("");
  const [enteredConfirmedPassword, setenteredenteredConfirmedPassword] = useState("");

  const loginHandler = async (event) => {
    event.preventDefault();

    setenteredUsername("");
    setenteredPassword("");
  };

  const usernameChangedHandler = (event) => {
    setenteredUsername(event.target.value);
  };

  const passwordChangedHandler = (event) => {
    setenteredPassword(event.target.value);
  };

  const passwordConfirmedChangedHandler = (event) => {
    setenteredenteredConfirmedPassword(event.target.value);
  };

  return (
    <FormControl>
      <VStack align="left" spacing="30px">
        <Box>
          <Input
            placeholder="Username"
            size="md"
            onChange={usernameChangedHandler}
            value={enteredUsername}
          />
        </Box>
        <Box>
          <Input
            placeholder="Password"
            size="md"
            onChange={passwordChangedHandler}
            value={enteredPassword}
          />
        </Box>
        <Box>
          <Input
            placeholder="Confirm Password"
            size="md"
            onChange={passwordConfirmedChangedHandler}
            value={enteredConfirmedPassword}
          />
        </Box>
        <Button colorScheme="orange" onClick={loginHandler}>
          Sign Up
        </Button>
      </VStack>
    </FormControl>
  );
};

export default LoginForm;