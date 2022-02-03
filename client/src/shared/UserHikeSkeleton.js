import React from "react";
import { Box, Skeleton, Stack } from "@chakra-ui/react";

const UserHikeSkeleton = (props) => {
  return (
    <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
      <Stack>
        <Skeleton height="25px" mb={5} />
        <Skeleton height="20px" mb={3} />
        <Skeleton height="20px" mb={3} />
      </Stack>
    </Box>
  );
};

export default UserHikeSkeleton;
