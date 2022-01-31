import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import {
  Box,
  Heading,
  Text,
  HStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const HikeItem = (props) => {
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
    <HStack spacing={8} mt={8}>
      <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
        <HStack justifyContent="space-between">
          <Box>
            <Heading fontSize="xl">{hike.hikeName}</Heading>
            <Text mt={4}>Length (miles): {hike.hikeLength}</Text>
            <Text mt={4}>Rating: {hike.hikeRating}</Text>
          </Box>
          <Button
            colorScheme="red"
            leftIcon={<MdDeleteOutline />}
            onClick={onOpenReportModal}
          >
            Delete
          </Button>
          <Modal isOpen={isOpenDeleteConfirmModal} onClose={onCloseReportModal}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Delete the hike?</ModalHeader>
              <ModalCloseButton />
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onCloseReportModal}>
                  Cancel
                </Button>
                <Button colorScheme="red" onClick={confirmDeleteHandler}>
                  Delete
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </HStack>
      </Box>
    </HStack>
  );
};

export default HikeItem;