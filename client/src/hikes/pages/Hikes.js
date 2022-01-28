import { React, useState, useEffect } from "react";
import { ChakraProvider, Container, Box } from "@chakra-ui/react";

import Navbar from "../../ui/Navbar";
import AddHike from "../components/AddHike";
import HikesList from "../components/HikesList";
import { useHttpClient } from "../../shared/hooks/http-hook";

const Hikes = (props) => {
  const [hikes, setHikes] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const { sendRequest } = useHttpClient();

  const apiBaseRoute = "http://localhost:5000";

  useEffect(() => {
    const fetchHikes = async () => {
      try {
        const res = await sendRequest(`${apiBaseRoute}/api/v1/hikes`);

        setHikes(res.data);
        setIsLoaded(true);
      } catch (err) {}
    };
    fetchHikes();
  }, [isLoaded, sendRequest]);

  if (error) {
    return <Box>Error: {error.message}</Box>;
  } else if (!isLoaded) {
    return (
      <ChakraProvider>
        <Container maxW="container.md" py={5}>
          <Navbar />
          <AddHike />
          <Box>Loading...</Box>
        </Container>
      </ChakraProvider>
    );
  } else {
    return (
      <ChakraProvider>
        <Container maxW="container.xl" py={4}>
          <Navbar />
        </Container>
        <Container maxW="container.md" py={5}>
          <AddHike />
          <HikesList hikes={hikes} />
        </Container>
      </ChakraProvider>
    );
  }
};

export default Hikes;