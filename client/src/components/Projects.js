import React, {useState, useEffect} from "react";
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
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon, StarIcon, AddIcon } from "@chakra-ui/icons";
import Data from "../Data";
import 'firebase/firestore';
import firebase from 'firebase';
import config from "../firebaseConfig";
var firebaseApp;
if (!firebase.apps.length) {
    firebaseApp = firebase.initializeApp(config);
}
else {
    firebaseApp = firebase.app(); 
}
const firestore = firebase.firestore();

var projectlist = [];


var id;
if (firebase.auth().currentUser) {
    var id = firebase.auth().currentUser.uid;
}


function Project({
  title,
  desc,
  progress,
  priority,
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
        title={title}
        desc={desc}
        progress={progress}
        priority={priority}
        dataArray={dataArray}
        setDataArray={setDataArray}
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
  //empty project list
  projectlist = [];

  //load projects from database
  const fetchProjects = async() => {
      const response = firestore.collection('projects');
      const data = await response.get();
      data.docs.forEach(item => {
          projectlist.push({
              title: item.data().title,
              desc: item.data().desc,
              priority: item.data().priority,
              progress: item.data().progress,
              uid: item.data().uid
            })
      })
  }
  useEffect(() => {
      fetchProjects();
  }, []);

  let [preview, setPreview] = React.useState(false);
  let [previewTag, setPreviewTag] = React.useState(null);
  return (
    <>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        {" "}
        <Container>
          {" "}
          {dataArray.map((item) => {
            return (
              <Project
                title={item.title}
                desc={item.desc}
                progress={item.progress}
                priority={item.priority}
                setPreview={setPreview}
                setPreviewTag={setPreviewTag}
                dataArray={dataArray}
                setDataArray={setDataArray}
              />
            );
          })}
          
          <AddButton />

        </Container>
        <Container> {preview ? previewTag : null} </Container>
      </Grid>
    </>
  );
};


class AddButton extends React.Component {
    addProject = (title, desc, priority) => event => {
        event.preventDefault()
        firestore.collection("projects").add({
            title: title,
            desc: desc,
            progress: 0,
            priority: priority,
            uid: id
        })
        
        console.log('added');
    }
    
    render() {
        return (
            <div>
              {" "}
              <IconButton m={2} p={2} aria-label="Search database" icon={<AddIcon/>} onClick={this.addProject('new project', 'this project is epic', 2) } />
            </div>
          );
        }   
}

function Preview({ title, desc, progress, priority, dataArray, setDataArray }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();
  return (
    <Container>
      <Box>
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
                    const filteredPeople = dataArray.filter(
                      (item) => item.title !== title
                    );
                    setDataArray(filteredPeople);
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
        <Heading>{title}</Heading>
        <Text>{desc}</Text>
      </Box>
      <Box>
        {" "}
        <Progress colorScheme={"green"} height="32px" value={progress} />
      </Box>
      {Array(5)
        .fill("")
        .map((_, i) => (
          <StarIcon key={i} color={i < priority ? "teal.500" : "gray.300"} />
        ))}
    </Container>
  );

        
  

}