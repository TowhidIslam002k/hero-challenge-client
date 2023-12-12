import { createContext } from 'react';
import {getAuth,  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, sendEmailVerification, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { useEffect } from 'react';
import app from '../FirebaseConfig/Firebase.config';

export const UserContext = createContext(null);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const loginWithGithub = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    const verifyEmail = () => {
        setLoading(true)
        return sendEmailVerification(auth.currentUser)
    }

    const updateProfileInfo = (data) => {
        setLoading(true)
        return updateProfile(auth.currentUser, data)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            const loggedUser = {
                email: currentUser.email
            }
            if(currentUser && currentUser.emailVerified){
                fetch(`https://hero-server3.vercel.app/jwt`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(loggedUser)
                    }) 
                    .then(res => res.json())
                    .then(data => {
                        console.log('jwt respons', data)
                        localStorage.setItem('access-token', data.token)
                    })
            }
        })
        return()=>unSubscribe();
    },[])

    const userInfo = {
        user,
        loading,
        createUser,
        loginUser,
        loginWithGoogle,
        loginWithGithub,
        verifyEmail,
        updateProfileInfo,
        logOut,
    }
    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthProviders;