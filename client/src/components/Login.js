import React, {useState, useContext} from "react";
import {AuthContext} from '../App';
import firebase from 'firebase';
import withFirebaseAuth from 'react-with-firebase-auth'
import 'firebase/firestore';
import config from "../firebaseConfig";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
require('firebase/auth')




var firebaseApp;
if (!firebase.apps.length) {
    firebaseApp = firebase.initializeApp(config);
}
else {
    firebaseApp = firebase.app(); 
}
export const firestore = firebase.firestore();
const firebaseAppAuth = firebaseApp.auth();

const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider()
};
    

class Login extends React.Component {
    state = {
        uid: "",
            title: "",
        desc: "",
        priority: "",
        progress: ""
    };
    
    
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

        <div> 
        { 
        user 
            ? <button onClick={signOut}>Sign out</button>
            :   <button onClick={signInWithGoogle}> Sign in with Google </button> 
        }
        </div>
        
    )
    }
}
export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
  })(Login);  


