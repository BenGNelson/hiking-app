import React, { useState } from "react";
import {
  FormControl,
  Input,
  Button,
  FormLabel,
  VStack,
  Box,
  Alert,
  AlertIcon,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useToast,
} from "@chakra-ui/react";

const AddHike = (props) => {
  const [enteredHikeName, setenteredHikeName] = useState("");
  const [enteredHikeLength, setenteredHikeLength] = useState("");
  const [enteredHikeRating, setenteredHikeRating] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const toast = useToast();

  const addUserHandler = async (event) => {
    event.preventDefault();
    if (
      enteredHikeName.trim().length === 0 ||
      enteredHikeLength.trim().length === 0 ||
      enteredHikeRating.trim().length === 0
    ) {
      setErrorMsg("Please fill out all fields");
      return;
    }

    if (enteredHikeLength <= 0 || enteredHikeLength > 99) {
      setErrorMsg("Hike length must be between 0 and 99");
      return;
    }

    if (enteredHikeRating <= 0 || enteredHikeRating > 5) {
      setErrorMsg("Hike rating must be between 1 and 5");
      return;
    }

    try {
      props.onAddHike(enteredHikeName, enteredHikeLength, enteredHikeRating);
    } catch (error) {
      console.log(error);
    }

    toast({
      position: "bottom",
      title: "Hike Added!",
      status: "success",
      duration: 2000,
      isClosable: true,
    });

    setenteredHikeName("");
    setenteredHikeLength("");
    setenteredHikeRating("");
    setErrorMsg("");
  };

  const hikeNameChangedHandler = (event) => {
    setenteredHikeName(event.target.value);
  };

  return (
    <FormControl>
      <VStack align="left" spacing="30px">
        <Box>
          <FormLabel htmlFor="hike name" m={0}>
            Name of Hike
          </FormLabel>
          <Input
            placeholder="Hike to Timbuktu"
            size="md"
            onChange={hikeNameChangedHandler}
            value={enteredHikeName}
          />
        </Box>
        <Box>
          <FormLabel htmlFor="hike length in mi" m={0}>
            Hike Length (miles)
          </FormLabel>
          <NumberInput
            onChange={(valueString) => setenteredHikeLength(valueString)}
            value={enteredHikeLength}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Box>
        <Box>
          <FormLabel htmlFor="hike rating">Hike Rating (out of 5)</FormLabel>
          <NumberInput
            onChange={(value) => setenteredHikeRating(value)}
            value={enteredHikeRating}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Box>
        <Button colorScheme="purple" onClick={addUserHandler}>
          Submit
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

export default AddHike;
