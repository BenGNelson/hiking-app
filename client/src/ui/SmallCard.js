import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const SmallCard = (props) => {
  return (
    <Box p={5} shadow="md" borderWidth="1px">
      <Heading fontSize="xl">{props.hikeName}</Heading>
      <Text mt={4}>{props.hikeLength}</Text>
      <Text mt={4}>{props.hikeRating}</Text>
    </Box>
  );
};

export default SmallCard;