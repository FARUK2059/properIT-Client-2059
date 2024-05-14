
import { createContext, useEffect, useState } from "react";
import app from "../firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";
import axios from "axios";


const auth = getAuth(app);
export const AuthContext = createContext(null);

// Social Auth Provider
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [dynamicTitle, setDynamicTitle] = useState('ProperIT');


    // Creat a New user with Password then Registation
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Update User Profile
    const updateUserProfile = (name, photoURL) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        })
    }

    //  Password and Email Login
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Google Login
    const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider)
    }


    // Logout section
    const logOut = () => {
        setLoading(false);
        return signOut(auth);
    }


    // UseState changed
    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, currentUser => {
            const UserEmail = currentUser?.email || user?.email;
            const loggedUser = { email: UserEmail };
            console.log('user in th e state changed', currentUser)
            setUser(currentUser)
            setLoading(false)

            //  if user existiong token
            if (currentUser) {
                axios.post(`${import.meta.env.VITE_API_URL}/jwt`, loggedUser, { withCredentials: true } )
                    .then(res => {
                        console.log('token response', res.data);
                    })
            }
            else {
                axios.post(`${import.meta.env.VITE_API_URL}/logout`, loggedUser, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log(res.data);
                    })
            }

        })
        return () => {
            unSubcribe();
        }
    }, [user?.email])

    // Setup Dynamic Title
    useEffect(() => {
        const updateTitle = (newTitle) => {
            setDynamicTitle(newTitle);
        };
        return () => {
            updateTitle();
        };
    }, []);




    const userInfo = {
        user,
        createUser,
        loading,
        signInUser,
        googleLogIn,
        updateUserProfile,
        logOut,
        dynamicTitle,
        updateTitle: setDynamicTitle

    }

    return (
        <AuthContext.Provider value={userInfo}>
            <Helmet>
                <title>{dynamicTitle}</title>
                <meta charset="UTF-8" />
                <link rel="icon" type="" href="/public/information-technology.png" />
            </Helmet>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;