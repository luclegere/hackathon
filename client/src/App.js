/*import React, { Component } from 'react';
import logo from './logo.svg';
import config from "./firebaseConfig";
import 'firebase/auth';
import firebase from 'firebase/app';
import './App.css';
import withFirebaseAuth from 'react-with-firebase-auth'
import 'firebase/firestore';

//title 
//desc
//progress
//priority
//var firebaseApp;

var firebaseApp;
if (!firebase.apps.length) {
   firebaseApp = firebase.initializeApp(config);
}
else {
   firebaseApp = firebase.app(); 
}
//const Auth = useContext(AuthContext);
const firestore = firebase.firestore();
const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

class App extends React.Component {
  
  state = {
    uid: "",
		title: "",
    desc: "",
    priority: "",
    progress: ""
	};

  updateInput = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

//add a task to the database
addTask = event => {
	event.preventDefault()
	firestore.collection("tasks").add({
		title: this.state.title,
    desc: this.state.desc,
    priority: this.state.priority,
    uid: this.state.uid
	})
	this.setState({ title: "", desc: "", priority: ""})
  console.log('added');
}

//get all tasks from database (from all users) and print to console
getTasks = event => {
  event.preventDefault();
  firestore.collection("tasks").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.data().title + doc.data().uid);
    });
  });
}

//Delete task from database by title
deleteTask = event => {
  event.preventDefault();
  var tasktodelete = firestore.collection('tasks').where('title','==',this.state.title).where('uid', '==', this.state.uid);
  tasktodelete.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      doc.ref.delete();
    });
  });
}

//add a task to the database
addProject = event => {
	event.preventDefault()
	firestore.collection("projects").add({
		title: this.state.title,
    desc: this.state.desc,
    priority: this.state.priority,
    uid: this.state.uid
	})
	this.setState({ title: "", desc: "", priority: ""})
  console.log('added');
}

//get all tasks from database (from all users) and print to console
getProjects = event => {
  event.preventDefault();
  firestore.collection("projects").get().where('uid', '==', this.state.uid).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.data().title + doc.data().uid);
    })
  })
}

//Delete project from database by title
/*deleteProject = event => {
  event.preventDefault();
  var tasktodelete = firestore.collection('projects').where('title','==',this.state.title).where('uid', '==', this.state.uid);
  tasktodelete.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      doc.ref.delete();
    });
  });
}


deleteProject = (name) => (e) => {
  e.preventDefault();
  var tasktodelete = firestore.collection('projects').where('title', '==', name).where('uid', '==', this.state.uid);
  tasktodelete.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      doc.ref.delete();
    });
  });
}

render() {
  if (firebase.auth().currentUser) {
    let id = firebase.auth().currentUser.uid;
    this.state.uid = id;
  }
  const { title, desc, priority } = this.state
  
  const {
    user,
    signOut,
    signInWithGoogle,
  } = this.props;
  return (
    <div className='App'>
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {
            user
              ? <p>Hello, {user.displayName}</p>
              : <p>Please sign in.</p>
          }
          
          {
            user
              ? <button onClick={signOut}>Sign out</button>
              : <button onClick={signInWithGoogle}>Sign in with Google</button>
          }
        </header>
        <div className='createTask'>
              <p> Create a new task!</p>
              <form onSubmit={this.addTask}>
                <input
                    type='text'
                    placeholder='title'
                    name='title'
                    onChange={this.updateInput}
                    value={title}
                />
                <input
                  type='text'
                  placeholder='description'
                  name='desc'
                  onChange={this.updateInput}
                  value={desc}
                />
                <input 
                  type='text'
                  placeholder='priority'
                  name='priority'
                  onChange={this.updateInput}
                  value={priority}
                />
                <br/>
                <button type='submit'>Add Task</button>
              </form>
              <form onSubmit={this.deleteTask}>
                <button type='submit'>Delete Task</button>
              </form>
              <form onSubmit={this.getTasks}>
                <button type='submit'>Get Tasks from database</button>
              </form>
        </div>
        <div className='createProject'>
              <p>Create a New Project</p>
              <form onSubmit={this.addProject}>
                <input
                    type='text'
                    placeholder='title'
                    name='title'
                    onChange={this.updateInput}
                    value={title}
                />
                <input
                  type='text'
                  placeholder='description'
                  name='desc'
                  onChange={this.updateInput}
                  value={desc}
                />
                <input 
                  type='text'
                  placeholder='priority'
                  name='priority'
                  onChange={this.updateInput}
                  value={priority}
                />
                <br/>
                <button type='submit'>Add Project</button>
              </form>
              <form onSubmit={this.addProject}>
                <button type='submit'>Delete Project</button>
              </form>

              <button onClick={ this.deleteProject("pog") }>press me</button>
              <form onSubmit={this.getProjects}>
                <button type='submit'>Get Projects from Database</button>
              </form>
        </div>
      </div>
  )
  }
  
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);  */

import { ChakraProvider, SimpleGrid, Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Timeline from "./components/Timeline";
import Incentives from "./components/Incentives";
import Projects from "./components/Projects";
import config from "./firebaseConfig";
import 'firebase/auth';
import firebase from 'firebase/app';
import './App.css';
import 'firebase/firestore';
import Signup from "./components/Signup";
import Login from "./components/Login";
import React from 'react';
import withFirebaseAuth from './components/Login';



export function Main() {
  return (
    <>
      {" "}
      <Router>
        <NavBar />
        <Switch>
          <Route path="/Login" exact>
            <Login />
          </Route>
          <Route path="/Signup" exact>
            <Signup />
          </Route>
          <Route path="/" exact>
            <SimpleGrid columns={2} spacing={10}>
              <Box>
                {" "}
                <Timeline />
              </Box>
              <Box> </Box>
            </SimpleGrid>
          </Route>
          <Route path="/incentives" exact>
            <Incentives />
          </Route>
          <Route path="/projects" exact>
            <Projects />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default function App() {

  
  return (
    <ChakraProvider>
      <Main />
    </ChakraProvider>
  );
}