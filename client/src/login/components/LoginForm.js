import React, { useState } from "react";
import {
  FormControl,
  Input,
  Button,
  VStack,
  Box,
  FormLabel,
  InputGroup,
  InputRightElement,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

const LoginForm = (props) => {
  const [enteredUsername, setenteredUsername] = useState("");
  const [enteredPassword, setenteredPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const loginHandler = async (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0) {
      setErrorMsg("Please enter a username");
      return;
    }

    if (enteredPassword.trim().length === 0) {
      setErrorMsg("Please enter a password");
      return;
    }

    setenteredUsername("");
    setenteredPassword("");
    setErrorMsg("");
  };

  const usernameChangedHandler = (event) => {
    setenteredUsername(event.target.value);
  };

  const passwordChangedHandler = (event) => {
    setenteredPassword(event.target.value);
  };

  const handleShowPasswordClick = () => setShowPassword(!showPassword);

  return (
    <FormControl>
      <VStack align="left" spacing="30px">
        <Box>
          <FormLabel htmlFor="login" mb={2}>
            Login
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
          <InputGroup>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              size="md"
              onChange={passwordChangedHandler}
              value={enteredPassword}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleShowPasswordClick}>
                {showPassword ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
        <Button colorScheme="teal" onClick={loginHandler}>
          Login
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