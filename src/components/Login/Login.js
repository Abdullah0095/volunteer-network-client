import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../logos/Group 1329.png';
import './Login.css';
import googleImage from '../../logos/google.png';

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/registration" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }


    const handleGoogleSignIn = () => {


        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {

            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser);
            history.replace(from);

        });
    }

    return (
        <div>
            <div className="logo">
                <Link to="/home"><img className="logo" src={logo} alt=""/></Link>
            </div>
            <div className='page-decoration'>
                <div style={{marginBottom: '40px'}}>
                    <h3>Login With</h3>
                </div>
                <div className='login-button'>
                    <button onClick={handleGoogleSignIn}>
                        
                        <h5><img src={googleImage} alt=""/>Continue with google</h5>
                        </button>
                </div>
            </div>
        </div>

    );
};

export default Login;