import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkvalidateData } from '../utils/validate';
import {createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';
 
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BACK_CDN } from '../utils/constants';

const Login = () => {
  
    const[isSignIn,setIsSignIn] = useState(true);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const [errorMsg,setErrorMsg] =useState(null);
    const dispatch = useDispatch();
    
    const handlebtnclick = ()=>{
        const msg = checkvalidateData(email.current.value , password.current.value);
        setErrorMsg(msg);
        if(msg!=="Successfully Registered") return ;
        if(!isSignIn){
          createUserWithEmailAndPassword(auth,email.current.value , password.current.value)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;
              updateProfile(user, {
                displayName: name.current.value, photoURL:"https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                // Profile updated!
                // ...
              }).then(()=>{
                const {uid ,email,displayName,photoURL} = user;
                dispatch(addUser( {uid:uid,email:email,displayName:displayName,photoURL:photoURL} )) ;
              }).catch((error) => {
                setErrorMsg(error.message);
              });
             
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMsg(errorCode+errorMessage);
            });
        }
        else{
          signInWithEmailAndPassword(auth,email.current.value , password.current.value)
          .then((userCredential) => {
           // Signed in 
            //const user = userCredential.user;
           
        })
        .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         setErrorMsg(errorCode+errorMessage);
        });
      }
    }
    const toggleSign =()=>{
        setIsSignIn(!isSignIn); 
    }
  return (
    <div>
    <div >
      <Header/>
    </div>
    <div className='absolute'>
      <img src={BACK_CDN} alt='Backgroung' />
    </div>
      <form onSubmit={(e)=>e.preventDefault() } className='text-white absolute p-12 bg-black w-3/12 my-36 m-auto left-0 right-0 bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4 my-2'>{isSignIn ? "Sign In" : "Sign Up"}</h1>

        {isSignIn ? <input ref={email} type="text" placeholder='Email' className='p-2 my-6 w-full bg-gray-700' /> : 
        <>
        <input ref={email} type="text" placeholder='Email' className='p-2 my-6 w-full bg-gray-700' /> 
        <input type="text" placeholder='Full name' className='p-2 my-6 w-full bg-gray-700' />
        </>
        } 

        {isSignIn ? <input  ref={password} type="password" placeholder='Password' className='p-2 my-6 w-full bg-gray-700' />: 
    
        <input ref={password}type="password" placeholder='Password' className='p-2 my-6 w-full bg-gray-700' />
        
        }
         
        {errorMsg==="Successfully Registered" ?<p className='text-green-500 font-bold text-lg py-2'>{errorMsg}</p> : <p className='text-red-500 font-bold text-lg py-2'>{errorMsg}</p> } 
         
        <button className="bg-red-600 p-2 rounded-xl w-full my-6" onClick={handlebtnclick}>{isSignIn ? "Sign In" : "Sign Up"} </button>
        <p className='py-4 cursor-pointer' onClick={toggleSign}>{isSignIn ? "New to NETFLIX? sign Up" : "Already a User ? Please Sign In"}</p>
      </form>
    </div>
  )
}

export default Login
