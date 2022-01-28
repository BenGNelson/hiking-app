import { Box } from "@chakra-ui/react";

import HikeItem from "./HikeItem";

const HikesList = (props) => {
  const hikes = props.hikes;
  return (
    <Box>
      {hikes.map((hike, index) => (
        <HikeItem key={hike._id} hike={hike} onDelete={props.onDeleteHike}/>
      ))}
    </Box>
  );
};

export default HikesList;