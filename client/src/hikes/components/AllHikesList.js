import { Grid, GridItem } from "@chakra-ui/react";

import AllHikesItem from "./AllHikesItem";

const AllHikesList = (props) => {
  const hikes = props.hikes;
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {hikes.map((hike, index) => (
        <GridItem w="100%">
          <AllHikesItem key={hike._id} hike={hike} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default AllHikesList;
