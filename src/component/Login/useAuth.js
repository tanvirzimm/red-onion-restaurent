import React,{ useState, createContext, useContext } from "react"
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";

firebase.initializeApp(firebaseConfig);

const AuthContext = createContext();
export const AuthContextProvider = (props) =>{
    const auth = Auth();
return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);

export const Auth = () => {
    const [user,setUser] = useState(null);

    const SignUp = (email,password) =>{

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            const newUser = {
                email:email
            }
            setUser(newUser);
        })
        .catch(function(error) {
            // Handle Errors here.
           
            // ...
          });
    }

    const SignIn = (email,password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            const newUser = {
                email:email
            }
            setUser(newUser);
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
    }

    const SignOut =() =>{
        firebase.auth().signOut().then(function() {
            setUser(null);
          }).catch(function(error) {
            // An error happened.
          });
    }

    return {
        user,
        SignUp,
        SignIn,
        SignOut
    }
}

export default Auth;