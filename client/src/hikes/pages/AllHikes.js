import { React, useState, useEffect } from "react";
import { Container, Box } from "@chakra-ui/react";

import HikesList from "../components/AllHikesList";
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
      <Container maxW="container.md" py={5}>
        <Box>Loading...</Box>
      </Container>
    );
  } else {
    return (
      <Container maxW="container.sm" py={5}>
        <HikesList hikes={allHikes} />
      </Container>
    );
  }
};

export default Hikes;