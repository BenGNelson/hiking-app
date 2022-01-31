import { React, useState, useEffect } from "react";
import { ChakraProvider, Container, Box } from "@chakra-ui/react";

import HikesList from "../components/UserHikesList";
import { getAllHikes } from "../HikeService";
import { useHttpClient } from "../../shared/hooks/http-hook";

const Hikes = (props) => {
  const [allHikes, setHikes] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const { sendRequest } = useHttpClient();

  useEffect(() => {
    getHikes();
  }, [isLoaded, sendRequest]);

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
      <ChakraProvider>
        <Container maxW="container.md" py={5}>
          <Box>Loading...</Box>
        </Container>
      </ChakraProvider>
    );
  } else {
    return (
      <ChakraProvider>
        <Container maxW="container.xl" py={4}>
        </Container>
        <Container maxW="container.md" py={5}>
          <HikesList hikes={allHikes} />
        </Container>
      </ChakraProvider>
    );
  }
};

export default Hikes;