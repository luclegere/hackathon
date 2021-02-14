import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Box,
  Heading,
  IconButton,
  Text,
  Progress,
  Container,
  Spacer,
  Button,
  Grid,
  NumberInput,
  NumberInputField,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputStepper,
  Input,
  Stack,
  Checkbox,
} from "@chakra-ui/react";
import {
  DeleteIcon,
  EditIcon,
  StarIcon,
  CheckIcon,
  CloseIcon,
  AddIcon,
} from "@chakra-ui/icons";

import Data from "../Data";

function Project({
  title,
  desc,
  progress,
  priority,
  index,
  setPreview,
  setPreviewTag,
  dataArray,
  setDataArray,
  ...rest
}) {
  let [prev, setPrev] = React.useState(true);

  const handleClick = () => {
    setPreviewTag(
      <Preview
        index={index}
        dataArray={dataArray}
        setDataArray={setDataArray}
        setPreviewTag={setPreviewTag}
      />
    );
    setPreview(prev);
  };

  return (
    <>
      <Box onClick={handleClick} p={5} shadow="md" borderWidth="1px" {...rest}>
        <Heading fontSize="xl">
          {title} <Spacer />{" "}
        </Heading>

        <Text mt={4}>{desc}</Text>
        <br />
        <Progress colorScheme={"green"} height="32px" value={progress} />
      </Box>{" "}
    </>
  );
}

export default () => {
  let [dataArray, setDataArray] = React.useState(Data);
  let [preview, setPreview] = React.useState(false);
  let [previewTag, setPreviewTag] = React.useState(null);
  return (
    <>
      {" "}
      <AddButton dataArray={dataArray} setDataArray={setDataArray} />
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        {" "}
        <Container>
          {" "}
          {dataArray.map((item, i) => {
            return (
              <Project
                title={dataArray[i].title}
                desc={dataArray[i].desc}
                progress={dataArray[i].progress}
                priority={dataArray[i].priority}
                index={i}
                setPreview={setPreview}
                setPreviewTag={setPreviewTag}
                dataArray={dataArray}
                setDataArray={setDataArray}
              />
            );
          })}
        </Container>
        <Container> {preview ? previewTag : null} </Container>
      </Grid>
    </>
  );
};

function Preview({ index, dataArray, setDataArray, setPreviewTag }) {
  const [isEditable, setIsEditable] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();
  return (
    <Container>
      <Box>
        {isEditable ? (
          <>
            {" "}
            <IconButton
              aria-label="Search database"
              icon={<CheckIcon />}
              m={2}
              onClick={() => {
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
                    const filteredPeople = dataArray.filter(
                      (item) => item.title !== dataArray[index].title
                    );
                    setDataArray(filteredPeople);
                    setPreviewTag(null);
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
        {isEditable ? (
          <Input
            variant="outline"
            defaultValue={dataArray[index].title}
            onChange={(e) => {
              let arr = [...dataArray];
              arr[index].title = e.target.value;
              setDataArray(arr);
            }}
          />
        ) : (
          <Heading as="h2" size="xl">
            {dataArray[index].title}
          </Heading>
        )}{" "}
        {isEditable ? (
          <Input
            variant="outline"
            defaultValue={dataArray[index].desc}
            onChange={(e) => {
              let arr = [...dataArray];
              arr[index].desc = e.target.value;
              setDataArray(arr);
            }}
          />
        ) : (
          <Text> {dataArray[index].desc}</Text>
        )}{" "}
      </Box>
      <Box>
        {" "}
        <Progress
          colorScheme={"green"}
          height="32px"
          value={dataArray[index].progress}
        />
      </Box>
      {Array(5)
        .fill("")
        .map((_, i) => (
          <StarIcon
            key={i}
            color={i < dataArray[index].priority ? "teal.500" : "gray.300"}
          />
        ))}
      {isEditable ? (
        <NumberInput
          defaultValue={dataArray[index].priority}
          min={0}
          max={5}
          onChange={(e) => {
            let arr = [...dataArray];
            arr[index].priority = e;
            setDataArray(arr);
          }}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      ) : null}

      <Heading as="h3" size="lg">
        To-do List
      </Heading>

      <Stack spacing={10} direction="column">
        {dataArray[index].tasks.map((item, i) => {
          return (
            <Checkbox
              isDisabled={!isEditable}
              key={i}
              colorScheme="red"
              defaultChecked={false}
              onChange={(e) => {
                let arr = [...dataArray];
                arr[index].tasks[i].taskStatus = e.target.checked;

                setDataArray(arr);
                console.log(dataArray);
              }}
            >
              {item.task}
            </Checkbox>
          );
        })}
        <AddTask
          isDisabled={!isEditable}
          dataArray={dataArray}
          setDataArray={setDataArray}
          index={index}
        />
      </Stack>
    </Container>
  );
}
function AddButton({ setDataArray, dataArray }) {
  return (
    <>
      {" "}
      <IconButton
        m={2}
        p={2}
        aria-label="Search database"
        icon={<AddIcon />}
        onClick={() => {
          setDataArray([
            ...dataArray,
            {
              title: "Sample Exercise",
              desc: "Sample description goes here",
              progress: 0,
              priority: 3,
              tasks: [
                { task: "Study chapter 1", taskStatus: false },
                { task: "Study chapter 0", taskStatus: false },
                { task: "Study chapter 9191", taskStatus: false },
                { task: "Study chapter 121212", taskStatus: false },
              ],
            },
          ]);
        }}
      />
    </>
  );
}
function AddTask({ setDataArray, dataArray, isDisabled, index }) {
  return (
    <>
      {" "}
      <IconButton
        isDisabled={isDisabled}
        m={2}
        p={2}
        aria-label="Search database"
        icon={<AddIcon />}
        onClick={() => {
          let arr = [...dataArray];
          arr[index].tasks = [
            ...arr[index].tasks,
            { task: "New Tasks", taskStatus: false },
          ];
          setDataArray(arr);
          console.log(dataArray);
        }}
      />
    </>
  );
}
