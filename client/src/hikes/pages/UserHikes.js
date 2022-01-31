import { React, useState, useEffect } from "react";
import { ChakraProvider, Container, Box } from "@chakra-ui/react";

import AddHike from "../components/AddHike";
import HikesList from "../components/UserHikesList";
import { getAllHikes, addHike, deleteHike } from "../../services/HikeService";

const Hikes = (props) => {
  const [userHikes, setHikes] = useState([]);
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

  const addHikeHandler = async (hikeName, hikeLength, hikeRating) => {
    try {
      const res = await addHike(hikeName, hikeLength, hikeRating);
      setHikes([res.data, ...userHikes]);
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
          <AddHike />
          <Box>Loading...</Box>
        </Container>
      </ChakraProvider>
    );
  } else {
    return (
      <ChakraProvider>
        <Container maxW="container.md" py={5}>
          <AddHike onAddHike={addHikeHandler} />
          <HikesList hikes={userHikes} onDeleteHike={hikeDeletedHandler} />
        </Container>
      </ChakraProvider>
    );
  }
};

export default Hikes;