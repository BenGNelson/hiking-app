import React from "react";
import { MdDeleteOutline } from 'react-icons/md';
import { Box, Heading, Text, HStack, Button } from "@chakra-ui/react";

import { useHttpClient } from "../../shared/hooks/http-hook";

const HikeItem = (props) => {
  const { sendRequest } = useHttpClient();
  const hike = props.hike;
  const apiBaseRoute = "http://localhost:5000";

  const deleteHandler = async () => {
    try {
      const res = await sendRequest(
        `${apiBaseRoute}/api/v1/hikes/${hike._id}`,
        "DELETE",
        null
      );
      props.onDelete(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <HStack spacing={8} mt={8}>
      <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
        <HStack  justifyContent="space-between">
          <Box>
            <Heading fontSize="xl">{hike.hikeName}</Heading>
            <Text mt={4}>Length (miles): {hike.hikeLength}</Text>
            <Text mt={4}>Rating: {hike.hikeRating}</Text>
          </Box>
          <Button colorScheme="red" leftIcon={<MdDeleteOutline />} onClick={deleteHandler}>
            Delete
          </Button>
        </HStack>
      </Box>
    </HStack>
  );
};

export default HikeItem;
