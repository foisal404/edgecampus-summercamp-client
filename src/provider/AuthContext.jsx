import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
export const authProvider=createContext(null);

const AuthContext = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const signUp=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logout=()=>{
        setLoading(true)
        return signOut(auth);
    }
    const updateUser=(name,photo)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            console.log(currentUser);
            setLoading(false)
        })
        return ()=>{
            return unsubscribe();
        }
    },[])
    const authInfo={
        user,
        signUp,
        login,
        logout,
        updateUser,
        loading

    }
    return (
        <authProvider.Provider value={authInfo}>
            {children}
        </authProvider.Provider>
    );
};

export default AuthContext;