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
  InputRightElement,
  InputGroup,
  Text,
  HStack,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

import { getUserByName } from "../../services/UserService";

const LoginForm = (props) => {
  const [enteredUsername, setenteredUsername] = useState("");
  const [enteredPassword, setenteredPassword] = useState("");
  const [enteredConfirmedPassword, setEnteredenteredConfirmedPassword] =
    useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isValidUser, setIsValidUser] = useState(false);

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

  const usernameChangedHandler = async (event) => {
    const value = event.target.value;
    setenteredUsername(value);
    try {
      const res = await getUserByName(value);
      if (!res && value.length > 2) {
        setIsValidUser(true);
      } else {
        setIsValidUser(false);
      }
    } catch (error) {
      setIsValidUser(false);
      console.log(error);
    }
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
          <InputGroup>
            <Input
              id="username"
              type="text"
              placeholder="Username"
              size="md"
              onChange={usernameChangedHandler}
              value={enteredUsername}
            />
            <InputRightElement
              children={
                isValidUser ? (
                  <HStack   pr="60px" >
                    <Text align='right' color="green"> Available</Text>
                    <CheckIcon align='right' color="green.500" />
                  </HStack>
                ) : (
                  <HStack pr={20} >
                    <Text align='right' color="red"> Unavailable</Text>
                    <CloseIcon align='right'vel color="red.500" />
                  </HStack>
                )
              }
            />
          </InputGroup>
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