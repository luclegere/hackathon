import React from "react";
import {
  SimpleGrid,
  Box,
  Progress,
  Stack,
  Heading,
  Text,
  IconButton,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { DeleteIcon, AddIcon, EditIcon } from "@chakra-ui/icons";

import { incentive } from "../Data"; // data

export default () => {
  let [incentives, setIncentives] = React.useState(incentive); // data in state
  return (
    <SimpleGrid columns={2} spacing={10}>
      <Box></Box>
      <Box>
        <Stack spacing={2}>
          {incentives.map((item) => (
            <IncentiveItem
              title={item.name}
              desc={item.desc}
              incentives={incentives}
              setIncentives={setIncentives}
            />
          ))}
        </Stack>
        <AddButton />
      </Box>
    </SimpleGrid>
  );
};

function IncentiveItem({ title, desc, incentives, setIncentives, ...rest }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();
  return (
    <Box p={5} shadow="md" borderWidth="1px" {...rest}>
      <Heading fontSize="xl">
        {title}{" "}
        <IconButton aria-label="Search database" icon={<EditIcon />} m={2} />
        <IconButton
          aria-label="Search database"
          icon={<DeleteIcon />}
          m={2}
          onClick={() => setIsOpen(true)}
        />
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Delete Project
              </AlertDialogHeader>

              <AlertDialogBody>
                Are you sure? You can't undo this action afterwards.
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  colorScheme="red"
                  onClick={() => {
                    const filteredPeople = incentives.filter(
                      (item) => item.name !== title
                    );
                    setIncentives(filteredPeople);
                    onClose();
                  }}
                  ml={3}
                >
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Heading>

      <Text mt={4}>{desc}</Text>
      <br />
      <Progress colorScheme={"green"} height="32px" value={20} />
    </Box>
  );
}

function AddButton() {
  return (
    <>
      {" "}
      <IconButton m={2} p={2} aria-label="Search database" icon={<AddIcon />} />
    </>
  );
}
