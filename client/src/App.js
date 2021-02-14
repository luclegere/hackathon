import React, { Component } from 'react';
import logo from './logo.svg';
import config from "./firebaseConfig";
import 'firebase/auth';
import firebase from 'firebase/app';
import './App.css';
import withFirebaseAuth from 'react-with-firebase-auth'
import 'firebase/firestore';


var tasks = [];
var firebaseApp;






if (!firebase.apps.length) {
   firebaseApp = firebase.initializeApp(config);
}
else {
   firebaseApp = firebase.app(); // if already initialized, use that one
}
const firestore = firebase.firestore();
const firebaseAppAuth = firebaseApp.auth();
const usersDB = firestore.collection('users');

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

class App extends React.Component {
  
  state = {
		title: "",
	};

  updateInput = event => {
    this.setState({ [event.target.name]: event.target.value })
  }


//add a task to the database
addTask = event => {
	event.preventDefault()
	firestore.collection("tasks").add({
		title: this.state.title
	})
	this.setState({ title: ""})
  console.log('added');
}

//get all tasks from database and print to console
getTasks = event => {
  event.preventDefault();
  firestore.collection("tasks").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.data().title);
    })
  })
}

//Delete task from database by title
deleteTask = event => {
  event.preventDefault();
  var tasktodelete = firestore.collection('tasks').where('title','==',this.state.title);
  tasktodelete.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      doc.ref.delete();
    });
  });
}

render() {
  const { title } = this.state
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
              <p> Create a new task!</p>
              <form onSubmit={this.addTask}>
                <input
                    type='text'
                    placeholder='Title'
                    name='title'
                    onChange={this.updateInput}
                    value={title}
                />
                <br/>
                <button type='submit'>Add Task</button>
              </form>
              <form onSubmit={this.deleteTask}>
                <button type='submit'>Delete Task</button>
              </form>
              <form onSubmit={this.getTasks}>
                <button type='submit'> Get Tasks from database </button>
              </form>
      </div>
  )
  }
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);  
