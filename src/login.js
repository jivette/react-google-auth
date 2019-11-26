import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component {
    
    render(){
        const { user, signOut, signInWithGoogle} = this.props;
        return(
            <div className='vh-100 vw-100 d-flex align-items-center justify-content-center flex-column'>
                {
                    user ? 
                        <p> Hello, { user.displayName } </p>
                    : <p>Please, sign in</p>
                }
                {
                    user ? 
                        <button className='btn btn-primary' onClick={signOut}> Sign out </button>
                        : <button className='btn btn-danger' onClick={signInWithGoogle}> Sign in with Google </button>
                }
            </div>
        ); 
    }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
    googleProvider : new firebase.auth.GoogleAuthProvider()
};

export default withFirebaseAuth({
    providers,
    firebaseAppAuth
})(Login);