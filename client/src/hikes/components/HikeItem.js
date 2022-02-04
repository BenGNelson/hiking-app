import React from "react";
import { Box, Heading, Text, HStack, Center } from "@chakra-ui/react";

const HikeItem = (props) => {
  const hike = props.hike;

  return (
    <HStack spacing={8} mb={8}>
      <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
        <Center>
          <HStack justifyContent="space-between">
            <Box>
              <Heading fontSize="xl">Hiker: {hike.hiker}</Heading>
              <Text mt={4}>{hike.hikeName}</Text>
              <Text mt={4}>Length (miles): {hike.hikeLength}</Text>
              <Text mt={4}>Rating: {hike.hikeRating}</Text>
            </Box>
          </HStack>
        </Center>
      </Box>
    </HStack>
  );
};

export default HikeItem;
