import { React, useState, useEffect } from "react";
import { ChakraProvider, Container, Box } from "@chakra-ui/react";

import Navbar from "../../ui/Navbar";
import AddHike from "../components/AddHike";
import HikesList from "../components/HikesList";
import { getAllHikes, addHike, deleteHike } from "../HikeService";
import { useHttpClient } from "../../shared/hooks/http-hook";

const Hikes = (props) => {
  const [hikes, setHikes] = useState([]);
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

  const addHikeHandler = async (hikeName, hikeLength, hikeRating) => {
    try {
      const res = await addHike(hikeName, hikeLength, hikeRating);
      setHikes([res.data, ...hikes]);
      setIsLoaded(true);
    } catch (error) {
      setError(setError);
    }
  };

  const hikeDeletedHandler = async (deletedHike) => {
    try {
      const res = await deleteHike(deletedHike);
      if (res.success) {
        setHikes((prevHikes) =>
          prevHikes.filter((hike) => hike._id !== deletedHike._id)
        );
        setIsLoaded(true);
      }
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
          <AddHike onAddHike={addHikeHandler} />
          <HikesList hikes={hikes} onDeleteHike={hikeDeletedHandler} />
        </Container>
      </ChakraProvider>
    );
  }
};

export default Hikes;