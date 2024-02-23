import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase'; 
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const [isSignInForm, setIsSignInForm] =useState (true);
  const [errorMessage, setErrorMessage]= useState(null);
  const dispatch = useDispatch();
   
   const name = useRef(null);
   const email =useRef(null);
   const password =useRef(null);
  const handleButtonClick =() =>{
    //Validate the form data
   const message= checkValidData(email.current.value, password.current.value)
   setErrorMessage(message);
   if(message) return;

    if(!isSignInForm){
    //SignUp Logic

    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, photoURL: ""
    }).then(() => {
      const { uid, email, displayName} = auth.currentUser;
      dispatch(
        addUser ({
          uid:uid, 
          email:email, 
          displayName:displayName
        })
      )
    }).catch((error) => {
     setErrorMessage(error.message);
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "" + errorMessage);
    // ..
  });


    }
   else{
    //Sign Up Logic
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "" + errorMessage);
  });
  
  }
    

  }

  const toggleSignInForm=()=>{
   setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header/>
      <div className="absolute">
      <img
        src='https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/db06173b-5afe-4a62-a735-3d5b82298ba8/AU-en-20240219-popsignuptwoweeks-perspective_alpha_website_small.jpg'
        alt="logo"
        />
        </div>
        <form 
        onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70">
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && (
            <input 
            ref={name}
          type ="text" 
          placeholder="Full Name" 
          className="p-4 my-4 w-full bg-gray-700"/>)}
          <input 
          ref={email}
          type ="text" 
          placeholder="Email Adress" 
          className="p-4 my-4 w-full bg-gray-700"/>
         
          <input 
          ref={password}
          type ="password" 
          placeholder="Password" 
          className="p-4 my-4 w-full bg-gray-700"
          />
          <p className="text-red-500 font-bold text-lg p-2">
            {errorMessage}
          </p>
          <button className ="p-4 my-6 bg-red-700 w-full rounded-lg"onClick={handleButtonClick}> 
          {isSignInForm ? "Sign In" : "Sign Up"}</button>
          <p className="py-6 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to NetflixGpt? Sign Up Now" : "Already registered? Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login;