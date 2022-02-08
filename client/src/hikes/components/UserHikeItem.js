import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { BsFillPencilFill } from "react-icons/bs";
import {
  Box,
  Heading,
  Text,
  VStack,
  Button,
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Spacer,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const UserHikeItem = (props) => {
  const {
    isOpen: isOpenDeleteConfirmModal,
    onOpen: onOpenReportModal,
    onClose: onCloseReportModal,
  } = useDisclosure();

  const hike = props.hike;

  const confirmDeleteHandler = async (event) => {
    event.preventDefault();
    props.onDelete(hike);
    onCloseReportModal();
  };

  return (
    <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
      <Box display="flex" alignItems="space-between">
        <Box>
          <Heading fontSize="xl">{hike.hikeName}</Heading>
          <Text mt={2}>{hike.hikeLength} miles</Text>
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                mt={4}
                key={i}
                color={i < hike.hikeRating ? "purple.500" : "gray.300"}
              />
            ))}
        </Box>
        <Spacer />
        <VStack>
          <Button
            isFullWidth="true"
            colorScheme="yellow"
            leftIcon={<BsFillPencilFill />}
            onClick={onOpenReportModal}
          >
            Edit
          </Button>
          <Button
            isFullWidth="true"
            colorScheme="red"
            leftIcon={<MdDeleteOutline />}
            onClick={onOpenReportModal}
          >
            Delete
          </Button>
        </VStack>
      </Box>

      <AlertDialog
        isOpen={isOpenDeleteConfirmModal}
        onClose={onCloseReportModal}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Hike
            </AlertDialogHeader>
            <AlertDialogBody>Are you sure?</AlertDialogBody>
            <AlertDialogFooter>
              <Button onClick={onCloseReportModal}>Cancel</Button>
              <Button colorScheme="red" onClick={confirmDeleteHandler} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
};

export default UserHikeItem;
