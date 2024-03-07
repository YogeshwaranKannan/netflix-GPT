import React from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser , removeUser } from '../utils/userSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const handleSignOut =()=>{
    signOut(auth).then(() => {})
    .catch((error) => {
       navigate("/error");
    });
  };
  useEffect(()=>{
    const unSubcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid ,email,displayName,photoURL} = user;
        dispatch(addUser  ( {uid:uid,email:email,displayName:displayName,photoURL:photoURL} )) ;
        navigate("/Browser");
      } 
      else {
        dispatch(removeUser());
        navigate("/");
    
      }
    });

    return ()=> unSubcribe();
}, []);


  return (
    <div className='flex absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen justify-between'>
      <div className='w-56'>
      <img  src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='Logo' />
      </div>

      {user && <div className='flex'>
      <div className='my-auto w-10'>
        <img className="rounded-3xl ml-5"src= "https://avatars.githubusercontent.com/u/129070212?v=4" alt='userIcon'/>
      </div>
      <div className='px-8 py-8 '>
        <button className='bg-red-600 px-1 py-2 rounded-lg font-bold text-white' onClick={handleSignOut}> Sign out</button>
      </div>
      </div>
    }
    </div>
  )
}

export default Header
