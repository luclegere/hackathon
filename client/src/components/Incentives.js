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
  Input,
} from "@chakra-ui/react";
import {
  DeleteIcon,
  AddIcon,
  EditIcon,
  CheckIcon,
  CloseIcon,
} from "@chakra-ui/icons";

import { incentive } from "../Data"; // data

export default () => {
  let [incentives, setIncentives] = React.useState(incentive); // data in state
  return (
    <Box>
      <SimpleGrid columns={2} spacing={10}>
        <Box>
          <Stack spacing={2}>
            {incentives.map((item, i) => (
              <IncentiveItem
                incentives={incentives}
                index={i}
                setIncentives={setIncentives}
              />
            ))}
          </Stack>
          <AddButton incentives={incentives} setIncentives={setIncentives} />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

function IncentiveItem({ incentives, setIncentives, index, ...rest }) {
  const [isEditable, setIsEditable] = React.useState(false);
  const [changedIncentives, setChangedIncentives] = React.useState(incentives);
  const handleEdit = () => {
    setIncentives(changedIncentives);
  };
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();
  return (
    <Box p={5} shadow="md" borderWidth="1px" {...rest}>
      <Heading fontSize="xl">
        {isEditable ? (
          <Input
            defaultValue={incentives[index].name}
            onChange={(e) => {
              let arr = [...changedIncentives];
              changedIncentives[index].name = e.target.value;
              setChangedIncentives(arr);
            }}
          />
        ) : (
          incentives[index].name
        )}{" "}
        {isEditable ? (
          <>
            {" "}
            <IconButton
              type="submit"
              aria-label="Search database"
              icon={<CheckIcon />}
              m={2}
              onClick={() => {
                handleEdit();
                setIsEditable(false);
              }}
            />
            <IconButton
              aria-label="Search database"
              icon={<CloseIcon />}
              m={2}
              onClick={() => setIsEditable(false)}
            />{" "}
          </>
        ) : (
          <IconButton
            aria-label="Search database"
            icon={<EditIcon />}
            m={2}
            onClick={() => setIsEditable(true)}
          />
        )}
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
                      (item) => item.name !== incentives[index].name
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
      {isEditable ? (
        <Input
          defaultValue={incentives[index].desc}
          onChange={(e) => {
            let arr = [...changedIncentives];
            changedIncentives[index].desc = e.target.value;
            setChangedIncentives(arr);
          }}
        />
      ) : (
        <Text mt={4}>{incentives[index].desc}</Text>
      )}{" "}
      <br />
    </Box>
  );
}

function AddButton(props) {
  return (
    <>
      {" "}
      <IconButton
        m={2}
        p={2}
        aria-label="Search database"
        icon={<AddIcon />}
        onClick={() => {
          props.setIncentives([
            ...props.incentives,
            { name: "Sample Incentive", desc: "Sample escription" },
          ]);
        }}
      />
    </>
  );
}
