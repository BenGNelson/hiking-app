import React, { useState } from "react";
import {
  FormControl,
  Input,
  Button,
  FormLabel,
  VStack,
  Box,
} from "@chakra-ui/react";

import { useHttpClient } from "../../shared/hooks/http-hook";

const AddHike = (props) => {
  const [enteredHikeName, setenteredHikeName] = useState("");
  const [enteredHikeLength, setenteredHikeLength] = useState("");
  const [enteredHikeRating, setenteredHikeRating] = useState("");
  const { sendRequest } = useHttpClient();

  const apiBaseRoute = "http://localhost:5000";

  const addUserHandler = async (event) => {
    event.preventDefault();
    try {
      const res = await sendRequest(
        `${apiBaseRoute}/api/v1/hikes`,
        "POST",
        JSON.stringify({
          hikeName: enteredHikeName,
          hikeLength: enteredHikeLength,
          hikeRating: enteredHikeRating,
        }),
        { "Content-Type": "application/json" }
      );

      setenteredHikeName("");
      setenteredHikeLength("");
      setenteredHikeRating("");
      props.onAddHike(res.data);
    } catch (err) {}
  };

  const hikeNameChangedHandler = (event) => {
    setenteredHikeName(event.target.value);
  };

  const hikeLengthChangedHandler = (event) => {
    setenteredHikeLength(event.target.value);
  };

  const hikeRatingChangedHandler = (event) => {
    setenteredHikeRating(event.target.value);
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
          <Input
            placeholder="6"
            size="md"
            onChange={hikeLengthChangedHandler}
            value={enteredHikeLength}
          />
        </Box>
        <Box>
          <FormLabel htmlFor="hike rating">Hike Rating (out of 5)</FormLabel>
          <Input
            placeholder="4"
            size="md"
            onChange={hikeRatingChangedHandler}
            value={enteredHikeRating}
          />
        </Box>
        <Button colorScheme="teal" onClick={addUserHandler}>
          Submit
        </Button>
      </VStack>
    </FormControl>
  );
};

export default AddHike;
