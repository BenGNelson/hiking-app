import { React, useState, useEffect } from "react";
import { Container, Box, Stack } from "@chakra-ui/react";

import HikesList from "../components/AllHikesList";
import UserHikeSkeleton from "../../shared/UserHikeSkeleton";
import { getAllHikes } from "../../services/HikeService";

const Hikes = (props) => {
  const [allHikes, setHikes] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getHikes();
  }, [isLoaded]);

  const getHikes = async () => {
    try {
      const res = await getAllHikes();
      setHikes(res.data);
      setIsLoaded(true);
    } catch (error) {
      setError(setError);
    }
  };

  if (error) {
    return <Box>Error: {error.message}</Box>;
  } else if (!isLoaded) {
    return (
      <Container maxW="container.lg" py={5}>
        <Stack spacing={8}>
          <UserHikeSkeleton />
          <UserHikeSkeleton />
          <UserHikeSkeleton />
        </Stack>
      </Container>
    );
  } else {
    return (
      <Container maxW="container.lg" py={5}>
        <HikesList hikes={allHikes} />
      </Container>
    );
  }
};

export default Hikes;
