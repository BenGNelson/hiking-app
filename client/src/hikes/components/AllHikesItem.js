import React from "react";
import { Box, Heading, Spacer, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const AllHikesItem = (props) => {
  const hike = props.hike;

  return (
    <Box
      p={5}
      w="100%"
      shadow="md"
      borderWidth="1px"
      flex="1"
      borderRadius="md"
      h="150"
    >
      <Box display="flex" alignItems="space-between">
        <Heading fontSize="xl" mb={8}>
          {hike.hikeName}
        </Heading>
        <Spacer />
        <Text> {hike.hikeLength} miles</Text>
      </Box>
      <Box display="flex" mb={2}>
        <Text as="em">hiked by </Text>
      </Box>
      <Box display="flex" alignItems="space-between">
        <Heading fontSize="xl">{hike.hiker} </Heading>
        <Spacer />
        {Array(5)
          .fill("")
          .map((_, i) => (
            <StarIcon
              key={i}
              color={i < hike.hikeRating ? "purple.500" : "gray.300"}
            />
          ))}
      </Box>
    </Box>
  );
};

export default AllHikesItem;
