import { React, useState, useEffect, useContext } from "react";
import { ChakraProvider, Container, Box } from "@chakra-ui/react";

import AddHike from "../components/AddHike";
import HikesList from "../components/UserHikesList";
import { AuthContext } from "../../auth/AuthContext";
import { getUserHikes, addHike, deleteHike } from "../../services/HikeService";

const Hikes = (props) => {
  const [userHikes, setUserHikes] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const auth = useContext(AuthContext);

  useEffect(() => {
    getHikes();
  }, [isLoaded]);

  const getHikes = async () => {
    try {
      console.log(auth);
      const res = await getUserHikes(auth.username);
      setUserHikes(res.data);
      setIsLoaded(true);
    } catch (error) {
      setError(setError);
    }
  };

  const addHikeHandler = async (hikeName, hikeLength, hikeRating) => {
    try {
      const res = await addHike(
        hikeName,
        hikeLength,
        hikeRating,
        auth.username
      );
      setUserHikes([res.data, ...userHikes]);
      setIsLoaded(true);
    } catch (error) {
      setError(setError);
    }
  };

  const hikeDeletedHandler = async (deletedHike) => {
    try {
      const res = await deleteHike(deletedHike);
      if (res.success) {
        setUserHikes((prevHikes) =>
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
      <Container maxW="container.md" py={5}>
        <AddHike />
        <Box>Loading...</Box>
      </Container>
    );
  } else {
    return (
      <Container maxW="container.md" py={5}>
        <AddHike onAddHike={addHikeHandler} />
        <HikesList hikes={userHikes} onDeleteHike={hikeDeletedHandler} />
      </Container>
    );
  }
};

export default Hikes;
