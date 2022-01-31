import { Box } from "@chakra-ui/react";

import UserHikeItem from "./UserHikeItem";

const HikesList = (props) => {
  const hikes = props.hikes;
  return (
    <Box>
      {hikes.map((hike, index) => (
        <UserHikeItem key={hike._id} hike={hike} onDelete={props.onDeleteHike} />
      ))}
    </Box>
  );
};

export default HikesList;