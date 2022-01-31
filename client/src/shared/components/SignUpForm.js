import React, { useState } from "react";
import {
  FormControl,
  Input,
  Button,
  VStack,
  Box,
  FormLabel,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

const LoginForm = (props) => {
  const [enteredUsername, setenteredUsername] = useState("");
  const [enteredPassword, setenteredPassword] = useState("");
  const [enteredConfirmedPassword, setEnteredenteredConfirmedPassword] =
    useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const signupHandler = async (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0) {
      setErrorMsg("Please enter a username");
      return;
    }

    if (enteredPassword.trim().length === 0) {
      setErrorMsg("Please enter a password");
      return;
    }

    if (enteredConfirmedPassword.trim().length === 0) {
      setErrorMsg("Please confirm your password");
      return;
    }

     try {
      props.onSignup(enteredUsername, enteredPassword);
    } catch (error) {
      console.log(error);
    }

    // setenteredUsername("");
    // setenteredPassword("");
    // setEnteredenteredConfirmedPassword("");
    // setErrorMsg("");
  };

  const usernameChangedHandler = (event) => {
    setenteredUsername(event.target.value);
  };

  const passwordChangedHandler = (event) => {
    setenteredPassword(event.target.value);
  };

  const passwordConfirmedChangedHandler = (event) => {
    setEnteredenteredConfirmedPassword(event.target.value);
  };

  return (
    <FormControl>
      <VStack align="left" spacing="30px">
        <Box>
          <FormLabel htmlFor="signup" mb={2}>
            Sign Up
          </FormLabel>
          <Input
            id="username"
            type="text"
            placeholder="Username"
            size="md"
            onChange={usernameChangedHandler}
            value={enteredUsername}
          />
        </Box>
        <Box>
          <Input
            id="password"
            type="password"
            placeholder="Password"
            size="md"
            onChange={passwordChangedHandler}
            value={enteredPassword}
          />
        </Box>
        <Box>
          <Input
            id="confirmedPassword"
            type="password"
            placeholder="Confirm Password"
            size="md"
            onChange={passwordConfirmedChangedHandler}
            value={enteredConfirmedPassword}
          />
        </Box>
        <Button colorScheme="orange" onClick={signupHandler}>
          Sign Up
        </Button>
        {errorMsg && (
          <Alert status="error">
            <AlertIcon />
            {errorMsg}
          </Alert>
        )}
      </VStack>
    </FormControl>
  );
};

export default LoginForm;