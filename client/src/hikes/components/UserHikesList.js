import { Grid, GridItem } from "@chakra-ui/react";

import UserHikeItem from "./UserHikeItem";

const UserHikesList = (props) => {
  const hikes = props.hikes;
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      {hikes.map((hike, index) => (
        <GridItem w="100%" key={hike._id}>
          <UserHikeItem hike={hike} onDelete={props.onDeleteHike} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default UserHikesList;
