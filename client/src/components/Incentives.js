import React, { useEffect } from "react";
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

//import firestore from './Login';
const firestore = firebase.firestore();

var incentivelist = [];

export default () => {


  let [incentives, setIncentives] = React.useState(incentivelist); // data in state
  incentivelist = [];

  const fetchIncentives = async() => {
    const response = firestore.collection('projects');
    const data = await response.get();
    data.docs.forEach(item => {
        incentivelist.push({
            title: item.data().title,
            desc: item.data().desc,
            priority: item.data().priority,
            progress: item.data().progress,
            uid: item.data().uid
          })
        })
    }
    useEffect(() => {
        fetchIncentives();
    }, []);



  return (
    <SimpleGrid columns={2} spacing={10}>
      <Box></Box>
      <Box>
        <Stack spacing={2}>
          {incentivelist.map((item) => (
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



class AddButton extends React.Component {
    
    state = {
        name:"",
        desc:"",
        uid:""
    };

    updateInput = event => {
        this.setState({ [event.target.name]: event.target.value} )
    }

    addIncentive = event => {
        event.preventDefault()
        firestore.collection("incentives").add({
            name: this.state.name,
            desc: this.state.desc,
            uid: this.state.uid
            
        })
        this.setState({ name: "", desc: ""})
        console.log('added');
    }

    //get all tasks from database (from all users) and print to console
    getIncentives = event => {
        event.preventDefault();
        incentivelist = [];
        firestore.collection("incentives").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                incentivelist.push({name: doc.data().name, desc: doc.data().desc})
            //   console.log(doc.data().title + doc.data().uid);
            });
        });
        console.log(incentivelist);
    }

    render() {

        if (firebase.auth().currentUser) {
            let id = firebase.auth().currentUser.uid;
            this.state.uid = id;
        }
        const {
            name, desc, uid
        } = this.state;
        return (
            <div>
            <form onSubmit={this.addIncentive}>
              <input
                type='text'
                placeholder='name of incentive'
                name='name'
                onChange={this.updateInput}
                value={name}
               />
              <input
                type='text'
                placeholder='incentive description'
                name='desc'
                onChange={this.updateInput}
                value={desc}
               />
              
              {" "}
              <IconButton m={2} p={2} arias-label="Search database" icon={<AddIcon />} type="submit"/>
            </form>
            </div>
          );
        }
    
}
  